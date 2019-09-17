import React, { Component } from "react";
import { First } from "../pages/FirstTracker";
import { Second } from "../pages/SecondTracker";
import { Third } from "../pages/ThirdTracker";

const Routes = {
    "/first_tracker": () => <First />,
    "/second_tracker": () => <Second />,
    "/third_tracker": () => <Third />
}
export default Routes;