Search.setIndex({"docnames": ["contents/examples/01_ex_write", "contents/examples/02_ex_lmlfe", "contents/examples/03_ex_qnmlhea", "contents/examples/04_ex_kernel", "contents/general", "contents/install/install_irene", "contents/install/install_marconi", "contents/install/installation", "contents/ml/advanced", "contents/ml/database", "contents/ml/descriptors", "contents/ml/input", "contents/ml/kernels", "contents/ml/model", "contents/ml/system", "contents/publications", "contents/weight", "index"], "filenames": ["contents/examples/01_ex_write.rst", "contents/examples/02_ex_lmlfe.rst", "contents/examples/03_ex_qnmlhea.rst", "contents/examples/04_ex_kernel.rst", "contents/general.rst", "contents/install/install_irene.rst", "contents/install/install_marconi.rst", "contents/install/installation.rst", "contents/ml/advanced.rst", "contents/ml/database.rst", "contents/ml/descriptors.rst", "contents/ml/input.rst", "contents/ml/kernels.rst", "contents/ml/model.rst", "contents/ml/system.rst", "contents/publications.rst", "contents/weight.rst", "index.rst"], "titles": ["Compute and write descriptors without further fit", "LML fit in bcc Fe", "QNML fit in HEA", "Kernel regression using polynomial kernel", "What is MILADY?", "Build on Irene", "Build on Marconi", "Prerequisites", "Advanced options", "Databases", "Descriptors", "Input files", "Kernels", "ML tasks", "Atomic systems", "Articles", "Optimization of hyperparameters", "What is MILADY?"], "terms": {"here": [0, 2, 3, 5, 6, 7, 8, 12, 13], "we": [0, 1, 2, 3, 4, 5, 6, 8, 9, 12, 13, 16, 17], "provid": [0, 1, 2, 3, 4, 5, 6, 7, 9, 13, 16, 17], "input": [0, 1, 2, 3, 8, 13, 14], "some": [0, 8, 9, 12, 13, 16], "common": [0, 10], "task": 0, "involv": 0, "differ": [0, 1, 9, 12], "type": [0, 4, 7, 8, 9, 10, 14, 17], "work": [0, 5, 6, 9, 15], "singl": [0, 10], "element": [0, 2, 8, 9, 14], "multi": 0, "compon": [0, 8, 9, 10, 12, 13], "system": [0, 1, 2, 3, 5, 7, 9, 10, 12, 13], "file": [0, 1, 2, 3, 5, 6, 8, 12, 13, 16], "save": 0, "design": [0, 4, 8, 9, 10, 11, 12, 13, 17], "matrix": [0, 9, 12, 13], "etc": [0, 3, 4, 9, 12, 13, 17], "The": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17], "list": [0, 3, 9, 11, 14], "ar": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17], "also": [0, 9, 10, 13], "exampl": [0, 1, 2, 3, 5, 6, 7, 9, 10, 12, 13, 14, 16], "thi": [0, 1, 3, 8, 9, 10, 11, 12, 13, 14, 16], "section": [0, 1, 2, 7, 8, 9, 11, 13, 14, 16], "an": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 16, 17], "atom": [0, 3, 4, 9, 10, 12, 13, 15, 17], "perform": [0, 1, 2, 3, 4, 9, 10, 12, 13, 16, 17], "ml_type": [0, 1, 2, 3, 12, 13], "1": [0, 1, 2, 3, 8, 9, 10, 12, 13, 14, 16], "option": [0, 7, 9, 10, 12, 13, 14, 16], "i": [0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "us": [0, 1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "structur": [0, 4, 5, 6, 9, 12, 13, 15, 17], "analysi": [0, 4, 13, 17], "base": [0, 3, 10, 12, 13], "raw": 0, "latex": 0, "cite": [0, 10], "goryaeva_natcomm_2020": 0, "visual": [0, 9], "space": [0, 4, 13, 16, 17], "conjunct": 0, "ml": [0, 1, 2, 3, 4, 9, 11, 16, 17], "model": [0, 1, 2, 3, 4, 9, 11, 15, 17], "implement": [0, 10, 13], "miladi": [0, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "e": [0, 8, 9, 10, 12, 13, 14, 16], "g": [0, 5, 6, 9, 10, 13, 14, 15, 16], "ref": [0, 9, 12], "messina_2020": 0, "relev": [0, 1, 2, 3, 9, 13], "can": [0, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 16, 17], "found": [0, 2, 11, 13], "compute_desc_onli": 0, "input_ml": [0, 1, 2, 3], "debug": [0, 1, 2, 3], "fals": [0, 1, 2, 3, 8, 9, 10, 12, 13, 14, 16], "set": [0, 1, 2, 3, 8, 9, 10, 11, 12, 13, 15], "onli": [0, 8, 9, 10, 11, 12, 16], "write_desc": [0, 9, 13], "true": [0, 1, 2, 3, 8, 9, 10, 12, 13, 14, 16], "descdb": [0, 9], "desc_forc": [0, 1, 2, 3, 9, 10, 13], "forc": [0, 1, 2, 3, 4, 8, 9, 10, 13, 16, 17], "defin": [0, 1, 3, 5, 6, 9, 11, 12, 13, 14], "your": [0, 1, 3, 4, 5, 6, 7, 10, 12, 16, 17], "weight": [0, 1, 2, 9, 11, 13, 14, 16], "multicompon": [0, 1, 2], "chemical_el": [0, 1, 2, 3, 14], "fe": [0, 9, 12, 14, 15], "composit": [0, 1, 2, 3, 9], "r_cut": [0, 1, 2, 3, 10], "4": [0, 1, 2, 3, 5, 7, 8, 9, 10, 12, 13, 15], "7d0": [0, 1, 2, 3], "cutoff": [0, 1, 2, 3, 10], "distac": [0, 2, 3], "rc": [0, 1, 2, 3], "descriptor_typ": [0, 1, 2, 3, 10], "9": [0, 2, 3, 6, 7, 10], "bispectrum": [0, 2, 3], "so4": [0, 2, 3], "j_max": [0, 2, 3, 10], "0": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 17], "angular": [0, 2, 3, 10], "moment": [0, 2, 3, 10], "end": [0, 1, 3, 5, 6, 8, 9, 13], "To": [0, 10], "rescal": 0, "between": [0, 9, 10, 13], "within": [0, 9], "certain": 0, "rang": [0, 9, 10], "valu": [0, 9, 10, 11, 12, 13, 14, 16], "see": [0, 1, 9, 10, 13, 14, 16], "3": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14], "linear": [1, 3, 4, 12, 13, 15, 17], "af": 1, "descriptor": [1, 2, 3, 4, 11, 12, 14, 17], "lml_fe_af": 1, "note": [1, 3, 12], "default": [1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 16], "home": [1, 5, 6, 7, 8, 13], "made": [1, 10, 12, 13], "subroutin": [1, 13], "solv": 1, "least": [1, 12, 13], "squar": [1, 12, 13, 14], "problem": [1, 3, 5, 9, 13], "In": [1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16], "order": [1, 2, 3, 4, 7, 8, 9, 10, 12, 13, 17], "avail": [1, 2, 10], "mld_fit_typ": [1, 2, 3, 10, 13], "basi": [1, 2, 3, 10, 12, 13, 15], "function": [1, 2, 3, 4, 5, 6, 7, 8, 10, 13, 16, 17], "mld_order": [1, 2, 3, 13], "regress": [1, 2, 4, 9, 12, 15, 17], "distanc": [1, 3, 12], "afs_typ": [1, 10], "standard": [1, 9, 10], "2": [1, 2, 3, 4, 8, 9, 10, 12, 13, 14, 16, 17], "modifi": 1, "n_rbf": [1, 10], "10": [1, 5, 7, 9, 10, 12, 13], "number": [1, 2, 3, 8, 9, 10, 12, 13, 14, 16], "radial": [1, 10], "channel": [1, 10, 14], "n_cheb": [1, 10], "8": [1, 10], "chebyshev": [1, 10], "polynomi": [1, 4, 10, 12, 13, 17], "quadrat": [2, 4, 13, 17], "nois": [2, 3, 8, 12], "ta": 2, "ti": 2, "v": [2, 10], "w": [2, 3, 4, 9, 12, 13, 14, 15, 16, 17], "high": [2, 4, 17], "entropi": [2, 4, 15, 17], "alloi": [2, 9], "qnml_hea_bso4": 2, "For": [2, 3, 9, 10, 12, 13, 14], "like": [2, 3, 4, 10, 13, 14, 17], "recommend": [2, 8, 10, 12, 13], "which": [2, 3, 7, 8, 9, 10, 11, 12, 13, 16], "svd": [2, 3, 12, 13], "rank": [2, 3, 12, 13], "estim": [2, 3, 10, 13], "other": [2, 8, 9, 10, 11, 12, 13, 14], "mld_type_quadrat": [2, 13], "convent": [2, 10], "qml": [2, 13], "lapack": [2, 3, 7, 13], "full": [2, 3, 8, 10, 13], "fix_no_of_el": [2, 3, 9, 14], "chemic": [2, 3, 9, 14], "speci": [2, 3, 9, 14], "db": [2, 3, 16], "appli": [2, 8, 9, 13], "each": [2, 3, 9, 10, 12, 13, 16], "keep": 2, "close": [2, 3, 13], "weight_per_el": [2, 14], "56": 2, "41": 2, "44": [2, 12], "59": [2, 12], "5": [2, 5, 10, 13, 15, 16], "knml": 3, "fit": [3, 9, 10, 13], "kernel_poly_w_bso4": 3, "howev": [3, 9, 10, 12, 16], "ani": [3, 9, 13, 14], "requir": [3, 7, 11, 13], "one": [3, 8, 9, 10, 13], "pre": 3, "process": 3, "step": [3, 12, 16], "actual": [3, 13], "two": [3, 9, 10, 12, 13], "all": [3, 7, 8, 9, 10, 11, 12, 13, 14, 16], "three": [3, 7, 9, 12, 13, 16], "perfrom": 3, "lml": [3, 13], "same": [3, 5, 6, 9, 10, 13, 14, 16], "you": [3, 5, 6, 7, 8, 9, 10, 12, 13, 16], "intend": [3, 9], "get": 3, "repres": [3, 9], "environ": [3, 9, 12], "from": [3, 8, 9, 10, 11, 12, 13, 16], "databas": [3, 4, 8, 11, 12, 13, 14, 16, 17], "those": [3, 9, 14], "should": [3, 7, 9, 10, 12, 13, 14, 16], "run": [3, 7, 8], "directori": [3, 5, 6, 7, 9, 11], "let": [3, 9], "take": [3, 9, 10, 14], "want": [3, 9], "bso4": 3, "store": [3, 9, 13], "vacanc": 3, "ml_01": 3, "ml_02": 3, "ml_03": 3, "At": 3, "pleas": [3, 8, 13], "copi": [3, 5, 6, 7], "them": [3, 7, 9, 13, 16], "typic": [3, 7, 9, 12, 13], "select": [3, 8, 9, 10], "point": [3, 8, 9, 13, 15], "done": [3, 9], "mcd": [3, 12], "mahalanobi": [3, 12], "class": [3, 9, 12, 13, 16], "expon": 3, "write_kernel_matrix": [3, 12], "content": 3, "dump": [3, 13], "write": [3, 8, 12, 13], "n_pca": 3, "classes_for_mcd": [3, 12], "07": [3, 13], "08": 3, "13": 3, "refer": [3, 5, 6, 7, 9, 12], "choos": [3, 9, 10, 12, 13], "more": [3, 7, 9, 10, 12, 13], "bulk": [3, 12], "md": 3, "deform": [3, 12], "power_mcd": [3, 12], "05d0": [3, 12], "grid": [3, 10, 12, 13], "selction": 3, "np_kernel_ref": [3, 12], "1000": 3, "propos": [3, 10], "np_kernel_ful": [3, 12], "4000": 3, "outsid": 3, "kernel_dump": [3, 12], "just": 3, "chang": [3, 9], "previou": [3, 5, 6, 8, 10], "characterist": [3, 9], "": [3, 7, 9, 10, 12, 13, 15], "look": 3, "kernel_typ": [3, 12], "kernel_pow": [3, 12], "length_kernel": [3, 12], "05": [3, 12], "hyperparamet": 3, "test": [3, 5, 6, 7, 8, 9, 12, 13, 16], "sigma_kernel": [3, 12], "d0": [3, 8, 9, 10, 12, 13, 16], "machin": [4, 11, 13, 15, 17], "learn": [4, 5, 6, 11, 15, 17], "dynam": [4, 11, 12, 17], "packag": [4, 11, 15, 17], "open": [4, 17], "souc": [4, 17], "code": [4, 7, 9, 10, 11, 17], "creat": [4, 5, 6, 7, 13, 17], "scientist": [4, 17], "our": [4, 7, 9, 12, 17], "goal": [4, 17], "improv": [4, 17], "accuraci": [4, 14, 17], "predict": [4, 8, 15, 17], "power": [4, 12, 17], "atomist": [4, 17], "simul": [4, 9, 11, 15, 17], "algorithm": [4, 9, 11, 12, 16, 17], "prioritis": [4, 17], "method": [4, 13, 17], "reason": [4, 10, 17], "comput": [4, 8, 9, 10, 12, 13, 14, 15, 17], "cost": [4, 17], "distribut": [4, 7, 9, 17], "under": [4, 17], "academ": [4, 17], "softwar": [4, 17], "licenc": [4, 17], "asl": [4, 17], "main": [4, 17], "develop": [4, 10, 15, 17], "field": [4, 17], "suitabl": [4, 17], "molecular": [4, 11, 12, 17], "metamodel": [4, 17], "materi": [4, 9, 15, 17], "properti": [4, 9, 13, 17], "vibrat": [4, 15, 17], "humo": [4, 17], "lumo": [4, 17], "energi": [4, 8, 9, 10, 13, 15, 16, 17], "represent": [4, 17], "featur": [4, 17], "sparcif": [4, 17], "optim": [4, 11, 12, 17], "train": [4, 8, 9, 13, 17], "advantag": [4, 17], "hpc": [4, 17], "well": [4, 9, 12, 17], "parallel": [4, 7, 17], "ha": [4, 7, 9, 10, 12, 13, 17], "good": [4, 17], "scalabl": [4, 17], "It": [4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 17], "mpi": [4, 5, 7, 8, 17], "pbla": [4, 17], "scalapack": [4, 5, 7, 13, 17], "larg": [4, 9, 13, 17], "choic": [4, 10, 12, 13, 17], "possibl": [4, 8, 13, 17], "variou": [4, 9, 16, 17], "includ": [4, 7, 8, 9, 13, 14, 17], "chao": [4, 13, 17], "kernel": [4, 13, 17], "sourc": [4, 5, 6, 7, 9, 17], "happi": [4, 5, 6, 17], "contributin": [4, 17], "present": [4, 5, 6, 13, 17], "architectur": [4, 17], "m": [4, 10, 12, 13, 15, 17], "c": [4, 9, 15, 17], "marinica": [4, 8, 15, 17], "A": [4, 7, 9, 10, 11, 12, 13, 15, 17], "goryaeva": [4, 13, 15, 17], "start": [4, 8, 9, 10, 17], "2015": [4, 17], "srmp": [4, 17], "cea": [4, 17], "saclai": [4, 17], "franc": [4, 17], "chronolog": [4, 17], "unn": [4, 17], "toc": [4, 17], "2016": [4, 17], "2018": [4, 17], "lapoint": [4, 15, 17], "2021": [4, 13, 17], "j": [4, 10, 13, 14, 15, 16, 17], "baima": [4, 15, 17], "2019": [4, 6, 7, 17], "2022": [4, 7, 12, 17], "allera": [4, 17], "zhong": [4, 12, 17], "support": [4, 7, 17], "anida": [4, 17], "khizar": [4, 17], "lgl": [4, 17], "christian": [4, 17], "van": [4, 17], "wambek": [4, 17], "coupl": [4, 10, 15, 17], "lammp": [4, 17], "thoma": [4, 17], "d": [4, 8, 12, 13, 15, 17], "swinburn": [4, 15, 17], "cinam": [4, 17], "marseil": [4, 17], "question": [4, 17], "suggest": [4, 7, 10, 17], "sent": [4, 17], "email": [4, 5, 6, 17], "answer": [4, 17], "instruct": [5, 6], "most": [5, 8, 12, 13], "powerful": 5, "french": 5, "prace": 5, "supercomput": [5, 6], "joliotcuri": 5, "describ": [5, 6, 8, 9, 10, 12, 13], "wai": [5, 6, 10], "know": [5, 6, 10, 12], "If": [5, 6, 9, 10, 12, 13, 14, 16], "better": [5, 6, 15], "precedur": [5, 6], "about": [5, 6, 9, 10, 12, 13], "experi": [5, 6, 15, 16], "send": [5, 6], "u": [5, 6], "updat": [5, 6], "document": [5, 6, 8, 10, 13], "follow": [5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16], "github": [5, 6, 7], "repositori": [5, 6, 7, 8], "preserv": [5, 6], "mld": [5, 6, 7], "locat": [5, 6, 7, 8, 9], "hereaft": [5, 6, 7], "my": [5, 6], "bashrc": [5, 6], "contain": [5, 6, 7, 9, 11, 12, 13, 14], "variabl": [5, 6, 8, 12], "openmpi": [5, 7], "mkl": [5, 6, 7], "21": [5, 13, 15], "fortran": [5, 7], "inteloneapi": 5, "gnu": [5, 7], "cmake": [5, 6, 7], "18": [5, 6, 7], "export": [5, 6, 7], "ompi_fc": 5, "ifort": [5, 6, 7], "ompi_cxx": 5, "ompi_cc": 5, "gcc": [5, 6], "mld_build": [5, 6, 7], "mld_instal": [5, 6, 7], "procedur": [5, 6, 7, 9], "whilst": [5, 6, 7, 10, 12, 13], "mld_testdir": [5, 6, 7], "compulsori": [5, 6, 7, 11], "ad": [5, 6, 12, 16], "f_setenv_miladi": [5, 6, 7], "unset": [5, 6, 7], "mld_roodir": [5, 6, 7], "mld_scrdir": [5, 6, 7], "mld_srcdir": [5, 6, 7], "mld_buidir": [5, 6, 7], "mld_insdir": [5, 6, 7], "mld_tesdir": [5, 6, 7], "mld_setenv": [5, 6, 7], "omp_insdir": [5, 6, 7], "omp_root": [5, 6, 7], "cccworkdir": 5, "z": [5, 8, 10, 15], "in_r": 5, "undefin": 5, "mkl_root": [5, 6, 7], "mklroot": [5, 6, 7], "oap_roodir": 5, "ccc": 5, "product": 5, "ifx": 5, "intel": [5, 6, 7], "20": [5, 10], "ON": [5, 6, 7], "path": [5, 6, 7, 8, 9], "script": [5, 6, 7, 9], "charg": [5, 6, 7], "do": [5, 6, 8, 10, 12, 13], "forget": [5, 6], "befor": [5, 6, 10], "compile_miladi": [5, 6, 7], "f_compile_milady_mix": [5, 7], "make": [5, 6, 7, 12, 13], "j4": 5, "And": [5, 6], "execut": [5, 6, 7, 11, 12], "bin": [5, 6, 7], "milady_main": [5, 6, 7], "ex": [5, 6, 7], "wide": 6, "env": 6, "skl": 6, "pe": 6, "xe": 6, "2020": 6, "binari": [6, 9], "intelmpi": [6, 7], "i_mpi_fc": 6, "i_mpi_f90": 6, "i_pmi_cxx": 6, "i_mpi_cc": 6, "cineca": 6, "prod": 6, "opt": 6, "compil": 6, "impi": 6, "304": 6, "intel64": 6, "f_compile_milady_intel": [6, 7], "j6": [6, 7], "current": [7, 10, 14], "version": [7, 10, 11, 13], "x": [7, 8, 9, 10, 12, 13], "gfortran": 7, "librari": 7, "19": [7, 10], "mix": 7, "user": [7, 8, 11, 13, 16], "compat": [7, 9], "oneapi": 7, "both": [7, 13, 14], "equal": [7, 9, 10, 14, 16], "min": [7, 9, 13], "v9": 7, "prefer": 7, "mean": [7, 13, 16], "first": [7, 9, 12, 13], "six": [7, 9], "instal": 7, "detail": [7, 9, 10, 12, 13], "later": 7, "last": [7, 9, 12], "redefinit": 7, "usr": 7, "local": [7, 9], "iopenmpi": 7, "respect": [7, 9, 12, 13], "conveni": 7, "bash": 7, "f_setenv_milady_marinica": 7, "output": 7, "now": 7, "could": 7, "f_compile_milady_gnu": 7, "invok": 7, "f_ctest_miladi": 7, "f_explore_miladi": 7, "6": [7, 10, 12, 13], "job": 7, "THAT": 7, "folk": 7, "case": [8, 9, 10, 12, 13, 14, 16], "give": [8, 10, 12, 13, 14], "error": [8, 9, 12, 13, 16], "becaus": [8, 12], "lack": 8, "unless": 8, "veri": [8, 9, 12, 13], "developp": 8, "iread_ml": 8, "integ": [8, 9, 10, 12, 13, 14, 16], "fly": 8, "read": [8, 9, 10], "isave_ml": 8, "noth": 8, "hdd": 8, "thread": 8, "kcross": 8, "logic": [8, 9, 10, 12, 13, 14, 16], "marginal_likelihood": 8, "sparsif": 8, "n_kcross": 8, "target_typ": 8, "force_comp": 8, "y": [8, 10, 13, 15], "toy_model": 8, "gener": [8, 9, 10, 12, 13], "analyt": 8, "l": [8, 10, 13, 15, 16], "being": [8, 13], "paramet": [8, 9, 12, 13, 16], "dimension": [8, 10], "data": [8, 9, 13], "f": [8, 9, 10, 13, 15, 16], "mathbf": [8, 10, 12, 13, 16], "begin": [8, 13], "sin": 8, "left": [8, 12, 13, 16], "frac": [8, 10, 12, 13, 14], "pi": [8, 10], "x_1": 8, "right": [8, 12, 13, 16], "text": [8, 11], "mathbb": 8, "r": [8, 10, 13, 15], "co": [8, 10], "x_2": 8, "sum_": [8, 9, 10, 13, 14], "exp": [8, 12], "x_i": 8, "ge": 8, "nonumb": [8, 10], "wa": [8, 10, 12, 15], "alreadi": 8, "manag": 8, "build_subdata": 8, "build": [8, 12, 13], "sub": 8, "whole": [8, 12], "pref": 8, "charact": [8, 9, 12, 13, 14, 16], "len": [8, 9, 14, 16], "prefix": [8, 11], "subdatabas": [8, 9], "name": [8, 11, 12, 13, 16], "00": 8, "nd_data": 8, "mlposcar": 8, "extract": [8, 9], "ns_data": 8, "how": [8, 9], "mani": [8, 9, 15, 16], "100": [8, 10, 13], "i_begin": 8, "poscar": [8, 9, 12], "kelem": [8, 9], "random": [8, 9], "subset": [8, 9], "60": [8, 9], "where": [8, 9, 10, 11, 13], "test_ml": 8, "dim_data": 8, "extren": 8, "impos": [8, 13], "otherwis": [8, 9], "intern": [8, 10, 12], "depend": [8, 9, 10, 11, 12], "db_file": [8, 9, 11, 16], "n_frac": 8, "real": [8, 10, 12, 13, 16], "fraction": 8, "dim_data_test": 8, "n": [8, 9, 10, 15], "dim_data_train": 8, "math": 8, "le": [8, 10], "split": 8, "given": [8, 9, 10, 12, 13, 14], "dese": [8, 12], "80": [9, 14, 16], "chosen": [9, 14], "potenti": [9, 10, 12, 13, 15, 16], "line": [9, 12, 13, 16], "syntax": 9, "klm": 9, "number_of_fil": 9, "number_of_selected_fil": 9, "db_model_in": 9, "db_path": 9, "With": [9, 13], "have": [9, 10, 12, 13], "selection_typ": 9, "insid": 9, "mention": [9, 10, 13], "randomli": [9, 12], "configur": [9, 11, 12, 13], "new": [9, 10, 16], "seed": 9, "11": [9, 12, 15], "iread_energi": 9, "fix": [9, 10, 13], "taken": [9, 10], "target": [9, 13], "second": [9, 12, 14], "third": [9, 10, 14], "ref_energy_per_el": 9, "These": [9, 11, 14, 16], "when": [9, 12, 13, 14], "shift": 9, "total": [9, 10, 13], "situat": 9, "exemplifi": 9, "lower": [9, 10, 12, 13, 16], "absolut": 9, "dft": [9, 15], "rigid": 9, "toward": [9, 15], "ab": [9, 15], "intio": 9, "induc": 9, "numer": [9, 10], "instabl": 9, "ii": [9, 12], "physic": [9, 12], "consider": [9, 12], "clean": 9, "molecul": 9, "separ": [9, 13, 16], "infinit": 9, "zero": [9, 13], "There": [9, 10, 12], "shif": 9, "ot": 9, "e_": [9, 13], "textrm": [9, 10, 13, 14, 16], "supos": 9, "over": 9, "n_1": [9, 10], "n_2": [9, 10], "ldot": [9, 10], "n_": [9, 10, 13, 14], "Then": 9, "equat": [9, 10], "fatal": 9, "besid": 9, "inform": [9, 13, 14], "cell": 9, "vector": [9, 10, 13], "coordin": 9, "usual": [9, 12], "explicit": 9, "compound": 9, "stress": [9, 13, 16], "tensor": 9, "independ": 9, "sigma_": [9, 12, 13], "xx": 9, "yy": 9, "zz": 9, "yz": 9, "xz": 9, "xy": 9, "vasp": 9, "ispin": 9, "tag": 9, "ev": 9, "\u00e5": [9, 10], "report": [9, 16], "below": [9, 16], "111": 9, "26": 9, "15": [9, 13, 15], "7255500": 9, "7884238": 9, "ef": 9, "mass": [9, 14], "e_1": 9, "e_2": 9, "e_3": 9, "00000000": 9, "unit": [9, 10], "1\u00e5": 9, "63475324": 9, "cartesian": [9, 10], "posit": [9, 10, 12, 13], "31737662": 9, "empti": [9, 14], "42315918": 9, "magnet": 9, "non": [9, 13], "known": [9, 13], "treat": [9, 10, 13], "comment": 9, "indic": [9, 13], "built": [9, 10, 14], "tot": 9, "_": [9, 10, 13, 16], "altern": 9, "perfect": [9, 12], "crystal": [9, 15], "than": [9, 12], "oxid": 9, "sixth": 9, "slightli": [9, 10], "instanc": 9, "cementit": 9, "110": 9, "12": [9, 12], "directli": 9, "calcul": 9, "ovito": 9, "simpl": 9, "renam": 9, "allow": 9, "vesta": 9, "descritor": [9, 10, 13], "deriv": 9, "particular": [9, 13, 14], "box": 9, "spin": 9, "ignor": 9, "complusori": 9, "traj": 9, "ASE": 9, "python": 9, "_traj": 9, "py": 9, "togeth": 9, "convers": 9, "extend": 9, "xyz": 9, "_poscar2xyz": 9, "invers": [9, 13], "_xyz2poscar": 9, "ccklmxxxxxx": 9, "notat": [9, 13], "cc": 9, "vari": 9, "01": [9, 12], "99": 9, "part": [9, 12, 13], "elast": [9, 12], "defect": [9, 15], "link": 9, "thu": 9, "02": [9, 10, 16], "correspond": [9, 12, 14], "state": 9, "eo": 9, "import": [9, 12], "while": 9, "04": 9, "stack": 9, "fault": [9, 13], "gsf": 9, "interest": [9, 12], "index": 9, "k": [9, 10, 12, 15], "bcc": [9, 15], "hcp": 9, "db_model": [9, 11, 13, 16], "summari": 9, "stand": [9, 16], "categori": 9, "after": 9, "attribut": 9, "belong": [9, 12, 16], "rest": 9, "its": 9, "form": [9, 10, 13], "t": [9, 13, 15], "final": [9, 10, 12], "scheme": 9, "superposit": 9, "tff": 9, "_e": [9, 16], "_f": [9, 16], "max": [9, 10, 13], "search": [9, 13], "optimum": 9, "evolutionari": 9, "1e2": 9, "1e6": 9, "1e1": 9, "1e3": 9, "1e4": 9, "everywher": 9, "e0": 9, "result": [9, 13, 16], "without": [9, 12, 13], "120": 9, "614": 9, "425": 9, "e2": 9, "e1": 9, "e6": 9, "e4": 9, "22": 9, "130": 9, "abov": [9, 10, 12, 13, 14], "As": 9, "becom": [9, 10, 16], "exept": 9, "writen": [9, 13], "ask": 9, "desc_file_format": 9, "written": [9, 10, 12, 13], "extens": 9, "eml": 9, "csv": 9, "npz": 9, "cc_klm_xxxxxx": 9, "nat": 9, "dim_desc": [9, 12, 13], "dimens": [9, 10, 13, 14], "column": [9, 12, 13], "id": [9, 12], "shape": [9, 12], "ensur": 9, "smaller": 9, "size": [9, 16], "factor": [9, 10, 13, 16], "compar": 9, "pai": [9, 12], "attent": 9, "sometim": [9, 12], "cut": 10, "off": 10, "writ": 10, "desactiv": 10, "activ": [10, 12, 13, 16], "fourier": 10, "seri": 10, "smooth": [10, 12], "overlap": 10, "7": [10, 12], "14": 10, "hybrid": 10, "up": [10, 13, 15], "m_": [10, 13], "mu": 10, "nu": 10, "200": [10, 12, 15], "permutation": 10, "invari": 10, "eta_max_g2": 10, "eta": 10, "n_g2_eta": 10, "generatig": 10, "formula": [10, 13, 14], "eta_p": 10, "p": [10, 12, 15], "strat": 10, "n_g2_r": 10, "r_": 10, "n_g3_eta": 10, "n_g3_lambda": 10, "lambda": [10, 13], "lambda_p": 10, "highli": 10, "n_g3_zeta": 10, "zeta": 10, "zeta_p": 10, "control": [10, 11, 13, 14], "addit": 10, "strict_behl": 10, "automat": [10, 13, 14], "paper": [10, 12], "tchbychev": 10, "introduc": [10, 12, 16], "orgin": 10, "publish": 10, "prb": 10, "bartok2013": 10, "g_n": 10, "ji": 10, "jk": 10, "t_l": 10, "theta_": 10, "ijk": 10, "time": [10, 12, 13, 16], "tchebychev": 10, "respectivelli": [10, 14, 16], "strong": 10, "prime": 10, "g_": 10, "gaussian": 10, "n_soap": 10, "maximum": [10, 16], "spheric": 10, "harmon": 10, "l_max": 10, "nspecies_soap": 10, "lsoap_diag": 10, "cdot": 10, "much": 10, "less": 10, "diagon": [10, 13], "lsoap_lnorm": 10, "normal": [10, 12, 13], "2l": 10, "lsoap_norm": 10, "r_cut_width_soap": 10, "doubl": 10, "precis": [10, 13], "intermedi": 10, "regim": 10, "5d0": 10, "momentum": 10, "radial_pow_so3": 10, "flag": 10, "origin": [10, 12], "refxxx": 10, "acitv": 10, "rbf": 10, "l_": [10, 12, 16], "so": 10, "th": [10, 13, 14, 16], "p_": 10, "nl": 10, "c_": 10, "nlm": 10, "wigner": 10, "coeffici": 10, "w_j": 10, "y_": 10, "lm": 10, "equiv": 10, "w_i": [10, 14], "ij": 10, "cdotp": 10, "603": 10, "ideea": 10, "bodi": 10, "refxxxdegironcoli": 10, "util": 10, "\u00e9": 10, "maxim": 10, "obtain": [10, 13], "b_": 10, "l_1": 10, "l_2": 10, "m_1": 10, "m_2": 10, "clebsch": 10, "gordan": 10, "desriptor": 10, "difficult": 10, "beforehand": 10, "naiv": 10, "rule": [10, 14], "reduc": 10, "drastic": 10, "140": 10, "instead": 10, "gc": 10, "karakala": 10, "cg": 10, "condit": 10, "releas": 10, "lbso3_diag": 10, "483": [10, 15], "coeffcient": 10, "overcomplet": 10, "j_": [10, 13], "easi": 10, "guess": 10, "moreov": [10, 12], "j_1": 10, "j_2": 10, "complet": [10, 12, 13, 15], "componenet": [10, 16], "spectral": 10, "inv_r0_input": 10, "project": 10, "north": 10, "pole": 10, "multipli": 10, "strictli": 10, "brilliant": 10, "bartok": 10, "et": [10, 12, 13, 15], "al": [10, 12, 13, 15], "theori": [10, 15], "trust": 10, "lbso4_diag": 10, "gap": 10, "snap": 10, "notted": 10, "bi": 10, "mathemat": [10, 13], "justifi": 10, "thompsson": 10, "minimum": [10, 13], "degre": [10, 13], "mtp_poly_min": 10, "mtp_poly_max": 10, "mtp_rad_ord": 10, "mtp_dim": 10, "lambda_krr": [10, 16], "regular": [10, 14, 16], "norm": [10, 13], "correspod": 10, "neg": [10, 12, 13], "skip": 10, "cluster": 10, "expans": 10, "sum_i": 10, "v_1": 10, "r_i": 10, "v_2": 10, "v_3": 10, "express": 10, "sum": 10, "pair": 10, "threeatom": 10, "angl": 10, "term": [10, 13], "forth": 10, "even": 10, "combin": 10, "expant": 10, "driven": [10, 12, 13, 15], "l_body_ord": 10, "enabl": [10, 13], "fourth": 10, "body_d_max": 10, "bond_dist_transform": 10, "bond_beta": 10, "bond_dist_ann": 10, "vertor": 10, "diment": 10, "expens": 10, "v_4": 10, "try": [10, 12], "todo": 10, "string": 11, "denot": [11, 13], "prefixsim": 11, "keyword": [11, 13, 14], "regard": 11, "descript": 11, "eamtab": 11, "potin": 11, "din": 11, "gin": 11, "theirs": [11, 16], "presenc": 11, "reminisc": 11, "ndm": 11, "root": [11, 14], "futur": 11, "suppress": 11, "mai": [11, 13], "mode": 12, "firstli": 12, "appropri": 12, "parametr": 12, "k_1": 12, "k_2": 12, "exponenti": 12, "tild": 12, "se": 12, "2l_": 12, "batchattarya": 12, "top": 12, "sigma": [12, 13], "covari": 12, "sampl": 12, "sure": 12, "adapt": [12, 13], "reson": 12, "what": 12, "hea": 12, "aspirin": 12, "defalut": 12, "eq": [12, 16], "attet": 12, "sens": 12, "write_krnel_matrix": 12, "intuit": 12, "nice": 12, "constant": 12, "special": 12, "treatment": [12, 13], "consequ": 12, "database_refer": 12, "beyond": 12, "bia": 12, "encompass": 12, "weird": [12, 13, 16], "outlier": 12, "kernel_matrix": 12, "dat": [12, 13], "number_of_data_kernel": 12, "ascii": 12, "2314": 12, "a1": 12, "a2": 12, "43": 12, "27": 12, "07_111_000003": 12, "b1": 12, "b2": 12, "bd": 12, "234": 12, "09_111_000010": 12, "c1": 12, "c2": 12, "cd": 12, "127": 12, "11_111_000023": 12, "again": 12, "label": [12, 16], "identifi": 12, "human": 12, "readabl": 12, "similar": 12, "advic": 12, "draft": 12, "cur": 12, "decomposit": [12, 13], "mahonei": 12, "advanc": [12, 13], "applic": 12, "descoposit": 12, "cur_kval": 12, "cur_rval": 12, "cur_ep": 12, "sensibl": 12, "ffor": 12, "collect": 12, "specifi": 12, "small": 12, "around": [12, 13], "mediam": 12, "larger": 12, "800": 12, "statist": 12, "od": 12, "leav": 12, "leverag": 12, "score": [12, 15], "cannot": 12, "row": 12, "nor": 12, "chois": 12, "kei": 13, "word": 13, "qnml": 13, "ridg": 13, "reserv": 13, "analyz": 13, "exclud": [13, 16], "specif": 13, "wheather": 13, "verifi": 13, "consid": 13, "command": [13, 16], "quandrat": 13, "threfor": 13, "supplementari": [13, 14], "snap_type_quadrat": 13, "polyc_n_poli": 13, "polyc_n_hermit": 13, "paramt": 13, "solut": 13, "precondit": 13, "exactelli": [13, 14], "remain": 13, "shortli": 13, "speak": 13, "maxiumum": 13, "hermit": 13, "handl": 13, "beta": 13, "b": [13, 15], "hesit": 13, "observ": 13, "amat": 13, "fact": 13, "symmetr": 13, "bunch": 13, "kaufman": 13, "pivot": 13, "serial": 13, "lu": 13, "fast": 13, "compact": 13, "low": 13, "linar": 13, "diesign": 13, "qr": 13, "assumpt": 13, "stop": 13, "lq": 13, "restrict": 13, "constraint": 13, "fill": 13, "snap_class_constraint": 13, "defici": 13, "seek": 13, "minim": 13, "choleski": 13, "symlmetr": 13, "definit": 13, "consequnetli": 13, "avoid": 13, "favor": 13, "probabl": 13, "segmet": 13, "nan": 13, "slowest": 13, "far": 13, "via": 13, "svd_rcond": 13, "limit": [13, 15], "singular": 13, "eigenvalu": 13, "obvious": 13, "impact": 13, "choosen": 13, "epsilon": 13, "write_design_matrix": 13, "weigth": [13, 14, 16], "matix": 13, "number_of_data": 13, "design_matrix": 13, "format": [13, 14], "2nd": [13, 14], "come": 13, "mld_regularization_typ": 13, "lambda_": [13, 16], "krr": [13, 16], "moor": 13, "penros": 13, "rr": 13, "logarithm": 13, "min_lambda_krr": 13, "max_lambda_krr": 13, "n_values_lambda_krr": 13, "type_of_loss": 13, "four": 13, "j_e": 13, "j_f": 13, "align": 13, "m_e": 13, "omega_": 13, "hat": 13, "m_f": 13, "f_": [13, 16], "datapoint": 13, "nummber": 13, "alpha": 13, "train_onli": 13, "login": 13, "No": 13, "exhaust": 14, "symbol": 14, "weigth_per_el": 14, "weigth_per_element_3ch": 14, "no_of_el": 14, "among": 14, "109": 14, "period": 14, "tabl": 14, "re": 14, "custom": [14, 16], "associ": 14, "accout": 14, "geometr": 14, "weighted_auto": 14, "weighted_3ch": 14, "3rd": 14, "weight_per_element_3ch": 14, "valid": 14, "necessari": 14, "redefin": 14, "ch": 14, "sqrt": 14, "m_i": 14, "m_j": 14, "assign": 14, "z_i": 14, "z_j": 14, "chemical_elements_invis": 14, "invis": 14, "examl": 14, "put": [14, 16], "proport": 14, "exact": 14, "anf": 14, "thank": 15, "author": 15, "d\u00e9r\u00e8": 15, "grigorev": 15, "kermod": 15, "ventelon": 15, "effici": 15, "transfer": 15, "phy": 15, "rev": 15, "mater": 15, "103803": 15, "gilbert": 15, "arakawa": 15, "bergstrom": 15, "caturla": 15, "dudarev": 15, "gao": 15, "hu": 15, "xunxiang": 15, "kurtz": 15, "litnovski": 15, "marian": 15, "perspect": 15, "multiscal": 15, "acceler": 15, "fusion": 15, "nucl": 15, "554": 15, "153113": 15, "synergist": 15, "initio": 15, "disloc": 15, "arxiv": 15, "preprint": 15, "2111": 15, "11262": 15, "dai": 15, "maillet": 15, "reinforc": 15, "encod": 15, "crystallin": 15, "solid": 15, "distort": 15, "natur": 15, "comm": 15, "4691": 15, "thiri": 15, "mallat": 15, "provil": 15, "becquart": 15, "surrog": 15, "063802": 15, "brunev": 15, "maliyov": 15, "extrapol": 15, "unconverg": 15, "gw": 15, "chem": 15, "16": 15, "4399": 15, "4407": 15, "messina": 15, "quaglino": 15, "domain": 15, "castin": 15, "bonni": 15, "kraus": 15, "multifidel": 15, "framework": 15, "construc": 15, "ting": 15, "scale": 15, "nimb": 15, "interatom": 15, "comp": 15, "sci": 15, "166": 15, "fulli": 16, "share": 16, "issu": 16, "genet": 16, "through": 16, "object": 16, "f_e": 16, "mae": 16, "f_f": 16, "ga_opt": 16, "averag": 16, "multipl": 16, "optimize_weight": 16, "class_no_optimize_weight": 16, "90": 16, "06": 16, "optimize_ga_popul": 16, "popul": 16, "optimize_ga_pupl": 16, "optimize_weights_l1": 16, "regularizit": 16, "sum_k": 16, "w_k": 16, "optimize_weights_l2": 16, "optimize_weights_l": 16, "max_iter_optimize_weight": 16, "40": 16, "factor_energy_error": 16, "force_energy_error": 16, "factor_force_error": 16, "force_force_error": 16, "factor_stress_error": 16, "force_stress_error": 16, "l_e": 16, "l_f": 16, "argument": 16}, "objects": {"": [[10, 0, 1, "cmdoption-arg-afs_type", "afs_type"], [10, 0, 1, "cmdoption-arg-body_D_max", "body_D_max"], [10, 0, 1, "cmdoption-arg-bond_beta", "bond_beta"], [10, 0, 1, "cmdoption-arg-bond_dist_ann", "bond_dist_ann"], [10, 0, 1, "cmdoption-arg-bond_dist_transform", "bond_dist_transform"], [8, 0, 1, "cmdoption-arg-build_subdata", "build_subdata"], [14, 0, 1, "cmdoption-arg-chemical_elements", "chemical_elements"], [14, 0, 1, "cmdoption-arg-chemical_elements_invisible", "chemical_elements_invisible"], [16, 0, 1, "cmdoption-arg-class_no_optimize_weights", "class_no_optimize_weights"], [12, 0, 1, "cmdoption-arg-classes_for_mcd", "classes_for_mcd"], [12, 0, 1, "cmdoption-arg-cur_eps", "cur_eps"], [12, 0, 1, "cmdoption-arg-cur_kval", "cur_kval"], [12, 0, 1, "cmdoption-arg-cur_rval", "cur_rval"], [9, 0, 1, "cmdoption-arg-db_file", "db_file"], [9, 0, 1, "cmdoption-arg-db_path", "db_path"], [9, 0, 1, "cmdoption-arg-desc_file_format", "desc_file_format"], [13, 0, 1, "cmdoption-arg-desc_forces", "desc_forces"], [10, 0, 1, "cmdoption-arg-descriptor_type", "descriptor_type"], [8, 0, 1, "cmdoption-arg-dim_data", "dim_data"], [10, 0, 1, "cmdoption-arg-eta_max_g2", "eta_max_g2"], [16, 0, 1, "cmdoption-arg-factor_energy_error", "factor_energy_error"], [16, 0, 1, "cmdoption-arg-factor_force_error", "factor_force_error"], [16, 0, 1, "cmdoption-arg-factor_stress_error", "factor_stress_error"], [14, 0, 1, "cmdoption-arg-fix_no_of_elements", "fix_no_of_elements"], [8, 0, 1, "cmdoption-arg-force_comp", "force_comp"], [8, 0, 1, "cmdoption-arg-i_begin", "i_begin"], [10, 0, 1, "cmdoption-arg-inv_r0_input", "inv_r0_input"], [9, 0, 1, "cmdoption-arg-iread_energy", "iread_energy"], [8, 0, 1, "cmdoption-arg-iread_ml", "iread_ml"], [8, 0, 1, "cmdoption-arg-isave_ml", "isave_ml"], [10, 0, 1, "cmdoption-arg-j_max", "j_max"], [8, 0, 1, "cmdoption-arg-kcross", "kcross"], [8, 0, 1, "cmdoption-arg-kelem", "kelem"], [12, 0, 1, "cmdoption-arg-kernel_dump", "kernel_dump"], [12, 0, 1, "cmdoption-arg-kernel_power", "kernel_power"], [12, 0, 1, "cmdoption-arg-kernel_type", "kernel_type"], [10, 0, 1, "cmdoption-arg-l_body_order", "l_body_order"], [10, 0, 1, "cmdoption-arg-6", "l_max"], [10, 0, 1, "cmdoption-arg-lambda_krr", "lambda_krr"], [10, 0, 1, "cmdoption-arg-lbso3_diag", "lbso3_diag"], [10, 0, 1, "cmdoption-arg-lbso4_diag", "lbso4_diag"], [12, 0, 1, "cmdoption-arg-length_kernel", "length_kernel"], [10, 0, 1, "cmdoption-arg-lsoap_diag", "lsoap_diag"], [10, 0, 1, "cmdoption-arg-lsoap_lnorm", "lsoap_lnorm"], [10, 0, 1, "cmdoption-arg-lsoap_norm", "lsoap_norm"], [8, 0, 1, "cmdoption-arg-marginal_likelihood", "marginal_likelihood"], [16, 0, 1, "cmdoption-arg-max_iter_optimize_weights", "max_iter_optimize_weights"], [13, 0, 1, "cmdoption-arg-ml_type", "ml_type"], [13, 0, 1, "cmdoption-arg-mld_fit_type", "mld_fit_type"], [13, 0, 1, "cmdoption-arg-mld_order", "mld_order"], [13, 0, 1, "cmdoption-arg-mld_regularization_type", "mld_regularization_type"], [13, 0, 1, "cmdoption-arg-mld_type_quadratic", "mld_type_quadratic"], [10, 0, 1, "cmdoption-arg-mtp_poly_max", "mtp_poly_max"], [10, 0, 1, "cmdoption-arg-mtp_poly_min", "mtp_poly_min"], [10, 0, 1, "cmdoption-arg-n_cheb", "n_cheb"], [8, 0, 1, "cmdoption-arg-n_frac", "n_frac"], [10, 0, 1, "cmdoption-arg-n_g2_eta", "n_g2_eta"], [10, 0, 1, "cmdoption-arg-n_g2_rs", "n_g2_rs"], [10, 0, 1, "cmdoption-arg-n_g3_eta", "n_g3_eta"], [10, 0, 1, "cmdoption-arg-n_g3_lambda", "n_g3_lambda"], [10, 0, 1, "cmdoption-arg-n_g3_zeta", "n_g3_zeta"], [8, 0, 1, "cmdoption-arg-n_kcross", "n_kcross"], [10, 0, 1, "cmdoption-arg-5", "n_rbf"], [10, 0, 1, "cmdoption-arg-n_soap", "n_soap"], [8, 0, 1, "cmdoption-arg-nd_data", "nd_data"], [12, 0, 1, "cmdoption-arg-np_kernel_full", "np_kernel_full"], [12, 0, 1, "cmdoption-arg-np_kernel_ref", "np_kernel_ref"], [8, 0, 1, "cmdoption-arg-ns_data", "ns_data"], [16, 0, 1, "cmdoption-arg-optimize_ga_population", "optimize_ga_population"], [16, 0, 1, "cmdoption-arg-0", "optimize_weights"], [16, 0, 1, "cmdoption-arg-optimize_weights_L1", "optimize_weights_L1"], [16, 0, 1, "cmdoption-arg-optimize_weights_L2", "optimize_weights_L2"], [16, 0, 1, "cmdoption-arg-optimize_weights_Le", "optimize_weights_Le"], [8, 0, 1, "cmdoption-arg-path", "path"], [13, 0, 1, "cmdoption-arg-polyc_n_hermite", "polyc_n_hermite"], [13, 0, 1, "cmdoption-arg-polyc_n_poly", "polyc_n_poly"], [12, 0, 1, "cmdoption-arg-power_mcd", "power_mcd"], [8, 0, 1, "cmdoption-arg-pref", "pref"], [10, 0, 1, "cmdoption-arg-r_cut", "r_cut"], [10, 0, 1, "cmdoption-arg-r_cut_width_soap", "r_cut_width_soap"], [10, 0, 1, "cmdoption-arg-2", "radial_pow_so3"], [9, 0, 1, "cmdoption-arg-ref_energy_per_element", "ref_energy_per_element"], [9, 0, 1, "cmdoption-arg-seed", "seed"], [9, 0, 1, "cmdoption-arg-selection_type", "selection_type"], [12, 0, 1, "cmdoption-arg-sigma_kernel", "sigma_kernel"], [13, 0, 1, "cmdoption-arg-snap_class_constraints", "snap_class_constraints"], [8, 0, 1, "cmdoption-arg-sparsification", "sparsification"], [10, 0, 1, "cmdoption-arg-strict_behler", "strict_behler"], [13, 0, 1, "cmdoption-arg-svd_rcond", "svd_rcond"], [8, 0, 1, "cmdoption-arg-target_type", "target_type"], [8, 0, 1, "cmdoption-arg-toy_model", "toy_model"], [13, 0, 1, "cmdoption-arg-train_only", "train_only"], [13, 0, 1, "cmdoption-arg-type_of_loss", "type_of_loss"], [14, 0, 1, "cmdoption-arg-weight_per_element", "weight_per_element"], [14, 0, 1, "cmdoption-arg-weight_per_element_3ch", "weight_per_element_3ch"], [14, 0, 1, "cmdoption-arg-weighted", "weighted"], [14, 0, 1, "cmdoption-arg-weighted_3ch", "weighted_3ch"], [14, 0, 1, "cmdoption-arg-weighted_auto", "weighted_auto"], [13, 0, 1, "cmdoption-arg-write_desc", "write_desc"], [13, 0, 1, "cmdoption-arg-write_design_matrix", "write_design_matrix"], [12, 0, 1, "cmdoption-arg-write_kernel_matrix", "write_kernel_matrix"]]}, "objtypes": {"0": "std:cmdoption"}, "objnames": {"0": ["std", "cmdoption", "program option"]}, "titleterms": {"comput": 0, "write": [0, 9], "descriptor": [0, 9, 10, 13], "without": 0, "further": 0, "fit": [0, 1, 2], "lml": 1, "bcc": 1, "fe": 1, "qnml": 2, "hea": 2, "kernel": [3, 12], "regress": [3, 13], "us": [3, 4, 17], "polynomi": 3, "what": [4, 17], "i": [4, 17], "miladi": [4, 17], "contributor": [4, 17], "contact": [4, 17], "thei": [4, 17], "appreci": [4, 17], "build": [5, 6, 7], "iren": 5, "step": [5, 6, 7], "1": [5, 6, 7], "load": [5, 6], "modul": [5, 6], "set": [5, 6, 7], "bash": [5, 6], "environ": [5, 6, 7], "2": [5, 6, 7], "instal": [5, 6], "marconi": 6, "prerequisit": 7, "compil": 7, "mode": 7, "variabl": 7, "advanc": 8, "option": 8, "databas": 9, "manipul": 9, "file": [9, 11], "format": 9, "name": 9, "input": [9, 11], "db": 9, "_model": 9, "space": 9, "output": 9, "g2": 10, "paramet": 10, "g3": 10, "behler": 10, "af": 10, "soap": 10, "power": 10, "spectrum": 10, "so3": 10, "3bodi": 10, "bispectrum": 10, "so4": 10, "mtp": 10, "pip": 10, "definit": 12, "select": 12, "spars": 12, "point": 12, "ml": 13, "task": 13, "onli": 13, "model": 13, "type": 13, "solv": 13, "algorithm": 13, "regular": 13, "loss": 13, "atom": 14, "system": 14, "articl": 15, "2021": 15, "2020": 15, "2019": 15, "optim": 16, "hyperparamet": 16}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 56}})