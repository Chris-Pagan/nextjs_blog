import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--pagan-studios": "#b39ddb",
    "--my-royalblue":"#001f54",
    "--my-aquamarine": "#5ec1d0",
    "--my-red": "#f44336",
    "--my-yellow":"#ffeb3b",
    "--my-green":"#388e3c"
};

export const myTheme = buildLegacyTheme({
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#616161",
    "--gray-base": "#424242",

    "--component-bg":props["--my-black"],
    "--component-text-color":props["--my-white"],

    "--brand-primary":props["--pagan-studios"],

    "--default-button-color":"#616161",
    "--default-button-primary-color":props["--pagan-studios"],
    "--default-button-success-color":props["--my-green"],
    "--default-button-warning-color":props["--my-yellow"],
    "--default-button-danger-color":props["--my-red"],

    "--state-info-color":props["--pagan-studios"],
    "--state-success-color":props["--my-green"],
    "--state-warning-color":props["--my-yellow"],
    "--state-danger-color":props["--my-red"],


    "--focus-color":props["--pagan-studios"],

})