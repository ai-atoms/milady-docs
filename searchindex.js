Search.setIndex({"docnames": ["contents/examples/01_ex_write", "contents/examples/02_ex_lmlfe", "contents/examples/03_ex_qnmlhea", "contents/examples/04_ex_kernel", "contents/general", "contents/install/download", "contents/install/install_irene", "contents/install/install_marconi", "contents/install/install_milady-lammps", "contents/install/installation", "contents/ml/advanced", "contents/ml/database", "contents/ml/descriptors", "contents/ml/input", "contents/ml/kernels", "contents/ml/model", "contents/ml/system", "contents/publications", "contents/weight", "index"], "filenames": ["contents/examples/01_ex_write.rst", "contents/examples/02_ex_lmlfe.rst", "contents/examples/03_ex_qnmlhea.rst", "contents/examples/04_ex_kernel.rst", "contents/general.rst", "contents/install/download.rst", "contents/install/install_irene.rst", "contents/install/install_marconi.rst", "contents/install/install_milady-lammps.rst", "contents/install/installation.rst", "contents/ml/advanced.rst", "contents/ml/database.rst", "contents/ml/descriptors.rst", "contents/ml/input.rst", "contents/ml/kernels.rst", "contents/ml/model.rst", "contents/ml/system.rst", "contents/publications.rst", "contents/weight.rst", "index.rst"], "titles": ["Compute and write descriptors without further fit", "LML fit in bcc Fe", "QNML fit in HEA", "Kernel regression using polynomial kernel", "What is MILADY?", "Download", "Build on Irene", "Build on Marconi", "MILADY potentials in Lammps", "Prerequisites", "Advanced options", "Databases", "Descriptors", "Input files", "Kernels", "ML tasks", "Atomic systems", "Articles", "Optimization of hyperparameters", "What is MILADY?"], "terms": {"here": [0, 2, 3, 6, 7, 8, 9, 10, 14, 15], "we": [0, 1, 2, 3, 4, 6, 7, 8, 10, 11, 14, 15, 18, 19], "provid": [0, 1, 2, 3, 4, 6, 7, 8, 9, 11, 15, 18, 19], "input": [0, 1, 2, 3, 8, 10, 15, 16], "some": [0, 8, 10, 11, 14, 15, 18], "common": [0, 12], "task": 0, "involv": 0, "differ": [0, 1, 11, 14], "type": [0, 4, 9, 10, 11, 12, 16, 19], "work": [0, 6, 7, 8, 11, 17], "singl": [0, 12], "element": [0, 2, 8, 10, 11, 16], "multi": 0, "compon": [0, 10, 11, 12, 14, 15], "system": [0, 1, 2, 3, 6, 9, 11, 12, 14, 15], "file": [0, 1, 2, 3, 6, 7, 8, 10, 14, 15, 18], "save": 0, "design": [0, 4, 8, 10, 11, 12, 13, 14, 15, 19], "matrix": [0, 11, 14, 15], "etc": [0, 3, 4, 8, 11, 14, 15, 19], "The": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19], "list": [0, 3, 11, 13, 16], "ar": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19], "also": [0, 11, 12, 15], "exampl": [0, 1, 2, 3, 6, 7, 8, 9, 11, 12, 14, 15, 16, 18], "thi": [0, 1, 3, 8, 10, 11, 12, 13, 14, 15, 16, 18], "section": [0, 1, 2, 8, 9, 10, 11, 13, 15, 16, 18], "an": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 18, 19], "atom": [0, 3, 4, 11, 12, 14, 15, 17, 19], "perform": [0, 1, 2, 3, 4, 11, 12, 14, 15, 18, 19], "ml_type": [0, 1, 2, 3, 14, 15], "1": [0, 1, 2, 3, 10, 11, 12, 14, 15, 16, 18], "option": [0, 9, 11, 12, 14, 15, 16, 18], "i": [0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "us": [0, 1, 2, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "structur": [0, 4, 6, 7, 11, 14, 15, 17, 19], "analysi": [0, 4, 15, 19], "base": [0, 3, 12, 14, 15], "raw": 0, "latex": 0, "cite": [0, 12], "goryaeva_natcomm_2020": 0, "visual": [0, 11], "space": [0, 4, 15, 18, 19], "conjunct": 0, "ml": [0, 1, 2, 3, 4, 8, 11, 13, 18, 19], "model": [0, 1, 2, 3, 4, 11, 13, 17, 19], "implement": [0, 12, 15], "miladi": [0, 3, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17], "e": [0, 8, 10, 11, 12, 14, 15, 16, 18], "g": [0, 6, 7, 8, 11, 12, 15, 16, 17, 18], "ref": [0, 11, 14], "messina_2020": 0, "relev": [0, 1, 2, 3, 11, 15], "can": [0, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 18, 19], "found": [0, 2, 8, 13, 15], "compute_desc_onli": 0, "input_ml": [0, 1, 2, 3], "debug": [0, 1, 2, 3], "fals": [0, 1, 2, 3, 10, 11, 12, 14, 15, 16, 18], "set": [0, 1, 2, 3, 8, 10, 11, 12, 13, 14, 15, 17], "onli": [0, 10, 11, 12, 13, 14, 18], "write_desc": [0, 11, 15], "true": [0, 1, 2, 3, 10, 11, 12, 14, 15, 16, 18], "descdb": [0, 11], "desc_forc": [0, 1, 2, 3, 11, 12, 15], "forc": [0, 1, 2, 3, 4, 10, 11, 12, 15, 18, 19], "defin": [0, 1, 3, 6, 7, 11, 13, 14, 15, 16], "your": [0, 1, 3, 4, 6, 7, 8, 9, 12, 14, 18, 19], "weight": [0, 1, 2, 11, 13, 15, 16, 18], "multicompon": [0, 1, 2], "chemical_el": [0, 1, 2, 3, 16], "fe": [0, 8, 11, 14, 16, 17], "composit": [0, 1, 2, 3, 11], "r_cut": [0, 1, 2, 3, 12], "4": [0, 1, 2, 3, 6, 9, 10, 11, 12, 14, 15, 17], "7d0": [0, 1, 2, 3], "cutoff": [0, 1, 2, 3, 12], "distac": [0, 2, 3], "rc": [0, 1, 2, 3], "descriptor_typ": [0, 1, 2, 3, 12], "9": [0, 2, 3, 7, 8, 9, 12], "bispectrum": [0, 2, 3], "so4": [0, 2, 3], "j_max": [0, 2, 3, 12], "0": [0, 1, 2, 3, 4, 6, 8, 9, 10, 11, 12, 14, 15, 16, 19], "angular": [0, 2, 3, 12], "moment": [0, 2, 3, 12], "end": [0, 1, 3, 6, 7, 10, 11, 15], "To": [0, 12], "rescal": 0, "between": [0, 11, 12, 15], "within": [0, 11], "certain": 0, "rang": [0, 11, 12], "valu": [0, 11, 12, 13, 14, 15, 16, 18], "see": [0, 1, 11, 12, 15, 16, 18], "3": [0, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16], "linear": [1, 3, 4, 14, 15, 17, 19], "af": 1, "descriptor": [1, 2, 3, 4, 13, 14, 16, 19], "lml_fe_af": 1, "note": [1, 3, 8, 14], "default": [1, 3, 6, 8, 10, 11, 12, 13, 14, 15, 16, 18], "home": [1, 6, 7, 9, 10, 15], "made": [1, 12, 14, 15], "subroutin": [1, 15], "solv": 1, "least": [1, 14, 15], "squar": [1, 14, 15, 16], "problem": [1, 3, 6, 11, 15], "In": [1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18], "order": [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 14, 15, 19], "avail": [1, 2, 12], "mld_fit_typ": [1, 2, 3, 12, 15], "basi": [1, 2, 3, 12, 14, 15, 17], "function": [1, 2, 3, 4, 6, 7, 9, 10, 12, 15, 18, 19], "mld_order": [1, 2, 3, 15], "regress": [1, 2, 4, 11, 14, 17, 19], "distanc": [1, 3, 14], "afs_typ": [1, 12], "standard": [1, 11, 12], "2": [1, 2, 3, 4, 8, 10, 11, 12, 14, 15, 16, 18, 19], "modifi": 1, "n_rbf": [1, 12], "10": [1, 6, 9, 11, 12, 14, 15, 17], "number": [1, 2, 3, 10, 11, 12, 14, 15, 16, 18], "radial": [1, 12], "channel": [1, 12, 16], "n_cheb": [1, 12], "8": [1, 12], "chebyshev": [1, 12], "polynomi": [1, 4, 12, 14, 15, 19], "quadrat": [2, 4, 15, 19], "nois": [2, 3, 10, 14], "ta": [2, 8], "ti": [2, 8], "v": [2, 8, 12], "w": [2, 3, 4, 8, 11, 14, 15, 16, 17, 18, 19], "high": [2, 4, 19], "entropi": [2, 4, 17, 19], "alloi": [2, 11], "qnml_hea_bso4": 2, "For": [2, 3, 8, 11, 12, 14, 15, 16], "like": [2, 3, 4, 12, 15, 16, 19], "recommend": [2, 10, 12, 14, 15], "which": [2, 3, 8, 9, 10, 11, 12, 13, 14, 15, 18], "svd": [2, 3, 14, 15], "rank": [2, 3, 14, 15], "estim": [2, 3, 12, 15], "other": [2, 8, 10, 11, 12, 13, 14, 15, 16], "mld_type_quadrat": [2, 15], "convent": [2, 12], "qml": [2, 15], "lapack": [2, 3, 8, 9, 15], "full": [2, 3, 8, 10, 12, 15], "fix_no_of_el": [2, 3, 11, 16], "chemic": [2, 3, 11, 16], "speci": [2, 3, 11, 16], "db": [2, 3, 18], "appli": [2, 10, 11, 15], "each": [2, 3, 11, 12, 14, 15, 18], "keep": 2, "close": [2, 3, 5, 15], "weight_per_el": [2, 16], "56": 2, "41": 2, "44": [2, 14], "59": [2, 14], "5": [2, 6, 12, 15, 17, 18], "knml": 3, "fit": [3, 11, 12, 15], "kernel_poly_w_bso4": 3, "howev": [3, 11, 12, 14, 18], "ani": [3, 8, 11, 15, 16], "requir": [3, 8, 9, 13, 15], "one": [3, 8, 10, 11, 12, 15], "pre": 3, "process": 3, "step": [3, 8, 14, 18], "actual": [3, 15], "two": [3, 11, 12, 14, 15], "all": [3, 5, 9, 10, 11, 12, 13, 14, 15, 16, 18], "three": [3, 9, 11, 14, 15, 18], "perfrom": 3, "lml": [3, 15], "same": [3, 6, 7, 11, 12, 15, 16, 18], "you": [3, 6, 7, 8, 9, 10, 11, 12, 14, 15, 18], "intend": [3, 11], "get": 3, "repres": [3, 11], "environ": [3, 11, 14], "from": [3, 8, 10, 11, 12, 13, 14, 15, 18], "databas": [3, 4, 10, 13, 14, 15, 16, 18, 19], "those": [3, 11, 16], "should": [3, 8, 9, 11, 12, 14, 15, 16, 18], "run": [3, 8, 9, 10], "directori": [3, 6, 7, 8, 9, 11, 13], "let": [3, 11], "take": [3, 11, 12, 16], "want": [3, 11], "bso4": 3, "store": [3, 11, 15], "vacanc": 3, "ml_01": 3, "ml_02": 3, "ml_03": 3, "At": 3, "pleas": [3, 10, 15], "copi": [3, 6, 7, 9], "them": [3, 9, 11, 15, 18], "typic": [3, 9, 11, 14, 15], "select": [3, 10, 11, 12], "point": [3, 10, 11, 15, 17], "done": [3, 11], "mcd": [3, 14], "mahalanobi": [3, 14], "class": [3, 11, 14, 15, 18], "expon": 3, "write_kernel_matrix": [3, 14], "content": 3, "dump": [3, 15], "write": [3, 8, 10, 14, 15], "n_pca": 3, "classes_for_mcd": [3, 14], "07": [3, 15], "08": 3, "13": 3, "refer": [3, 6, 7, 9, 11, 14], "choos": [3, 8, 11, 12, 14, 15], "more": [3, 9, 11, 12, 14, 15], "bulk": [3, 14], "md": 3, "deform": [3, 14], "power_mcd": [3, 14], "05d0": [3, 14], "grid": [3, 12, 14, 15], "selction": 3, "np_kernel_ref": [3, 14], "1000": 3, "propos": [3, 12], "np_kernel_ful": [3, 14], "4000": 3, "outsid": 3, "kernel_dump": [3, 14], "just": [3, 5, 8], "chang": [3, 11], "previou": [3, 6, 7, 10, 12], "characterist": [3, 11], "": [3, 5, 8, 9, 11, 12, 14, 15, 17], "look": 3, "kernel_typ": [3, 14], "kernel_pow": [3, 14], "length_kernel": [3, 14], "05": [3, 14], "hyperparamet": 3, "test": [3, 6, 7, 8, 9, 10, 11, 14, 15, 18], "sigma_kernel": [3, 14], "d0": [3, 10, 11, 12, 14, 15, 18], "machin": [4, 5, 13, 15, 17, 19], "learn": [4, 5, 6, 7, 8, 13, 17, 19], "dynam": [4, 5, 13, 14, 19], "packag": [4, 13, 17, 19], "open": [4, 5, 19], "souc": [4, 19], "code": [4, 9, 11, 12, 13, 19], "creat": [4, 6, 7, 9, 15, 19], "scientist": [4, 19], "our": [4, 8, 9, 11, 14, 19], "goal": [4, 19], "improv": [4, 19], "accuraci": [4, 16, 19], "predict": [4, 10, 17, 19], "power": [4, 14, 19], "atomist": [4, 17, 19], "simul": [4, 11, 13, 17, 19], "algorithm": [4, 11, 13, 14, 18, 19], "prioritis": [4, 19], "method": [4, 15, 19], "reason": [4, 12, 19], "comput": [4, 10, 11, 12, 14, 15, 16, 17, 19], "cost": [4, 19], "distribut": [4, 8, 9, 11, 19], "under": [4, 19], "academ": [4, 19], "softwar": [4, 5, 19], "licenc": [4, 19], "asl": [4, 19], "main": [4, 19], "develop": [4, 12, 17, 19], "field": [4, 19], "suitabl": [4, 19], "molecular": [4, 13, 14, 19], "surrog": [4, 17, 19], "materi": [4, 11, 17, 19], "properti": [4, 11, 15, 19], "vibrat": [4, 17, 19], "humo": [4, 19], "lumo": [4, 19], "energi": [4, 10, 11, 12, 15, 17, 18, 19], "represent": [4, 19], "featur": [4, 19], "sparcif": [4, 19], "optim": [4, 13, 14, 19], "train": [4, 10, 11, 15, 19], "advantag": [4, 19], "hpc": [4, 19], "well": [4, 11, 14, 19], "parallel": [4, 8, 9, 19], "ha": [4, 9, 11, 12, 14, 15, 19], "good": [4, 19], "scalabl": [4, 19], "It": [4, 6, 7, 9, 11, 12, 13, 14, 15, 16, 19], "mpi": [4, 6, 8, 9, 10, 19], "pbla": [4, 19], "scalapack": [4, 6, 8, 9, 15, 19], "larg": [4, 11, 15, 19], "choic": [4, 8, 12, 14, 15, 19], "possibl": [4, 10, 15, 19], "variou": [4, 11, 18, 19], "includ": [4, 9, 10, 11, 15, 16, 19], "chao": [4, 15, 19], "kernel": [4, 15, 19], "sourc": [4, 5, 6, 7, 9, 11, 19], "happi": [4, 6, 7, 8, 19], "contributin": [4, 19], "present": [4, 6, 7, 8, 15, 19], "architectur": [4, 8, 19], "m": [4, 12, 14, 15, 17, 19], "c": [4, 8, 11, 17, 19], "marinica": [4, 10, 17, 19], "A": [4, 9, 11, 12, 13, 14, 15, 17, 19], "goryaeva": [4, 15, 17, 19], "start": [4, 10, 11, 12, 19], "2015": [4, 19], "srmp": [4, 19], "cea": [4, 19], "saclai": [4, 19], "franc": [4, 19], "chronolog": [4, 19], "unn": [4, 19], "toc": [4, 19], "2017": [4, 19], "2018": [4, 8, 19], "lapoint": [4, 17, 19], "2021": [4, 15, 19], "j": [4, 12, 15, 16, 17, 18, 19], "dere": [4, 19], "2019": [4, 7, 9, 19], "baima": [4, 17, 19], "2020": [4, 7, 19], "2022": [4, 9, 14, 19], "allera": [4, 19], "zhong": [4, 14, 19], "support": [4, 8, 9, 19], "anida": [4, 19], "khizar": [4, 19], "lgl": [4, 19], "christian": [4, 19], "van": [4, 19], "wambek": [4, 19], "coupl": [4, 12, 17, 19], "lammp": [4, 19], "thoma": [4, 19], "d": [4, 10, 14, 15, 17, 19], "swinburn": [4, 17, 19], "cinam": [4, 19], "marseil": [4, 19], "question": [4, 19], "suggest": [4, 9, 12, 19], "sent": [4, 19], "email": [4, 5, 6, 7, 8, 19], "answer": [4, 19], "through": [5, 18], "github": [5, 6, 7, 8, 9], "repositori": [5, 6, 7, 8, 9, 10], "have": [5, 8, 11, 12, 14, 15], "access": 5, "send": [5, 6, 7, 8], "u": [5, 6, 7, 8], "That": [5, 8], "instruct": [6, 7], "most": [6, 10, 14, 15], "powerful": 6, "french": 6, "prace": 6, "supercomput": [6, 7], "joliotcuri": 6, "describ": [6, 7, 8, 10, 11, 12, 14, 15], "wai": [6, 7, 8, 12], "know": [6, 7, 8, 12, 14], "If": [6, 7, 8, 11, 12, 14, 15, 16, 18], "better": [6, 7, 8, 17], "precedur": [6, 7, 8], "about": [6, 7, 8, 11, 12, 14, 15], "experi": [6, 7, 8, 17, 18], "updat": [6, 7, 8], "document": [6, 7, 8, 10, 12, 15], "follow": [6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18], "preserv": [6, 7], "mld": [6, 7, 9], "locat": [6, 7, 9, 10, 11], "hereaft": [6, 7, 9], "my": [6, 7], "bashrc": [6, 7], "contain": [6, 7, 9, 11, 13, 14, 15, 16], "variabl": [6, 7, 10, 14, 17], "openmpi": [6, 9], "mkl": [6, 7, 8, 9], "21": [6, 15, 17], "fortran": [6, 8, 9], "inteloneapi": 6, "gnu": [6, 9], "cmake": [6, 7, 9], "18": [6, 7, 9], "export": [6, 7, 9], "ompi_fc": 6, "ifort": [6, 7, 8, 9], "ompi_cxx": 6, "ompi_cc": 6, "gcc": [6, 7], "mld_build": [6, 7, 9], "mld_instal": [6, 7, 9], "procedur": [6, 7, 9, 11], "whilst": [6, 7, 9, 12, 14, 15], "mld_testdir": [6, 7, 9], "compulsori": [6, 7, 9, 13], "ad": [6, 7, 14, 18], "f_setenv_miladi": [6, 7, 9], "unset": [6, 7, 9], "mld_roodir": [6, 7, 9], "mld_scrdir": [6, 7, 9], "mld_srcdir": [6, 7, 9], "mld_buidir": [6, 7, 9], "mld_insdir": [6, 7, 9], "mld_tesdir": [6, 7, 9], "mld_setenv": [6, 7, 9], "omp_insdir": [6, 7, 9], "omp_root": [6, 7, 9], "cccworkdir": 6, "z": [6, 10, 12, 17], "in_r": 6, "undefin": 6, "mkl_root": [6, 7, 9], "mklroot": [6, 7, 8, 9], "oap_roodir": 6, "ccc": 6, "product": 6, "ifx": 6, "intel": [6, 7, 8, 9], "20": [6, 12], "ON": [6, 7, 9], "path": [6, 7, 8, 9, 10, 11], "script": [6, 7, 9, 11], "charg": [6, 7, 9], "do": [6, 7, 8, 10, 12, 14, 15], "forget": [6, 7], "befor": [6, 7, 12], "compile_miladi": [6, 7, 9], "f_compile_milady_mix": [6, 9], "make": [6, 7, 8, 9, 14, 15], "j4": 6, "And": [6, 7], "execut": [6, 7, 9, 13, 14], "bin": [6, 7, 9], "milady_main": [6, 7, 9], "ex": [6, 7, 9], "wide": 7, "env": 7, "skl": 7, "pe": 7, "xe": 7, "binari": [7, 11], "intelmpi": [7, 9], "i_mpi_fc": 7, "i_mpi_f90": 7, "i_pmi_cxx": 7, "i_mpi_cc": 7, "cineca": 7, "prod": 7, "opt": [7, 8], "compil": [7, 8], "impi": 7, "304": 7, "intel64": [7, 8], "f_compile_milady_intel": [7, 9], "j6": [7, 9], "librari": [8, 9], "next": 8, "briefli": 8, "summar": 8, "how": [8, 10, 11], "emploi": 8, "while": [8, 11], "detail": [8, 9, 11, 12, 14, 15], "easi": [8, 12], "pair_styl": 8, "indic": [8, 11, 15], "name": [8, 10, 13, 14, 15, 18], "pair_coeff": 8, "fe_lml": 8, "pot": 8, "mani": [8, 10, 11, 17, 18], "where": [8, 10, 11, 12, 13, 15], "tativw": 8, "hea": [8, 14], "line": [8, 11, 14, 15, 18], "readi": 8, "build": [8, 10, 14, 15], "patch": 8, "call": 8, "milady_lammp": 8, "similar": [8, 14], "regular": [8, 12, 16, 18], "so": [8, 12], "far": [8, 15], "user": [8, 9, 10, 13, 15, 18], "thei": 8, "go": 8, "directli": [8, 11], "part": [8, 11, 14, 15], "current": [8, 9, 12, 16], "version": [8, 9, 12, 13, 15], "gfortran": [8, 9], "OR": 8, "clone": 8, "git": 8, "recurs": 8, "com": 8, "tomswinburn": 8, "turn": 8, "cd": [8, 14], "src": 8, "ye": 8, "restrict": [8, 15], "paramet": [8, 10, 11, 14, 15, 18], "below": [8, 11, 18], "case": [8, 10, 11, 12, 14, 15, 16, 18], "3a": 8, "edit": 8, "appropi": 8, "makefil": 8, "need": 8, "local": [8, 9, 11], "root": [8, 13, 16], "oneapi": [8, 9], "free": 8, "latest": 8, "libcomp": 8, "linux": 8, "lib": 8, "older": 8, "compos": 8, "studio": 8, "doubt": 8, "help": 8, "3b": 8, "f": [8, 10, 11, 12, 15, 17, 18], "mpi_intel": 8, "clean": [8, 11], "final": [8, 11, 12, 14], "ouufff": 8, "pain": 8, "import": [8, 11, 14], "thank": [8, 17], "report": [8, 11, 18], "typo": 8, "error": [8, 10, 11, 14, 15, 18], "particular": [8, 11, 15, 16], "mari": 8, "landeiro": 8, "rei": 8, "antoin": 8, "kraych": 8, "x": [9, 10, 11, 12, 14, 15], "19": [9, 12], "mix": 9, "compat": [9, 11], "both": [9, 15, 16], "equal": [9, 11, 12, 16, 18], "min": [9, 11, 15], "v9": 9, "prefer": 9, "mean": [9, 15, 18], "first": [9, 11, 14, 15], "six": [9, 11], "instal": 9, "later": 9, "last": [9, 11, 14], "redefinit": 9, "usr": 9, "iopenmpi": 9, "respect": [9, 11, 14, 15], "conveni": 9, "bash": 9, "f_setenv_milady_marinica": 9, "output": 9, "now": 9, "could": 9, "f_compile_milady_gnu": 9, "invok": 9, "f_ctest_miladi": 9, "f_explore_miladi": 9, "6": [9, 12, 14, 15], "job": 9, "THAT": 9, "folk": 9, "give": [10, 12, 14, 15, 16], "becaus": [10, 14], "lack": 10, "unless": 10, "veri": [10, 11, 14, 15], "developp": 10, "iread_ml": 10, "integ": [10, 11, 12, 14, 15, 16, 18], "fly": 10, "read": [10, 11, 12], "isave_ml": 10, "noth": 10, "hdd": 10, "thread": 10, "kcross": 10, "logic": [10, 11, 12, 14, 15, 16, 18], "marginal_likelihood": 10, "sparsif": 10, "n_kcross": 10, "target_typ": 10, "force_comp": 10, "y": [10, 12, 15, 17], "toy_model": 10, "gener": [10, 11, 12, 14, 15], "analyt": 10, "l": [10, 12, 15, 17, 18], "being": [10, 15], "dimension": [10, 12], "data": [10, 11, 15], "mathbf": [10, 12, 14, 15, 18], "begin": [10, 15], "sin": 10, "left": [10, 14, 15, 18], "frac": [10, 12, 14, 15, 16], "pi": [10, 12], "x_1": 10, "right": [10, 14, 15, 18], "text": [10, 13], "mathbb": 10, "r": [10, 12, 15, 17], "co": [10, 12], "x_2": 10, "sum_": [10, 11, 12, 15, 16], "exp": [10, 14], "x_i": 10, "ge": 10, "nonumb": [10, 12], "wa": [10, 12, 14, 17], "alreadi": 10, "manag": 10, "build_subdata": 10, "sub": 10, "whole": [10, 14], "pref": 10, "charact": [10, 11, 14, 15, 16, 18], "len": [10, 11, 16, 18], "prefix": [10, 13], "subdatabas": [10, 11], "00": 10, "nd_data": 10, "mlposcar": 10, "extract": [10, 11, 17], "ns_data": 10, "100": [10, 12, 15], "i_begin": 10, "poscar": [10, 11, 14], "kelem": [10, 11], "random": [10, 11], "subset": [10, 11], "60": [10, 11], "test_ml": 10, "dim_data": 10, "extren": 10, "impos": [10, 15], "otherwis": [10, 11], "intern": [10, 12, 14], "depend": [10, 11, 12, 13, 14], "db_file": [10, 11, 13, 18], "n_frac": 10, "real": [10, 12, 14, 15, 18], "fraction": 10, "dim_data_test": 10, "n": [10, 11, 12, 17], "dim_data_train": 10, "math": 10, "le": [10, 12], "split": 10, "given": [10, 11, 12, 14, 15, 16], "dese": [10, 14], "80": [11, 16, 18], "chosen": [11, 16], "potenti": [11, 12, 14, 15, 17, 18], "syntax": 11, "klm": 11, "number_of_fil": 11, "number_of_selected_fil": 11, "db_model_in": 11, "db_path": 11, "With": [11, 15], "selection_typ": 11, "insid": 11, "mention": [11, 12, 15], "randomli": [11, 14], "configur": [11, 13, 14, 15], "new": [11, 12, 18], "seed": 11, "11": [11, 14, 17], "iread_energi": 11, "fix": [11, 12, 15], "taken": [11, 12], "target": [11, 15], "second": [11, 14, 16], "third": [11, 12, 16], "ref_energy_per_el": 11, "These": [11, 13, 16, 18], "when": [11, 14, 15, 16], "shift": 11, "total": [11, 12, 15], "situat": 11, "exemplifi": 11, "lower": [11, 12, 14, 15, 18], "absolut": 11, "dft": [11, 17], "rigid": 11, "toward": [11, 17], "ab": [11, 17], "intio": 11, "induc": 11, "numer": [11, 12], "instabl": 11, "ii": [11, 14], "physic": [11, 14], "consider": [11, 14], "molecul": 11, "separ": [11, 15, 18], "infinit": 11, "zero": [11, 15], "There": [11, 12, 14], "shif": 11, "ot": 11, "e_": [11, 15], "textrm": [11, 12, 15, 16, 18], "supos": 11, "over": 11, "n_1": [11, 12], "n_2": [11, 12], "ldot": [11, 12], "n_": [11, 12, 15, 16], "Then": 11, "equat": [11, 12], "fatal": 11, "12d0": 11, "besid": 11, "inform": [11, 15, 16], "cell": 11, "vector": [11, 12, 15], "coordin": 11, "usual": [11, 14], "explicit": 11, "compound": 11, "stress": [11, 15, 18], "tensor": 11, "independ": 11, "sigma_": [11, 14, 15], "xx": 11, "yy": 11, "zz": 11, "yz": 11, "xz": 11, "xy": 11, "vasp": 11, "ispin": 11, "tag": 11, "ev": 11, "\u00e5": [11, 12], "111": 11, "26": 11, "15": [11, 15, 17], "7255500": 11, "7884238": 11, "ef": 11, "mass": [11, 16], "e_1": 11, "e_2": 11, "e_3": 11, "00000000": 11, "unit": [11, 12], "1\u00e5": 11, "63475324": 11, "cartesian": [11, 12], "posit": [11, 12, 14, 15], "31737662": 11, "empti": [11, 16], "42315918": 11, "magnet": 11, "non": [11, 15], "known": [11, 15], "treat": [11, 12, 15], "comment": 11, "built": [11, 12, 16], "tot": 11, "_": [11, 12, 15, 18], "altern": 11, "perfect": [11, 14], "crystal": [11, 17], "than": [11, 14], "oxid": 11, "sixth": 11, "slightli": [11, 12], "instanc": 11, "cementit": 11, "110": 11, "12": [11, 14], "calcul": 11, "ovito": 11, "simpl": 11, "renam": 11, "allow": 11, "vesta": 11, "descritor": [11, 12, 15], "deriv": 11, "box": 11, "spin": 11, "ignor": 11, "complusori": 11, "traj": 11, "ASE": 11, "python": 11, "_traj": 11, "py": 11, "togeth": 11, "convers": 11, "extend": 11, "xyz": 11, "_poscar2xyz": 11, "invers": [11, 15], "_xyz2poscar": 11, "ccklmxxxxxx": 11, "notat": [11, 15], "cc": 11, "vari": 11, "01": [11, 14], "99": 11, "elast": [11, 14], "defect": [11, 17], "link": 11, "thu": 11, "02": [11, 12, 18], "correspond": [11, 14, 16], "state": 11, "eo": 11, "04": 11, "stack": 11, "fault": [11, 15], "gsf": 11, "interest": [11, 14], "index": 11, "k": [11, 12, 14, 17], "bcc": [11, 17], "hcp": 11, "db_model": [11, 13, 15, 18], "summari": 11, "stand": [11, 18], "categori": 11, "after": 11, "attribut": 11, "belong": [11, 14, 18], "rest": 11, "its": 11, "form": [11, 12, 15], "t": [11, 15, 17], "scheme": 11, "superposit": 11, "tff": 11, "_e": [11, 18], "_f": [11, 18], "max": [11, 12, 15], "search": [11, 15], "optimum": 11, "evolutionari": 11, "1e2": 11, "1e6": 11, "1e1": 11, "1e3": 11, "1e4": 11, "everywher": 11, "e0": 11, "result": [11, 15, 18], "without": [11, 14, 15], "120": 11, "614": 11, "425": 11, "e2": 11, "e1": 11, "e6": 11, "e4": 11, "22": 11, "130": 11, "abov": [11, 12, 14, 15, 16], "As": 11, "becom": [11, 12, 18], "exept": 11, "writen": [11, 15], "ask": 11, "desc_file_format": 11, "written": [11, 12, 14, 15], "extens": 11, "eml": 11, "csv": 11, "npz": 11, "cc_klm_xxxxxx": 11, "nat": 11, "dim_desc": [11, 14, 15], "dimens": [11, 12, 15, 16], "column": [11, 14, 15], "id": [11, 14], "shape": [11, 14], "ensur": 11, "smaller": 11, "size": [11, 18], "factor": [11, 12, 15, 18], "compar": 11, "pai": [11, 14], "attent": 11, "sometim": [11, 14], "cut": 12, "off": 12, "writ": 12, "desactiv": 12, "activ": [12, 14, 15, 18], "fourier": 12, "seri": 12, "smooth": [12, 14], "overlap": 12, "7": [12, 14], "14": 12, "hybrid": 12, "up": [12, 15, 17], "m_": [12, 15], "mu": 12, "nu": 12, "200": [12, 14, 17], "permutation": 12, "invari": 12, "eta_max_g2": 12, "eta": 12, "n_g2_eta": 12, "generatig": 12, "formula": [12, 15, 16], "eta_p": 12, "p": [12, 14, 17], "strat": 12, "n_g2_r": 12, "r_": 12, "n_g3_eta": 12, "n_g3_lambda": 12, "lambda": [12, 15], "lambda_p": 12, "highli": 12, "n_g3_zeta": 12, "zeta": 12, "zeta_p": 12, "control": [12, 13, 15, 16], "addit": 12, "strict_behl": 12, "automat": [12, 15, 16], "paper": [12, 14], "tchbychev": 12, "introduc": [12, 14, 18], "orgin": 12, "publish": 12, "prb": 12, "bartok2013": 12, "g_n": 12, "ji": 12, "jk": 12, "t_l": 12, "theta_": 12, "ijk": 12, "time": [12, 14, 15, 18], "tchebychev": 12, "respectivelli": [12, 16, 18], "strong": 12, "prime": 12, "g_": 12, "gaussian": 12, "n_soap": 12, "maximum": [12, 18], "spheric": 12, "harmon": 12, "l_max": 12, "nspecies_soap": 12, "lsoap_diag": 12, "cdot": 12, "much": 12, "less": 12, "diagon": [12, 15], "lsoap_lnorm": 12, "normal": [12, 14, 15], "2l": 12, "lsoap_norm": 12, "r_cut_width_soap": 12, "doubl": 12, "precis": [12, 15], "intermedi": 12, "regim": 12, "5d0": 12, "momentum": 12, "radial_pow_so3": 12, "flag": 12, "origin": [12, 14], "refxxx": 12, "acitv": 12, "rbf": 12, "l_": [12, 14, 18], "th": [12, 15, 16, 18], "p_": 12, "nl": 12, "c_": 12, "nlm": 12, "wigner": 12, "coeffici": 12, "w_j": 12, "y_": 12, "lm": 12, "equiv": 12, "w_i": [12, 16], "ij": 12, "cdotp": 12, "603": 12, "ideea": 12, "bodi": 12, "refxxxdegironcoli": 12, "util": 12, "\u00e9": 12, "maxim": 12, "obtain": [12, 15], "b_": 12, "l_1": 12, "l_2": 12, "m_1": 12, "m_2": 12, "clebsch": 12, "gordan": 12, "desriptor": 12, "difficult": 12, "beforehand": 12, "naiv": 12, "rule": [12, 16], "reduc": 12, "drastic": 12, "140": 12, "instead": 12, "gc": 12, "karakala": 12, "cg": 12, "condit": 12, "releas": 12, "lbso3_diag": 12, "483": [12, 17], "coeffcient": 12, "overcomplet": 12, "j_": [12, 15], "guess": 12, "moreov": [12, 14], "j_1": 12, "j_2": 12, "complet": [12, 14, 15, 17], "componenet": [12, 18], "spectral": 12, "inv_r0_input": 12, "project": 12, "north": 12, "pole": 12, "multipli": 12, "strictli": 12, "brilliant": 12, "bartok": 12, "et": [12, 14, 15, 17], "al": [12, 14, 15, 17], "theori": [12, 17], "trust": 12, "lbso4_diag": 12, "gap": 12, "snap": 12, "notted": 12, "bi": 12, "mathemat": [12, 15], "justifi": 12, "thompsson": 12, "minimum": [12, 15], "degre": [12, 15], "mtp_poly_min": 12, "mtp_poly_max": 12, "mtp_rad_ord": 12, "mtp_dim": 12, "lambda_krr": [12, 18], "norm": [12, 15], "correspod": 12, "neg": [12, 14, 15], "skip": 12, "cluster": 12, "expans": 12, "sum_i": 12, "v_1": 12, "r_i": 12, "v_2": 12, "v_3": 12, "express": 12, "sum": 12, "pair": 12, "threeatom": 12, "angl": 12, "term": [12, 15], "forth": 12, "even": 12, "combin": 12, "expant": 12, "driven": [12, 14, 15, 17], "l_body_ord": 12, "enabl": [12, 15], "fourth": 12, "body_d_max": 12, "bond_dist_transform": 12, "bond_beta": 12, "bond_dist_ann": 12, "vertor": 12, "diment": 12, "expens": 12, "v_4": 12, "try": [12, 14], "todo": 12, "string": 13, "denot": [13, 15], "prefixsim": 13, "keyword": [13, 15, 16], "regard": 13, "descript": 13, "eamtab": 13, "potin": 13, "din": 13, "gin": 13, "theirs": [13, 18], "presenc": 13, "reminisc": 13, "ndm": 13, "futur": 13, "suppress": 13, "mai": [13, 15], "mode": 14, "firstli": 14, "appropri": 14, "parametr": 14, "k_1": 14, "k_2": 14, "exponenti": 14, "tild": 14, "se": 14, "2l_": 14, "batchattarya": 14, "top": 14, "sigma": [14, 15], "covari": 14, "sampl": 14, "sure": 14, "adapt": [14, 15], "reson": 14, "what": 14, "aspirin": 14, "defalut": 14, "eq": [14, 18], "attet": 14, "sens": 14, "write_krnel_matrix": 14, "intuit": 14, "nice": 14, "constant": 14, "special": 14, "treatment": [14, 15], "consequ": 14, "database_refer": 14, "beyond": 14, "bia": 14, "encompass": 14, "weird": [14, 15, 18], "outlier": 14, "kernel_matrix": 14, "dat": [14, 15], "number_of_data_kernel": 14, "ascii": 14, "2314": 14, "a1": 14, "a2": 14, "43": 14, "27": 14, "07_111_000003": 14, "b1": 14, "b2": 14, "bd": 14, "234": 14, "09_111_000010": 14, "c1": 14, "c2": 14, "127": 14, "11_111_000023": 14, "again": 14, "label": [14, 18], "identifi": 14, "human": 14, "readabl": 14, "advic": 14, "draft": 14, "cur": 14, "decomposit": [14, 15], "mahonei": 14, "advanc": [14, 15], "applic": 14, "descoposit": 14, "cur_kval": 14, "cur_rval": 14, "cur_ep": 14, "sensibl": 14, "ffor": 14, "collect": [14, 17], "specifi": 14, "small": 14, "around": [14, 15], "mediam": 14, "larger": 14, "800": 14, "statist": 14, "od": 14, "leav": 14, "leverag": 14, "score": [14, 17], "cannot": 14, "row": 14, "nor": 14, "chois": 14, "kei": 15, "word": 15, "qnml": 15, "ridg": 15, "reserv": 15, "analyz": 15, "exclud": [15, 18], "specif": 15, "wheather": 15, "verifi": 15, "consid": 15, "command": [15, 18], "quandrat": 15, "threfor": 15, "supplementari": [15, 16], "snap_type_quadrat": 15, "polyc_n_poli": 15, "polyc_n_hermit": 15, "paramt": 15, "solut": 15, "precondit": 15, "exactelli": [15, 16], "remain": 15, "shortli": 15, "speak": 15, "maxiumum": 15, "hermit": 15, "handl": 15, "beta": 15, "b": [15, 17], "hesit": 15, "observ": 15, "amat": 15, "fact": 15, "symmetr": 15, "bunch": 15, "kaufman": 15, "pivot": 15, "serial": 15, "lu": 15, "fast": 15, "compact": 15, "low": 15, "linar": 15, "diesign": 15, "qr": 15, "assumpt": 15, "stop": 15, "lq": 15, "constraint": 15, "fill": 15, "snap_class_constraint": 15, "defici": 15, "seek": 15, "minim": 15, "choleski": 15, "symlmetr": 15, "definit": 15, "consequnetli": 15, "avoid": 15, "favor": 15, "probabl": 15, "segmet": 15, "nan": 15, "slowest": 15, "via": 15, "svd_rcond": 15, "limit": [15, 17], "singular": 15, "eigenvalu": 15, "obvious": 15, "impact": 15, "choosen": 15, "epsilon": 15, "write_design_matrix": 15, "weigth": [15, 16, 18], "matix": 15, "number_of_data": 15, "design_matrix": 15, "format": [15, 16], "2nd": [15, 16], "come": 15, "mld_regularization_typ": 15, "lambda_": [15, 18], "krr": [15, 18], "moor": 15, "penros": 15, "rr": 15, "logarithm": 15, "min_lambda_krr": 15, "max_lambda_krr": 15, "n_values_lambda_krr": 15, "type_of_loss": 15, "four": 15, "j_e": 15, "j_f": 15, "align": 15, "m_e": 15, "omega_": 15, "hat": 15, "m_f": 15, "f_": [15, 18], "datapoint": 15, "nummber": 15, "alpha": 15, "train_onli": 15, "login": 15, "No": 15, "exhaust": 16, "symbol": 16, "weigth_per_el": 16, "weigth_per_element_3ch": 16, "no_of_el": 16, "among": 16, "109": 16, "period": 16, "tabl": 16, "re": 16, "custom": [16, 18], "associ": 16, "accout": 16, "geometr": 16, "weighted_auto": 16, "weighted_3ch": 16, "3rd": 16, "weight_per_element_3ch": 16, "valid": 16, "necessari": 16, "redefin": 16, "ch": 16, "sqrt": 16, "m_i": 16, "m_j": 16, "assign": 16, "z_i": 16, "z_j": 16, "chemical_elements_invis": 16, "invis": 16, "examl": 16, "put": [16, 18], "proport": 16, "exact": 16, "anf": 16, "author": 17, "maillet": 17, "nastar": 17, "capabl": 17, "autoencod": 17, "scienc": 17, "phy": 17, "chem": 17, "1039": 17, "d2cp01917e": 17, "d\u00e9r\u00e8": 17, "grigorev": 17, "kermod": 17, "ventelon": 17, "effici": 17, "transfer": 17, "rev": 17, "mater": 17, "103803": 17, "gilbert": 17, "arakawa": 17, "bergstrom": 17, "caturla": 17, "dudarev": 17, "gao": 17, "hu": 17, "xunxiang": 17, "kurtz": 17, "litnovski": 17, "marian": 17, "perspect": 17, "multiscal": 17, "acceler": 17, "fusion": 17, "nucl": 17, "554": 17, "153113": 17, "synergist": 17, "initio": 17, "disloc": 17, "arxiv": 17, "preprint": 17, "2111": 17, "11262": 17, "dai": 17, "reinforc": 17, "encod": 17, "crystallin": 17, "solid": 17, "distort": 17, "natur": 17, "comm": 17, "4691": 17, "thiri": 17, "mallat": 17, "provil": 17, "becquart": 17, "063802": 17, "brunev": 17, "maliyov": 17, "extrapol": 17, "unconverg": 17, "gw": 17, "16": 17, "4399": 17, "4407": 17, "messina": 17, "quaglino": 17, "domain": 17, "castin": 17, "bonni": 17, "kraus": 17, "multifidel": 17, "framework": 17, "construc": 17, "ting": 17, "scale": 17, "nimb": 17, "interatom": 17, "comp": 17, "sci": 17, "166": 17, "fulli": 18, "share": 18, "issu": 18, "genet": 18, "object": 18, "f_e": 18, "mae": 18, "f_f": 18, "ga_opt": 18, "averag": 18, "multipl": 18, "optimize_weight": 18, "class_no_optimize_weight": 18, "90": 18, "06": 18, "optimize_ga_popul": 18, "popul": 18, "optimize_ga_pupl": 18, "optimize_weights_l1": 18, "regularizit": 18, "sum_k": 18, "w_k": 18, "optimize_weights_l2": 18, "optimize_weights_l": 18, "max_iter_optimize_weight": 18, "40": 18, "factor_energy_error": 18, "force_energy_error": 18, "factor_force_error": 18, "force_force_error": 18, "factor_stress_error": 18, "force_stress_error": 18, "l_e": 18, "l_f": 18, "argument": 18}, "objects": {"": [[12, 0, 1, "cmdoption-arg-afs_type", "afs_type"], [12, 0, 1, "cmdoption-arg-body_D_max", "body_D_max"], [12, 0, 1, "cmdoption-arg-bond_beta", "bond_beta"], [12, 0, 1, "cmdoption-arg-bond_dist_ann", "bond_dist_ann"], [12, 0, 1, "cmdoption-arg-bond_dist_transform", "bond_dist_transform"], [10, 0, 1, "cmdoption-arg-build_subdata", "build_subdata"], [16, 0, 1, "cmdoption-arg-chemical_elements", "chemical_elements"], [16, 0, 1, "cmdoption-arg-chemical_elements_invisible", "chemical_elements_invisible"], [18, 0, 1, "cmdoption-arg-class_no_optimize_weights", "class_no_optimize_weights"], [14, 0, 1, "cmdoption-arg-classes_for_mcd", "classes_for_mcd"], [14, 0, 1, "cmdoption-arg-cur_eps", "cur_eps"], [14, 0, 1, "cmdoption-arg-cur_kval", "cur_kval"], [14, 0, 1, "cmdoption-arg-cur_rval", "cur_rval"], [11, 0, 1, "cmdoption-arg-db_file", "db_file"], [11, 0, 1, "cmdoption-arg-db_path", "db_path"], [11, 0, 1, "cmdoption-arg-desc_file_format", "desc_file_format"], [15, 0, 1, "cmdoption-arg-desc_forces", "desc_forces"], [12, 0, 1, "cmdoption-arg-descriptor_type", "descriptor_type"], [10, 0, 1, "cmdoption-arg-dim_data", "dim_data"], [12, 0, 1, "cmdoption-arg-eta_max_g2", "eta_max_g2"], [18, 0, 1, "cmdoption-arg-factor_energy_error", "factor_energy_error"], [18, 0, 1, "cmdoption-arg-factor_force_error", "factor_force_error"], [18, 0, 1, "cmdoption-arg-factor_stress_error", "factor_stress_error"], [16, 0, 1, "cmdoption-arg-fix_no_of_elements", "fix_no_of_elements"], [10, 0, 1, "cmdoption-arg-force_comp", "force_comp"], [10, 0, 1, "cmdoption-arg-i_begin", "i_begin"], [12, 0, 1, "cmdoption-arg-inv_r0_input", "inv_r0_input"], [11, 0, 1, "cmdoption-arg-iread_energy", "iread_energy"], [10, 0, 1, "cmdoption-arg-iread_ml", "iread_ml"], [10, 0, 1, "cmdoption-arg-isave_ml", "isave_ml"], [12, 0, 1, "cmdoption-arg-j_max", "j_max"], [10, 0, 1, "cmdoption-arg-kcross", "kcross"], [10, 0, 1, "cmdoption-arg-kelem", "kelem"], [14, 0, 1, "cmdoption-arg-kernel_dump", "kernel_dump"], [14, 0, 1, "cmdoption-arg-kernel_power", "kernel_power"], [14, 0, 1, "cmdoption-arg-kernel_type", "kernel_type"], [12, 0, 1, "cmdoption-arg-l_body_order", "l_body_order"], [12, 0, 1, "cmdoption-arg-6", "l_max"], [12, 0, 1, "cmdoption-arg-lambda_krr", "lambda_krr"], [12, 0, 1, "cmdoption-arg-lbso3_diag", "lbso3_diag"], [12, 0, 1, "cmdoption-arg-lbso4_diag", "lbso4_diag"], [14, 0, 1, "cmdoption-arg-length_kernel", "length_kernel"], [12, 0, 1, "cmdoption-arg-lsoap_diag", "lsoap_diag"], [12, 0, 1, "cmdoption-arg-lsoap_lnorm", "lsoap_lnorm"], [12, 0, 1, "cmdoption-arg-lsoap_norm", "lsoap_norm"], [10, 0, 1, "cmdoption-arg-marginal_likelihood", "marginal_likelihood"], [18, 0, 1, "cmdoption-arg-max_iter_optimize_weights", "max_iter_optimize_weights"], [15, 0, 1, "cmdoption-arg-ml_type", "ml_type"], [15, 0, 1, "cmdoption-arg-mld_fit_type", "mld_fit_type"], [15, 0, 1, "cmdoption-arg-mld_order", "mld_order"], [15, 0, 1, "cmdoption-arg-mld_regularization_type", "mld_regularization_type"], [15, 0, 1, "cmdoption-arg-mld_type_quadratic", "mld_type_quadratic"], [12, 0, 1, "cmdoption-arg-mtp_poly_max", "mtp_poly_max"], [12, 0, 1, "cmdoption-arg-mtp_poly_min", "mtp_poly_min"], [12, 0, 1, "cmdoption-arg-n_cheb", "n_cheb"], [10, 0, 1, "cmdoption-arg-n_frac", "n_frac"], [12, 0, 1, "cmdoption-arg-n_g2_eta", "n_g2_eta"], [12, 0, 1, "cmdoption-arg-n_g2_rs", "n_g2_rs"], [12, 0, 1, "cmdoption-arg-n_g3_eta", "n_g3_eta"], [12, 0, 1, "cmdoption-arg-n_g3_lambda", "n_g3_lambda"], [12, 0, 1, "cmdoption-arg-n_g3_zeta", "n_g3_zeta"], [10, 0, 1, "cmdoption-arg-n_kcross", "n_kcross"], [12, 0, 1, "cmdoption-arg-5", "n_rbf"], [12, 0, 1, "cmdoption-arg-n_soap", "n_soap"], [10, 0, 1, "cmdoption-arg-nd_data", "nd_data"], [14, 0, 1, "cmdoption-arg-np_kernel_full", "np_kernel_full"], [14, 0, 1, "cmdoption-arg-np_kernel_ref", "np_kernel_ref"], [10, 0, 1, "cmdoption-arg-ns_data", "ns_data"], [18, 0, 1, "cmdoption-arg-optimize_ga_population", "optimize_ga_population"], [18, 0, 1, "cmdoption-arg-0", "optimize_weights"], [18, 0, 1, "cmdoption-arg-optimize_weights_L1", "optimize_weights_L1"], [18, 0, 1, "cmdoption-arg-optimize_weights_L2", "optimize_weights_L2"], [18, 0, 1, "cmdoption-arg-optimize_weights_Le", "optimize_weights_Le"], [10, 0, 1, "cmdoption-arg-path", "path"], [15, 0, 1, "cmdoption-arg-polyc_n_hermite", "polyc_n_hermite"], [15, 0, 1, "cmdoption-arg-polyc_n_poly", "polyc_n_poly"], [14, 0, 1, "cmdoption-arg-power_mcd", "power_mcd"], [10, 0, 1, "cmdoption-arg-pref", "pref"], [12, 0, 1, "cmdoption-arg-r_cut", "r_cut"], [12, 0, 1, "cmdoption-arg-r_cut_width_soap", "r_cut_width_soap"], [12, 0, 1, "cmdoption-arg-2", "radial_pow_so3"], [11, 0, 1, "cmdoption-arg-ref_energy_per_element", "ref_energy_per_element"], [11, 0, 1, "cmdoption-arg-seed", "seed"], [11, 0, 1, "cmdoption-arg-selection_type", "selection_type"], [14, 0, 1, "cmdoption-arg-sigma_kernel", "sigma_kernel"], [15, 0, 1, "cmdoption-arg-snap_class_constraints", "snap_class_constraints"], [10, 0, 1, "cmdoption-arg-sparsification", "sparsification"], [12, 0, 1, "cmdoption-arg-strict_behler", "strict_behler"], [15, 0, 1, "cmdoption-arg-svd_rcond", "svd_rcond"], [10, 0, 1, "cmdoption-arg-target_type", "target_type"], [10, 0, 1, "cmdoption-arg-toy_model", "toy_model"], [15, 0, 1, "cmdoption-arg-train_only", "train_only"], [15, 0, 1, "cmdoption-arg-type_of_loss", "type_of_loss"], [16, 0, 1, "cmdoption-arg-weight_per_element", "weight_per_element"], [16, 0, 1, "cmdoption-arg-weight_per_element_3ch", "weight_per_element_3ch"], [16, 0, 1, "cmdoption-arg-weighted", "weighted"], [16, 0, 1, "cmdoption-arg-weighted_3ch", "weighted_3ch"], [16, 0, 1, "cmdoption-arg-weighted_auto", "weighted_auto"], [15, 0, 1, "cmdoption-arg-write_desc", "write_desc"], [15, 0, 1, "cmdoption-arg-write_design_matrix", "write_design_matrix"], [14, 0, 1, "cmdoption-arg-write_kernel_matrix", "write_kernel_matrix"]]}, "objtypes": {"0": "std:cmdoption"}, "objnames": {"0": ["std", "cmdoption", "program option"]}, "titleterms": {"comput": 0, "write": [0, 11], "descriptor": [0, 11, 12, 15], "without": 0, "further": 0, "fit": [0, 1, 2], "lml": 1, "bcc": 1, "fe": 1, "qnml": 2, "hea": 2, "kernel": [3, 14], "regress": [3, 15], "us": [3, 4, 8, 19], "polynomi": 3, "what": [4, 19], "i": [4, 19], "miladi": [4, 8, 19], "contributor": [4, 19], "contact": [4, 19], "thei": [4, 19], "appreci": [4, 19], "download": 5, "build": [6, 7, 9], "iren": 6, "step": [6, 7, 9], "1": [6, 7, 9], "load": [6, 7], "modul": [6, 7], "set": [6, 7, 9], "bash": [6, 7], "environ": [6, 7, 9], "2": [6, 7, 9], "instal": [6, 7, 8], "marconi": 7, "potenti": 8, "lammp": 8, "prerequisit": 9, "compil": 9, "mode": 9, "variabl": 9, "advanc": 10, "option": 10, "databas": 11, "manipul": 11, "file": [11, 13], "format": 11, "name": 11, "input": [11, 13], "db": 11, "_model": 11, "space": 11, "output": 11, "g2": 12, "paramet": 12, "g3": 12, "behler": 12, "af": 12, "soap": 12, "power": 12, "spectrum": 12, "so3": 12, "3bodi": 12, "bispectrum": 12, "so4": 12, "mtp": 12, "pip": 12, "definit": 14, "select": 14, "spars": 14, "point": 14, "ml": 15, "task": 15, "onli": 15, "model": 15, "type": 15, "solv": 15, "algorithm": 15, "regular": 15, "loss": 15, "atom": 16, "system": 16, "articl": 17, "2022": 17, "2021": 17, "2020": 17, "2019": 17, "optim": 18, "hyperparamet": 18}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 56}})