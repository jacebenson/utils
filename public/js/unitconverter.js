function convert(e) {
    'length-converter' == e ? convert_length()  : 'weight-converter' == e ? convert_weight()  : 'volume-converter' == e ? convert_volume()  : 'area-converter' == e ? convert_area()  : 'temperature-converter' == e ? convert_temperature()  : 'speed-converter' == e ? convert_speed()  : 'angle-converter' == e ? convert_angle()  : 'bytes-converter' == e ? convert_bytes()  : 'density-converter' == e ? convert_density()  : 'electric-current-converter' == e ? convert_current()  : 'energy-converter' == e ? convert_energy()  : 'force-converter' == e ? convert_force()  : 'fuel-converter' == e ? convert_fuel()  : 'mass-converter' == e ? convert_mass()  : 'power-converter' == e ? convert_power()  : 'pressure-converter' == e ? convert_pressure()  : 'time-converter' == e ? convert_time()  : 'astronomical-converter' == e ? convert_astro()  : 'frequency-converter' == e && convert_frequency()
  }
  var cb_length = [
    'angstrom',
    'astronomical unit (au)',
    'centimeter (cm)',
    'chain',
    'decimeter (dm)',
    'fathom',
    'foot (ft)',
    'furlong',
    'inch (in)',
    'kilometer (km)',
    'league',
    'light year',
    'meter (m)',
    'mile (mi)',
    'millimeter (mm)',
    'micron (&mu;)',
    'nanometer (nm)',
    'nautical mile',
    'parsec',
    'rod',
    'yard (yd)'
  ],
  factors_length = [
    10000000000,
    6.6845871226706e-12,
    100,
    0.049709695378987,
    10,
    0.54680664916885,
    3.2808398950131,
    0.0049709695378987,
    39.370078740157,
    0.001,
    0.00020712373074577,
    1.0570008340246e-16,
    1,
    0.00062137119223733,
    1000,
    1000000,
    1000000000,
    0.00053995680345572,
    3.2407792896393e-17,
    0.19883878151595,
    1.0936132983377
  ];
  function fix_length(e) {
    if (!isFinite(e)) return '';
    if (0 == e) return '0';
    if (st = '' + e, epos = st.indexOf('E'), - 1 == epos && (epos = st.indexOf('e')), sdigi = Math.log(Math.abs(e)) / Math.LN10, sdigif = Math.floor(sdigi), - 1 == epos) return adjust = Math.pow(10, sdigif - 12),
    faqs = Math.round(e / adjust),
    norst = '' + faqs,
    sdigif < 12 ? (adjust2 = Math.pow(10, 12 - sdigif), faqs / adjust2)  : faqs * adjust;
    for (zo = e * Math.pow(10, 12 - sdigif), szo = String(Math.round(zo)), inse = - 1, '-' == szo.charAt(0) ? inse = 2 : inse = 1, rest = szo.substring(inse, szo.length), i = rest.length - 1; 0 <= i && '0' == rest.charAt(i); ) i--;
    return rest = rest.substring(0, i + 1),
    rou = szo.substring(0, inse),
    0 < rest.length && (rou += '.' + rest),
    sdigif < 0 ? sa = rou + 'E' : sa = rou + 'E+',
    snow = sa + sdigif,
    vanow = Math.abs(parseFloat(snow)),
    faqsvab = Math.abs(e),
    0 <= sdigif ? vanow > 5 * faqsvab ? snow = sa + String(sdigif - 1)  : vanow < faqsvab / 5 && (snow = sa + String(sdigif + 1))  : 0 <= sdigif && (vanow > 5 * faqsvab ? snow = sa + String(sdigif + 1)  : vanow < faqsvab / 5 && (snow = sa + String(sdigif - 1))),
    vanow = parseFloat(snow),
    vanow > 1.1 * e || vanow < 0.9 * e ? e : snow
  }
  function convert_length() {
    from_select_index = $('#from_select').val(),
    to_select_index = $('#to_select').val(),
    from_input = $('#from_input').val(),
    faqsorg = factors_length[to_select_index] / factors_length[from_select_index],
    resfaqs = from_input * faqsorg,
    $('#select_from_title').html(cb_length[from_select_index]),
    $('#select_to_title').html(cb_length[to_select_index]),
    isNaN(parseFloat(resfaqs)) ? $('#to_input').val('')  : $('#to_input').val(fix_length(parseFloat(resfaqs)) + ' ')
  }
  var cb_weight = [
    'atomic mass unit (amu)',
    'carat (metric)',
    'cental',
    'centigram',
    'dekagram',
    'dram (dr)',
    'grain (gr)',
    'gram (g)',
    'hundredweight (UK)',
    'kilogram (kg)',
    'microgram (&mu;g)',
    'milligram (mg)',
    'newton (Earth)',
    'ounce (oz)',
    'pennyweight (dwt)',
    'pound (lb)',
    'quarter',
    'stone',
    'ton (UK, long)',
    'ton (US, short)',
    'tonne (t)',
    'troy ounce'
  ],
  factors_weight = [
    6.0221366516752e+26,
    5000,
    0.022046226218488,
    100000,
    100,
    564.38339119329,
    15432.358352941,
    1000,
    0.019684130552221,
    1,
    1000000000,
    1000000,
    9.80665,
    35.27396194958,
    643.01493137256,
    2.2046226218488,
    0.078736522208885,
    0.15747304441777,
    0.00098420652761106,
    0.0011023113109244,
    0.001,
    32.150746568628
  ];
  function fix_weight(e) {
    if (!isFinite(e)) return '';
    if (0 == e) return '0';
    if (st = '' + e, epos = st.indexOf('E'), - 1 == epos && (epos = st.indexOf('e')), sdigi = Math.log(Math.abs(e)) / Math.LN10, sdigif = Math.floor(sdigi), - 1 == epos) return adjust = Math.pow(10, sdigif - 12),
    faqs = Math.round(e / adjust),
    norst = '' + faqs,
    sdigif < 12 ? (adjust2 = Math.pow(10, 12 - sdigif), faqs / adjust2)  : faqs * adjust;
    for (zo = e * Math.pow(10, 12 - sdigif), szo = String(Math.round(zo)), inse = - 1, '-' == szo.charAt(0) ? inse = 2 : inse = 1, rest = szo.substring(inse, szo.length), i = rest.length - 1; 0 <= i && '0' == rest.charAt(i); ) i--;
    return rest = rest.substring(0, i + 1),
    rou = szo.substring(0, inse),
    0 < rest.length && (rou += '.' + rest),
    sdigif < 0 ? sa = rou + 'E' : sa = rou + 'E+',
    snow = sa + sdigif,
    vanow = Math.abs(parseFloat(snow)),
    faqsvab = Math.abs(e),
    0 <= sdigif ? vanow > 5 * faqsvab ? snow = sa + String(sdigif - 1)  : vanow < faqsvab / 5 && (snow = sa + String(sdigif + 1))  : 0 <= sdigif && (vanow > 5 * faqsvab ? snow = sa + String(sdigif + 1)  : vanow < faqsvab / 5 && (snow = sa + String(sdigif - 1))),
    vanow = parseFloat(snow),
    vanow > 1.1 * e || vanow < 0.9 * e ? e : snow
  }
  function convert_weight() {
    from_select_index = $('#from_select').val(),
    to_select_index = $('#to_select').val(),
    from_input = $('#from_input').val(),
    faqsorg = factors_weight[to_select_index] / factors_weight[from_select_index],
    resfaqs = from_input * faqsorg,
    $('#select_from_title').html(cb_weight[from_select_index]),
    $('#select_to_title').html(cb_weight[to_select_index]),
    isNaN(parseFloat(resfaqs)) ? $('#to_input').val('')  : $('#to_input').val(fix_weight(parseFloat(resfaqs)) + ' ')
  }
  var cb_volume = [
    'barrel (petroleum) (bbl, bo)',
    'bushel (UK) (bu)',
    'bushel (US dry) (bu)',
    'centiliter (cl)',
    'cubic centimeter (cc, cm<sup>3</sup>)',
    'cubic decimeter (dm<sup>3</sup>)',
    'cubic foot (ft<sup>3</sup>, cu ft)',
    'cubic inch (in<sup>3</sup>, cu in) ',
    'cubic meter (m<sup>3</sup>)',
    'cubic millimeter (mm<sup>3</sup>)',
    'cubic yard (yd<sup>3</sup>)',
    'dekaliter (dal)',
    'fluid dram (fl dr)',
    'fluid ounce (fl oz)',
    'fluid ounce (UK) (fl oz)',
    'gallon (fluid) (gal)',
    'gallon (UK) (gal)',
    'gill (gi)',
    'hectoliter (hl)',
    'liter (l)',
    'microliter (µl)',
    'milliliter (ml)',
    'minim (min)',
    'peck (US dry) (pk)',
    'pint (fluid) (pt)',
    'pint (UK) (pt)',
    'pint (US dry) (pt)',
    'quart (fluid) (qt)',
    'quart (UK) (qt)',
    'quart (US dry) (qt)'
  ],
  factors_volume = [
    6.2898107704321,
    27.496156037386,
    28.377593258402,
    100000,
    1000000,
    1000,
    35.314666721489,
    61023.744094732,
    1,
    1000000000,
    1.3079506193144,
    100,
    270512.18161474,
    33814.022701843,
    35195.079727854,
    264.17205235815,
    219.96924829909,
    8453.5056754608,
    10,
    1000,
    1000000000,
    1000000,
    16230730.896885,
    113.51037303361,
    2113.3764188652,
    1759.7539863927,
    1816.1659685377,
    1056.6882094326,
    879.87699319635,
    908.08298426886
  ];
  function fix_volume(e) {
    if (!isFinite(e)) return '';
    if (0 == e) return '0';
    if (st = '' + e, epos = st.indexOf('E'), - 1 == epos && (epos = st.indexOf('e')), sdigi = Math.log(Math.abs(e)) / Math.LN10, sdigif = Math.floor(sdigi), - 1 == epos) return adjust = Math.pow(10, sdigif - 12),
    faqs = Math.round(e / adjust),
    norst = '' + faqs,
    sdigif < 12 ? (adjust2 = Math.pow(10, 12 - sdigif), faqs / adjust2)  : faqs * adjust;
    for (zo = e * Math.pow(10, 12 - sdigif), szo = String(Math.round(zo)), inse = - 1, '-' == szo.charAt(0) ? inse = 2 : inse = 1, rest = szo.substring(inse, szo.length), i = rest.length - 1; 0 <= i && '0' == rest.charAt(i); ) i--;
    return rest = rest.substring(0, i + 1),
    rou = szo.substring(0, inse),
    0 < rest.length && (rou += '.' + rest),
    sdigif < 0 ? sa = rou + 'E' : sa = rou + 'E+',
    snow = sa + sdigif,
    vanow = Math.abs(parseFloat(snow)),
    faqsvab = Math.abs(e),
    0 <= sdigif ? vanow > 5 * faqsvab ? snow = sa + String(sdigif - 1)  : vanow < faqsvab / 5 && (snow = sa + String(sdigif + 1))  : 0 <= sdigif && (vanow > 5 * faqsvab ? snow = sa + String(sdigif + 1)  : vanow < faqsvab / 5 && (snow = sa + String(sdigif - 1))),
    vanow = parseFloat(snow),
    vanow > 1.1 * e || vanow < 0.9 * e ? e : snow
  }
  function convert_volume() {
    from_select_index = $('#from_select').val(),
    to_select_index = $('#to_select').val(),
    from_input = $('#from_input').val(),
    faqsorg = factors_volume[to_select_index] / factors_volume[from_select_index],
    resfaqs = from_input * faqsorg,
    $('#select_from_title').html(cb_volume[from_select_index]),
    $('#select_to_title').html(cb_volume[to_select_index]),
    isNaN(parseFloat(resfaqs)) ? $('#to_input').val('')  : $('#to_input').val(fix_volume(parseFloat(resfaqs)) + ' ')
  }
  var cb_area = [
    'acre',
    'are (a)',
    'barn (b)',
    'hectare (ha)',
    'homestead',
    'rood',
    'square centimeter (cm<sup>2</sup>)',
    'square foot (ft<sup>2</sup>)',
    'square inch (in<sup>2</sup>)',
    'square kilometer (km<sup>2</sup>)',
    'square meter (m<sup>2</sup>)',
    'square mile',
    'square millimeter (mm<sup>2</sup>)',
    'square rod',
    'square yard (yd<sup>2</sup>)',
    'township (twp)'
  ],
  factors_area = [
    0.00024710538146717,
    0.01,
    1e+28,
    0.0001,
    0.0000015444086341698,
    0.00098842152586866,
    10000,
    10.76391041671,
    1550.0031000062,
    0.000001,
    1,
    3.8610215854245e-7,
    1000000,
    0.039536861034746,
    1.1959900463011,
    1.0725059959512e-8
  ];
  function fix_area(e) {
    if (!isFinite(e)) return '';
    if (0 == e) return '0';
    if (st = '' + e, epos = st.indexOf('E'), - 1 == epos && (epos = st.indexOf('e')), sdigi = Math.log(Math.abs(e)) / Math.LN10, sdigif = Math.floor(sdigi), - 1 == epos) return adjust = Math.pow(10, sdigif - 12),
    faqs = Math.round(e / adjust),
    norst = '' + faqs,
    sdigif < 12 ? (adjust2 = Math.pow(10, 12 - sdigif), faqs / adjust2)  : faqs * adjust;
    for (zo = e * Math.pow(10, 12 - sdigif), szo = String(Math.round(zo)), inse = - 1, '-' == szo.charAt(0) ? inse = 2 : inse = 1, rest = szo.substring(inse, szo.length), i = rest.length - 1; 0 <= i && '0' == rest.charAt(i); ) i--;
    return rest = rest.substring(0, i + 1),
    rou = szo.substring(0, inse),
    0 < rest.length && (rou += '.' + rest),
    sdigif < 0 ? sa = rou + 'E' : sa = rou + 'E+',
    snow = sa + sdigif,
    vanow = Math.abs(parseFloat(snow)),
    faqsvab = Math.abs(e),
    0 <= sdigif ? vanow > 5 * faqsvab ? snow = sa + String(sdigif - 1)  : vanow < faqsvab / 5 && (snow = sa + String(sdigif + 1))  : 0 <= sdigif && (vanow > 5 * faqsvab ? snow = sa + String(sdigif + 1)  : vanow < faqsvab / 5 && (snow = sa + String(sdigif - 1))),
    vanow = parseFloat(snow),
    vanow > 1.1 * e || vanow < 0.9 * e ? e : snow
  }
  function convert_area() {
    from_select_index = $('#from_select').val(),
    to_select_index = $('#to_select').val(),
    from_input = $('#from_input').val(),
    faqsorg = factors_area[to_select_index] / factors_area[from_select_index],
    resfaqs = from_input * faqsorg,
    $('#select_from_title').html(cb_area[from_select_index]),
    $('#select_to_title').html(cb_area[to_select_index]),
    isNaN(parseFloat(resfaqs)) ? $('#to_input').val('')  : $('#to_input').val(fix_area(parseFloat(resfaqs)) + ' ')
  }
  var cb_temp = [
    'Celsius',
    'Fahrenheit',
    'Rankine',
    'Reaumur',
    'kelvin'
  ];
  function convert_temperature() {
    var e,
    t,
    a;
    a = stripBad(a = $('#from_input').val()),
    a = parseFloat(a),
    isNaN(a) && (a = 0),
    $('#from_input').val(a),
    e = $('#from_select').val(),
    t = $('#to_select').val(),
    $('#select_from_title').html(cb_temp[e]),
    $('#select_to_title').html(cb_temp[t]);
    var o = get_fact(a, e, t);
    'Below Absolute Zero' == o ? $('#to_input').val('Your input cannot be below absolute zero.')  : $('#to_input').val(o)
  }
  function get_fact(e, t, a) {
    if (0 == t ? e += 273.15 : 1 == t ? e = (e - 32) / 1.8 + 273.15 : 2 == t ? e /= 1.8 : 3 == t && (e = 1.25 * e + 273.15), e < 0) return 'Below Absolute Zero';
    if (0 == a ? e -= 273.15 : 1 == a ? e = 1.8 * (e - 273.15) + 32 : 2 == a ? e *= 1.8 : 3 == a && (e = (e - 273.15) / 1.25), Number.prototype.toFixed) e = e.toFixed(7),
    e = parseFloat(e);
     else {
      var o = Math.floor(e),
      l = e - o;
      e = o + Math.round(10000000 * l) / 10000000
    }
    return e
  }
  function stripBad(e) {
    for (var t = 0, a = ''; t < e.length; t++) - 1 != 'eE-0123456789.'.indexOf(e.charAt(t)) && (a += e.charAt(t));
    return a
  }
  var cb_speed = [
    ['centimeters/minute',
    0.00016666666666666666],
    [
      'centimeters/second',
      0.01
    ],
    [
      'feet/hour',
      0.00008466683600033866
    ],
    [
      'feet/minute',
      0.00508
    ],
    [
      'feet/second',
      0.3048
    ],
    [
      'inches/minute',
      0.0004233341800016934
    ],
    [
      'inches/second',
      0.0254
    ],
    [
      'kilometers/hour',
      0.2777777777777778
    ],
    [
      'kilometers/second',
      1000
    ],
    [
      'knots',
      0.5144444444444445
    ],
    [
      'Mach number (ISA/Sea level)',
      340.2933
    ],
    [
      'meters/hour',
      0.0002777777777777778
    ],
    [
      'meters/minute',
      0.016666666666666666
    ],
    [
      'meters/second [m/s]',
      1
    ],
    [
      'miles/hour',
      0.44704
    ],
    [
      'miles/minute',
      26.8224
    ],
    [
      'miles/second',
      1609.344
    ],
    [
      'nautical miles/hour',
      0.5144444444444445
    ],
    [
      'Nm/24hr (Volvo Ocean Race)',
      0.021435185185185186
    ],
    [
      'speed of light',
      299790000
    ],
    [
      'yards/hour',
      0.000254000508001016
    ],
    [
      'yards/minute',
      0.01524
    ],
    [
      'yards/second',
      0.9144
    ]
  ];
  function convert_speed() {
    var FromVal,
    ToVal,
    value;
    value = $('#from_input').val(),
    value = stripBad(value),
    value = parseFloat(value),
    isNaN(value) && (value = 0),
    $('#from_input').val(value),
    FromVal = $('#from_select').val(),
    ToVal = $('#to_select').val();
    var lUnitFrom = cb_speed[FromVal],
    lUnitTo = cb_speed[ToVal];
    $('#select_from_title').html(lUnitFrom[0]),
    $('#select_to_title').html(lUnitTo[0]),
    isNumeric(lUnitFrom[1]) ? value *= lUnitFrom[1] : value = eval(lUnitFrom[1]),
    isNumeric(lUnitTo[1]) ? value /= lUnitTo[1] : value = eval(lUnitTo[2]),
    value = Math.round(value * Math.pow(10, 10)) / Math.pow(10, 10),
    $('#to_input').val(value)
  }
  function isNumeric(e) {
    for (var t = 0; t < e.length; t++) if ( - 1 == '0123456789.'.indexOf(e.charAt(t))) return !1;
    return !0
  }
  var cb_angle = [
    ['arcminute',
    'value/(360*60)',
    'value * (360*60)'],
    [
      'arcsecond',
      'value/(360*3600)',
      'value * (360*3600)'
    ],
    [
      'circle',
      1
    ],
    [
      'degree',
      'value/360',
      'value*360'
    ],
    [
      'gon',
      'value/400',
      'value*400'
    ],
    [
      'grad',
      'value/400',
      'value*400'
    ],
    [
      'mil (Nato)',
      'value/6400',
      'value*6400'
    ],
    [
      'mil (Soviet Union)',
      'value/6000',
      'value*6000'
    ],
    [
      'mil (Sweden)',
      'value/6300',
      'value*6300'
    ],
    [
      'octant',
      0.125
    ],
    [
      'quadrant',
      0.25
    ],
    [
      'radian',
      'value / (2 * Math.PI)',
      'value * 2 * Math.PI'
    ],
    [
      'revolution',
      1
    ],
    [
      'sextant',
      'value/6',
      'value * 6'
    ],
    [
      'sign',
      'value/12',
      'value * 12'
    ],
    [
      'turn',
      1
    ]
  ];
  function convert_angle() {
    var FromVal,
    ToVal,
    value;
    value = $('#from_input').val(),
    value = stripBad(value),
    value = parseFloat(value),
    isNaN(value) && (value = 0),
    $('#from_input').val(value),
    FromVal = $('#from_select').val(),
    ToVal = $('#to_select').val();
    var lUnitFrom = cb_angle[FromVal],
    lUnitTo = cb_angle[ToVal];
    $('#select_from_title').html(lUnitFrom[0]),
    $('#select_to_title').html(lUnitTo[0]),
    isNumeric(lUnitFrom[1]) ? value *= lUnitFrom[1] : value = eval(lUnitFrom[1]),
    isNumeric(lUnitTo[1]) ? value /= lUnitTo[1] : value = eval(lUnitTo[2]),
    value = Math.round(value * Math.pow(10, 10)) / Math.pow(10, 10),
    $('#to_input').val(value)
  }
  var cb_bytes = [
    ['bits',
    0.125],
    [
      'bytes',
      1
    ],
    [
      'kilobits [Kb]',
      128
    ],
    [
      'kilobytes [KB]',
      1024
    ],
    [
      'megabits [Mb]',
      131072
    ],
    [
      'megabytes [MB]',
      1048576
    ],
    [
      'gigabits [Gb]',
      134217728
    ],
    [
      'gigabytes [GB]',
      1073741824
    ],
    [
      'terabits [Tb]',
      137438953472
    ],
    [
      'terabytes [TB]',
      1099511627776
    ],
    [
      'petabits [Pb]',
      140737488355328
    ],
    [
      'petabytes [PB]',
      1125899906842624
    ],
    [
      'exabits [Eb]',
      144115188075855870
    ],
    [
      'exabytes [EB]',
      1152921504606847000
    ]
  ];
  function convert_bytes() {
    var FromVal,
    ToVal,
    value;
    value = $('#from_input').val(),
    value = stripBad(value),
    value = parseFloat(value),
    isNaN(value) && (value = 0),
    $('#from_input').val(value),
    FromVal = $('#from_select').val(),
    ToVal = $('#to_select').val();
    var lUnitFrom = cb_bytes[FromVal],
    lUnitTo = cb_bytes[ToVal];
    $('#select_from_title').html(lUnitFrom[0]),
    $('#select_to_title').html(lUnitTo[0]),
    isNumeric(lUnitFrom[1]) ? value *= lUnitFrom[1] : value = eval(lUnitFrom[1]),
    isNumeric(lUnitTo[1]) ? value /= lUnitTo[1] : value = eval(lUnitTo[2]),
    $('#to_input').val(value)
  }
  var cb_density = [
    ['grains/gallon (UK)',
    0.000014253948343691203],
    [
      'grains/gallon (US)',
      0.000017118011571775823
    ],
    [
      'grams/cubic centimeters',
      1
    ],
    [
      'grams/liter',
      0.001
    ],
    [
      'grams/milliliters',
      1
    ],
    [
      'kilograms/cubic meters',
      0.001
    ],
    [
      'kilograms/liter',
      1
    ],
    [
      'megagrams/cubic meter',
      1
    ],
    [
      'milligrams/milliliter',
      0.001
    ],
    [
      'milligrams/liter',
      0.000001
    ],
    [
      'ounces/cubic inch',
      1.729994044
    ],
    [
      'ounces/gallon (UK)',
      0.006236023
    ],
    [
      'ounces/gallon (US)',
      0.007489152
    ],
    [
      'pounds/cubic inch',
      27.679904
    ],
    [
      'pounds/cubic foot',
      0.016018463
    ],
    [
      'pounds/gallon (UK)',
      0.099776373
    ],
    [
      'pounds/gallon (US)',
      0.119826427
    ],
    [
      'slugs/cubic foot',
      0.51531788206
    ],
    [
      'tonnes/cubic centimeter',
      0.00001
    ],
    [
      'tonnes/cubic decimeter',
      0.001
    ],
    [
      'tonnes/cubic meter',
      1
    ],
    [
      'tonnes/cubic liter',
      0.001
    ],
    [
      'tonnes/cubic milliliter',
      0.00001
    ],
    [
      'tons (UK)/cubic yard',
      1.328939184
    ],
    [
      'tons (US)/cubic yard',
      1.186552843
    ],
    [
      'grains/cubic foot',
      436995.72588
    ],
    [
      'grains/cubic inch',
      252.89104507
    ],
    [
      'grains/cubic yard',
      11798884.599
    ]
  ];
  function convert_density() {
    var FromVal,
    ToVal,
    value;
    value = $('#from_input').val(),
    value = stripBad(value),
    value = parseFloat(value),
    isNaN(value) && (value = 0),
    $('#from_input').val(value),
    FromVal = $('#from_select').val(),
    ToVal = $('#to_select').val();
    var lUnitFrom = cb_density[FromVal],
    lUnitTo = cb_density[ToVal];
    $('#select_from_title').html(lUnitFrom[0]),
    $('#select_to_title').html(lUnitTo[0]),
    isNumeric(lUnitFrom[1]) ? value *= lUnitFrom[1] : value = eval(lUnitFrom[1]),
    isNumeric(lUnitTo[1]) ? value /= lUnitTo[1] : value = eval(lUnitTo[2]),
    $('#to_input').val(value)
  }
  var cb_current = [
    ['abampere [abA]',
    10],
    [
      'ampere [A]',
      1
    ],
    [
      'biot [Bi]',
      10
    ],
    [
      'centiampere',
      0.01
    ],
    [
      'coulomb/second',
      1
    ],
    [
      'EMU of current',
      10
    ],
    [
      'ESU of current',
      3.335641e-10
    ],
    [
      'franklin/second',
      3.335641e-10
    ],
    [
      'gaussian electric current',
      3.335641e-10
    ],
    [
      'gigaampere',
      1000000000
    ],
    [
      'gilbert [Gi]',
      0.79577472
    ],
    [
      'kiloampere [kA]',
      1000
    ],
    [
      'megaampere',
      1000000
    ],
    [
      'microampere',
      0.000001
    ],
    [
      'milliampere [mA]',
      0.001
    ],
    [
      'milliamp',
      0.001
    ],
    [
      'nanoampere',
      1e-9
    ],
    [
      'picoampere',
      1e-12
    ],
    [
      'siemens volt',
      1
    ],
    [
      'statampere [stA]',
      3.335641e-10
    ],
    [
      'teraampere',
      1000000000000
    ],
    [
      'volt/ohm',
      1
    ],
    [
      'watt/volt',
      1
    ],
    [
      'weber/henry',
      1
    ]
  ];
  function convert_current() {
    var FromVal,
    ToVal,
    value;
    value = $('#from_input').val(),
    value = stripBad(value),
    value = parseFloat(value),
    isNaN(value) && (value = 0),
    $('#from_input').val(value),
    FromVal = $('#from_select').val(),
    ToVal = $('#to_select').val();
    var lUnitFrom = cb_current[FromVal],
    lUnitTo = cb_current[ToVal];
    $('#select_from_title').html(lUnitFrom[0]),
    $('#select_to_title').html(lUnitTo[0]),
    isNumeric(lUnitFrom[1]) ? value *= lUnitFrom[1] : value = eval(lUnitFrom[1]),
    isNumeric(lUnitTo[1]) ? value /= lUnitTo[1] : value = eval(lUnitTo[2]),
    value = Math.round(value * Math.pow(10, 10)) / Math.pow(10, 10),
    $('#to_input').val(value)
  }
  var cb_energy = [
    ['Btu (th)',
    1054.35],
    [
      'Btu (mean)',
      1055.87
    ],
    [
      'calories (IT)',
      4.1868
    ],
    [
      'calories (th)',
      4.184
    ],
    [
      'calories (mean)',
      4.19002
    ],
    [
      'calories (15C)',
      4.1858
    ],
    [
      'calories (20C)',
      4.1819
    ],
    [
      'calories (food)',
      4186
    ],
    [
      'centigrade heat units',
      1900.4
    ],
    [
      'electron volts [eV]',
      1.60219e-19
    ],
    [
      'ergs',
      1e-7
    ],
    [
      'foot-pound force [ft lbf]',
      1.3558179483314003
    ],
    [
      'foot poundals',
      0.04214
    ],
    [
      'gigajoules [GJ]',
      1000000000
    ],
    [
      'horsepower hours',
      2684520
    ],
    [
      'inch-pound force [in lbf]',
      0.11298482902761668
    ],
    [
      'joules [J]',
      1
    ],
    [
      'kilocalories (IT)',
      4186.8
    ],
    [
      'kilocalories (th)',
      4184
    ],
    [
      'kilogram-force meters',
      9.80665
    ],
    [
      'kilojoules [kJ]',
      1000
    ],
    [
      'kilowatt hours [kWh]',
      3600000
    ],
    [
      'megajoules [MJ]',
      1000000
    ],
    [
      'newton meters [Nm]',
      1
    ],
    [
      'therms',
      105505585.257348
    ],
    [
      'watt seconds [Ws]',
      1
    ],
    [
      'watt hours [Wh]',
      3600
    ]
  ];
  function convert_energy() {
    var FromVal,
    ToVal,
    value;
    value = $('#from_input').val(),
    value = stripBad(value),
    value = parseFloat(value),
    isNaN(value) && (value = 0),
    $('#from_input').val(value),
    FromVal = $('#from_select').val(),
    ToVal = $('#to_select').val();
    var lUnitFrom = cb_energy[FromVal],
    lUnitTo = cb_energy[ToVal];
    $('#select_from_title').html(lUnitFrom[0]),
    $('#select_to_title').html(lUnitTo[0]),
    isNumeric(lUnitFrom[1]) ? value *= lUnitFrom[1] : value = eval(lUnitFrom[1]),
    isNumeric(lUnitTo[1]) ? value /= lUnitTo[1] : value = eval(lUnitTo[2]),
    value = Math.round(value * Math.pow(10, 10)) / Math.pow(10, 10),
    $('#to_input').val(value)
  }
  var cb_force = [
    ['attonewton',
    10000000000000000000],
    [
      'centinewton',
      100
    ],
    [
      'decigram-force',
      1019.716213
    ],
    [
      'decinewton',
      10
    ],
    [
      'dekagram-force',
      10.19716213
    ],
    [
      'dekanewton',
      0.1
    ],
    [
      'dyne',
      100000
    ],
    [
      'exanewton',
      1e-17
    ],
    [
      'femtonewton',
      10000000000000000
    ],
    [
      'giganewton',
      1e-8
    ],
    [
      'gram-force',
      101.9716213
    ],
    [
      'hectonewton',
      0.01
    ],
    [
      'joule / meter (J/m)',
      1
    ],
    [
      'kilogram-force (kgf)',
      0.1019716
    ],
    [
      'kilonewton (kN)',
      0.001
    ],
    [
      'kilopond (kp)',
      0.1019716
    ],
    [
      'kip (kip)',
      0.0002248
    ],
    [
      'meganewton',
      0.00001
    ],
    [
      'megapond',
      0.0001019716213
    ],
    [
      'micronewton (µN)',
      1000000
    ],
    [
      'millinewton (mN)',
      1000
    ],
    [
      'nanonewton (nN)',
      1000000000
    ],
    [
      'newton (N)',
      1
    ],
    [
      'ounce-force (ozf)',
      3.5969431019
    ],
    [
      'petanewton',
      1e-14
    ],
    [
      'piconewton',
      1000000000000
    ],
    [
      'pond',
      101.9716213
    ],
    [
      'pound-force (lbf)',
      0.22480894387
    ],
    [
      'poundal (pdl)',
      7.2330140801
    ],
    [
      'sthene (sn)',
      0.001
    ],
    [
      'teranewton',
      1e-11
    ],
    [
      'ton-force (long)(tnf)',
      0.00010036113566
    ],
    [
      'ton-force (metric)(tnf)',
      0.0001019716213
    ],
    [
      'ton-force (short)(tnf)',
      0.00011240447194
    ],
    [
      'yoctonewton',
      1e+25
    ],
    [
      'yottanewton',
      1e-23
    ],
    [
      'zeptonewton',
      1e+22
    ],
    [
      'zettanewton',
      1e-20
    ]
  ];
  function convert_force() {
    var FromVal,
    ToVal,
    value;
    value = $('#from_input').val(),
    value = stripBad(value),
    value = parseFloat(value),
    isNaN(value) && (value = 0),
    $('#from_input').val(value),
    FromVal = $('#from_select').val(),
    ToVal = $('#to_select').val();
    var lUnitFrom = cb_force[FromVal],
    lUnitTo = cb_force[ToVal];
    $('#select_from_title').html(lUnitFrom[0]),
    $('#select_to_title').html(lUnitTo[0]),
    isNumeric(lUnitFrom[1]) ? value *= lUnitFrom[1] : value = eval(lUnitFrom[1]),
    isNumeric(lUnitTo[1]) ? value /= lUnitTo[1] : value = eval(lUnitTo[2]),
    1000000 < value && (value = value.toExponential()),
    $('#to_input').val(value)
  }
  var cb_fuel = [
    ['gallons (UK)/100 miles',
    0.000028248093633182216],
    [
      'gallons (US)/100 miles',
      0.000023521458333333333
    ],
    [
      'kilometer/liter (km/l)',
      '0.001 / value',
      '0.001 / value'
    ],
    [
      'liters/100 kilometer',
      0.00001
    ],
    [
      'liters/meter',
      1
    ],
    [
      'miles/gallon (UK) (mpg)',
      '2.8248093633182215859381213711925e-3 / value',
      '2.8248093633182215859381213711925e-3 / value'
    ],
    [
      'miles/gallon (US) (mpg)',
      '2.3521458333333333333333333333333e-3 / value',
      '2.3521458333333333333333333333333e-3 / value'
    ]
  ];
  function convert_fuel() {
    var FromVal,
    ToVal,
    value;
    value = $('#from_input').val(),
    value = stripBad(value),
    value = parseFloat(value),
    isNaN(value) && (value = 0),
    $('#from_input').val(value),
    FromVal = $('#from_select').val(),
    ToVal = $('#to_select').val();
    var lUnitFrom = cb_fuel[FromVal],
    lUnitTo = cb_fuel[ToVal];
    $('#select_from_title').html(lUnitFrom[0]),
    $('#select_to_title').html(lUnitTo[0]),
    isNumeric(lUnitFrom[1]) ? value *= lUnitFrom[1] : value = eval(lUnitFrom[1]),
    isNumeric(lUnitTo[1]) ? value /= lUnitTo[1] : value = eval(lUnitTo[2]),
    value = Math.round(value * Math.pow(10, 10)) / Math.pow(10, 10),
    1000000 < value && (value = value.toExponential()),
    $('#to_input').val(value)
  }
  var cb_mass = [
    ['carats (metric)',
    0.0002],
    [
      'cental',
      45.359237
    ],
    [
      'Earth masses',
      5.98e+24
    ],
    [
      'grains',
      0.00006479891
    ],
    [
      'grams',
      0.001
    ],
    [
      'hundredweights',
      50.80234544
    ],
    [
      'kilograms [kg]',
      1
    ],
    [
      'ounces (US &amp; UK)',
      0.028349523125
    ],
    [
      'ounces (troy, precious metals)',
      0.0311034768
    ],
    [
      'pounds [lbs] (US &amp; UK)',
      0.45359237
    ],
    [
      'pounds (troy, precious metals)',
      0.3732417216
    ],
    [
      'Solar masses',
      1.989e+30
    ],
    [
      'slugs (g-pounds)',
      14.593903
    ],
    [
      'stones',
      6.35029318
    ],
    [
      'tons (UK or long)',
      1016.0469088
    ],
    [
      'tons (US or short)',
      907.18474
    ],
    [
      'tonnes',
      1000
    ]
  ];
  function convert_mass() {
    var FromVal,
    ToVal,
    value;
    value = $('#from_input').val(),
    value = stripBad(value),
    value = parseFloat(value),
    isNaN(value) && (value = 0),
    $('#from_input').val(value),
    FromVal = $('#from_select').val(),
    ToVal = $('#to_select').val();
    var lUnitFrom = cb_mass[FromVal],
    lUnitTo = cb_mass[ToVal];
    $('#select_from_title').html(lUnitFrom[0]),
    $('#select_to_title').html(lUnitTo[0]),
    isNumeric(lUnitFrom[1]) ? value *= lUnitFrom[1] : value = eval(lUnitFrom[1]),
    isNumeric(lUnitTo[1]) ? value /= lUnitTo[1] : value = eval(lUnitTo[2]),
    1000000 < value && (value = value.toExponential()),
    $('#to_input').val(value)
  }
  var cb_power = [
    ['Btu/hour',
    0.293071],
    [
      'Btu/minute',
      17.584267
    ],
    [
      'Btu/second',
      1055.056
    ],
    [
      'calories(th)/hour',
      0.001162222222222222
    ],
    [
      'calories(th)/minute',
      0.06973333333333333
    ],
    [
      'calories(th)/second',
      4.184
    ],
    [
      'foot pounds-force/minute',
      0.022597
    ],
    [
      'foot pounds-force/second',
      1.35582
    ],
    [
      'gigawatts [GW]',
      1000000000
    ],
    [
      'horsepowers (electric)',
      746
    ],
    [
      'horsepowers (international)',
      745.6998715822702
    ],
    [
      'horsepowers (water)',
      746.043
    ],
    [
      'horsepowers (metric)',
      735.4988
    ],
    [
      'watts [W]',
      1
    ],
    [
      'joules/hour',
      0.0002777777777777778
    ],
    [
      'joules/minute',
      0.016666666666666666
    ],
    [
      'joules/second',
      1
    ],
    [
      'kilocalories(th)/hour',
      1.1622222222222223
    ],
    [
      'kilocalories(th)/minute',
      69.73333333333333
    ],
    [
      'kilogram-force meters/hour',
      0.002724
    ],
    [
      'kilogram-force meters/minute',
      0.163444
    ],
    [
      'kilowatts [kW]',
      1000
    ],
    [
      'megawatts [MW]',
      1000000
    ]
  ];
  function convert_power() {
    var FromVal,
    ToVal,
    value;
    value = $('#from_input').val(),
    value = stripBad(value),
    value = parseFloat(value),
    isNaN(value) && (value = 0),
    $('#from_input').val(value),
    FromVal = $('#from_select').val(),
    ToVal = $('#to_select').val();
    var lUnitFrom = cb_power[FromVal],
    lUnitTo = cb_power[ToVal];
    $('#select_from_title').html(lUnitFrom[0]),
    $('#select_to_title').html(lUnitTo[0]),
    isNumeric(lUnitFrom[1]) ? value *= lUnitFrom[1] : value = eval(lUnitFrom[1]),
    isNumeric(lUnitTo[1]) ? value /= lUnitTo[1] : value = eval(lUnitTo[2]),
    value = Math.round(value * Math.pow(10, 10)) / Math.pow(10, 10),
    1000000 < value && (value = value.toExponential()),
    $('#to_input').val(value)
  }
  var cb_pressure = [
    ['atmospheres',
    101325],
    [
      'bars',
      100000
    ],
    [
      'centimeters mercury',
      1333.22
    ],
    [
      'centimeters water',
      98.0665
    ],
    [
      'feet of water',
      2989.06692
    ],
    [
      'hectopascals [hPa]',
      100
    ],
    [
      'inches of water',
      249.08891
    ],
    [
      'inches of mercury',
      3386.388
    ],
    [
      'kilogram-forces/sq.centimeter',
      98066.5
    ],
    [
      'kilogram-forces/sq.meter',
      9.80665
    ],
    [
      'kilonewtons/sq.meter',
      1000
    ],
    [
      'kilonewtons/sq.millimeter',
      1000000000
    ],
    [
      'kilopascals [kPa]',
      1000
    ],
    [
      'kips/sq.inch',
      6894760
    ],
    [
      'meganewtons/sq.meter',
      1000000
    ],
    [
      'meganewtons/sq.millimeter',
      1000000000000
    ],
    [
      'meters of water',
      9806.65
    ],
    [
      'millibars',
      100
    ],
    [
      'millimeters of mercury',
      133.322
    ],
    [
      'millimeters of water',
      9.80665
    ],
    [
      'newtons/sq.centimeter',
      10000
    ],
    [
      'newtons/sq.meter',
      1
    ],
    [
      'newtons/sq.millimeter',
      1000000
    ],
    [
      'pascals [Pa]',
      1
    ],
    [
      'pounds-force/sq.foot',
      47.88
    ],
    [
      'pounds-force/sq.inch [psi]',
      6894.757
    ],
    [
      'poundals/sq.foot',
      1.44816
    ],
    [
      'tons (UK)-force/sq.foot',
      107251
    ],
    [
      'tons (UK)-force/sq.inch',
      15444300
    ],
    [
      'tons (US)-force/sq.foot',
      95760
    ],
    [
      'tons (US)-force/sq.inch',
      13789500
    ],
    [
      'tonnes-force/sq.cm',
      98066500
    ],
    [
      'tonnes-force/sq.meter',
      9806.65
    ],
    [
      'torr (mm Hg 0°C)',
      133.322
    ]
  ];
  function convert_pressure() {
    var FromVal,
    ToVal,
    value;
    value = $('#from_input').val(),
    value = stripBad(value),
    value = parseFloat(value),
    isNaN(value) && (value = 0),
    $('#from_input').val(value),
    FromVal = $('#from_select').val(),
    ToVal = $('#to_select').val();
    var lUnitFrom = cb_pressure[FromVal],
    lUnitTo = cb_pressure[ToVal];
    $('#select_from_title').html(lUnitFrom[0]),
    $('#select_to_title').html(lUnitTo[0]),
    isNumeric(lUnitFrom[1]) ? value *= lUnitFrom[1] : value = eval(lUnitFrom[1]),
    isNumeric(lUnitTo[1]) ? value /= lUnitTo[1] : value = eval(lUnitTo[2]),
    value = Math.round(value * Math.pow(10, 10)) / Math.pow(10, 10),
    1000000 < value && (value = value.toExponential()),
    $('#to_input').val(value)
  }
  var cb_time = [
    ['centuries',
    3153600000],
    [
      'days [d]',
      86400
    ],
    [
      'decades',
      315360000
    ],
    [
      'femtoseconds [fs]',
      1e-15
    ],
    [
      'fortnights',
      1209600
    ],
    [
      'hours [h]',
      3600
    ],
    [
      'microseconds [μs]',
      0.000001
    ],
    [
      'millenia',
      31536000000
    ],
    [
      'milliseconds [ms]',
      0.001
    ],
    [
      'minutes [min]',
      60
    ],
    [
      'months (Common)',
      2628000
    ],
    [
      'months (Synodic)',
      2551442.8896
    ],
    [
      'nanoseconds [ns]',
      1e-9
    ],
    [
      'picoseconds [ps]',
      1e-12
    ],
    [
      'quarters (Common)',
      7884000
    ],
    [
      'seconds [s]',
      1
    ],
    [
      'shakes',
      1e-8
    ],
    [
      'weeks',
      604800
    ],
    [
      'years (Common) [y]',
      31536000
    ],
    [
      'years (Average Gregorian)',
      31556952
    ],
    [
      'years (Julian)',
      31557600
    ],
    [
      'years (Leap)',
      31622400
    ],
    [
      'years (Tropical)',
      31556925.216
    ]
  ];
  function convert_time() {
    var FromVal,
    ToVal,
    value;
    value = $('#from_input').val(),
    value = stripBad(value),
    value = parseFloat(value),
    isNaN(value) && (value = 0),
    $('#from_input').val(value),
    FromVal = $('#from_select').val(),
    ToVal = $('#to_select').val();
    var lUnitFrom = cb_time[FromVal],
    lUnitTo = cb_time[ToVal];
    $('#select_from_title').html(lUnitFrom[0]),
    $('#select_to_title').html(lUnitTo[0]),
    isNumeric(lUnitFrom[1]) ? value *= lUnitFrom[1] : value = eval(lUnitFrom[1]),
    isNumeric(lUnitTo[1]) ? value /= lUnitTo[1] : value = eval(lUnitTo[2]),
    value = Math.round(value * Math.pow(10, 10)) / Math.pow(10, 10),
    1000000 < value && (value = value.toExponential()),
    $('#to_input').val(value)
  }
  var cb_astro = [
    ['astronomical unit [1996]',
    149597870691],
    [
      'kilometer',
      1000
    ],
    [
      'light second',
      299792458
    ],
    [
      'light minute',
      17987547480
    ],
    [
      'light hour',
      1079252848800
    ],
    [
      'light day',
      25902068371200
    ],
    [
      'light year [Julian]',
      9460730472580800
    ],
    [
      'light year [tropical]',
      9460528404879358
    ],
    [
      'light year [traditional]',
      9454254955488000
    ],
    [
      'parsec',
      30856774878504976
    ],
    [
      'meter',
      1
    ],
    [
      'mile',
      1609.344
    ]
  ];
  function convert_astro() {
    var FromVal,
    ToVal,
    value;
    value = $('#from_input').val(),
    value = stripBad(value),
    value = parseFloat(value),
    isNaN(value) && (value = 0),
    $('#from_input').val(value),
    FromVal = $('#from_select').val(),
    ToVal = $('#to_select').val();
    var lUnitFrom = cb_astro[FromVal],
    lUnitTo = cb_astro[ToVal];
    $('#select_from_title').html(lUnitFrom[0]),
    $('#select_to_title').html(lUnitTo[0]),
    isNumeric(lUnitFrom[1]) ? value *= lUnitFrom[1] : value = eval(lUnitFrom[1]),
    isNumeric(lUnitTo[1]) ? value /= lUnitTo[1] : value = eval(lUnitTo[2]),
    value = Math.round(value * Math.pow(10, 10)) / Math.pow(10, 10),
    $('#to_input').val(value)
  }
  function setToEditor(e) {
    $('#from_input').val(''),
    $('#from_input').val(e.trim()),
    $('#from_input').trigger('change')
  }
  var cb_frequency = [
    ['1/second',
    1],
    [
      'cycle/second',
      1
    ],
    [
      'degree/hour',
      1 / 1296000
    ],
    [
      'degree/minute',
      1 / 21600
    ],
    [
      'degree/second',
      1 / 360
    ],
    [
      'gigahertz',
      1000000000
    ],
    [
      'hertz',
      1
    ],
    [
      'kilohertz',
      1000
    ],
    [
      'megahertz',
      1000000
    ],
    [
      'millihertz',
      0.001
    ],
    [
      'radian/hour',
      1 / 22619.467
    ],
    [
      'radian/minute',
      1 / 376.99112
    ],
    [
      'radian/second',
      1 / 6.2831853
    ],
    [
      'revolution/hour',
      1 / 3600
    ],
    [
      'revolution/minute',
      1 / 60
    ],
    [
      'revolution/second',
      1
    ],
    [
      'RPM',
      1 / 60
    ],
    [
      'terrahertz',
      1000000000000
    ]
  ];
  function convert_frequency() {
    var FromVal,
    ToVal,
    value;
    value = $('#from_input').val(),
    value = stripBad(value),
    value = parseFloat(value),
    isNaN(value) && (value = 0),
    $('#from_input').val(value),
    FromVal = $('#from_select').val(),
    ToVal = $('#to_select').val(),
    console.log(FromVal + '->' + cb_frequency[FromVal]),
    console.log(ToVal + '->' + cb_frequency[ToVal]);
    var lUnitFrom = cb_frequency[FromVal],
    lUnitTo = cb_frequency[ToVal];
    console.log(lUnitFrom),
    console.log(lUnitTo),
    $('#select_from_title').html(lUnitFrom[0]),
    $('#select_to_title').html(lUnitTo[0]),
    isNumeric(lUnitFrom[1]) ? value *= lUnitFrom[1] : value = eval(lUnitFrom[1]),
    isNumeric(lUnitTo[1]) ? value /= lUnitTo[1] : value = eval(lUnitTo[2]),
    value = Math.round(value * Math.pow(10, 10)) / Math.pow(10, 10),
    $('#to_input').val(value)
  }
  