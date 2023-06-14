import { header } from "./Component/headerArea.js";
import { nav } from "./Component/navArea.js";
import { main } from "./Component/mainArea.js"
import { footer } from "./Component/footerArea.js";

import { Srch_rslt } from "./Component/Function/srch_rslt_section.js";
import { page_chng } from "./Component/Function/nav_function.js";

const $div = document.querySelector("#theme_Area");
$div.setAttribute("class", "bg-red-200");
$div.innerHTML = "";
$div.append( header(), nav(), main(),footer() );

Srch_rslt();
page_chng();


