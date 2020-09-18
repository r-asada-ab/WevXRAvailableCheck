const xr = {
        hasXr: function() { 
                return navigator.xr != null
        },
        isSessionSupported: function() {
                return navigator.xr.isSessionSupported('immersive-vr')
        }
}

export default xr