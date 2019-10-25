module.exports = {
    apps : [{
      name: "app",
      script: "./bin/www",
      instances: 4,
      exec_mode: 'cluster',
      detached: true,
      env: {
        PORT: 4000
      }
    }]
};