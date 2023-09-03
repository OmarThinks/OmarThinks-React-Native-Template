import {initializeLanguage} from '@locale';
import {RootStackParamList, navigationNames} from '@navigation';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {setTheme} from '@redux';
import {AnyAction} from '@reduxjs/toolkit';
import {getStoredTheme} from '@storage';
import React, {Dispatch} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
type SplashScreenProps = RouteProp<
  RootStackParamList,
  typeof navigationNames.Splash
>;

const initializeTheme = async (dispatch: Dispatch<AnyAction>) => {
  const storedTheme = await getStoredTheme();
  dispatch(setTheme(storedTheme));
};

const Splash = () => {
  // Navigation
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const route = useRoute<SplashScreenProps>();
  const params = useRoute<SplashScreenProps>().params;

  const dispatch = useDispatch();

  const [isReady1, setIsReady1] = React.useState(false);
  const [isReady2, setIsReady2] = React.useState(false);
  const [initialized, setInitialized] = React.useState(false);

  React.useEffect(() => {
    initializeLanguage()
      .catch(() => {})
      .finally(() => {
        setIsReady1(true);
      });

    initializeTheme(dispatch)
      .catch(() => {})
      .finally(() => {
        setIsReady2(true);
      });

    /*
    const logStoredTheme = async () => {
      const storedTheme = await getStoredTheme();
      await initializeLanguage();

      // console.log('storedTheme', storedTheme);

      if (storedTheme) {
        dispatch(setTheme(storedTheme));
      }

      navigation.replace(navigationNames.Home);
    };

    logStoredTheme();*/
  }, [dispatch]);

  React.useEffect(() => {
    if (isReady1 && isReady2 && !initialized) {
      setInitialized(true);
      navigation.replace(navigationNames.Home);
    }
  }, [isReady1, isReady2, initialized, navigation]);

  return <View />;
};

export default Splash;
