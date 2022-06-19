const plugin = require('tailwindcss/plugin')

const setting = {
    screen:{
        maxScreenSize : '',
        minScreenSize : '',
    }
}

module.exports = plugin(
    function ({ matchUtilities, theme }) {
        
        const dynamic = (maxSize) => {
            
            // min max screen size
            let maxScrSize = theme('tailwindFan.screen.maxScreenSize', setting.screen.maxScreenSize )
            let minScrSize = theme('tailwindFan.screen.minScreenSize', setting.screen.minScreenSize )

            if(!maxScrSize && minScrSize){
                maxScrSize = `calc(${minScrSize}*2)`;
            } 
            if (maxScrSize && !minScrSize) {
                minScrSize = `calc(${maxScrSize}/2)`;
            }
            if (!maxScrSize && !minScrSize) {
                maxScrSize = '44rem';
                minScrSize = '30rem'
            }
            
            //min max font size
            const [mx, mn] = maxSize.split(" ")
            const minFsize = mn || `(${mx}/1.5)`
            // minimum screen size
            const minScrSizeNum = minScrSize.match(/[^a-zA-Z]/g)?.join('');
            // maximum screen size
            const maxScrSizeNum = maxScrSize.match(/[^a-zA-Z]/g)?.join('');

            // minimum font size
            const minFsizeNum = minFsize.match(/[^a-zA-Z]/g)?.join('');
            // maximum font size
            const sizeNum = mx.match(/[^a-zA-Z]/g)?.join('');


            return `clamp(${minFsize}, calc(${minFsize} + (${sizeNum} - ${minFsizeNum}) * ((100vw - ${minScrSize}) / (${maxScrSizeNum} - ${minScrSizeNum}))),${mx})`;
          };

        matchUtilities({

        // dynamic font size
        Dtext: nmbr => ({
            fontSize: dynamic(nmbr),
        }),

        // ------------ margin

        // dynamic margin only 
        Dm: nmbr => ({
            margin: dynamic(nmbr),
        }),

        // dynamic marginBottom only 
        Dmb: nmbr => ({
            marginBottom: dynamic(nmbr),
        }),
        // dynamic marginTop only 
        Dmt: nmbr => ({
            marginTop: dynamic(nmbr),
        }),
        // dynamic marginLeft only 
        Dml: nmbr => ({
            marginLeft: dynamic(nmbr),
        }),
        // dynamic marginRight only 
        Dmr: nmbr => ({
            marginRight: dynamic(nmbr),
        }),
        // dynamic margin Left & Right 
        Dmx: nmbr => ({
            marginLeft: dynamic(nmbr),
            marginRight: dynamic(nmbr),
        }),
        // dynamic margin top & bottom 
        Dmy: nmbr => ({
            marginTop: dynamic(nmbr),
            marginBottom: dynamic(nmbr),
        }),



        // ------------ padding

         // dynamic padding only 
        Dp: nmbr => ({
            padding: dynamic(nmbr),
        }),

        // dynamic paddingBottom only 
        Dpb: nmbr => ({
            paddingBottom: dynamic(nmbr),
        }),
        // dynamic paddingTop only 
        Dpt: nmbr => ({
            paddingTop: dynamic(nmbr),
        }),
        // dynamic paddingLeft only 
        Dpl: nmbr => ({
            paddingLeft: dynamic(nmbr),
        }),
        // dynamic paddingRight only 
        Dpr: nmbr => ({
            paddingRight: dynamic(nmbr),
        }),
        // dynamic padding Left & Right 
        Dpx: nmbr => ({
            paddingLeft: dynamic(nmbr),
            paddingRight: dynamic(nmbr),
        }),
        // dynamic padding top & bottom 
        Dpy: nmbr => ({
            paddingTop: dynamic(nmbr),
            paddingBottom: dynamic(nmbr),
        }),

        });
    }
)