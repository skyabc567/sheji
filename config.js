(function(window) {
    function setSizeConfig(max, unit) {
        var config = {};
        for(var i = 0; i < max; i++) {
            config[i] = `${i}px`;
        }
        return config;
    }
    window.tailwind.config = {
        // 开启暗黑模式
        darkMode: 'selector',
        // 扩展样式主题
        theme: {
          extend: {
            lineHeight: {
              'extra-loose': '2.5',
              '12': '3rem',
            },
            backgroundImage: {
                'topBackground': "linear-gradient(90deg, #934BFF, #5F3AFC)",
                'circle_one': "linear-gradient(-67deg, #934BFF, #5F3AFC)",
                'circle_two': "linear-gradient(90deg, #934BFF, #5F3AFC)"
            },
            colors: {
              primary: "#000000",
            },
            width: setSizeConfig(10800, "px"),
            height: setSizeConfig(10800, "px"),
            fontSize: setSizeConfig(200, "px"),
            margin: setSizeConfig(1000,"px"),
            padding: setSizeConfig(1000, "px"),
            borderRadius: setSizeConfig(100, "px"),
            lineHeight: setSizeConfig(1000, "px"),
          },
        },
      };
})(window)