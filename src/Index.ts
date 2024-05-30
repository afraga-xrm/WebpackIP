import { ReviewPage } from "./WebPages/ReviewPage";
import { RfqQuotesPage } from "./WebPages/RfqQuotesPage";

var splitpath = window.location.pathname.split("/");
debugger;
if (splitpath.length >= 4) {
  var page = splitpath[3].toLowerCase();

  switch (page) {
    case "rfq-quotes":
        RfqQuotesPage();
      break;
    case "review":
      ReviewPage();
      break;
  }
}