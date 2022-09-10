
.. _`sec:atomicsys`:

Atomic systems
======================

.. option::  fix_no_of_elements (integer)

   The number of elements in the
   input list. This list should be exhaustive and should contains all
   the elements of the database. This number should be equal to the
   numbers of chemical symbols (and correspondings weigths in
   ``chemical_elements`` and ``weigth_per_element`` or ``weigth_per_element_3ch``)

   Default ``no_of_elements=1``

.. option::  chemical_elements (character(len=80))

   The chemical symbols of the elements contained in the database. The elements should be
   among the 109 elements of the periodic table. E.g. for there
   elements should be like that: ``chemical_elements= ” Fe W Re ”``.
   The custom weigths associated with those elements are defined in
   ``weigth_per_element``.

   Default ``chemical_elements= ” ”``

.. option::  weighted (logical)

   Take into accout the chemical type of atoms. It can be  ``weighted=.true.`` or
   ``weighted=.false.``. If ``.true.`` the descriptors are built using the regular
   geometric channel and a supplementary channel for descriptors both with exactelly
   the same dimension. The chemical weights for atoms are controlled with the option
   ``weight_per_element``  or ``weighted_auto``.

   Default ``weighted= .false.``

.. option::  weighted_3ch (logical)

   Take into accout the chemical type of atoms: the 3rd channel. It can be  ``weighted_3ch=.true.`` or
   ``weighted_3ch=.false.``. If ``.true.`` the descriptors are built using the regular
   geometric channel, the second channel and a supplementary third channel.
   The chemical weights for atoms are controlled with the option
   ``weight_per_element_3ch``  or ``weighted_auto``.

   Default ``weighted_3ch = .false.``


.. option::  weighted_auto (logical)

   If this option is valid ``.true.`` the chemical weights are chosen automatically by ``MILADY``
   for  ``weight_per_element`` and ``weight_per_element_3ch``, if necessary. If this option is ``.true.``
   the current value of   ``weight_per_element`` and ``weight_per_element_3ch`` are redefined with the default values.

   For the second channel the ``weighted_auto=.true`` gives for the weigth for the species :math:`w_I` as:

   .. math:: w_I^{\textrm{2nd ch}} = \frac{ \sqrt{m_I} \sqrt{N_{\textrm{all species} } } }{ \sqrt{ \sum_{J \in \textrm{all species}} m_J } }

   For the third channel the ``weighted_auto=.true`` assign the weigth for the species :math:`w_I` as:

   .. math:: w_I^{\textrm{3rd ch}} = \frac {Z_I N_{\textrm{all species} } } {\sum_{J \in \textrm{all species}}  Z_J}

   Default ``weighted_auto = .true.``


.. option::  chemical_elements_invisible (character(len=80))

   The chemical symbols of the elements that will be invisible by the
   other atoms i.e. any information of then will not be included in
   the computation of descriptors.

   Default ``chemical_elements_invisible= ” ”``

.. option::  weight_per_element (character(len=80))

   The weigths associated with the chemical elements defined in the list
   ``chemical_elements``.

   This list should be formatted as:
   ``weight_per_element= ” 1.0 2.0 3.0 ”`` i.e. for the example given
   in the examle given above ``chemical_elements= ” Fe W Re ”`` the
   weigths are ``1.0``, ``2.0`` and ``3.0``, respectivelly.

   For the particular case when the ``weight_per_element= ” ”`` is empty list
   the weight of the atoms of :math:`i^{th}` type are automatically
   put proportional to square root of the mass of that type :math:`\sqrt(m_i)`
   (see ``weighted_auto`` keyword section for the exact formulae).


   Default ``weight_per_element= " "``


.. option::  weight_per_element_3ch (character(len=80))

   The weigths associated with the chemical elements defined in the list
   ``chemical_elements``. These weights define the accuracy of the 3rd channel.

   This list should be formatted anf follows exactelly the same rules as
   ``weight_per_element``.

   For the particular case when the ``weight_per_element_3ch= ” ”`` is empty list
   the weight of the atoms of :math:`i^{th}` type are automatically proportional
   to the atomic number  :math:`Z_i` (see ``weighted_auto`` keyword section for the exact formulae)

   Default ``weight_per_element_3ch= " "``
