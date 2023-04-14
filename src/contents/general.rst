

What is MILADY?
~~~~~~~~~~~~~~~

MILADY stands for *Machine Learning DYnamics*, a package created by (and for) computational materials scientists to improve the accuracy and predictive power of atomistic simulations. 
The code uses machine learning algorithms and prioritises methods with a reasonable computational cost.
MILADY is an open-source code distributed under the Academic Software Licence (ASL).

**Main functionalities:**

* Development of machine learning force fields, suitable for molecular dynamics simulations.
* Development of surrogate regression models to predict materials properties, including vibrational entropy, HOMO-LUMO energies, etc.
* Representation of atomic structures in the feature space of atomic descriptors.
* Analysis, sparsification, and optimization of datasets.

**Advantages of MILADY:**

* MILADY is designed for High Performance Computing and is therefore well parallelized and has a good scalability. It uses MPI, PBLAS and ScaLapack.
* MILADY includes a large choice of atomic :ref:`descriptors<sec:descriptors>` and :ref:`regression models<sec:models>`, including linear, quadratic, polynomial chaos, and :ref:`kernels<sec:kernel>`.
* MILADY is open-source package and contributions are very welcome.


Contributors
~~~~~~~~~~~~

| The development of MILADY started in 2015 at SRMP, CEA Saclay, France.
| The current architecture was designed by M.-C. Marinica and A. M. Goryaeva.

| **Main contributors** in chronological order, all current or former members of SRMP, CEA Saclay:
| M.-C. Marinica     (2015-present)
| W. Unn-Toc         (2015-2017)
| A. M. Goryaeva     (2018-present)
| C. Lapointe        (2018-2021)
| J. Deres           (2019-2021)
| J. Baima           (2020 - 2022)
| A. Allera          (2022 - present)
| A. Zhong           (2022 - present)

| **Software development support** is provided by:
| Anida Khizar (LGLS, CEA Saclay),
| Christian Van Wambeke (LGLS, CEA Saclay).

The `coupling of MILADY and LAMMPS <https://github.com/ai-atoms/Lammps-MiLaDy>`_ was developed by
`Thomas D. Swinburne <https://tomswinburne.github.io/>`_ (CINaM, Marseille).

Contact 
~~~~~~~

Questions and suggestions can be sent to :email:`our email<ai.unseen.group@gmail.com>`.
We will be happy to answer!


They appreciate and use MILADY
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: logos/cea.png
   :width: 100
   :target: http://www.cea.fr/
.. image:: logos/cnrs.png
   :width: 100
.. image:: logos/cinam.png
   :width: 100
.. image:: logos/la_rochelle.png
   :width: 100
.. image:: logos/ensulm.jpg
   :width: 100
.. image:: logos/eurofusion.png
   :width: 100
.. image:: logos/CCFE.png
   :width: 100
   :target: https://www.euro-fusion.org/
.. image:: logos/polwar.png 
   :width: 100

