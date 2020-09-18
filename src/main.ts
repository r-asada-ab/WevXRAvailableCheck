import xr from './xr'

function main() {
    if (xr.hasXr()) {
        let button = <HTMLButtonElement>document.getElementById("immercive_button")
        let result = xr.isSessionSupported()
        if (result) {
            button.disabled = false
        } else {
            button.disabled = true
        }
    }
}

main()