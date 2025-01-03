export default defineNuxtConfig({
    nitro: {
      firebase: {
        gen: 2,
        httpsOptions: {
          region: 'europe-west1',
          maxInstances: 3,
        },
      },
    },
  });