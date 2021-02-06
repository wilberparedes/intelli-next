import { actions } from '../../store';
import React, { Component, createRef  } from 'react';
import { CommonActions } from '@react-navigation/native';
import { connect } from  'react-redux';

import { StyleSheet, SafeAreaView, StatusBar, FlatList, View, Text, ActivityIndicator, Alert, Animated } from 'react-native';
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { Colors, Fonts, Functions, Metrics, } from '../../themes';



import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { Modalize } from 'react-native-modalize';

import HeaderTitleBack from '../components/HeaderTitleBack';
import DeviceItem from '../components/DeviceItem';
import HeaderMarvel from '../components/HeaderMarvel';
import MarvelComicItem from '../components/MarvelComicItem';

const WIDTH = Metrics.screenWidth;

class MarvelScreen extends Component{

    modalDetails = React.createRef(null);

    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                  "id": 71400,
                  "digitalId": 0,
                  "title": " Superior Spider-Man Vol. 2: Otto-matic (Trade Paperback)",
                  "issueNumber": 0,
                  "variantDescription": "",
                  "description": null,
                  "modified": "2019-12-13T16:24:00-0500",
                  "isbn": "978-1-302-91481-3",
                  "upc": "",
                  "diamondCode": "SEP190996",
                  "ean": "9781302 914813 51799",
                  "issn": "2328-4811",
                  "format": "Trade Paperback",
                  "pageCount": 136,
                  "textObjects": [],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/71400",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/collection/71400/_superior_spider-man_vol_2_otto-matic_trade_paperback?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/26024",
                    "name": " Superior Spider-Man Vol. 2: Otto-matic (2019)"
                  },
                  "variants": [],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2019-12-18T00:00:00-0500"
                    },
                    {
                      "type": "focDate",
                      "date": "2019-10-28T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 17.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/f0/5df3fc8b3c883",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/f0/5df3fc8b3c883",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 4,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/71400/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11765",
                        "name": "Christos Gage",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/942",
                        "name": "Mike Hawthorne",
                        "role": "penciller (cover)"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/437",
                        "name": "Lan Medina",
                        "role": "penciller"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4430",
                        "name": "Jeff Youngquist",
                        "role": "editor"
                      }
                    ],
                    "returned": 4
                  },
                  "characters": {
                    "available": 1,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/71400/characters",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
                        "name": "Spider-Man"
                      }
                    ],
                    "returned": 1
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/71400/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/158776",
                        "name": "cover from SUPERIOR SPIDER-MAN VOL. 2 TPB (2020) #2",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/158777",
                        "name": "story from SUPERIOR SPIDER-MAN VOL. 2 TPB (2020) #2",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/71400/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 49011,
                  "digitalId": 34160,
                  "title": "100th Anniversary Special (2014) #1",
                  "issueNumber": 1,
                  "variantDescription": "",
                  "description": "Just in time for the release of their SEVENTH epic motion picture, the Guardians of the Galaxy are celebrating their 100th Anniversary...by taking on the THE SILVER GALACTUS!",
                  "modified": "2014-07-21T11:39:24-0400",
                  "isbn": "",
                  "upc": "75960608000700511",
                  "diamondCode": "",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "Just in time for the release of their SEVENTH epic motion picture, the Guardians of the Galaxy are celebrating their 100th Anniversary...by taking on the THE SILVER GALACTUS!"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/49011",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/49011/100th_anniversary_special_2014_1?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/100th-Anniversary-Special-1/digital-comic/34160?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=34160&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/34160?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/18454",
                    "name": "100th Anniversary Special (2014)"
                  },
                  "variants": [
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49010",
                      "name": "100th Anniversary Special (2014) #1"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49009",
                      "name": "100th Anniversary Special (2014) #1"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49008",
                      "name": "100th Anniversary Special (2014) #1"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49007",
                      "name": "100th Anniversary Special (2014) #1"
                    }
                  ],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2014-07-30T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2014-07-16T00:00:00-0400"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2015-01-26T00:00:00-0500"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2014-07-30T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/10/53cd2c7612d2f",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/10/53cd2c7612d2f",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/b0/536d00217d190",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49011/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/485",
                        "name": "Andy Lanning",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12392",
                        "name": "David Lopez",
                        "role": "penciller (cover)"
                      }
                    ],
                    "returned": 2
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49011/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49011/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110109",
                        "name": "cover from 100th Anniversary Special (2014) #5",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110110",
                        "name": "story from 100th Anniversary Special (2014) #5",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49011/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 49010,
                  "digitalId": 34127,
                  "title": "100th Anniversary Special (2014) #1",
                  "issueNumber": 1,
                  "variantDescription": "",
                  "description": "CELEBRATE 100 YEARS OF EARTH&#39;S MIGHTIEST HEROES &ndash; THE AVENGERS! Following the failed Badoon invasion of Earth and America&#39;s disappearance into the Negative Zone, how will the Avengers of 2061 cope?!",
                  "modified": "2014-07-16T13:13:34-0400",
                  "isbn": "",
                  "upc": "75960608000700411",
                  "diamondCode": "",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "CELEBRATE 100 YEARS OF EARTH&#39;S MIGHTIEST HEROES &ndash; THE AVENGERS! Following the failed Badoon invasion of Earth and America&#39;s disappearance into the Negative Zone, how will the Avengers of 2061 cope?!"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/49010",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/49010/100th_anniversary_special_2014_1?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/100th-Anniversary-Special-1/digital-comic/34127?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=34127&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/34127?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/18454",
                    "name": "100th Anniversary Special (2014)"
                  },
                  "variants": [
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49011",
                      "name": "100th Anniversary Special (2014) #1"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49009",
                      "name": "100th Anniversary Special (2014) #1"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49008",
                      "name": "100th Anniversary Special (2014) #1"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49007",
                      "name": "100th Anniversary Special (2014) #1"
                    }
                  ],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2014-07-23T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2014-07-09T00:00:00-0400"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2015-01-19T00:00:00-0500"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2014-07-23T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/53c406e09649c",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/53c406e09649c",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/40/536cffe2a8b13",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49010/creators",
                    "items": [],
                    "returned": 0
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49010/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49010/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110107",
                        "name": "cover from 100th Anniversary Special (2014) #4",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110108",
                        "name": "story from 100th Anniversary Special (2014) #4",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49010/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 49007,
                  "digitalId": 34097,
                  "title": "100th Anniversary Special (2014) #1",
                  "issueNumber": 1,
                  "variantDescription": "",
                  "description": "A REMARKABLE ARTIFACT FROM THE FUTURE OF MARVEL COMICS! It&#39;s 2061 and the world of the Fantastic Four has turned upside-down, complete with the granddaughter of Doom...and the Richards-Banner twins",
                  "modified": "2014-07-16T13:11:56-0400",
                  "isbn": "",
                  "upc": "75960608000700111",
                  "diamondCode": "",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "A REMARKABLE ARTIFACT FROM THE FUTURE OF MARVEL COMICS! It&#39;s 2061 and the world of the Fantastic Four has turned upside-down, complete with the granddaughter of Doom...and the Richards-Banner twins"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/49007",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/49007/100th_anniversary_special_2014_1?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=34097&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/18454",
                    "name": "100th Anniversary Special (2014)"
                  },
                  "variants": [
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49011",
                      "name": "100th Anniversary Special (2014) #1"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49010",
                      "name": "100th Anniversary Special (2014) #1"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49009",
                      "name": "100th Anniversary Special (2014) #1"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49008",
                      "name": "100th Anniversary Special (2014) #1"
                    }
                  ],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2014-07-02T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2014-06-18T00:00:00-0400"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2015-11-10T00:00:00-0500"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/53a85058a61f0",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/53a85058a61f0",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/30/536cff2402418",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49007/creators",
                    "items": [],
                    "returned": 0
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49007/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49007/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110101",
                        "name": "cover from 100th Anniversary Special (2014) #1",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110102",
                        "name": "story from 100th Anniversary Special (2014) #1",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49007/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 49009,
                  "digitalId": 34155,
                  "title": "100th Anniversary Special (2014) #1",
                  "issueNumber": 1,
                  "variantDescription": "",
                  "description": "- Have the X-Men of 2061 achieved Xavier's dream of mutants and humans living in harmony? Or will there always be a need for the X-Men?",
                  "modified": "2014-07-16T13:12:43-0400",
                  "isbn": "",
                  "upc": "75960608000700311",
                  "diamondCode": "",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "- Have the X-Men of 2061 achieved Xavier's dream of mutants and humans living in harmony? Or will there always be a need for the X-Men?"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/49009",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/49009/100th_anniversary_special_2014_1?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/100th-Anniversary-Special-1/digital-comic/34155?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=34155&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/34155?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/18454",
                    "name": "100th Anniversary Special (2014)"
                  },
                  "variants": [
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49011",
                      "name": "100th Anniversary Special (2014) #1"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49010",
                      "name": "100th Anniversary Special (2014) #1"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49008",
                      "name": "100th Anniversary Special (2014) #1"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49007",
                      "name": "100th Anniversary Special (2014) #1"
                    }
                  ],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2014-07-16T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2014-07-02T00:00:00-0400"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2015-01-12T00:00:00-0500"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2014-07-16T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/53bae9abd8e6f",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/53bae9abd8e6f",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/c0/536cffa4cbc98",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49009/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13138",
                        "name": "In-Hyuk Lee",
                        "role": "penciller (cover)"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11788",
                        "name": "Jennifer Van Meter",
                        "role": "writer"
                      }
                    ],
                    "returned": 2
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49009/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49009/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110105",
                        "name": "cover from 100th Anniversary Special (2014) #3",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110106",
                        "name": "story from 100th Anniversary Special (2014) #3",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49009/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 49008,
                  "digitalId": 34110,
                  "title": "100th Anniversary Special (2014) #1",
                  "issueNumber": 1,
                  "variantDescription": "",
                  "description": "It&#39;s 100 years after the wall-crawler&#39;s creation, but when the Kingpin has taken Spider-Man&#39;s ultra-powerful techno-symbiote suit, Spider-Man will need to prove once again why he is the world&#39;s greatest super hero.",
                  "modified": "2014-07-16T13:12:20-0400",
                  "isbn": "",
                  "upc": "75960608000700211",
                  "diamondCode": "",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "It&#39;s 100 years after the wall-crawler&#39;s creation, but when the Kingpin has taken Spider-Man&#39;s ultra-powerful techno-symbiote suit, Spider-Man will need to prove once again why he is the world&#39;s greatest super hero."
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/49008",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/49008/100th_anniversary_special_2014_1?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/100th-Anniversary-Special-1/digital-comic/34110?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=34110&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/34110?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/18454",
                    "name": "100th Anniversary Special (2014)"
                  },
                  "variants": [
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49011",
                      "name": "100th Anniversary Special (2014) #1"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49010",
                      "name": "100th Anniversary Special (2014) #1"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49009",
                      "name": "100th Anniversary Special (2014) #1"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/49007",
                      "name": "100th Anniversary Special (2014) #1"
                    }
                  ],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2014-07-09T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2014-06-25T00:00:00-0400"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2015-01-05T00:00:00-0500"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2014-07-09T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/20/53b1be72eec81",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/20/53b1be72eec81",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/c0/536cff66debd3",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49008/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13138",
                        "name": "In-Hyuk Lee",
                        "role": "penciller (cover)"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/9432",
                        "name": "Sean Ryan",
                        "role": "writer"
                      }
                    ],
                    "returned": 2
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49008/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49008/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110103",
                        "name": "cover from 100th Anniversary Special (2014) #2",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/110104",
                        "name": "story from 100th Anniversary Special (2014) #2",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/49008/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 37254,
                  "digitalId": 21429,
                  "title": "15 Love (2011) #1",
                  "issueNumber": 1,
                  "variantDescription": "",
                  "description": "Teenage tennis action as only Marvel can deliver! Tennis is Mill Collins whole life...but as the lowest ranking student at the Wayde Tennis Academy, she's about to lose her scholarship, and any chance at reaching her dream. What will she do next?",
                  "modified": "2013-03-05T19:42:21-0500",
                  "isbn": "",
                  "upc": "5960605470-00111",
                  "diamondCode": "",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 48,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "TEENAGE TENNIS ACTION AS ONLY MIGHTY MARVEL CAN DELIVER! Tennis is Mill Collins whole life...but as the lowest ranking student at the Wayde Tennis Academy, she's about to lose her scholarship, and any chance at reaching her dream.  Her coach has given up on her, her aunt thinks she doesn't try, and the only one who believes in her is a washed-up drunk...how wrong can things possible go before Mill catches a break?"
                    },
                    {
                      "type": "issue_preview_text",
                      "language": "en-us",
                      "text": "Teenage tennis action as only Marvel can deliver! Tennis is Mill Collins whole life...but as the lowest ranking student at the Wayde Tennis Academy, she's about to lose her scholarship, and any chance at reaching her dream. What will she do next?"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/37254",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/37254/15_love_2011_1?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=21429&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13379",
                    "name": "15 Love (2011)"
                  },
                  "variants": [],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2011-06-08T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2011-05-24T00:00:00-0400"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2015-09-21T15:31:41-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 4.99
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 1.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/d0/5601c374d0812",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/d0/5601c374d0812",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/00/4d7a87fed73f1",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/37254/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/274",
                        "name": "Tommy Ohtsuka",
                        "role": "penciller"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/496",
                        "name": "Andi Watson",
                        "role": "writer"
                      }
                    ],
                    "returned": 2
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/37254/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/37254/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82486",
                        "name": "15-Love (2011) #1",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82487",
                        "name": "Interior #82487",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/37254/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 37251,
                  "digitalId": 22411,
                  "title": "15 Love (2011) #2",
                  "issueNumber": 2,
                  "variantDescription": "",
                  "description": "Millie's new coach, Walt, has her working day and night, training to get her off the bottom of the academy's ranking.Â  But when a photographer takes an interest in Mill, a whole new wrinkle is added into her life.",
                  "modified": "2013-03-06T10:11:51-0500",
                  "isbn": "",
                  "upc": "5960605470-00211",
                  "diamondCode": "",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 48,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "Millie Collins is finding that her dream of playing tennis is not as easy as she's thought.  Her new coach, Walt, has her working day and night, training to get her off the bottom of the Wayde Tennis Academy's ranking.  But when a photographer takes an interest in Mill, a whole new wrinkle is added into her life. Can she make time for modeling and still save herself from being expelled?"
                    },
                    {
                      "type": "issue_preview_text",
                      "language": "en-us",
                      "text": "Millie's new coach, Walt, has her working day and night, training to get her off the bottom of the academy's ranking.Â  But when a photographer takes an interest in Mill, a whole new wrinkle is added into her life."
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/37251",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/37251/15_love_2011_2?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/15-Love-2/digital-comic/22411?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=22411&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/22411?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13379",
                    "name": "15 Love (2011)"
                  },
                  "variants": [],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2011-07-06T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2011-06-21T00:00:00-0400"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2012-05-14T00:00:00-0400"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2011-08-02T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 4.99
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 1.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/d0/5601c35a91d15",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/d0/5601c35a91d15",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/10/4d9f1f15f29ef",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 3,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/37251/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/274",
                        "name": "Tommy Ohtsuka",
                        "role": "penciller"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/496",
                        "name": "Andi Watson",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
                        "name": "Jordan White",
                        "role": "editor"
                      }
                    ],
                    "returned": 3
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/37251/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/37251/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82480",
                        "name": "Cover #82480",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82481",
                        "name": "Interior #82481",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/37251/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 37253,
                  "digitalId": 23162,
                  "title": "15 Love (2011) #3",
                  "issueNumber": 3,
                  "variantDescription": "",
                  "description": "Between a possible modeling deal and the boy she's interested in, is it any wonder Mill's trainer thinks she's not focused? But if she wants to prove herself she needs to get her head in the game fast and turn things around!",
                  "modified": "2011-08-05T12:00:28-0400",
                  "isbn": "",
                  "upc": "5960605470-00311",
                  "diamondCode": "",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 48,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "It has come to this! The Mighty Marvel Age of Tennis Manga comes to a pulse pounding conclusion as Mill Collins finds herself in the Wayde Tennis Academy's big tournament...but her chances are looking slim. Between a possible modeling deal and the boy she's interested in, is it any wonder her trainer thinks she's not focused? But if she wants to prove herself she needs to get her head in the game fast and turn things around!"
                    },
                    {
                      "type": "issue_preview_text",
                      "language": "en-us",
                      "text": "Between a possible modeling deal and the boy she's interested in, is it any wonder Mill's trainer thinks she's not focused? But if she wants to prove herself she needs to get her head in the game fast and turn things around!"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/37253",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/37253/15_love_2011_3?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/15-Love-3/digital-comic/23162?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=23162&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/23162?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13379",
                    "name": "15 Love (2011)"
                  },
                  "variants": [],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2011-08-03T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2011-07-19T00:00:00-0400"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2012-05-14T00:00:00-0400"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2011-09-06T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 4.99
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 1.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/70/5601c38d760b9",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/70/5601c38d760b9",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/37253/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/274",
                        "name": "Tommy Ohtsuka",
                        "role": "penciller"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/496",
                        "name": "Andi Watson",
                        "role": "writer"
                      }
                    ],
                    "returned": 2
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/37253/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/37253/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82484",
                        "name": "Cover #82484",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82485",
                        "name": "Interior #82485",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/37253/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 37252,
                  "digitalId": 0,
                  "title": "15-Love GN-TPB (Graphic Novel)",
                  "issueNumber": 1,
                  "variantDescription": "",
                  "description": "Teenage tennis action as only Mighty Marvel can deliver! Tennis is Mill Collins' whole life. But as the lowest-ranking student at the Wayde?Tennis Academy, she's about to lose her scholarship - and any chance at reaching her dream. Her coach has given up on her, her aunt thinks she doesn't try, and the only one who believes in her is a washed-up drunk. How wrong can things possibly go before Mill catches a break? Collecting 15-LOVE #1-3.",
                  "modified": "2011-10-14T16:22:14-0400",
                  "isbn": "978-0-7851-1334-8",
                  "upc": "5960611334-00111",
                  "diamondCode": "",
                  "ean": "9780785 113348 51499",
                  "issn": "",
                  "format": "Graphic Novel",
                  "pageCount": 144,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "Teenage tennis action as only Mighty Marvel can deliver! Tennis is Mill Collins' whole life. But as the lowest-ranking student at the Wayde?Tennis Academy, she's about to lose her scholarship - and any chance at reaching her dream. Her coach has given up on her, her aunt thinks she doesn't try, and the only one who believes in her is a washed-up drunk. How wrong can things possibly go before Mill catches a break? Collecting 15-LOVE #1-3."
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/37252",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/collection/37252/15-love_gn-tpb_graphic_novel?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/13380",
                    "name": "15-Love GN-TPB (2013 - Present)"
                  },
                  "variants": [],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2011-10-19T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2011-10-04T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 14.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/50/4e272be1b96af",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/50/4e272be1b96af",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/37252/creators",
                    "items": [],
                    "returned": 0
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/37252/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/37252/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82482",
                        "name": "15-Love GN-TPB (2013) #1",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82483",
                        "name": "Interior #82483",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/37252/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 440,
                  "digitalId": 3161,
                  "title": "1602 (2003) #8",
                  "issueNumber": 8,
                  "variantDescription": "",
                  "description": "CLIMATIC last issue! Secrets revealed! Mysteries explained! A mighty sacrifice! Worlds live! Worlds die! Heroes make choices! And so do villains...",
                  "modified": "2018-03-07T15:57:16-0500",
                  "isbn": "",
                  "upc": "5960605253-00811",
                  "diamondCode": "",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 0,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "CLIMATIC last issue! Secrets revealed! Mysteries explained! A mighty sacrifice! Worlds live! Worlds die! Heroes make choices! And so do villains..."
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/440",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/440/1602_2003_8?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/1602-8/digital-comic/3161?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=3161&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/3161?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
                    "name": "1602 (2003 - 2004)"
                  },
                  "variants": [],
                  "collections": [
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/3962",
                      "name": "Silver Surfer: Rebirth of Thanos (Trade Paperback)"
                    }
                  ],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2004-03-31T00:00:00-0500"
                    },
                    {
                      "type": "focDate",
                      "date": "-0001-11-30T00:00:00-0500"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2010-01-28T00:00:00-0500"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2010-11-02T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 1.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/c0/5aa052106f9d3",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/c0/5aa052106f9d3",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/4bc6978a1e62f",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/440/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/567",
                        "name": "Neil Gaiman",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/175",
                        "name": "Andy Kubert",
                        "role": "penciller"
                      }
                    ],
                    "returned": 2
                  },
                  "characters": {
                    "available": 1,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/440/characters",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010697",
                        "name": "Virginia Dare"
                      }
                    ],
                    "returned": 1
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/440/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1723",
                        "name": "Cover #1723",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1724",
                        "name": "Interior #1724",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/440/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 146,
                  "digitalId": 6314,
                  "title": "1602 (2003) #6",
                  "issueNumber": 6,
                  "variantDescription": "",
                  "description": "Cardstock cover by SCOTT MCKOWEN\r\nDoctor Strange goes to the moon, while our heroes take on Doom and his Vulture squadron!\r\n32 PGS./MARVEL PSR...$3.50",
                  "modified": "2018-03-07T15:58:03-0500",
                  "isbn": "",
                  "upc": "5960605372-01811",
                  "diamondCode": "",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 0,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "Cardstock cover by SCOTT MCKOWEN\r\nDoctor Strange goes to the moon, while our heroes take on Doom and his Vulture squadron!\r\n32 PGS./MARVEL PSR...$3.50"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/146",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/146/1602_2003_6?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/1602-6/digital-comic/6314?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=6314&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/6314?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
                    "name": "1602 (2003 - 2004)"
                  },
                  "variants": [],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2004-01-14T00:00:00-0500"
                    },
                    {
                      "type": "focDate",
                      "date": "-0001-11-30T00:00:00-0500"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2010-01-14T00:00:00-0500"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2010-11-02T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.5
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 1.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/5aa052400468e",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/5aa052400468e",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/4bc6ab8f52965",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 3,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/146/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/567",
                        "name": "Neil Gaiman",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/175",
                        "name": "Andy Kubert",
                        "role": "penciller"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/566",
                        "name": "Scott McKowen",
                        "role": "penciller (cover)"
                      }
                    ],
                    "returned": 3
                  },
                  "characters": {
                    "available": 1,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/146/characters",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009661",
                        "name": "The Watchers"
                      }
                    ],
                    "returned": 1
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/146/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1770",
                        "name": "Cover #1770",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1771",
                        "name": "Interior #1771",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/146/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 50114,
                  "digitalId": 32179,
                  "title": "1602 (2003) #2",
                  "issueNumber": 2,
                  "variantDescription": "",
                  "description": null,
                  "modified": "2015-07-22T15:31:38-0400",
                  "isbn": "",
                  "upc": "",
                  "diamondCode": "",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 0,
                  "textObjects": [],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/50114",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/50114/1602_2003_2?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=32179&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
                    "name": "1602 (2003 - 2004)"
                  },
                  "variants": [],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2003-09-01T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "-0001-11-30T00:00:00-0500"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2013-10-02T14:35:37-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 0
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/50/52961aabe3f5f",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/50/52961aabe3f5f",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/50114/creators",
                    "items": [],
                    "returned": 0
                  },
                  "characters": {
                    "available": 8,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/50114/characters",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009281",
                        "name": "Doctor Doom"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009463",
                        "name": "Matthew Murdock"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009547",
                        "name": "Natasha Romanoff"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009471",
                        "name": "Nick Fury"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011054",
                        "name": "Spider-Man (1602)"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009661",
                        "name": "The Watchers"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010697",
                        "name": "Virginia Dare"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                        "name": "X-Men"
                      }
                    ],
                    "returned": 8
                  },
                  "stories": {
                    "available": 1,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/50114/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113142",
                        "name": "Cover from 1602 #2",
                        "type": "cover"
                      }
                    ],
                    "returned": 1
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/50114/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 147,
                  "digitalId": 6313,
                  "title": "1602 (2003) #5",
                  "issueNumber": 5,
                  "variantDescription": "",
                  "description": "Sir Nicholas Fury leads an army against Carlos Javier's Witchbreed!  And we learn the true history of the Four from the Fantastik.\r\n32 PGS./MARVEL PSR...$3.50",
                  "modified": "2018-03-07T15:58:28-0500",
                  "isbn": "",
                  "upc": "5960605469-00211",
                  "diamondCode": "",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 0,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "Sir Nicholas Fury leads an army against Carlos Javier's Witchbreed!  And we learn the true history of the Four from the Fantastik.\r\n32 PGS./MARVEL PSR...$3.50"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/147",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/147/1602_2003_5?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/1602-5/digital-comic/6313?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=6313&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/6313?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
                    "name": "1602 (2003 - 2004)"
                  },
                  "variants": [],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2003-12-10T00:00:00-0500"
                    },
                    {
                      "type": "focDate",
                      "date": "-0001-11-30T00:00:00-0500"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2010-01-07T00:00:00-0500"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2010-11-02T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.5
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 1.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/5aa052598a31d",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/5aa052598a31d",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4bc6ab8a4de85",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 3,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/147/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/567",
                        "name": "Neil Gaiman",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/175",
                        "name": "Andy Kubert",
                        "role": "penciller"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/566",
                        "name": "Scott McKowen",
                        "role": "penciller (cover)"
                      }
                    ],
                    "returned": 3
                  },
                  "characters": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/147/characters",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011054",
                        "name": "Spider-Man (1602)"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010697",
                        "name": "Virginia Dare"
                      }
                    ],
                    "returned": 2
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/147/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2264",
                        "name": "Cover #2264",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2265",
                        "name": "Interior #2265",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/147/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 20630,
                  "digitalId": 6309,
                  "title": "1602 (2003) #1",
                  "issueNumber": 1,
                  "variantDescription": "",
                  "description": "The start of a whole new Marvel Universe begins here! It's the Marvel Universe in the year 1602.",
                  "modified": "2019-05-08T10:36:17-0400",
                  "isbn": "",
                  "upc": "",
                  "diamondCode": "",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 0,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "The start of a whole new Marvel Universe begins here! It's the Marvel Universe in the year 1602."
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/20630",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/20630/1602_2003_1?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/1602-1/digital-comic/6309?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=6309&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/6309?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
                    "name": "1602 (2003 - 2004)"
                  },
                  "variants": [],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2003-08-13T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "-0001-11-30T00:00:00-0500"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2009-08-17T00:00:00-0400"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2010-11-02T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 0
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 1.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/20/5aa0527ab02c4",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/20/5aa0527ab02c4",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/03/5140e6f528791",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/70/4bb694c146364",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/50/4bb3d381b4649",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/20630/creators",
                    "items": [],
                    "returned": 0
                  },
                  "characters": {
                    "available": 9,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/20630/characters",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009281",
                        "name": "Doctor Doom"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009417",
                        "name": "Magneto"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009463",
                        "name": "Matthew Murdock"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009547",
                        "name": "Natasha Romanoff"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009471",
                        "name": "Nick Fury"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011054",
                        "name": "Spider-Man (1602)"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009661",
                        "name": "The Watchers"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010697",
                        "name": "Virginia Dare"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                        "name": "X-Men"
                      }
                    ],
                    "returned": 9
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/20630/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/44869",
                        "name": "Cover #44869",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/44870",
                        "name": "Interior #44870",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/20630/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 148,
                  "digitalId": 6312,
                  "title": "1602 (2003) #4",
                  "issueNumber": 4,
                  "variantDescription": "",
                  "description": "With the country in turmoil, Dr. Strange learns Virginia Dare's dark secret, Peter Parquargh is captured by the X-Men, and Fury is placed in an impossible position! 32 PGS./MARVEL PSR...$3.50",
                  "modified": "2018-03-07T15:59:04-0500",
                  "isbn": "",
                  "upc": "5960605109-03911",
                  "diamondCode": "",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 0,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "With the country in turmoil, Dr. Strange learns Virginia Dare's dark secret, Peter Parquargh is captured by the X-Men, and Fury is placed in an impossible position! 32 PGS./MARVEL PSR...$3.50"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/148",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/148/1602_2003_4?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/1602-4/digital-comic/6312?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=6312&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/6312?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
                    "name": "1602 (2003 - 2004)"
                  },
                  "variants": [],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2003-11-12T00:00:00-0500"
                    },
                    {
                      "type": "focDate",
                      "date": "-0001-11-30T00:00:00-0500"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2009-12-01T00:00:00-0500"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2010-11-02T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.5
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 1.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/e0/5aa05273b5cd7",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/e0/5aa05273b5cd7",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/f0/4bc6ab851219b",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 3,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/148/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/567",
                        "name": "Neil Gaiman",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/175",
                        "name": "Andy Kubert",
                        "role": "penciller"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/566",
                        "name": "Scott McKowen",
                        "role": "penciller (cover)"
                      }
                    ],
                    "returned": 3
                  },
                  "characters": {
                    "available": 6,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/148/characters",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009281",
                        "name": "Doctor Doom"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009463",
                        "name": "Matthew Murdock"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009547",
                        "name": "Natasha Romanoff"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011054",
                        "name": "Spider-Man (1602)"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010697",
                        "name": "Virginia Dare"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                        "name": "X-Men"
                      }
                    ],
                    "returned": 6
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/148/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1600",
                        "name": "Cover #1600",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1601",
                        "name": "Interior #1601",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/148/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 377,
                  "digitalId": 6311,
                  "title": "1602 (2003) #3",
                  "issueNumber": 3,
                  "variantDescription": "",
                  "description": "Matthew Murdoch continues to make his way across Europe to get the mysterious Templar treasure that Dr. Strange thinks will give him the key to the mysterious weather changes. But can he get to it before Otto Von Doom?  And what does the first American-born child, Virginia Dare, have to do with it all? 32 PGS./MARVEL PSR...$3.50",
                  "modified": "2018-03-07T15:53:35-0500",
                  "isbn": "",
                  "upc": "5960605109-04311",
                  "diamondCode": "",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 0,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "Matthew Murdoch continues to make his way across Europe to get the mysterious Templar treasure that Dr. Strange thinks will give him the key to the mysterious weather changes. But can he get to it before Otto Von Doom?  And what does the first American-born child, Virginia Dare, have to do with it all? 32 PGS./MARVEL PSR...$3.50"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/377",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/377/1602_2003_3?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/1602-3/digital-comic/6311?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=6311&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/6311?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
                    "name": "1602 (2003 - 2004)"
                  },
                  "variants": [],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2003-10-08T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "-0001-11-30T00:00:00-0500"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2009-11-17T00:00:00-0500"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2010-11-02T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.5
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 1.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/5aa0512899ebe",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/5aa0512899ebe",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/a0/4bc69c799f6e4",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 3,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/377/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/567",
                        "name": "Neil Gaiman",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/175",
                        "name": "Andy Kubert",
                        "role": "penciller"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/566",
                        "name": "Scott McKowen",
                        "role": "penciller (cover)"
                      }
                    ],
                    "returned": 3
                  },
                  "characters": {
                    "available": 6,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/377/characters",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009463",
                        "name": "Matthew Murdock"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009547",
                        "name": "Natasha Romanoff"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009471",
                        "name": "Nick Fury"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011054",
                        "name": "Spider-Man (1602)"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010697",
                        "name": "Virginia Dare"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
                        "name": "X-Men"
                      }
                    ],
                    "returned": 6
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/377/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1616",
                        "name": "Cover #1616",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1617",
                        "name": "Interior #1617",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/377/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 145,
                  "digitalId": 6315,
                  "title": "1602 (2003) #7",
                  "issueNumber": 7,
                  "variantDescription": "",
                  "description": "Secrets are revealed and coffins are closed as two of our 17th-century Marvel heroes lose their lives in the penultimate chapter to this major, best-selling limited series event!\r\n32 PGS./MARVEL PSR...$3.50",
                  "modified": "2013-07-30T10:52:58-0400",
                  "isbn": "",
                  "upc": "5960605499-00111",
                  "diamondCode": "",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 0,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "Secrets are revealed and coffins are closed as two of our 17th-century Marvel heroes lose their lives in the penultimate chapter to this major, best-selling limited series event!\r\n32 PGS./MARVEL PSR...$3.50"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/145",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/145/1602_2003_7?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/1602-7/digital-comic/6315?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=6315&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/6315?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
                    "name": "1602 (2003 - 2004)"
                  },
                  "variants": [],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2004-02-11T00:00:00-0500"
                    },
                    {
                      "type": "focDate",
                      "date": "-0001-11-30T00:00:00-0500"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2010-01-21T00:00:00-0500"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2010-11-02T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.5
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 1.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/90/568e6b71aabd8",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/90/568e6b71aabd8",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/51db2241995f7",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/d0/4bc6ab93b679f",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 3,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/145/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/567",
                        "name": "Neil Gaiman",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/175",
                        "name": "Andy Kubert",
                        "role": "penciller"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/566",
                        "name": "Scott McKowen",
                        "role": "penciller (cover)"
                      }
                    ],
                    "returned": 3
                  },
                  "characters": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/145/characters",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009417",
                        "name": "Magneto"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010697",
                        "name": "Virginia Dare"
                      }
                    ],
                    "returned": 2
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/145/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2629",
                        "name": "1602 #7",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2630",
                        "name": "1602 #7",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/145/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 51201,
                  "digitalId": 40141,
                  "title": "1602 Witch Hunter Angela (2015) #4",
                  "issueNumber": 4,
                  "variantDescription": "",
                  "description": "• Spurred by revenge, Angela races to meet Enchantress's endgame as the gates of Faerie are wrenched open!\n• The dead walk and speak (and tell terrible jokes), and Kieron and Kody Chamberlain lead the revels, as Angela embarks on the Wild Hunt for Serah's soul!",
                  "modified": "2015-09-21T13:40:27-0400",
                  "isbn": "",
                  "upc": "75960608200100411",
                  "diamondCode": "AUG150681",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "• Spurred by revenge, Angela races to meet Enchantress's endgame as the gates of Faerie are wrenched open!\n• The dead walk and speak (and tell terrible jokes), and Kieron and Kody Chamberlain lead the revels, as Angela embarks on the Wild Hunt for Serah's soul!"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/51201",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/51201/1602_witch_hunter_angela_2015_4?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/1602-Witch-Hunter-Angela-4/digital-comic/40141?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=40141&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/40141?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                    "name": "1602 Witch Hunter Angela (2015)"
                  },
                  "variants": [],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2015-10-07T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2015-09-23T00:00:00-0400"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2016-04-04T00:00:00-0400"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2015-10-07T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/03/5601855c253f1",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/03/5601855c253f1",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 3,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/51201/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12441",
                        "name": "Marguerite Bennett",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8901",
                        "name": "Kieron Gillen",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "penciller (cover)"
                      }
                    ],
                    "returned": 3
                  },
                  "characters": {
                    "available": 1,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/51201/characters",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017574",
                        "name": "Angela (Aldrif Odinsdottir)"
                      }
                    ],
                    "returned": 1
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/51201/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113979",
                        "name": "cover from 1602 Witch Hunter Angela (2015) #4",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113980",
                        "name": "story from 1602 Witch Hunter Angela (2015) #4",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/51201/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 55028,
                  "digitalId": 0,
                  "title": "1602 Witch Hunter Angela (2015) #1 (Christopher Gwengela Variant)",
                  "issueNumber": 1,
                  "variantDescription": "Christopher Gwengela Variant",
                  "description": "- In the altered realms of BATTLEWORLD, Angela and Sera are WITCH HUNTERS, the scourges of King James' England, 1602. - In a land beset by magic and monstrosity, they seek a new and seductive evil-not witchbreed, but deal-making FAUSTIANS, who bargain with ancient creatures for unnatural power! - Moral ambiguity? Fancy allusions? Marguerite making the most of that English degree? - tl;dr - try 1602 WITCH HUNTER ANGELA #1",
                  "modified": "2015-06-02T11:16:47-0400",
                  "isbn": "",
                  "upc": "75960608200100131",
                  "diamondCode": "APR150749",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "- In the altered realms of BATTLEWORLD, Angela and Sera are WITCH HUNTERS, the scourges of King James' England, 1602. - In a land beset by magic and monstrosity, they seek a new and seductive evil-not witchbreed, but deal-making FAUSTIANS, who bargain with ancient creatures for unnatural power! - Moral ambiguity? Fancy allusions? Marguerite making the most of that English degree? - tl;dr - try 1602 WITCH HUNTER ANGELA #1"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/55028",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/55028/1602_witch_hunter_angela_2015_1_christopher_gwengela_variant/christopher_gwengela_variant?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                    "name": "1602 Witch Hunter Angela (2015)"
                  },
                  "variants": [
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/54728",
                      "name": "1602 Witch Hunter Angela (2015) #1 (Isanove Variant)"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/51198",
                      "name": "1602 Witch Hunter Angela (2015) #1"
                    }
                  ],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2015-06-10T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2015-05-27T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/556dc73e378a0",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/556dc73e378a0",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/10/555f38fd062f8",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 3,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/55028/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12441",
                        "name": "Marguerite Bennett",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10405",
                        "name": "John Tyler Christopher",
                        "role": "penciller (cover)"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "artist"
                      }
                    ],
                    "returned": 3
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/55028/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/55028/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/121219",
                        "name": "cover from 1602 Witch Hunter Angela (2015) #1 (TBD ARTIST MISTRESS OF GWENG FU VARIANT)",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/121220",
                        "name": "story from 1602 Witch Hunter Angela (2015) #1 (TBD ARTIST MISTRESS OF GWENG FU VARIANT)",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/55028/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 51199,
                  "digitalId": 39450,
                  "title": "1602 Witch Hunter Angela (2015) #2",
                  "issueNumber": 2,
                  "variantDescription": "",
                  "description": "\"IN WHICH WICKED SOMETHINGS THIS WAY COME\"\nThe hunt is on! The Faustians have made their deal with the Devil -- er, Enchantress -- but Angela isn't going to take that lying down, is she? No, not by her psychic ribbons and very, very pointy weapons, no, she is not. Out into the wilds of the countryside, Angela and Sera collide with a wandering caravan of ne'er-do-well performers. (Hint: their name starts with a \"G\" and ends with an \"Y\" and has an \"Uardians of the Galax\" in the middle.) Pagan rites, dubious ethics, a deadly curse, and Kieron and Irene Koh being up to no good - who can resist the lure of the Faustians?",
                  "modified": "2015-07-21T12:43:37-0400",
                  "isbn": "",
                  "upc": "75960608200100211",
                  "diamondCode": "MAY150712",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "\"IN WHICH WICKED SOMETHINGS THIS WAY COME\"\nThe hunt is on! The Faustians have made their deal with the Devil -- er, Enchantress -- but Angela isn't going to take that lying down, is she? No, not by her psychic ribbons and very, very pointy weapons, no, she is not. Out into the wilds of the countryside, Angela and Sera collide with a wandering caravan of ne'er-do-well performers. (Hint: their name starts with a \"G\" and ends with an \"Y\" and has an \"Uardians of the Galax\" in the middle.) Pagan rites, dubious ethics, a deadly curse, and Kieron and Irene Koh being up to no good - who can resist the lure of the Faustians?"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/51199",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/51199/1602_witch_hunter_angela_2015_2?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/1602-Witch-Hunter-Angela-2/digital-comic/39450?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=39450&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/39450?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                    "name": "1602 Witch Hunter Angela (2015)"
                  },
                  "variants": [
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/55191",
                      "name": "1602 Witch Hunter Angela (2015) #2 (Koh Variant)"
                    }
                  ],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2015-07-29T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2015-07-15T00:00:00-0400"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2016-01-25T00:00:00-0500"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2015-07-29T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/d0/55ae75b04c51a",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/d0/55ae75b04c51a",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/03/5575bc9103627",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/51199/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12441",
                        "name": "Marguerite Bennett",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "penciller (cover)"
                      }
                    ],
                    "returned": 2
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/51199/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/51199/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113975",
                        "name": "cover from 1602 Witch Hunter Angela (2015) #2",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113976",
                        "name": "story from 1602 Witch Hunter Angela (2015) #2",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/51199/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 54728,
                  "digitalId": 0,
                  "title": "1602 Witch Hunter Angela (2015) #1 (Isanove Variant)",
                  "issueNumber": 1,
                  "variantDescription": "Isanove Variant",
                  "description": "- In the altered realms of BATTLEWORLD, Angela and Sera are WITCH HUNTERS, the scourges of King James' England, 1602. - In a land beset by magic and monstrosity, they seek a new and seductive evil-not witchbreed, but deal-making FAUSTIANS, who bargain with ancient creatures for unnatural power! - Moral ambiguity? Fancy allusions? Marguerite making the most of that English degree? - tl;dr - try 1602 WITCH HUNTER ANGELA #1!",
                  "modified": "2015-06-02T11:07:41-0400",
                  "isbn": "",
                  "upc": "75960608200100121",
                  "diamondCode": "APR150748",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "- In the altered realms of BATTLEWORLD, Angela and Sera are WITCH HUNTERS, the scourges of King James' England, 1602. - In a land beset by magic and monstrosity, they seek a new and seductive evil-not witchbreed, but deal-making FAUSTIANS, who bargain with ancient creatures for unnatural power! - Moral ambiguity? Fancy allusions? Marguerite making the most of that English degree? - tl;dr - try 1602 WITCH HUNTER ANGELA #1!"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/54728",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/54728/1602_witch_hunter_angela_2015_1_isanove_variant/isanove_variant?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                    "name": "1602 Witch Hunter Angela (2015)"
                  },
                  "variants": [
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/55028",
                      "name": "1602 Witch Hunter Angela (2015) #1 (Christopher Gwengela Variant)"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/51198",
                      "name": "1602 Witch Hunter Angela (2015) #1"
                    }
                  ],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2015-06-10T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2015-05-27T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/60/55099cf7b4111",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/60/55099cf7b4111",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 3,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/54728/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12441",
                        "name": "Marguerite Bennett",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "artist"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13055",
                        "name": "Richard Isanove",
                        "role": "penciller (cover)"
                      }
                    ],
                    "returned": 3
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/54728/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/54728/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/120677",
                        "name": "cover from 1602 Witch Hunter Angela (2015) #1 (TBD ARTIST VARIANT)",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/120678",
                        "name": "story from 1602 Witch Hunter Angela (2015) #1 (TBD ARTIST VARIANT)",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/54728/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 51200,
                  "digitalId": 39890,
                  "title": "1602 Witch Hunter Angela (2015) #3",
                  "issueNumber": 3,
                  "variantDescription": "",
                  "description": "\"IN WHICH HEARTS REND AND HEADS ROLL\" Enchantress's prophecy strangles Angela and Sera from all sides when they are forced to ride hell (and a few other realms, too) for leather to the distant coast. In a haunted castle, a tormented witchbreed girl named Anna Maria - a.k.a. the 1602 Rogue - makes a deadly deal - with a shocking price! Kieron and Frazer Irving bring to life the first tale Angela tells that is her very own - as the forces of Faerie close in!",
                  "modified": "2015-09-01T12:07:56-0400",
                  "isbn": "",
                  "upc": "75960608200100311",
                  "diamondCode": "JUN150754",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "\"IN WHICH HEARTS REND AND HEADS ROLL\" Enchantress's prophecy strangles Angela and Sera from all sides when they are forced to ride hell (and a few other realms, too) for leather to the distant coast. In a haunted castle, a tormented witchbreed girl named Anna Maria - a.k.a. the 1602 Rogue - makes a deadly deal - with a shocking price! Kieron and Frazer Irving bring to life the first tale Angela tells that is her very own - as the forces of Faerie close in!"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/51200",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/51200/1602_witch_hunter_angela_2015_3?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/1602-Witch-Hunter-Angela-3/digital-comic/39890?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=39890&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/39890?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                    "name": "1602 Witch Hunter Angela (2015)"
                  },
                  "variants": [
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/56248",
                      "name": "1602 Witch Hunter Angela (2015) #3 (Irving Variant)"
                    }
                  ],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2015-09-09T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2015-08-26T00:00:00-0400"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2016-03-07T00:00:00-0500"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2015-09-02T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/40/55e4919600061",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/40/55e4919600061",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/0/03/5581ba4431724",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 4,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/51200/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12441",
                        "name": "Marguerite Bennett",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8901",
                        "name": "Kieron Gillen",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "penciller (cover)"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1063",
                        "name": "Frazer Irving",
                        "role": "artist"
                      }
                    ],
                    "returned": 4
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/51200/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/51200/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113977",
                        "name": "cover from 1602 Witch Hunter Angela (2015) #3",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113978",
                        "name": "story from 1602 Witch Hunter Angela (2015) #3",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/51200/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 51198,
                  "digitalId": 38881,
                  "title": "1602 Witch Hunter Angela (2015) #1",
                  "issueNumber": 1,
                  "variantDescription": "",
                  "description": "In the altered realms of BATTLEWORLD, Angela and Sera are WITCH HUNTERS, the scourges of King James' England, 1602. In a land beset by magic and monstrosity, they seek a new and seductive evil-not witchbreed, but deal-making FAUSTIANS, who bargain with ancient creatures for unnatural power! Moral ambiguity? Fancy allusions? Marguerite making the most of that English degree? tl;dr - try 1602 WITCH HUNTER ANGELA #1!",
                  "modified": "2015-06-02T10:57:14-0400",
                  "isbn": "",
                  "upc": "75960608200100111",
                  "diamondCode": "APR150747",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "In the altered realms of BATTLEWORLD, Angela and Sera are WITCH HUNTERS, the scourges of King James' England, 1602. In a land beset by magic and monstrosity, they seek a new and seductive evil-not witchbreed, but deal-making FAUSTIANS, who bargain with ancient creatures for unnatural power! Moral ambiguity? Fancy allusions? Marguerite making the most of that English degree? tl;dr - try 1602 WITCH HUNTER ANGELA #1!"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/51198",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/51198/1602_witch_hunter_angela_2015_1?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/1602-Witch-Hunter-Angela-1/digital-comic/38881?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=38881&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/38881?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                    "name": "1602 Witch Hunter Angela (2015)"
                  },
                  "variants": [
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/55028",
                      "name": "1602 Witch Hunter Angela (2015) #1 (Christopher Gwengela Variant)"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/54728",
                      "name": "1602 Witch Hunter Angela (2015) #1 (Isanove Variant)"
                    }
                  ],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2015-06-10T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2015-05-27T00:00:00-0400"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2015-12-14T00:00:00-0500"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2015-06-10T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/03/55099c53608a6",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/50/555f3a9853594",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/555f3a6cab779",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/555f3a13f358e",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/10/555f39e53a5f6",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/60/555f39916d178",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/03/55099c53608a6",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/51198/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12441",
                        "name": "Marguerite Bennett",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "penciller (cover)"
                      }
                    ],
                    "returned": 2
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/51198/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/51198/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113973",
                        "name": "cover from 1602 Witch Hunter Angela (2015) #1",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113974",
                        "name": "story from 1602 Witch Hunter Angela (2015) #1",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/51198/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 56248,
                  "digitalId": 0,
                  "title": "1602 Witch Hunter Angela (2015) #3 (Irving Variant)",
                  "issueNumber": 3,
                  "variantDescription": "Irving Variant",
                  "description": "\"IN WHICH HEARTS REND AND HEADS ROLL\"\n- Enchantress's prophecy strangles Angela and Sera from all sides when\nthey are forced to ride hell (and a few other realms, too) for leather to\nthe distant coast.\n- In a haunted castle, a tormented witchbreed girl named Anna Maria -\na.k.a. the 1602 Rogue - makes a deadly deal - with a shocking price!\n- Kieron and Frazer Irving bring to life the first tale Angela tells that\nis her very own - as the forces of Faerie close in!",
                  "modified": "2015-09-01T12:13:26-0400",
                  "isbn": "",
                  "upc": "75960608200100321",
                  "diamondCode": "JUN150755",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "\"IN WHICH HEARTS REND AND HEADS ROLL\"\n- Enchantress's prophecy strangles Angela and Sera from all sides when\nthey are forced to ride hell (and a few other realms, too) for leather to\nthe distant coast.\n- In a haunted castle, a tormented witchbreed girl named Anna Maria -\na.k.a. the 1602 Rogue - makes a deadly deal - with a shocking price!\n- Kieron and Frazer Irving bring to life the first tale Angela tells that\nis her very own - as the forces of Faerie close in!"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/56248",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/56248/1602_witch_hunter_angela_2015_3_irving_variant/irving_variant?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                    "name": "1602 Witch Hunter Angela (2015)"
                  },
                  "variants": [
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/51200",
                      "name": "1602 Witch Hunter Angela (2015) #3"
                    }
                  ],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2015-09-09T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2015-08-26T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/20/55e492ddefd84",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/20/55e492ddefd84",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 4,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/56248/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12441",
                        "name": "Marguerite Bennett",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8901",
                        "name": "Kieron Gillen",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "artist"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1063",
                        "name": "Frazer Irving",
                        "role": "penciller (cover)"
                      }
                    ],
                    "returned": 4
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/56248/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/56248/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/123459",
                        "name": "cover from 1602 Witch Hunter Angela (2015) #3 (IRVING VARIANT)",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/123460",
                        "name": "story from 1602 Witch Hunter Angela (2015) #3 (IRVING VARIANT)",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/56248/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 55191,
                  "digitalId": 0,
                  "title": "1602 Witch Hunter Angela (2015) #2 (Koh Variant)",
                  "issueNumber": 2,
                  "variantDescription": "Koh Variant",
                  "description": "\"IN WHICH WICKED SOMETHINGS THIS WAY COME\"\n- The hunt is on! The Faustians have made their deal with the Devil -- er, Enchantress -- but Angela isn't going to take that lying down, is she? No, not by her psychic ribbons and very, very pointy weapons, no, she is not.\n- Out into the wilds of the countryside, Angela and Sera collide with a wandering caravan of ne'er-do-well performers. (Hint: their name starts with a \"G\" and ends with an \"Y\" and has an \"Uardians of the Galax\" in the middle.)\n- Pagan rites, dubious ethics, a deadly curse, and Kieron and Irene Koh being up to no good - who can resist the lure of the Faustians?",
                  "modified": "2015-07-21T12:50:57-0400",
                  "isbn": "",
                  "upc": "75960608200100221",
                  "diamondCode": "MAY150713",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "\"IN WHICH WICKED SOMETHINGS THIS WAY COME\"\n- The hunt is on! The Faustians have made their deal with the Devil -- er, Enchantress -- but Angela isn't going to take that lying down, is she? No, not by her psychic ribbons and very, very pointy weapons, no, she is not.\n- Out into the wilds of the countryside, Angela and Sera collide with a wandering caravan of ne'er-do-well performers. (Hint: their name starts with a \"G\" and ends with an \"Y\" and has an \"Uardians of the Galax\" in the middle.)\n- Pagan rites, dubious ethics, a deadly curse, and Kieron and Irene Koh being up to no good - who can resist the lure of the Faustians?"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/55191",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/55191/1602_witch_hunter_angela_2015_2_koh_variant/koh_variant?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                    "name": "1602 Witch Hunter Angela (2015)"
                  },
                  "variants": [
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/51199",
                      "name": "1602 Witch Hunter Angela (2015) #2"
                    }
                  ],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2015-07-29T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2015-07-15T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/70/55ae776a0cb39",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/70/55ae776a0cb39",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 3,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/55191/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12441",
                        "name": "Marguerite Bennett",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10785",
                        "name": "Stephanie Hans",
                        "role": "artist"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12756",
                        "name": "Irene Koh",
                        "role": "penciller (cover)"
                      }
                    ],
                    "returned": 3
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/55191/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/55191/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/121474",
                        "name": "cover from 1602 Witch Hunter Angela (2015) #2 (TBD ARTIST VARIANT)",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/121475",
                        "name": "story from 1602 Witch Hunter Angela (2015) #2 (TBD ARTIST VARIANT)",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/55191/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 52076,
                  "digitalId": 40267,
                  "title": "1872 (2015) #4",
                  "issueNumber": 4,
                  "variantDescription": "",
                  "description": "IT'S HIGH NOON IN TIMELY! Will justice stand tall, or die in the street? Timid Dr. Banner comes out of his shell. Red Wolf's fate is finally revealed...",
                  "modified": "2015-10-13T14:30:42-0400",
                  "isbn": "",
                  "upc": "75960608222300411",
                  "diamondCode": "AUG150669",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "IT'S HIGH NOON IN TIMELY! Will justice stand tall, or die in the street? Timid Dr. Banner comes out of his shell. Red Wolf's fate is finally revealed..."
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/52076",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/52076/1872_2015_4?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/1872-4/digital-comic/40267?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=40267&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/40267?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/19501",
                    "name": "1872 (2015)"
                  },
                  "variants": [],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2015-10-21T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2015-10-07T00:00:00-0400"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2016-04-18T00:00:00-0400"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2015-10-21T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/04/561d4c9f8edfd",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/04/561d4c9f8edfd",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/04/55f6fbeeec959",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 3,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/52076/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                        "name": "Gerry Duggan",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/820",
                        "name": "Leonard Kirk",
                        "role": "penciller (cover)"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12483",
                        "name": "Nik Virella",
                        "role": "artist"
                      }
                    ],
                    "returned": 3
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/52076/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/52076/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115729",
                        "name": "cover from Marvel 1862 (2015) #4",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115730",
                        "name": "story from Marvel 1862 (2015) #4",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/52076/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 52075,
                  "digitalId": 39924,
                  "title": "1872 (2015) #3",
                  "issueNumber": 3,
                  "variantDescription": "",
                  "description": "Fisk and his men are triumphant-but have they let their guard down? Just what concoction is timid Dr. Banner cooking up in his apothecary? You cannot miss the shocking last page as a hero is reborn.",
                  "modified": "2015-09-14T15:19:54-0400",
                  "isbn": "",
                  "upc": "75960608222300311",
                  "diamondCode": "JUN150785",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "Fisk and his men are triumphant-but have they let their guard down? Just what concoction is timid Dr. Banner cooking up in his apothecary? You cannot miss the shocking last page as a hero is reborn."
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/52075",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/52075/1872_2015_3?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/1872-3/digital-comic/39924?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=39924&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/19501",
                    "name": "1872 (2015)"
                  },
                  "variants": [
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/56249",
                      "name": "1872 (2015) #3 (Francavilla Variant)"
                    }
                  ],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2015-09-23T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2015-09-09T00:00:00-0400"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2016-03-21T00:00:00-0400"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2015-09-23T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/d0/55f6e3aa15402",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/d0/55f6e3aa15402",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/557b260312ac4",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 3,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/52075/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                        "name": "Gerry Duggan",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/820",
                        "name": "Leonard Kirk",
                        "role": "penciller (cover)"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12483",
                        "name": "Nik Virella",
                        "role": "artist"
                      }
                    ],
                    "returned": 3
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/52075/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/52075/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115727",
                        "name": "cover from Marvel 1862 (2015) #3",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115728",
                        "name": "story from Marvel 1862 (2015) #3",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/52075/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 52073,
                  "digitalId": 0,
                  "title": "1872 (2015) #1 (Young Variant)",
                  "issueNumber": 1,
                  "variantDescription": "Young Variant",
                  "description": "REAL HEROES DIE WITH THEIR BOOTS ON - SHERIFF STEVE ROGERS faces corruption and fear in the boom town of TIMELY. - The only thing ANTHONY STARK seems capable of is pulling a cork, so can he pull Rogers' fat from the fire? - But...a stranger comes to town that will change Timely forever...for anyone left standing, that is.",
                  "modified": "2015-07-01T13:57:06-0400",
                  "isbn": "",
                  "upc": "75960608222300121",
                  "diamondCode": "APR150786",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "REAL HEROES DIE WITH THEIR BOOTS ON - SHERIFF STEVE ROGERS faces corruption and fear in the boom town of TIMELY. - The only thing ANTHONY STARK seems capable of is pulling a cork, so can he pull Rogers' fat from the fire? - But...a stranger comes to town that will change Timely forever...for anyone left standing, that is."
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/52073",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/52073/1872_2015_1_young_variant/young_variant?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/19501",
                    "name": "1872 (2015)"
                  },
                  "variants": [
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/52072",
                      "name": "1872 (2015) #1"
                    },
                    {
                      "resourceURI": "http://gateway.marvel.com/v1/public/comics/55058",
                      "name": "1872 (2015) #1 (Shaner Variant)"
                    }
                  ],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2015-07-08T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2015-06-24T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/03/559429613db46",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/03/559429613db46",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 3,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/52073/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                        "name": "Gerry Duggan",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12708",
                        "name": "Evan Doc Shaner",
                        "role": "artist"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/7190",
                        "name": "Skottie Young",
                        "role": "penciller (cover)"
                      }
                    ],
                    "returned": 3
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/52073/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/52073/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115723",
                        "name": "cover from Marvel 1862 (2015) #1 (YOUNG VARIANT)",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115724",
                        "name": "story from Marvel 1862 (2015) #1 (YOUNG VARIANT)",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/52073/events",
                    "items": [],
                    "returned": 0
                  }
                },
                {
                  "id": 52074,
                  "digitalId": 39724,
                  "title": "1872 (2015) #2",
                  "issueNumber": 2,
                  "variantDescription": "",
                  "description": "DEAD MAN'S HAND! BULLSEYE! ELEKTRA! GRIZZLY! DOC OCK! 'NUFF SAID, PARTNER!",
                  "modified": "2015-08-19T08:41:13-0400",
                  "isbn": "",
                  "upc": "75960608222300211",
                  "diamondCode": "MAY150726",
                  "ean": "",
                  "issn": "",
                  "format": "Comic",
                  "pageCount": 32,
                  "textObjects": [
                    {
                      "type": "issue_solicit_text",
                      "language": "en-us",
                      "text": "DEAD MAN'S HAND! BULLSEYE! ELEKTRA! GRIZZLY! DOC OCK! 'NUFF SAID, PARTNER!"
                    }
                  ],
                  "resourceURI": "http://gateway.marvel.com/v1/public/comics/52074",
                  "urls": [
                    {
                      "type": "detail",
                      "url": "http://marvel.com/comics/issue/52074/1872_2015_2?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "purchase",
                      "url": "http://comicstore.marvel.com/1872-2/digital-comic/39724?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "reader",
                      "url": "http://marvel.com/digitalcomics/view.htm?iid=39724&utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    },
                    {
                      "type": "inAppLink",
                      "url": "https://applink.marvel.com/issue/39724?utm_campaign=apiRef&utm_source=06de8076edb29bfb7c0352ef71eec981"
                    }
                  ],
                  "series": {
                    "resourceURI": "http://gateway.marvel.com/v1/public/series/19501",
                    "name": "1872 (2015)"
                  },
                  "variants": [],
                  "collections": [],
                  "collectedIssues": [],
                  "dates": [
                    {
                      "type": "onsaleDate",
                      "date": "2015-08-19T00:00:00-0400"
                    },
                    {
                      "type": "focDate",
                      "date": "2015-07-27T00:00:00-0400"
                    },
                    {
                      "type": "unlimitedDate",
                      "date": "2016-02-15T00:00:00-0500"
                    },
                    {
                      "type": "digitalPurchaseDate",
                      "date": "2015-08-19T00:00:00-0400"
                    }
                  ],
                  "prices": [
                    {
                      "type": "printPrice",
                      "price": 3.99
                    },
                    {
                      "type": "digitalPurchasePrice",
                      "price": 3.99
                    }
                  ],
                  "thumbnail": {
                    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/55ce513920dc1",
                    "extension": "jpg"
                  },
                  "images": [
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/55ce513920dc1",
                      "extension": "jpg"
                    },
                    {
                      "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/55b7a04d2641e",
                      "extension": "jpg"
                    }
                  ],
                  "creators": {
                    "available": 7,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/52074/creators",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11482",
                        "name": "Jesus Aburtov",
                        "role": "colorist (cover)"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
                        "name": "Vc Clayton Cowles",
                        "role": "letterer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
                        "name": "Gerry Duggan",
                        "role": "writer"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/820",
                        "name": "Leonard Kirk",
                        "role": "inker (cover)"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/593",
                        "name": "Lee Loughridge",
                        "role": "colorist"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/11921",
                        "name": "Jacob Thomas",
                        "role": "editor"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12483",
                        "name": "Nik Virella",
                        "role": "inker"
                      }
                    ],
                    "returned": 7
                  },
                  "characters": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/52074/characters",
                    "items": [],
                    "returned": 0
                  },
                  "stories": {
                    "available": 2,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/52074/stories",
                    "items": [
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115725",
                        "name": "cover from Marvel 1862 (2015) #2",
                        "type": "cover"
                      },
                      {
                        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115726",
                        "name": "story from Marvel 1862 (2015) #2",
                        "type": "interiorStory"
                      }
                    ],
                    "returned": 2
                  },
                  "events": {
                    "available": 0,
                    "collectionURI": "http://gateway.marvel.com/v1/public/comics/52074/events",
                    "items": [],
                    "returned": 0
                  }
                }
              ],
            isLoading: false,
        };
    }

    componentDidMount() {
    }

    openDetailsItem = (data) => {
       this.props.navigation.push('DetailsComicMarvel', {...data});
    }

    render(){
        return(
            <>
           
            <HeaderMarvel onClick={() => this.props.navigation.goBack()} />

            <SafeAreaView style={[styles.safContainer, { backgroundColor: 'white' }]}>

            {(this.state.isLoading) ? 
            (
                <SkeletonPlaceholder>
                    <SkeletonPlaceholder.Item flexDirection="column" margin={25}>

                        <SkeletonPlaceholder.Item flexDirection="row"  marginBottom={16} >
                            <SkeletonPlaceholder.Item marginRight={16} width={80} height={80} />
                            <SkeletonPlaceholder.Item>
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item flexDirection="row"  marginBottom={16} >
                            <SkeletonPlaceholder.Item marginRight={16} width={80} height={80} />
                            <SkeletonPlaceholder.Item>
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item flexDirection="row"  marginBottom={16} >
                            <SkeletonPlaceholder.Item marginRight={16} width={80} height={80} />
                            <SkeletonPlaceholder.Item>
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item flexDirection="row"  marginBottom={16} >
                            <SkeletonPlaceholder.Item marginRight={16} width={80} height={80} />
                            <SkeletonPlaceholder.Item>
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item flexDirection="row"  marginBottom={16} >
                            <SkeletonPlaceholder.Item marginRight={16} width={80} height={80} />
                            <SkeletonPlaceholder.Item>
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item flexDirection="row"  marginBottom={16} >
                            <SkeletonPlaceholder.Item marginRight={16} width={80} height={80} />
                            <SkeletonPlaceholder.Item>
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item flexDirection="row"  marginBottom={16} >
                            <SkeletonPlaceholder.Item marginRight={16} width={80} height={80} />
                            <SkeletonPlaceholder.Item>
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item flexDirection="row"  marginBottom={16} >
                            <SkeletonPlaceholder.Item marginRight={16} width={80} height={80} />
                            <SkeletonPlaceholder.Item>
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} marginBottom={6} />
                                <SkeletonPlaceholder.Item width={Metrics.screenWidth - 130} height={18} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                        
                        
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
            )
            :
            (
                <FlatList
                    contentContainerStyle={{
                        margin: 8,
                        justifyContent: 'space-between',
                        padding: 0,
                        marginBottom: 40
                    }}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    keyExtractor={item => item.id}
                    data={this.state.data}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <MarvelComicItem {...item} key={item.id} onClick={() => this.openDetailsItem(item) } />//onClick={() => this.actionSheetRef.current?.setModalVisible() }
                    )}
                    ListEmptyComponent={<View style={{alignItems: 'center', justifyContent: 'center', padding: 16}}><Text style={{...Fonts.fontSemiBold, fontSize: 18}}>No se encontraron registros</Text></View>}
                    />
            )}

                <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
            </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    safContainer: { flex: 1 },
});


function mapStateToProps(state) {
    return {
        userData: state.user.dataUser,
        tokenData: state.user.token,
        modules: state.user.modules,
    }
}



const mapDispatchToProps = dispatch => ({
    aDataComics: (limit, offest) => 
        dispatch(actions.marvelapi.aDataComics(limit, offest)),
    dispatch
});

  
export default connect(mapStateToProps, mapDispatchToProps)(MarvelScreen);