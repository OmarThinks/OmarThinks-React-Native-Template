# OmarThinks-React-Native-template

# A) About:

A template pre-configured with requirements for most projects

# B) How to use:

- Clone the Repo:

<b>

```bash
git clone https://github.com/OmarThinks/OmarThinks-React-Native-Template
```

</b>

- Open the cli folder (I might create an Expo folder soon)
- Copy the project with the latest version from the cli folder, and paste it
- run this command `npm install`
- run this command `npm start`

# C) Texhnologies Used:

- React
- React Native
- Redux ToolKit
- React Navigation
- Async Storage
- i18next
- NativeWind
- Modle Resolver
- TypeScript
- React Native Paper

# D) Features:

### D-1) Thememing:

This template supports light and dark themes.  
On changing the theme, the theme name is stored presistently using Async Storage, and it initialized in the Splash screen on start.

**Light Theme:**

<img src="./images/theme-1.png" width=400>

**Dark Theme:**

<img src="./images/theme-2.png" width=400>

### D-2) Languages:

The app supports languages, and also switching rtl or lrt.  
But if the app changes the language, and both languages have differenet directions, then the app must restart.

**English is ltr(Left to Right):**

<img src="./images/lang-1.png" width=400>

**German is ltr(Left to Right):**

<img src="./images/lang-2.png" width=400>

**Arabic is rtl(Right to Left):**

<img src="./images/lang-3.png" width=400>

### D-3) Common Components:

For this application, i created the following common compoennets:

- Text
- TouchFiller
- Icon
- CircleIcon
- AppBar

### D-4) NativeWind:

Just like using TailWindCSS for React projects, NativeWind is the same as TailWindCSS but for React Native.  
The template supports TailWindCSS

### D-5) Mainlayout:

MainLayout is a HOC (Higher-Order Component) that I have created for this template.  
MainLayout reduces code redundency, and keep the code as DRY nd possible.

# E) Motivation:

- To start projects faster, instead of spending tto much time preconfiguring everything.

# F) Todos:

- Create an Expo template
