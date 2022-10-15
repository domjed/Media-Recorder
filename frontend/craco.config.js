const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@api': path.resolve(__dirname, 'src/utils/api'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@shared': path.resolve(__dirname, 'src/shared'),
        }
    },
};