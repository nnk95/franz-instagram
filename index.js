module.exports = Franz => class Instagram extends Franz {
    overrideUserAgent() {const useragent = window.navigator.userAgent;

        // Quick and dirty hackfix
        const parts = useragent.split('Mozilla/5.0');
    
        return parts.join('Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1').replace('Electron', 'Safari').replace('Franz', 'Safari').replace('Chrome', 'Safari');
    }
};
