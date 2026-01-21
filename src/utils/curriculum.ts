export const subjects = [
  "Cellular Biology: Introduction to cell structure and functions.",
  "Molecular Biology: Gene expression and molecular genetics.",
  "Genetics: Study of inheritance and DNA replication.",
  "Ecology: Principles of ecosystems and conservation.",
  "Physiology: Study of organ systems and homeostasis.",
  "Biochemistry: Enzymes and metabolism in living organisms.",
  "Evolutionary Biology: Evolutionary theory, natural selection, and speciation.",
  "Microbiology: Study of microorganisms and their ecological and medical significance.",
  "Immunology: Study of the immune system and its role in protecting against diseases.",
  "Biostatistics: Statistical analysis in biological research.",
  "Bioinformatics: Computational methods to analyze biological data.",
  "Genomic Medicine: Application of genomics in personalized healthcare.",
  "Neurobiology: Study of the nervous system and brain function.",
  "Developmental Biology: Study of growth, development, and differentiation in organisms.",
  "Plant Biology: Study of plant structures, functions, and interactions with the environment.",
  "Animal Behavior: Study of the behavior of animals in different environments.",
  "Biophysics: Application of physical principles to biological systems.",
  "Environmental Biology: Study of the interactions between organisms and their environment.",
  "Marine Biology: Study of marine organisms and ecosystems.",
  "Virology: Study of viruses, their biology, and their impact on living organisms.",
];

export const semesters = [
  {
    title: "Semester 1",
    courses: [
      {
        code: "UH 101",
        name: "Ways of Knowing",
        credits: "2:0",
        instructor: "Nithin Mayanath",
        isElective: false,
        instructorProfile: "http://math.iisc.ac.in/~bharali",
      },
      {
        code: "UMA 101",
        name: "Analysis and Linear Algebra I",
        credits: "4:0",
        instructor: "Gautam Bharali",
        isElective: false,
        instructorProfile: "https://drbjohnsoncu.wordpress.com/",
      },
      {
        code: "UBL 101",
        name: "Introductory Biology I",
        credits: "3:1",
        instructor: "Sumanta Bagchi",
        isElective: false,
        instructorProfile: "https://ces.iisc.ac.in/?q=user/85",
      },
      {
        code: "UCY 101",
        name: "Introductory Chemistry I",
        credits: "3:1",
        instructor: "Anshu Pandey",
        isElective: false,
        instructorProfile: "https://sscu.iisc.ac.in/pandey/",
      },
      {
        code: "UPH 101",
        name: "Introductory Physics I",
        credits: "3:1",
        instructor: "Banibrata Mukhopadhyay",
        isElective: false,
        instructorProfile: "http://www.physics.iisc.ernet.in/~bm/",
      },
    ],
    totalCredits: "18",
  },
  {
    title: "Semester 2",
    courses: [
      {
        code: "UH 102",
        name: "Ways of Seeing",
        credits: "2:0",
        instructor: "Nakula Somana",
        isElective: false,
        instructorProfile: "",
      },
      {
        code: "UENG 103",
        name: "Introduction to Earth and its Environment",
        credits: "3:0",
        instructor: "Ramananda Chakrabarti",
        isElective: false,
        instructorProfile:
          "https://ceas.iisc.ac.in/author/ramananda-chakrabarti/",
      },
      {
        code: "UBL 102",
        name: "Introductory Biology II",
        credits: "3:1",
        instructor: "Dipshikha Chakravortty",
        isElective: false,
        isStarred: true,
        instructorProfile: "https://mcbl.iisc.ac.in/dipshikhachakravortty/",
      },
      {
        code: "UCY 102",
        name: "Introductory Chemistry II",
        credits: "3:1",
        instructor: "Debasis Das",
        isElective: false,
        isStarred: true,
        instructorProfile: "https://ipc.iisc.ac.in/dd.php",
      },
      {
        code: "UPH 102",
        name: "Introductory Physics II",
        credits: "3:1",
        instructor: "Ranjan Laha",
        isElective: false,
        isStarred: true,
        instructorProfile: "https://chep.iisc.ac.in/#/ranjan",
      },
      {
        code: "UMA 102",
        name: "Analysis and Linear Algebra II",
        credits: "4:0",
        instructor: "Subhojoy Gupta",
        isElective: false,
        isStarred: true,
        instructorProfile: "https://sites.google.com/view/subhojoy/home",
      },
      {
        code: "UENG 102",
        name: "Electronics",
        credits: "3:1",
        instructor: "Kaushik Basu",
        isElective: true,
        instructorProfile: "https://ee.iisc.ac.in/~basu/",
      },
    ],
    totalCredits: "17-21",
  },
  {
    title: "Semester 3",
    courses: [
      {
        code: "UH 201",
        name: "Ways of Doing: Mapping Science-Society Relationship",
        credits: "2:0",
        instructor: "A Indira",
        isElective: false,
        instructorProfile: "",
      },
      {
        code: "UENG 201",
        name: "Introduction to Material Science",
        credits: "3:0",
        instructor: "Abhinandanan T A",
        isElective: false,
        instructorProfile: "https://materials.iisc.ac.in/~abinand/",
      },
      {
        code: "UBL 201",
        name: "Introductory Biology III",
        credits: "3:1",
        instructor: "Dipankar Nandi",
        isElective: false,
        isStarred: true,
        instructorProfile: "https://biochem.iisc.ac.in/dipankar-nandi.php",
      },
      {
        code: "UCY 201",
        name: "Introductory Chemistry III",
        credits: "3:1",
        instructor: "Akkattu T Biju",
        isElective: false,
        isStarred: true,
        instructorProfile: "https://orgchem.iisc.ac.in/atbiju/",
      },
      {
        code: "UPH 201",
        name: "Introductory Physics III",
        credits: "3:1",
        instructor: "Arindm Ghosh",
        isElective: false,
        isStarred: true,
        instructorProfile: "http://www.physics.iisc.ac.in/~arindam/",
      },
      {
        code: "UMA 201",
        name: "Probability and Statistics",
        credits: "4:0",
        instructor: "Manjunath Krishnapur",
        isElective: false,
        isStarred: true,
        instructorProfile: "http://math.iisc.ac.in/~manju/",
      },
      {
        code: "UENG 101",
        name: "Algorithms and Programming",
        credits: "3:1",
        instructor: "Viraj Kumar",
        isElective: true,
        instructorProfile: "http://dccc.iisc.ac.in/vk.html",
      },
    ],
    totalCredits: "17-21",
  },
];

