

tailwind.config = {
    theme: {
      extend: {
        colors: {
          color1: '#0E0123',
          color2: '#3F127A',
          color4: '#D9D9D9',
          background: '#E1DEFF',
          chronicle: "#ff0000",
          tribune: '#00ff73',
          gazet: "",


          
        },
        spacing: {
          "112" : "50rem",
          "105" : "44rem",
          "100" : "40rem",
          "35" : "8.7rem",
          "34.6" : "8.25rem",
          "98" : "26.2rem",
          "41/50" : "82%",
          "3/20" : "15%",
          "1/12" : "8%",
          "13" : "3.25rem",
          "7/8" : "99%",
          "1/20" : "5%",
          "31/100" : "31%",
          "59/100" : " 59%",
          
        },
        strokeWidth: {
            'photo': '5px',
            
          },
          fontFamily: {
            sans: [
              "Inter var, sans-serif",
              {
                fontFeatureSettings: '"cv11", "ss01"',
                fontVariationSettings: '"opsz" 32'
              },
            ],
          },
          fontSize: {
            "lt" : "12px",
            "tn" : "9px"
          },
          borderRadius: {
            "big" :'2rem',
            'large': '4rem',
            "xlarge" : "5rem",
          },
          screens: {
            'tablet': '640px',
            'laptop': '1024px',
            'desktop': '1280px',
            'bigphone' : '425px'
          },
          }
      }
    }