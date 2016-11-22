export default [
  {
    "Id": "5980857",
    "Title": "sed with special characters",
    "Solutions": [
      {
        "Body": [
          "sed 's/ASD = \\$start ( \\*\\.cpp )/ASD = $dsadad ( .cpp )/' somefile\n"
        ],
        "Score": 3
      },
      {
        "Body": [
          "sed 's/\\$start/\\$dsadad/g' your_file\n\u003e\u003e ASD = $dsadad ( *.cpp ) \n\nsed 's/\\*//g' your_file\n\u003e\u003e ASD = $start ( .cpp ) \n",
          "sed -i 's/ASD = \\$start ( \\*.cpp )/ASD = \\$dsadad ( .cpp )/' somefile\n\u003e\u003e ASD = $dsadad ( .cpp )\n"
        ],
        "Score": 2
      },
      {
        "Body": [
          "sed 's/ASD = \\$start ( \\*\\.cpp )/ASD = $dsadad ( .cpp )/' somefile\n"
        ]
      }
    ],
    "ImportMeta": {
      "Id": "5980857"
    },
    "Created": "0001-01-01T00:00:00Z",
    "Updated": "0001-01-01T00:00:00Z"
  },
  {
    "Id": "4747396",
    "Title": "Set environment variable from outside bash",
    "Solutions": [
      {
        "Body": [
          "\u003c?php\nputenv(\"ASD=LOL\");\nsystem(\"echo \\$ASD\");\n?\u003e\n",
          "\u003c?php \necho \"VARTESTKEY=VARTESTVALUE\";\n?\u003e\n",
          "$ eval `php script.php` \u0026\u0026 echo $VARTESTKEY\n"
        ],
        "Score": 4
      }
    ],
    "ImportMeta": {
      "Id": "4747396"
    },
    "Created": "0001-01-01T00:00:00Z",
    "Updated": "0001-01-01T00:00:00Z"
  },
  {
    "Id": "159367",
    "Title": "Using 'sed' to find and replace",
    "Solutions": [
      {
        "Body": [
          "sed -i -e 's/foo/bar/g' filename\n"
        ],
        "Score": 145
      },
      {
        "Body": [
          "sed -i 's/fea/asd/g'  hello.txt\n"
        ],
        "Score": 14
      }
    ],
    "ImportMeta": {
      "Id": "159367"
    },
    "Created": "0001-01-01T00:00:00Z",
    "Updated": "0001-01-01T00:00:00Z"
  },
  {
    "Id": "10984961",
    "Title": "add text in all of the rows",
    "Solutions": [
      {
        "Body": [
          "awk '{print \"foo\", $0, NR}' files.lst \n",
          "a.txt\nb.txt\nc.txt\n",
          "foo a.txt 1\nfoo b.txt 2\nfoo c.txt 3\n"
        ],
        "Score": 5
      },
      {
        "Body": [
          "while read -r line\ndo\n    echo \"asd $line $((++i))\"\ndone \u003c inputfile\n"
        ],
        "Score": 2
      },
      {
        "Body": [
          "#!/usr/bin/python\n\nadd_text = 'asd'  # the string to put in front\n\nfn  = open('filenames.txt')\noutf =  open('outdata.txt', 'w')\n\ni = 1\nfor filename in fn:\n    outf.write('%7s %10s %d\\n' % (add_text, filename.strip(), i))\n    i += 1\n\nfn.close()\noutf.close()\n",
          "asd    aa.exe    1\nasd    bb.exe    2\nasd    cc.exe    3\n",
          "chmod +x so.py    \u003c-- this is only needed once\n./so.py           \u003c-- to run the script\n"
        ],
        "Score": 1
      },
      {
        "Body": [
          ":%s/.\\+/\\=printf(\"%s %s %d\", \"asdf\", submatch(0), line(\".\"))/\n"
        ]
      }
    ],
    "ImportMeta": {
      "Id": "10984961"
    },
    "Created": "0001-01-01T00:00:00Z",
    "Updated": "0001-01-01T00:00:00Z"
  },
  {
    "Id": "13335837",
    "Title": "How to grep for a file extension",
    "Solutions": [
      {
        "Body": [
          "grep \".*\\.zip$\"\n"
        ],
        "Score": 18
      },
      {
        "Body": [
          "find . -name \\*.zip -print\n"
        ],
        "Score": 4
      },
      {
        "Body": [
          "grep '.*\\.zip$'\n"
        ],
        "Score": 4
      },
      {
        "Body": [
          "grep -o -E \"(\\\\.([A-z])+)+\"",
          "hello.tar.gz",
          ".tar.gz",
          "grep -o -E \"\\\\.([A-z])+$\""
        ],
        "Score": 1
      },
      {
        "Body": [
          "find . -type f | egrep -i -E -o \"\\.{1}\\w*$\" | sort -su\n",
          ".DS_Store\n.MP3\n.aif\n.aiff\n.asd\n.doc\n.flac\n.jpg\n.m4a\n.m4p\n.m4r\n.mp3\n.pdf\n.png\n.txt\n.wav\n.wma\n.zip\n",
          "find . -type f | egrep -i -E -o \"\\.{1}\\w*$\" | sort | uniq -c\n",
          "    106 .DS_Store\n     35 .MP3\n     89 .aif\n      5 .aiff\n    525 .asd\n      1 .doc\n     60 .flac\n     48 .jpg\n    149 .m4a\n     11 .m4p\n      1 .m4r\n  12844 .mp3\n      1 .pdf\n      5 .png\n      9 .txt\n    108 .wav\n     44 .wma\n      2 .zip\n"
        ],
        "Score": 1
      },
      {
        "Body": [
          "# multi-dotted/multiple extensions\ngrep -oEi \"(\\\\.([A-z0-9])+)+\" file.txt\n\n# single dotted\ngrep -oEi \"\\\\.([A-z0-9])+$\" file.txt\n"
        ]
      },
      {
        "Body": [
          "grep -i \\.zip$\n"
        ]
      },
      {
        "Body": [
          "grep \".*.zip$\"\n"
        ]
      }
    ],
    "ImportMeta": {
      "Id": "13335837"
    },
    "Created": "0001-01-01T00:00:00Z",
    "Updated": "0001-01-01T00:00:00Z"
  }
]