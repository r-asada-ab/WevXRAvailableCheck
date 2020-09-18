import { XRSession } from "webxr";

declare namespace xr {
    export function hasXr(): boolean;
    export function isSessionSupported(): Promise<boolean>
}

export default xr