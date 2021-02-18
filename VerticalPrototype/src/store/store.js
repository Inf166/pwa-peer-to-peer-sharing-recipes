import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersistence from 'vuex-persist'
// import createPersistedState from "vuex-persistedstate";
// import createCache from 'vuex-cache';
// import createMutationsSharer from "vuex-shared-mutations";

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

// const vuexLocal = new VuexPersistence({
//     supportCircular: true,
//     storage: window.localStorage
//   });

export const store = new Vuex.Store({
    plugins: [
        // vuexLocal.plugin
        // createPersistedState,
        // createCache(),
        // createMutationsSharer({ predicate: ["mutation1", "mutation2"] })
    ],
    state: {
        myUser: null,
        myUserName: '',
        myUid: '',
        myEmail: '',

        myPeer: null,
        myPeerId: '',
        myConnection: null,
        receiverID: null,
        isOnline: false,

        myDatabase: null,
        users: null,
        myKey:'',
        myFriends: null,

        searchOutput: [],

        myRecipies: [
          {
            "@type": "Recipe",
            "id": "TestRezept1",
            "title": "Spaghetti Carbonara",
            "description": "Ein super einfaches Nudelgericht für jeden, der es schnell haben möchte. ",
            "datePublished": "2020-1-7 20:21:57",
            "isNew": false,
            "categories": [
              { "name": "Hauptspeise" },
              { "name": "Nudelgericht" },
              { "name": "Italienisch" }
            ],
            "author": { "name": "Melanie Müller" },
            "portion": "4",
            "difficultyLevel": "simpel",
            "householdUtensils": [
                { "name": "Pfanne" }, 
                { "name": "Topf" },
                { "name": "Schneebesen" },
                { "name": "Schneidebrett" }
            ],
            "ingredients": [
              {
                "name": "Spaghetti", 
                "amount": "500",
                "unit": "Gramm",
                
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" },
                  { "name": "Edeka" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Speck",
                "amount": "200",
                "unit": "Gramm",
                "origins": [{ "name": "Metzger" }],
                "alternativeIngredients": [
                  { "name": "Aubergine", "amount": "50", "unit": "Gramm", "origin": "" }
                ]
              },
              {
                "name": "Eier",
                "amount": "4",
                "unit": "Stück",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" },
                  { "name": "Edeka" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Speck",
                "amount": "200",
                "unit": "Gramm",
                "origins": [{ "name": "Metzger" }],
                "alternativeIngredients": [
                  { "name": "Aubergine", "amount": "50", "unit": "Gramm", "origin": "" }
                ]
              },
              {
                "name": "Butter",
                "amount": "50",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" },
                  { "name": "Edeka" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Muskat",
                "amount": "1",
                "unit": "Priese",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" },
                  { "name": "Edeka" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Salz und Pfeffer",
                "amount": "",
                "unit": "",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" },
                  { "name": "Edeka" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              }
            ],
            "prepTime": "4",
            "restTime": "1",
            "cookTime": "15",
            "recipeInstructions": [
              {
                "step": 1,
                "description": "Die Pasta in reichlich Salzwasser bissfest kochen",
                "tipsAndTricks": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ],
                "historicalNote": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ]
              },
              {
                "step": 2,
                "description": "Den Schinken in Würfel schneiden und in wenig Butter anbraten.",
                "tipsAndTricks": [
                  { "author": "", 
                    "text": "" }
                ],
                "historicalNote": [
                  {
                    "author": "",
                    "text": ""
                  }
                ]
              },
              {
                "step": 3,
                "description": "Speck dazu geben und mindestens solange anbraten bis die Eier sämig werden.",
                "tipsAndTricks": [{ "author": "Melanie Müller", "text": "Eier sollten am besten Freilandhaltung sein." }],
                "historicalNote": [{ "author": "", "text": "" }]
              },
              {
                "step": 4,
                "description": "Eigelb in einer großen Schüssel mit Salz, Pfeffer und Muskat verquirlen. Die Butter schaumig rühren und gut unter das Eigelb mischen. Die Schinkenwürfel und den geriebenen Käse gründlich unterrühren.",
                "tipsAndTricks": [{ "author": "Melanie Müller", "text": "Damit die Butter schaumig gerührt werden kann, sollte man den Schneebesen benutzen." }],
                "historicalNote": [{ "author": "", "text": "" }]
              },
              {
                "step": 5,
                "description": "Wenn die Nudeln gar sind, abgießen, sofort zu der Mischung in die Schüssel geben, nochmal alles gründlich durchmischen, dann sogleich servieren.",
                "tipsAndTricks": [{ "author": "", "text": "" }],
                "historicalNote": [{ "author": "", "text": "" }]
              }
            ]
          },  
          {
            "@type": "Recipe",
            "id": "TestRezept2",
            "title": "Spaghetti all arrabiata",
            "description": "Spaghetti mit rotem Pesto und Schafskäse. Mmmhh, so ein himmlischer Geschmack!",
            "datePublished": "2021-2-2 10:51:30",
            "isNew": false,
            "categories": [
              { "name": "Hauptspeise" },
              { "name": "Nudelgericht" },
              { "name": "Italienisch" }
            ],
            "author": { "name": "Hans Müller" },
            "portion": "4",
            "difficultyLevel": "simpel",
            "householdUtensils": [
                { "name": "Pfanne" }, 
                { "name": "Topf"},
                { "name": "Schneidebrett" },
                { "name": "Küchensieb" }
            ],
            "ingredients": [
              {
                "name": "Spaghetti",
                "amount": "500",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" },
                  { "name": "Edeka" }
        
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Zwiebel",
                "amount": "1",
                "unit": "Stück",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" },
                  { "name": "Edeka" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Sonnenblumenöl",
                "amount": "2",
                "unit": "Esslöffel",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" },
                  { "name": "Edeka" }
                ],
                "alternativeIngredients": 
                [
                  { "name": "Olivenöl", "amount": "1", "unit": "Esslöffel", 
                    "origin": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" },
                    { "name": "Edeka"}
                    ] 
                  }
               ]
              },
              {
                "name": "Tomaten",
                "amount": "400",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" },
                  { "name": "Edeka" }
                ],
                "alternativeIngredients": [
                  { "name": "Tomatenmark", "amount": "500", "unit": "Gramm", 
                    "origin": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" },
                    { "name": "Edeka" }
                  ]
                },
                {
                  "name": "Butter",
                  "amount": "2",
                  "unit": "Esslöffel",
                  "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" },
                    { "name": "Edeka" }
                  ],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                },
                {
                  "name": "Chilischoten",
                  "amount": "2",
                  "unit": "Stück",
                  "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" },
                    { "name": "Edeka" }
                  ],
                  "alternativeIngredients": [
                    { "name": "Ingwer", "amount": "20", "unit": "Gramm", 
                      "origin": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" },
                    { "name": "Edeka" }
                    ] 
                  }
                  ]
                },
                {
                  "name": "Salz und Pfeffer",
                  "amount": "",
                  "unit": "",
                  "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" },
                    { "name": "Edeka" }
                  ],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                },
                {
                  "name": "Pecorino, gerieben",
                  "amount": "100",
                  "unit": "Gramm",
                  "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" },
                    { "name": "Edeka"}
                  ],
                  "alternativeIngredients": [
                    { 
                      "name": "Parmesan", 
                      "amount": "100", 
                      "unit": "Gramm", 
                      "origin": 
                      [
                        { "name": "Rewe" },
                        { "name": "Lidl" },
                        { "name": "Aldi" },
                        { "name": "Hit" },
                        { "name": "Edeka"}
                      ] 
                    }
                  ]
                }
              ]
              }
            ],
            "prepTime": "6",
            "restTime": "1",
            "cookTime": "15",
            "recipeInstructions": [
              {
                "step": 1,
                "description": "Zwiebel und Knoblauch schälen und fein würfeln. Die Chilischoten waschen, trocken tupfen, der Länge nach halbieren, entkernen und fein würfeln. ",
                "tipsAndTricks": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ],
                "historicalNote": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ]
              },
              {
                "step": 2,
                "description": "Die Butter in einem Topf heiß schäumend erhitzen. Zwiebel- und Chilischotenwürfel dazugeben und sie darin unter ständigem Rühren anbraten. Die Tomaten abtropfen lassen, etwas zerkleinern und zur Zwiebelmischung geben. Das ganze gut miteinander verrühren und aufkochen lasse. Die Hitze reduzieren. Die Sauce etwa 10 Minuten köcheln lassen, salzen und pfeffern.",
                "tipsAndTricks": [
                  { "author": "", "text": "" }
                ],
                "historicalNote": [
                  {
                    "author": "Hans Müller",
                    "text": "Oma Melanie hat dieses leckere Rezept uns im Kindesalter fast jeden Sonntag zubereitet, damit wir glücklich in die Woche starten können"
                  }
                ]
              },
              {
                "step": 3,
                "description": "Inzwischen die Spaghetti in reichlich kochendem Salzwasser nach Packungsanleitung in etwa 10 Minuten bissfest garen. Sie in einem Sieb abtropfen lassen und mit dem Öl vermengen",
                "tipsAndTricks": [{ "author": "", "text": "" }],
                "historicalNote": [{ "author": "", "text": "" }]
              },
              {
                "step": 4,
                "description": "Die Nudeln in einer Schüssel locker mit der Sauce vermengen, auf 4 Teller verteilen und mit dem Pecorino bestreuen.",
                "tipsAndTricks": [{ "author": "", "text": "" }],
                "historicalNote": [{ "author": "", "text": "" }]
              }
            ]
          },
          {
            "@type": "Recipe",
            "id": "TestRezept3",
            "title": "Spaghetti mit rotem Pesto und Schafskäse",
            "description": "Ein unkompliziertes, jedoch geschmackvolles Nudelgericht",
            "datePublished": "2021-2-10 16:23:17",
            "isNew": false,
            "categories": [
              { "name": "Hauptspeise" },
              { "name": "Nudelgericht" },
              { "name": "Italienisch" }
            ],
            "author": { "name": "Luisa Müller" },
            "portion": "2",
            "difficultyLevel": "mittel",
            "householdUtensils": [
                { "name": "Pfanne" }, 
                { "name": "Topf" }
            ],
            "ingredients": [
              {
                "name": "Spaghetti",
                "amount": "250",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Pesto, rotes",
                "amount": "150",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "Aubergine", "amount": "50", "unit": "Gramm", "origin": "" }
                ]
              },
              {
                "name": "Schafskäse",
                "amount": "125",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" },
                  { "name": "Edeka" }
                ],
                "alternativeIngredients": [
                  { "name": "Feta-Käse", "amount": "125", "unit": "Gramm", "origin": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" },
                    { "name": "Edeka" }
                    ] 
                  }
                ]
              },
              {
                "name": "Tomaten",
                "amount": "2",
                "unit": "Stück",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" },
                  { "name": "Edeka" }
                ],
                "alternativeIngredients": [
                  { "name": "Tomatenmark", "amount": "100", "unit": "Gramm", "origin": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" },
                    { "name": "Edeka" }
                    ] 
                  }
                ]
              },
              {
                "name": "Balsamico",
                "amount": "2",
                "unit": "Esslöffel",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" },
                  { "name": "Edeka" }
                ],
                "alternativeIngredients": [
                  { "name": "Rotweinessig", "amount": "1", "unit": "Esslöffel", "origin": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" },
                    { "name": "Edeka" }
                    ] 
                  }
                ]
              },
              {
                "name": "Sonnenblumennöl",
                "amount": "2",
                "unit": "Esslöffel",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" },
                  { "name": "Edeka" }
                ],
                "alternativeIngredients": [
                  { "name": "Olivenöl", "amount": "1", "unit": "Esslöffel", "origin": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" },
                    { "name": "Edeka" }
                    ] 
                  }
                ]
              },
              {
                "name": "Gewürzmischung",
                "amount": "",
                "unit": "",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" },
                  { "name": "Edeka" }
                ],
                "alternativeIngredients": [
                  { "name": "Salz,Pfeffer und Kräuter", "amount": "", "unit": "", "origin": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" },
                    { "name": "Edeka" }
                    ] 
                  }
                ]
              },
              {
                "name": "Parmesan",
                "amount": "50",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" },
                  { "name": "Edeka" }
                ],
                "alternativeIngredients": [
                  { "name": "Grana Padano", "amount": "50", "unit": "Gramm", "origin": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" },
                    { "name": "Edeka" }
                    ] 
                  }
                ]
              }
            ],
            "prepTime": "7",
            "restTime": "60",
            "cookTime": "15",
            "recipeInstructions": [
              {
                "step": 1,
                "description": "Die Tomaten waschen, in kleine Würfel schneiden und mit dem Tomatengewürzsalz nach Geschmack würzen und Balsamico dazugeben. Die Tomaten ca. 1 Stunde im Kühlschrank ziehen lassen.",
                "tipsAndTricks": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ],
                "historicalNote": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ]
              },
              {
                "step": 2,
                "description": "Den Schafskäse ebenfalls in kleine Würfel schneiden. Die Spaghetti nach Anleitung in Salzwasser al dente kochen und im Küchensieb abgießen.",
                "tipsAndTricks": [
                  { "author": "Luisa Müller", "text": "Die Nudeln nicht abschrecken (!)." }
                ],
                "historicalNote": [
                  {
                    "author": "",
                    "text": ""
                  }
                ]
              },
              {
                "step": 3,
                "description": "Nach dem Abtropfen die Nudel wieder in den leeren, jetzt kalten Topf geben und mit dem Pesto und etwas Öl durchmischen. Anschließend den Schafskäse vorsichtig unterheben.",
                "tipsAndTricks": [{ "author": "", "text": "" }],
                "historicalNote": [{ "author": "", "text": "" }]
              },
              {
                "step": 4,
                "description": "Die Spaghetti auf vorgewärmte Teller anrichten und die kalten Tomatenstücke je nach gewünschter Menge auf die Nudeln geben.Das Ganze nach Geschmack mit Parmesan bestreuen und servieren.",
                "tipsAndTricks": [{ "author": "", "text": "" }],
                "historicalNote": [{ "author": "", "text": "" }]
              }
            ]
          },
          {
            "@type": "Recipe",
            "id": "TestRezept4",
            "title": "Pizza Margaritha",
            "description": "Pizza Margaritha - nach Italienischer Art",
            "datePublished": "2020-30-12 12:11:26",
            "isNew": false,
            "categories": [
              { "name": "Hauptspeise" },
              { "name": "Pizza" },
              { "name": "Italienisch" }
            ],
            "author": { "name": "Stefanie Lamm" },
            "portion": "2",
            "difficultyLevel": "mittel",
            "householdUtensils": [
                { "name": "Pfanne" },
                { "name": "Schneidebrett" },
                { "name": "Pizzablech"},
                { "name": "Kartoffelstampfer" }
            ],
            "ingredients": [
              {
                "name": "Mehl",
                "amount": "450",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Trockenhefe",
                "amount": "1",
                "unit": "Packung",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "frische Hefe", "amount": "1/2", "unit": "Stück", "origin": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ] 
                }
                ]
              },
              {
                "name": "Salz",
                "amount": "1",
                "unit": "TL",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "lauwarmes Wasser",
                "amount": "325",
                "unit": "Milliliter",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Tomaten aus der Dose",
                "amount": "400",
                "unit": "Milliliter",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Knoblauchzehe",
                "amount": "1",
                "unit": "Stück",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Mozarella",
                "amount": "2",
                "unit": "Packungen",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "Gratinkäse", "amount": "200", "unit": "Gramm", "origin": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ] 
                }
                ]
              },
              {
                "name": "Sonnenblumenöl",
                "amount": "",
                "unit": "",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "Olivenöl", "amount": "", "unit": "", "origin": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ] 
                }
                ]
              },
              {
                "name": "Salz und Pfeffer",
                "amount": "",
                "unit": "",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              }
            ],
            "prepTime": "30",
            "restTime": "15",
            "cookTime": "33",
            "recipeInstructions": [
              {
                "step": 1,
                "description": "Als erstes eine große Pfanne erhitzen und etwas Olivenöl hineingeben. Die Knoblauchzehen mit der flachen Seite des Messers andrücken, schälen und in feine Scheiben schneiden. Bei niedriger (!) Hitze (also 2-3 von 10) glasig anbraten. Das dauert ca. 10 Minuten, wobei der Knoblauch keinesfalls Farbe annehmen soll, nur leicht gelblich und glasig werden.",
                "tipsAndTricks": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ],
                "historicalNote": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ]
              },
              {
                "step": 2,
                "description": "In der Zwischenzeit lauwarmes (wichtig!) Wasser in eine Schüssel geben, dazu die Hefe hineingeben. Das Ganze mit einer Gabel gut verrühren und 5-8 Minuten stehen lassen.",
                "tipsAndTricks": [
                  { "author": "Melanie Müllerchen", "text": "Eier sollten aus Bodenhaltung sein." }
                ],
                "historicalNote": [
                  {
                    "author": "",
                    "text": "Eier besser an der Pfanne aufschlagen und nich am Kopf des Bruders..."
                  }
                ]
              },
              {
                "step": 3,
                "description": "Mehl in eine große Schüssel geben und das Salz einstreuen. Jetzt in der Mitte eine Mulde bilden und das Wasser mit der Hefe in die Mulde gießen und vorerst mit einer Gabel mit kreisförmigen Bewegungen unterrühren. Wenn das Rühren nicht mehr funktioniert, da der Teig eine zähe Konsistenz gekriegt hat, auf eine gut (!) bemehlte Fläche legen und jetzt kräftig kneten. Also wirklich mindestens 10 Minuten lang, bis der Teig sich geschmeidig und glatt anfühlt. Das ist die wichtigste Stelle für einen gelungenen Teig - also Mühe geben! Dann den Teig für 15 Minuten abgedeckt an einem warmen Ort gehen lassen. Dabei mit Mehl bestreuen und mit Klarsichtfolie abdecken, damit sich keine harte Kruste bildet.",
                "tipsAndTricks": [{ "author": "", "text": "" }],
                "historicalNote": [{ "author": "", "text": "" }]
              },
              {
                "step": 4,
                "description": "Wenn der Knoblauch glasig geworden ist, die Dosentomaten hinzufügen und mit Salz abschmecken. Das Ganze soll 5-20 Minuten köcheln. ",
                "tipsAndTricks": [{ "author": "Stefanie Lamm", "text": "Sollte die Soße zu trocken erscheinen, etwas Wasser hinzufügen - bei mir ist sie meist doch eher zu flüssig, so dass sie noch ein bisschen einkochen muss." }],
                "historicalNote": [{ "author": "", "text": "" }]
              },
              {
                "step": 5,
                "description": "Jetzt schon mal den Backofen auf die höchste Stufe (also 250°C Ober- und Unterhitze, keine Umluft) vorheizen. Dann pro Pizza ein ca. orangen- oder grapefruitgroßes Stück Teig abreißen (der Teig sollte bisher etwas aufgegangen sein) und auf einer gut bemehlten Oberfläche mit dem Nudelholz dünn ausrollen. Also wirklich dünn, um eine italienische Pizza zu bekommen. Wichtig ist, dass Sie immer schön Mehl benutzen, damit der Teig nicht am Nudelholz oder an der Tischplatte klebt.",
                "tipsAndTricks": [{ "author": "Stefanie Lamm", "text": "Es ist ganz wichtig, dass der Ofen sehr heiß ist, bevor die Pizza reinkommt - dies entspricht eher dem Optimum, also einem Steinofen." }],
                "historicalNote": [{ "author": "", "text": "" }]
              },
              {
                "step": 6,
                "description": "Inzwischen die reduzierte Tomatensoße nochmals abschmecken (es fehlt praktisch immer etwas Salz), etwas pfeffern, das Stückchen Butter hinzufügen und verrühren, bis es geschmolzen ist.",
                "tipsAndTricks": [{ "author": "Stefanie Lamm", "text": "Die Soße püriere ich immer mit einem Kartoffelstampfer, sodass sie nicht so glatt wird wie mit einem Mixer, jedoch auch nicht zu große Stückchen enthält, damit sie sich auf dem Teigboden leichter verteilen lässt." }],
                "historicalNote": [{ "author": "", "text": "" }]
              },
              {
                "step": 7,
                "description": "Nun den Teigboden auf ein Backblech (mit Backpapier) legen. Jetzt ca. einen Schöpflöffel Soße auf dem Teig gleichmäßig verteilen. Den Mozzarella mit den Händen zerreißen (guter Mozzarella ist relativ weich und lässt sich schwer schneiden) und gleichmäßig auf der Pizza verteilen. Darüber noch ein paar Tropfen Öl träufeln und ab in den heißen Ofen. Wichtig: Auf die unterste Schiene!",
                "tipsAndTricks": [{ "author": "Stefanie Lamm", "text": "Damit das Backpapier nicht verrutscht, einfach vier kleine Stückchen vom Teig in die vier Ecken des Blechs unter das Papier legen und fest draufdrücken (wie Knete). Die werden beim Backen mehr oder weniger verbrennen, hinterlassen jedoch kaum Spuren." }],
                "historicalNote": [{ "author": "", "text": "" }]
              },
              {
                "step": 8,
                "description": "War der Ofen richtig heiß ist und der Teig dünn ausgerollt, braucht die Pizza nicht lange.        Nach 7-12 Minuten sollte der Käse geschmolzen und leicht gebräunt sein. Dunkle, fast schwarze Stellen am Teigrand sind nicht schlimm - solang es nicht der ganze Rand ist.Ist alles gut gelaufen, sollte die Pizza an zwei Enden gehalten so kross und dünn sein, dass sie nicht in der Mitte einknickt.",
                "tipsAndTricks": [{ "author": "", "text": "" }],
                "historicalNote": [{ "author": "", "text": "" }]
              }
        
            ]
          },
          {
            "@type": "Recipe",
            "id": "TestRezept5",
            "title": "Pizza Carbonara",
            "description": "Pizza Carbonara wie von der Pizzeria",
            "datePublished": "2021-1-8 19:13:27",
            "isNew": false,
            "categories": [
              { "name": "Hauptspeise" },
              { "name": "Pizza" },
              { "name": "Italienisch" }
            ],
            "author": { "name": "Jürgen Müller" },
            "portion": "4",
            "difficultyLevel": "mittel",
            "householdUtensils": [
                { "name": "Pfanne" }, 
                { "name": "Topf" },
                { "name": "Schneidebrett" },
                { "name": "Pizzablech"},
                { "name": "Kartoffelstampfer" }
            ],
            "ingredients": [
              {
                "name": "Mehl",
                "amount": "450",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Hefe",
                "amount": "5",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "50", "unit": "g", "origin": "" }
                ]
              },
              {
                "name": "Salz",
                "amount": "1",
                "unit": "Teelöffel",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Wasser",
                "amount": "250",
                "unit": "Milliliter",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Olivenöl",
                "amount": "",
                "unit": "",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "Sonnenblumenöl", "amount": "", "unit": "", "origin": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ] }
                ]
              },
              {
                "name": "Schmand",
                "amount": "250",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Käse(Gouda), gerieben",
                "amount": "200",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "Gratinkäse", "amount": "200", "unit": "Gramm", "origin": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ] }
                ]
              },
              {
                "name": "Kochschinken, hauchdünner",
                "amount": "120",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin":"" }
                ]
              },
              {
                "name": "Champignons",
                "amount": "150",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin":"" }
                ]
              }
            ],
            "prepTime": "20",
            "restTime": "60",
            "cookTime": "25",
            "recipeInstructions": [
              {
                "step": 1,
                "description": "Aus Mehl, Hefe, Salz, Wasser und etwas Olivenöl einen Teig zubereiten. Den Teig ca. 45 Minuten ruhen lassen. Anschließend nochmals durchkneten und dünn auf einem Backblech ausrollen und mit einer Gabel einstechen.",
                "tipsAndTricks": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ],
                "historicalNote": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ]
              },
              {
                "step": 2,
                "description": "Die Champignons putzen und in dünne Scheiben hobeln oder schneiden.",
                "tipsAndTricks": [
                  { "author": "", "text": "" }
                ],
                "historicalNote": [
                  {
                    "author": "Jürgen Müller",
                    "text": "Opa Karl hat die Pizza mit weißen Champignons am meisten gemocht."
                  }
                ]
              },
              {
                "step": 3,
                "description": "Den Schmand mit Salz verrühren und abschmecken. Anschließend auf dem Pizzateig verteilen. Dann den Käse gleichmäßig darüber streuen. Danach den Schinken und die Champignons darüber verteilen. Bei 200° (Ober- und Unterhitze) ca. 20 - 25 Minuten backen, bis der Teig knusprig ist.",
                "tipsAndTricks": [{ "author": "Jürgen Müller", "text": "Je nach Belieben ein Ei in die Mitte der Pizza geben und mitbacken. Das schmeckt immer besonders lecker." }],
                "historicalNote": [{ "author": "", "text": "" }]
              }
            ]
          },
          {
            "@type": "Recipe",
            "id": "TestRezept6",
            "title": "Türkische Pizza",
            "description": "Die türkische Pizza- einfach unglaublich lecker",
            "datePublished": "2021-1-3 20:22:17",
            "isNew": false,
            "categories": [
              { "name": "Hauptspeise" },
              { "name": "Landküche" },
              { "name": "Türkisch" }
            ],
            "author": { "name": "Angelika Müller" },
            "portion": "3",
            "difficultyLevel": "mittel",
            "householdUtensils": [
                { "name": "Pfanne" }, 
                { "name": "Topf" },
                { "name": "Silex Multigrill" }
            ],
            "ingredients": 
            [
              {
                "name": "Mehl",
                "amount": "200",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "frische Hefe",
                "amount": "1/2",
                "unit": "Stück",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "Trockene Hefe", "amount": "1", "unit": "Packung", "origin": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ] 
                }
                ]
              },
              {
                "name": "lauwarmes Wasser",
                "amount": "125",
                "unit": "Milliliter",
                "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Salz",
                "amount": "1",
                "unit": "Priese",
                "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Öl",
                "amount": "1",
                "unit": "Esslöffel",
                "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Zwiebel",
                "amount": "1",
                "unit": "Stück",
                "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Knoblauchzehe",
                "amount": "2",
                "unit": "Stück",
                "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Kräuter (Oregano, Minze, Basilikum, Thymian, getr. und frische Petersilie, Salz und Pfeffer",
                "amount": "",
                "unit": "",
                "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Hackfleisch vom Rind",
                "amount": "150",
                "unit": "Gramm",
                "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Tomaten aus der Dose",
                "amount": "1/2",
                "unit": "Stück",
                "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              }
            ],
            "prepTime": "10",
            "restTime": "1",
            "cookTime": "5",
            "recipeInstructions": [
              {
                "step": 1,
                "description": "Mehl, Hefe, lauwarmes Wasser, Salz und Öl zu einem glatten Teig verkneten. Aus dem Teig 3 gleich große Kugeln formen und diese auf einer bemehlten Arbeitsplatte mit dem Nudelholz dünn ausrollen. ",
                "tipsAndTricks": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ],
                "historicalNote": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ]
              },
              {
                "step": 2,
                "description": "Das Hackfleisch mit Zwiebel, Knoblauchzehe, Tomaten, Öl, Kräuter (Oregano, Minze, Basilikum, Thymian, getr. und frische Petersilie, Salz und Pfeffer gründlich vermischen.",
                "tipsAndTricks": [
                  { "author": "Melanie Müllerchen", "text": "Eier sollten aus Bodenhaltung sein." }
                ],
                "historicalNote": [
                  {
                    "author": "",
                    "text": ""
                  }
                ]
              },
              {
                "step": 3,
                "description": "Silex Multigrill mit Backpapier belegen, die Teigfladen darauf legen, den Belag dünn darauf verteilen. In 5 Minuten sollten die türkische Pizzen in Silex fertig sein.",
                "tipsAndTricks": [{ "author": "Angelika Müller", "text": "Im Ofen kann man die Pizzen auch backen, jedoch schmeckt es im Multigrill viel besser! Das verspreche ich euch!" }],
                "historicalNote": [{ "author": "Angelika Müller", "text": "Oma hat die türkische Pizza immer im Silex Multigrill gemacht. Diesen Tipp hat sie von ihrer türkischen Freundin erfahren und gibt es seit dem immer mit." }]
              }
            ]
          },
          {
            "@type": "Recipe",
            "id": "TestRezept7",
            "title": "Piroggee",
            "description": "Piroggeen, die traditionelle russische Küche",
            "datePublished": "2020-11-10 08:23:28",
            "isNew": false,
            "categories": [
              { "name": "Hauptspeise" },
              { "name": "Piroggee" },
              { "name": "Russisch" }
            ],
            "author": { "name": "Alex Müller" },
            "portion": "4",
            "difficultyLevel": "schwer",
            "householdUtensils": [
                { "name": "Pfanne" }, 
                { "name": "Topf" },
                { "name": "Glas" },
                { "name": "Gabel" },
                { "name": "Teigrolle" }
            ],
            "ingredients": [
              {
                "name": "Mehl",
                "amount": "350",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Ei",
                "amount": "1",
                "unit": "Stück",
                "origins": [{ "name": "Metzger" }],
                "alternativeIngredients": [
                  { "name": "Aubergine", "amount": "50", "unit": "g", "origin": "" }
                ]
              },
              {
                "name": "lauwarmes Wasser",
                "amount": "130",
                "unit": "Milliliter",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Kartoffeln",
                "amount": "600",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Quark",
                "amount": "250",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Zwiebel",
                "amount": "1",
                "unit": "Stück",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Butter",
                "amount": "3",
                "unit": "Esslöffel",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Saure Sahne",
                "amount": "200",
                "unit": "Milliliter",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Salz und Pfeffer, grob gemahlener",
                "amount": "",
                "unit": "",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              }
            ],
            "prepTime": "75",
            "restTime": "1",
            "cookTime": "3",
            "recipeInstructions": [
              {
                "step": 1,
                "description": "Für die Füllung die Kartoffeln schälen, waschen und in Salzwasser gar kochen. Die heißen Kartoffeln zu einer glatten Masse verarbeiten. Die Zwiebel hacken und in 1 EL Butter goldgelb rösten. Den Quark glatt rühren. Kartoffeln, Quark und die Zwiebeln zusammen mit dem Fett in eine Schüssel geben, sehr gut glatt verrühren und mit Salz und Pfeffer abschmecken. Der Teig soll keine Quark- oder Kartoffelklümpchen enthalten. ",
                "tipsAndTricks": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ],
                "historicalNote": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ]
              },
              {
                "step": 2,
                "description": "In eine große Schüssel das Mehl, das Ei, das Wasser und etwas Salz geben und einen glatten Teig kneten. In 2 Portionen teilen. Dann den Teig auf einer bemehlten Arbeitsfläche dünn ausrollen. Mit einem Glas Kreise von 7 - 8 cm Durchmesser ausstechen. In die Mitte von jedem Teigkreis einen gehäuften Teelöffel Füllung geben, dann den Teig zu Halbmonden umklappen und die Ränder mit einer Gabel sorgfältig andrücken. Aufpassen, dass die Füllung nicht an die Ränder kommt!",
                "tipsAndTricks": [
                  { "author": "", "text": "." }
                ],
                "historicalNote": [
                  {
                    "author": "",
                    "text": ""
                  }
                ]
              },
              {
                "step": 3,
                "description": "Die Piroggen in reichlich siedendem Wasser in einem flachen Topf kochen. Vorsichtig umrühren und wenn sie an der Oberfläche schwimmen, noch 2 - 3 Minuten kochen lassen. Mit einem Schaumlöffel heraus nehmen. Mit 2 Esslöfffel heißer Butter servieren. Separat dicke Sahne dazu reichen. Die kalten Piroggen kann man in Butter oder Schmalz braten.",
                "tipsAndTricks": [{ "author": "", "text": "" }],
                "historicalNote": [{ "author": "", "text": "" }]
              }
            ]
          },
          {
            "@type": "Recipe",
            "id": "TestRezept8",
            "title": "Jagodzianki von Oma",
            "description": "Jagodzianki - polnische Blaubeerbrötchen",
            "datePublished": "2020-11-20 13:53:37",
            "isNew": false,
            "categories": [
              { "name": "Nachspeisespeise" },
              { "name": "Gebäck" },
              { "name": "Polnisch" }
            ],
            "author": { "name": "Stefanie Müller" },
            "portion": "12",
            "difficultyLevel": "simpel",
            "householdUtensils": [
                { "name": "Pfanne" }, 
                { "name": "Topf" }
            ],
            "ingredients": [
              {
                "name": "Blaubeeren",
                "amount": "200",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Milch, lauwarm",
                "amount": "200",
                "unit": "Milliliter",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "Aubergine", "amount": "50", "unit": "g", "origin": "" }
                ]
              },
              {
                "name": "Mehl",
                "amount": "500",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Zucker",
                "amount": "100",
                "unit": "Gramm",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "Braunzucker", "amount": "80", "unit": "Gramm", "origin": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ] 
                }
                ]
              },
              {
                "name": "Trockenhefe",
                "amount": "1",
                "unit": "Packung",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "frische Hefe", 
                    "amount": "1/2", 
                    "unit": "Packung", 
                    "origin": [
                      { "name": "Rewe" },
                      { "name": "Lidl" },
                      { "name": "Aldi" },
                      { "name": "Hit" }
                    ] 
                  }
                ]
              },
              {
                "name": "Salz",
                "amount": "1",
                "unit": "Priese",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Ei",
                "amount": "1",
                "unit": "Stück",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
              ]
            },
            {
              "name": "Vanillezucker",
              "amount": "1",
              "unit": "Stück",
              "origins": [
                { "name": "Rewe" },
                { "name": "Lidl" },
                { "name": "Aldi" },
                { "name": "Hit" }
              ],
              "alternativeIngredients": [
                { "name": "", "amount": "", "unit": "", "origin": "" }
             ]
            },
            {
              "name": "Butter",
              "amount": "80",
              "unit": "Gramm",
              "origins": [
                { "name": "Rewe" },
                { "name": "Lidl" },
                { "name": "Aldi" },
                { "name": "Hit" }
              ],
              "alternativeIngredients": [
                { "name": "", "amount": "", "unit": "", "origin": "" }
             ]
            },
            {
              "name": "Mehl",
              "amount": "",
              "unit": "",
              "origins": [
                { "name": "Rewe" },
                { "name": "Lidl" },
                { "name": "Aldi" },
                { "name": "Hit" }
              ],
              "alternativeIngredients": [
                { "name": "", "amount": "", "unit": "", "origin": "" }
             ]
            },
            {
              "name": "Milch",
              "amount": "",
              "unit": "",
              "origins": [
                { "name": "Rewe" },
                { "name": "Lidl" },
                { "name": "Aldi" },
                { "name": "Hit" }
              ],
              "alternativeIngredients": [
                { "name": "", "amount": "", "unit": "", "origin": "" }
             ]
            }
            ],
            "prepTime": "10",
            "restTime": "90",
            "cookTime": "20",
            "recipeInstructions": [
              {
                "step": 1,
                "description": "Das Mehl mit Zucker, Vanillezucker und Salz und Hefe vermengen. Die lauwarme Milch und das Ei zugeben und verrühren. Zuletzt die warme, zerlassene Butter unterrühren und zu einem glatten Teig kneten.",
                "tipsAndTricks": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ],
                "historicalNote": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ]
              },
              {
                "step": 2,
                "description": "In einer bemehlten Schüssel abgedeckt an einem warmen Ort gehen lassen, bis sich das Volumen des Teigs etwa verdoppelt hat.",
                "tipsAndTricks": [
                  { "author": "Stefanie Müller", "text": "Teig aufgehen lassen ca. 1,5 Std. bei Raumtemperatur, ca. 30 - 40 min. im kurz auf 40 °C angeheizten Backofen)" }
                ],
                "historicalNote": [
                  {
                    "author": "",
                    "text": ""
                  }
                ]
              },
              {
                "step": 3,
                "description": "Den Teig auf einer bemehlten Fläche ausrollen und in 12 - 16 Portionen schneiden. Die Blaubeeren waschen, abtropfen und 4 - 6 Beeren pro Teilchen mit Teig umhüllen. Den Teig sorgfältig und glatt verschließen, damit die Beeren beim Backen nicht auslaufen.",
                "tipsAndTricks": [{ "author": "", "text": "" }],
                "historicalNote": [{ "author": "", "text": "" }]
              },
              {
                "step": 4,
                "description": "Ovale Laibchen formen und auf mit Backpapier ausgelegtes Blech legen. Ggf. noch mal 10 - 15 min. gehen lassen. Im vorgeheizten Ofen bei 200 °C (Ober-/Unterhitze) 18 - 20 min. backen.",
                "tipsAndTricks": [{ "author": "Stefanie Müller", "text": "Mama hat vor dem Backen die Oberseite immer mit Milch bestriechen." }],
                "historicalNote": [{ "author": "Stefanie Müller", "text": "Mama hat diese leckeren Brötchen immer an unseren Geburtstagen gebacken." }]
              }
            ]
          },
          {
            "@type": "Recipe",
            "id": "TestRezept9",
            "title": "Low Carb Omelett",
            "description": "Low Carb kann auch sehr gut schmecken! ",
            "datePublished": "2020-10-10 21:41:22",
            "isNew": false,
            "categories": [
              { "name": "Frühstück" },
              { "name": "Vorspeise" },
              { "name": "Landküche" }
            ],
            "author": { "name": "Georg Müller" },
            "portion": "1",
            "difficultyLevel": "simpel",
            "householdUtensils": [
                { "name": "Pfanne" }, 
                { "name": "Topf" }
            ],
            "ingredients": [
              {
                "name": "Paprikaschote",
                "amount": "1",
                "unit": "Esslöffel",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Frühlingszwiebel",
                "amount": "1",
                "unit": "Esslöffel",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Eier",
                "amount": "2",
                "unit": "Stück",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Salz",
                "amount": "",
                "unit": "",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Käse",
                "amount": "1",
                "unit": "Esslöffel",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              },
              {
                "name": "Olivenöl",
                "amount": "1",
                "unit": "Teelöffel",
                "origins": [
                  { "name": "Rewe" },
                  { "name": "Lidl" },
                  { "name": "Aldi" },
                  { "name": "Hit" }
                ],
                "alternativeIngredients": [
                  { "name": "", "amount": "", "unit": "", "origin": "" }
                ]
              }
            ],
            "prepTime": "5",
            "restTime": "1",
            "cookTime": "5",
            "recipeInstructions": [
              {
                "step": 1,
                "description": "Die Eier in einer Schüssel mit einer Prise Salz verquirlen.",
                "tipsAndTricks": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ],
                "historicalNote": [
                    { 
                        "author": "", 
                        "text": "" 
                    }
                ]
              },
              {
                "step": 2,
                "description": "Eine Pfanne mit dem Öl erhitzen. Die verquirlten Eier in die Pfanne geben und mit Käse, Paprika und Frühlingszwiebeln belegen.",
                "tipsAndTricks": [
                  { "author": "", "text": "" }
                ],
                "historicalNote": [
                  {
                    "author": "",
                    "text": ""
                  }
                ]
              },
              {
                "step": 3,
                "description": "Den Herd ausschalten, die Pfanne mit einem Teller abdecken und in der Resthitze ziehen lassen, bis das Ei gestockt ist.",
                "tipsAndTricks": [{ "author": "", "text": "" }],
                "historicalNote": [{ "author": "", "text": "" }]
              }
            ]
          }
        ],
        friendRecipies: [],
        myPreferencesCategories: [
          {name: 'test', value: '0'},
        ],
        myPreferencesIngredients: [
          {name: 'test', value: '0'},
        ],
        myPreferencesDifficultyLevel: [
          {name: 'test', value: '0'},
        ],
        tempRecipe: {}
    },
    getters,
    mutations,
    actions,
});