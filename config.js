/* ZENTRA Property Group — module registry.
   URLs are set ONLY after live verification (HTTP check on each subdomain).
   null = not yet reachable; the page then shows an in-page notice instead of guessing a URL. */
window.ZENTRA_CONFIG = {
  "loginUrl": "https://id.zentrapropertygroup.com/",
  "products": [
    { "id": "asset",    "name": "Zentra Asset",    "description": "Asset Management",              "url": "https://www.zentrapropertygroup.com/asset/" },
    { "id": "realty",   "name": "Zentra Realty",   "description": "Agent Management",            "url": "https://www.zentrapropertygroup.com/realty/" },
    { "id": "legal",    "name": "Zentra Legal",    "description": "Legal Practice",                "url": "https://www.zentrapropertygroup.com/legal/" },
    { "id": "finance",  "name": "Zentra Finance",  "description": "Finance & Accounting",       "url": "https://www.zentrapropertygroup.com/finance/" },
    { "id": "value",    "name": "Zentra Value",    "description": "Property Valuation",            "url": "https://www.zentrapropertygroup.com/value/" },
    { "id": "project",  "name": "Zentra Project",  "description": "Development Projects",          "url": "https://www.zentrapropertygroup.com/project/" },
    { "id": "vr3d",     "name": "Zentra VR3D",     "description": "Immersive Property Experiences", "url": "https://www.zentrapropertygroup.com/vr3d/" },
    { "id": "push",     "name": "Zentra Push",     "description": "Standalone SaaS",               "url": "https://push.zentrapropertygroup.com/" },
    { "id": "agri",     "name": "Zentra Agri",     "description": "Agriculture & Plantation",      "url": null, "comingSoon": true },
    { "id": "space",    "name": "Zentra Space",    "description": "Workspace Management",          "url": "https://www.zentrapropertygroup.com/space/" },
    { "id": "home",     "name": "Zentra Home",     "description": "Smart Home & Surveillance",     "url": "https://home.zentrapropertygroup.com/" },
    { "id": "contacts", "name": "Zentra Contacts", "description": "Contact Management",            "url": null, "comingSoon": true },
    { "id": "search",   "name": "Zentra Search",   "description": "Public Social Intelligence",     "url": "https://search.zentrapropertygroup.com/", "internal": true },
    { "id": "id",       "name": "Zentra ID",       "description": "One account. Access by role.",  "url": "https://id.zentrapropertygroup.com/" }
  ]
};