export const coreSemesters = [
  {
    coreCourse: "Biology",
    coreSubjects: [
      {
        title: "Semester 4",
        courses: [
          {
            code: "UB 205",
            name: "Introductory Physiology",
            credits: "2:0",
            instructor: "Viraj Kumar",
            isElective: false,
            instructorProfile: "http://dccc.iisc.ac.in/vk.html",
          },
          {
            code: "UB 206",
            name: "Experiments in Biochemistry and Physiology",
            credits: "0:2",
            instructor: "Manjunath Krishnapur",
            isElective: false,
            instructorProfile: "http://math.iisc.ac.in/~manju/",
          },
          {
            code: "UB 207",
            name: "General Biochemistry",
            credits: "2:0",
            instructor: "Arindm Ghosh",
            isElective: false,
            instructorProfile: "http://www.physics.iisc.ac.in/~arindam/",
          },
          {
            code: "-",
            name: "Elective",
            credits: "11:15",
            instructor: "-",
            isElective: true,
            isStarred: true,
            instructorProfile: null,
          },
        ],
        totalCredits: "15-21",
        ReducedLoad: "15-17",
      },
      {
        title: "Semester 5",
        courses: [
          {
            code: "UB 301L",
            name: "Experiments in Microbiology",
            credits: "0:1",
            instructor: "Akkattu T Biju",
            isElective: false,
            instructorProfile: "https://orgchem.iisc.ac.in/atbiju/",
          },
          {
            code: "UB 307L",
            name: "Experiments in Ecology and Evolution",
            credits: "0:2",
            instructor: "Dipankar Nandi",
            isElective: false,
            instructorProfile: "https://biochem.iisc.ac.in/dipankar-nandi.php",
          },
          {
            code: "UB 309",
            name: "Genetics",
            credits: "2:0",
            instructor: "Abhinandanan T A",
            isElective: true,
            instructorProfile: "https://materials.iisc.ac.in/~abinand/",
          },
          {
            code: "-",
            name: "Elective",
            credits: "14:16",
            instructor: "-",
            isElective: true,
            isStarred: true,
            instructorProfile: null,
          },
        ],
        totalCredits: "16-21",
        ReducedLoad: "16-18",
      },
      {
        title: "Semester 6",
        courses: [
          {
            code: "UB 302",
            name: "Developmental Biology",
            credits: "2:0",
            instructor: "Kaushik Basu",
            isElective: false,
            instructorProfile: "https://ee.iisc.ac.in/~basu/",
          },
          {
            code: "UB 303",
            name: "Experiments in Molecular Biophysics",
            credits: "0:1",
            instructor: "Subhojoy Gupta",
            isElective: false,
            instructorProfile: "https://drbjohnsoncu.wordpress.com/",
          },
          {
            code: "UB 304",
            name: "Experiments in Neurobiology",
            credits: "0:1",
            instructor: "Ranjan Laha",
            isElective: true,
            instructorProfile: "https://chep.iisc.ac.in/#/ranjan",
          },
          {
            code: "-",
            name: "Elective",
            credits: "14:17",
            instructor: "-",
            isElective: true,
            isStarred: true,
            instructorProfile: null,
          },
        ],
        totalCredits: "16-21",
        ReducedLoad: "16-18",
      },
      {
        title: "Semester 7",
        courses: [
          {
            code: "CH 248",
            name: "Molecular Systems Biology",
            credits: "3:0",
            instructor: "Debasis Das",
            isElective: false,
            instructorProfile: "https://ipc.iisc.ac.in/dd.php",
          },
          {
            code: "CH 242",
            name: "Special Topics in Theoretical Biology",
            credits: "3:0",
            instructor: "Dipshikha Chakravortty",
            isElective: true,
            instructorProfile: "https://mcbl.iisc.ac.in/dipshikhachakravortty/",
          },
          {
            code: "DS 301",
            name: "Bioinformatics",
            credits: "2:0",
            instructor: "Ramananda Chakrabarti",
            isElective: false,
            instructorProfile:
              "https://ceas.iisc.ac.in/author/ramananda-chakrabarti/",
          },
          {
            code: "-",
            name: "Elective",
            credits: "08:13",
            instructor: "-",
            isElective: true,
            isStarred: true,
            instructorProfile: null,
          },
          {
            code: "-",
            name: "OR",
            credits: "-",
            instructor: "-",
            isElective: true,
            instructorProfile: null,
          },
          {
            code: "UB 490",
            name: "Research Project",
            credits: "0:16",
            instructor: "Sumanta Bagchi",
            isElective: true,
            instructorProfile: "https://ces.iisc.ac.in/?q=user/85",
          },
        ],
        totalCredits: "16-21",
        ReducedLoad: "16-18",
        projectOption: true,
      },
      {
        title: "Semester 8",
        courses: [
          {
            code: "UB 400",
            name: "Project: Biology",
            credits: "0:16",
            instructor: "Banibrata Mukhopadhyay",
            isElective: false,
            instructorProfile: "http://www.physics.iisc.ernet.in/~bm/",
          },
        ],
        totalCredits: "16",
      },
    ],
  },
  {
    coreCourse: "",
  },
];

