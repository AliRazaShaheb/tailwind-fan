# 👉🏻 tailwind-fan
### tailwind css plugin for dynamic font-size, margin, padding & more
![logo_img](https://github.com/AliRazaShaheb/tailwind-fan/blob/main/tailwind-fan.jpg)

A plugin for the use of text, margin & padding dynamically according to the screen viewport width

## 👉🏻 Installation

Install the plugin from npm:

```bash
# Using npm
npm install tailwind-fan

# Using Yarn
yarn add tailwind-fan
```
## 👉🏻 Configuration
Then add the plugin in tailwind.config.js do the setting to override the defaults:

```js

// tailwind.config.js
module.exports = {
 content: [],
  theme: {
    extend: {},
    
    //  setting for tailwind-fan plugin

    tailwindFan:{
        //customization of minimum & maximum viewport / screen
      screen:{
          //maximum viewport/screen width
        maxScreenSize:'', // default 44rem 

        //minimum viewport/screen width
        minScreenSize:'' // default 30rem
      }
    }
  },

  plugins: [
    // add the plugin
    require('tailwind-fan')
  ],
}
```

## 👉🏻 Usage


```html

<section>
    
    <h1 class="Dtext-[3rem_2rem]">Tailwind-fan Dynamic Text</h1>
    <!-- 
      the above example work like 
      [maximum 3rem, minimum 2rem ]
    -->

    
    <h3 class="Dtext-[3rem]">Tailwind-fan Dynamic Text Auto Scaling</h3>
    <!-- 
      the above example work like 
      [maximum 3rem, minimum (3rem/1.5)]
      minimum automaticaly set 66% smaller
    -->

    <!-- 
      
      - same rules for dynamic margin & padding
      - margin & padding all classes with additon of 'D' which stands for Dynamic
      - instead of 'm-[1rem] or p-[1rem]' use below :
        Dm-[1rem] or Dp-[1rem]

      - some Dynamic 'D' classes examples - 
        Dtext-[]
        Dm-[], Dmt-[], Dmx-[], Dmy-[] ...
        Dp-[], Dpt-[], Dpx-[], Dpy-[] ...
    
     -->


    <!-- Dynamic margin example -->
    <div classname='Dm-[2rem_1rem]'>Tailwind-fan</div>
    
    <!-- Dynamic padding example -->
    <div classname='Dp-[1rem]'>Tailwind-fan</div>

</section>
```
![example](https://github.com/AliRazaShaheb/tailwind-fan/blob/main/tailwind_fan_example.gif)