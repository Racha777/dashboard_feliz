"use strict";

import models from "./models.js";
import { allData } from "../utils/allData.js";

const documentReady = () => {
    models(allData);
};

document.addEventListener("DOMContentLoaded", documentReady);
