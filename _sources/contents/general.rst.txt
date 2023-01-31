

What is MILADY?
~~~~~~~~~~~~~~~

MILADY stands for *Machine Learning DYnamics*, a package created by (and for) computational materials science researchers to improve the accuracy and predictive power of atomistic simulations. 
MILADY uses machine learning algorithms and prioritises methods with a reasonable computational cost.
``MILADY 2.0`` is an open-source code distributed under the Academic Software Licence (ASL)

**Main functionalities:**

- Development of machine learning force fields, suitable for molecular dynamics simulations.
- Development of surrogate regression models to predict materials properties, including vibrational entropy, HUMO-LUMO energies, etc.
- Representation of atomic structures in the feature space of atomic descriptors.
- Analysis, sparsification, and optimization of datasets.

**Advantages of MILADY:**

- MILADY is designed for High Performance Computing and is therefore well parallelized and has a good scalability. It uses MPI, PBLAS and ScaLapack.
- MILADY includes a large choice of atomic :ref:`descriptors<sec:descriptors>` and :ref:`regression<sec:models>`, including linear, quadratic, polynomial chaos, and :ref:`kernel<sec:kernel>` models.
- MILADY is open-source package and contributions are very welcome.


Contributors
~~~~~~~~~~~~

The current architecture was designed by M.-C. Marinica and A. M. Goryaeva.

The development of MILADY started in 2015 at SRMP, CEA Saclay, France.

Main contributors (in chronological order):
M.-C. Marinica (2015-present at SRMP, CEA Saclay),
W. Unn-Toc (2015-2017 at SRMP, CEA Saclay),
A. M. Goryaeva (2018-present at SRMP, CEA Saclay),
C. Lapointe (2018-2021 at SRMP, CEA Saclay),
J. Deres (2019-2021 at SRMP, CEA Saclay),
J. Baima (2020 - 2022 at SRMP, CEA Saclay),
A. Allera (2022 - present, at SRMP, CEA Saclay),
A. Zhong (2022 - present, at SRMP, CEA Saclay).

Software development support:
Anida Khizar (LGLS, CEA Saclay),
Christian Van Wambeke (LGLS, CEA Saclay).

The `coupling of MILADY and LAMMPS <https://github.com/ai-atoms/Lammps-MiLaDy>`_ was developed by
`Thomas D. Swinburne <https://tomswinburne.github.io/>`_ (CINaM, Marseille)

Contact 
~~~~~~~

Questions and suggestions can be sent to :email:`ai.unseen.group@gmail.com`.
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