export const electiveMonth = [
  {
    title: "January Courses",
  },
  {
    title: "August Courses",
  },
];

export const electiveData = [
  {
    title: "Biology",
    courses: [
      [
        {
          code: "EC 201",
          name: "Theoretical and Mathematical Ecology",
        },
        {
          code: "EC 204",
          name: "Evolutionary Biology",
        },
        {
          code: "EC 206",
          name: "Evolutionary Genetics",
          href: "https://www.venomicslab.com/eg",
        },
        {
          code: "EC 309A",
          name: "Ecosystems and Global Change",
          href: "https://sites.google.com/view/sbagchi-ec309a/",
        },
        {
          code: "EC 306",
          name: "Advanced Ecological Statistics",
        },
        {
          code: "NS 211",
          name: "Optical Spectroscopy and Microscopy",
        },
        {
          code: "NS 212",
          name: "Neural Signal Processing",
          href: "https://cns.iisc.ac.in/sray/NS212.html",
        },
        {
          code: "NS 303",
          name: "Topics in Systems and Cognitive Neuroscience",
        },
        {
          code: "NS 304",
          name: "Topics in Molecular and Cellular Neuroscience",
        },
        {
          code: "MB 208",
          name: "Theoretical and Computational Neuroscience",
          href: "http://mbu.iisc.ac.in/~mb208/index.htm",
        },
        {
          code: "MB 207",
          name: "DNA-Protein interaction, Regulation of gene expression, Nanobiology",
        },
        {
          code: "MB 211",
          name: "Advanced Methods in Molecular Simulations",
        },
        {
          code: "MB 215",
          name: "Neuronal Ion Transport in Health and Disease",
        },
        {
          code: "MB 216",
          name: "Relaxation Theory and Applications to Solution State Biomolecular NMR Spectroscopy",
        },
        {
          code: "MB 303",
          name: "Elements of Structural Biology",
          href: "https://bglabmbu.weebly.com/course-mb303.html",
        },
        {
          code: "MB 305",
          name: "Biomolecular NMR Spectroscopy",
        },
        {
          code: "MB 333",
          name: "Advanced course for Cryo-EM sample preparation and 3D image reconstruction",
        },
        {
          code: "BE 211",
          name: "Cell Mechanics",
        },
        {
          code: "BE 214",
          name: "Fundamentals of Bioengineering II",
        },
        {
          code: "BE 215",
          name: "Chemistry for Bioengineers",
        },
        {
          code: "BE 207",
          name: "Mathematical Methods for Bioengineers",
        },
        {
          code: "BE 216",
          name: "Dynamical Systems Biology",
        },
        {
          code: "BE 218",
          name: "Computational Epidemiology",
          href: "https://ece.iisc.ac.in/~rajeshs/BE218.htm",
        },
        {
          code: "BE 222",
          name: "Stem Cell Technology",
        },
        {
          code: "BE 223",
          name: "Space Biology and Engineering",
        },
        {
          code: "BE 224",
          name: "Diagnostics and Devices",
        },
        {
          code: "BE 227",
          name: "Synthetic Biology and Genetic Engineering",
        },
        {
          code: "BE 228",
          name: "Introduction to Mathematical Oncology",
        },
        {
          code: "BE 229",
          name: "Statistics for Bioengineers",
        },
        {
          code: "BE 230",
          name: "Data Science for Bioengineers",
        },
        {
          code: "BC 205 / RD 2",
          name: "Fundamentals of Physiology and Medicine",
          href: "https://morphogenesisiisc.wixsite.com/home/fpm",
        },
        {
          code: "BC 210 / MC 2",
          name: "Molecular Basis of Ageing and Regeneration",
        },
        {
          code: "BC 207",
          name: "Multi-omics Approaches in Biology",
        },
        {
          code: "BC 302",
          name: "Current Trends in Drug Discovery",
        },
        {
          code: "BC 303",
          name: "Single Molecule Approaches in Biology",
        },
        {
          code: "MC 202",
          name: "Developmental Genetics",
        },
        {
          code: "MC 210 / RD 2",
          name: "Molecular Oncology",
        },
        {
          code: "MC 214",
          name: "Basic and Applied Virology",
        },
        {
          code: "MC 215",
          name: "Lysosomes and Autophagy",
        },
        {
          code: "MC 216",
          name: "Biological Safety: Principles and practices",
        },
        {
          code: "MC 217",
          name: "Fundamentals of Immunotherapy",
        },
        {
          code: "RD 205",
          name: "Genetics and Genomic Medicine",
        },
        {
          code: "DB 250",
          name: "Research Applications of Flow Cytometry",
        },
        {
          code: "CH 248",
          name: "Molecular Systems Biology",
        },
        {
          code: "ME 251",
          name: "Biomechanics",
        },
        {
          code: "DS 202",
          name: "Algorithmic Foundations of Big Data Biology",
        },
        {
          code: "ME 264",
          name: "Mechanics in Biology",
        },
      ],
      [
        {
          code: "EC 101",
          name: "Process of Scientific Thinking",
        },
        {
          code: "EC 202",
          name: "Ecology: Pattern and Process",
        },
        {
          code: "EC 207",
          name: "Scientific Writing for Ecologists",
        },
        {
          code: "EC 301",
          name: "Animal Behaviour: Mechanisms and Evolution",
        },
        {
          code: "EC 302",
          name: "Plant-Animal Interactions (Ecology, Behaviour and Evolution)",
        },
        {
          code: "EC 303",
          name: "Stochastic and Spatial Dynamics in Biology",
        },
        {
          code: "EC 305",
          name: "Quantitative Ecology: Research Design and Inference",
        },
        {
          code: "DB 202",
          name: "General Biology",
        },
        {
          code: "NS 201",
          name: "Systems Neuroscience",
        },
        {
          code: "NS 202",
          name: "Molecular and Cellular Basis of Behaviour",
        },
        {
          code: "NS 203",
          name: "Cognitive Neuroscience",
        },
        {
          code: "NS 204",
          name: "Developmental Neuroscience",
        },
        {
          code: "MB 214",
          name: "Neuronal Physiology and Plasticity",
          href: "http://mbu.iisc.ac.in/~mb214/",
        },
        {
          code: "MB 201",
          name: "Introduction to Biophysical Chemistry",
        },
        {
          code: "MB 202",
          name: "Introduction to Macromolecular X-ray crystallography",
        },
        {
          code: "MB 204",
          name: "Molecular Spectroscopy and its Biological Applications",
        },
        {
          code: "MB 205",
          name: "Introduction to X-ray Crystallography",
        },
        {
          code: "MB 206",
          name: "Conformational and Structural aspects of biopolymers",
        },
        {
          code: "MB 222",
          name: "Electron microscopy and 3D image processing for Life sciences",
        },
        {
          code: "MB 305",
          name: "Biomolecular NMR Spectroscopy",
        },
        {
          code: "BE 206",
          name: "Biology for Engineers",
        },
        {
          code: "BE 207",
          name: "Mathematical Methods for Bioengineers",
        },
        {
          code: "BE 210",
          name: "Drug Delivery: Principles and Applications",
        },
        {
          code: "BE 211",
          name: "Cell Mechanics",
        },
        {
          code: "BE 213",
          name: "Fundamentals of Bioengineering I",
        },
        {
          code: "BE 219",
          name: "Essentials of Research and Innovation",
        },
        {
          code: "BE 201",
          name: "Fundamental of Biomaterials and Living Matter",
        },
        {
          code: "BE 202",
          name: "Thermodynamics and Transport in Biological Systems",
        },
        {
          code: "BC 201",
          name: "Cell Biology",
        },
        {
          code: "BC 202",
          name: "Protein Structure and Function",
        },
        {
          code: "BC 203",
          name: "General Biochemistry",
        },
        {
          code: "BC 303",
          name: "Single Molecule Approaches in Biology",
        },
        {
          code: "BC 306",
          name: "Essentials in Immunology",
        },
        {
          code: "MC 203",
          name: "Essentials in Microbiology",
        },
        {
          code: "MC 205",
          name: "Pathogen – Host interactions and Immune evasion mechanisms",
        },
        {
          code: "MC 206",
          name: "RNA Biology",
        },
        {
          code: "MC 207",
          name: "Molecular Biology",
        },
        {
          code: "MC 212",
          name: "Advances in Cell Biology",
        },
        {
          code: "MC 208",
          name: "Principles of Genetic Engineering",
        },
        {
          code: "RD 201",
          name: "Genetics",
        },
        {
          code: "RD 204",
          name: "Principles of Signal Transduction in Biological Systems",
        },
        {
          code: "RD 213",
          name: "Stem Cells and Mammalian Development",
        },
        {
          code: "DB 201",
          name: "Mathematics and Statistics for Biologists",
        },
        {
          code: "DB 250",
          name: "Research Applications of Flow Cytometry",
        },
        {
          code: "DS 201",
          name: "Bioinformatics",
        },
        {
          code: "CH 242",
          name: "Special Topics in Theoretical Biology",
        },
        {
          code: "PH 360",
          name: "Biophysics",
        },
        {
          code: "MT 271",
          name: "Introduction to Biomaterials",
        },
      ],
    ],
  },
];
