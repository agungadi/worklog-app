// /* danielkanangina/intlInputPhone
// *  VERSION  0.0.1
// *  LICENSE MIT
// *
// * */
// if (typeof jQuery === 'undefined') {
//     throw new Error('IntlInputPhoneNumber JavaScript requires jQuery');
// }
//
// (function ($) {
//
//     var IntlInputPhone = function (element, options) {
//         this.element = element;
//         this.preferred_country = typeof options != 'undefined'
//             ? options.preferred_country
//             : ['in', 'us'];
//         this.display_error = typeof options != 'undefined'
//             ? options.display_error
//             : 'on';
//         this.error_message = typeof options != 'undefined'
//             ? options.error_message
//             : IntlInputPhone.DEFAULTS.error_message;
//     };
//
//     IntlInputPhone.VERSION = '0.0.1';
//     IntlInputPhone.DEFAULTS = {
//         countries: [
//             { 'name': 'Aruba', 'countriesca2': 'AW', 'callingCode': '297' },
//             { 'name': 'Afghanistan', 'cca2': 'AF', 'callingCode': '93' },
//             { 'name': 'Angola', 'cca2': 'AO', 'callingCode': '244' },
//             { 'name': 'Anguilla', 'cca2': 'AI', 'callingCode': '1264' },
//             { 'name': 'Åland Islands', 'cca2': 'AX', 'callingCode': '358' },
//             { 'name': 'Albania', 'cca2': 'AL', 'callingCode': '355' },
//             { 'name': 'Andorra', 'cca2': 'AD', 'callingCode': '376' },
//             {
//                 'name': 'United Arab Emirates',
//                 'cca2': 'AE',
//                 'callingCode': '971',
//             },
//             { 'name': 'Argentina', 'cca2': 'AR', 'callingCode': '54' },
//             { 'name': 'Armenia', 'cca2': 'AM', 'callingCode': '374' },
//             { 'name': 'American Samoa', 'cca2': 'AS', 'callingCode': '1684' },
//             { 'name': 'Antarctica', 'cca2': 'AQ', 'callingCode': '' },
//             {
//                 'name': 'French Southern and Antarctic Lands',
//                 'cca2': 'TF',
//                 'callingCode': '',
//             },
//             {
//                 'name': 'Antigua and Barbuda',
//                 'cca2': 'AG',
//                 'callingCode': '1268',
//             },
//             { 'name': 'Australia', 'cca2': 'AU', 'callingCode': '61' },
//             { 'name': 'Austria', 'cca2': 'AT', 'callingCode': '43' },
//             { 'name': 'Azerbaijan', 'cca2': 'AZ', 'callingCode': '994' },
//             { 'name': 'Burundi', 'cca2': 'BI', 'callingCode': '257' },
//             { 'name': 'Belgium', 'cca2': 'BE', 'callingCode': '32' },
//             { 'name': 'Benin', 'cca2': 'BJ', 'callingCode': '229' },
//             { 'name': 'Burkina Faso', 'cca2': 'BF', 'callingCode': '226' },
//             { 'name': 'Bangladesh', 'cca2': 'BD', 'callingCode': '880' },
//             { 'name': 'Bulgaria', 'cca2': 'BG', 'callingCode': '359' },
//             { 'name': 'Bahrain', 'cca2': 'BH', 'callingCode': '973' },
//             { 'name': 'Bahamas', 'cca2': 'BS', 'callingCode': '1242' },
//             {
//                 'name': 'Bosnia and Herzegovina',
//                 'cca2': 'BA',
//                 'callingCode': '387',
//             },
//             { 'name': 'Saint Barthélemy', 'cca2': 'BL', 'callingCode': '590' },
//             { 'name': 'Belarus', 'cca2': 'BY', 'callingCode': '375' },
//             { 'name': 'Belize', 'cca2': 'BZ', 'callingCode': '501' },
//             { 'name': 'Bermuda', 'cca2': 'BM', 'callingCode': '1441' },
//             { 'name': 'Bolivia', 'cca2': 'BO', 'callingCode': '591' },
//             { 'name': 'Brazil', 'cca2': 'BR', 'callingCode': '55' },
//             { 'name': 'Barbados', 'cca2': 'BB', 'callingCode': '1246' },
//             { 'name': 'Brunei', 'cca2': 'BN', 'callingCode': '673' },
//             { 'name': 'Bhutan', 'cca2': 'BT', 'callingCode': '975' },
//             { 'name': 'Bouvet Island', 'cca2': 'BV', 'callingCode': '' },
//             { 'name': 'Botswana', 'cca2': 'BW', 'callingCode': '267' },
//             {
//                 'name': 'Central African Republic',
//                 'cca2': 'CF',
//                 'callingCode': '236',
//             },
//             { 'name': 'Canada', 'cca2': 'CA', 'callingCode': '1' },
//             {
//                 'name': 'Cocos (Keeling) Islands',
//                 'cca2': 'CC',
//                 'callingCode': '61',
//             },
//             { 'name': 'Switzerland', 'cca2': 'CH', 'callingCode': '41' },
//             { 'name': 'Chile', 'cca2': 'CL', 'callingCode': '56' },
//             { 'name': 'China', 'cca2': 'CN', 'callingCode': '86' },
//             { 'name': 'Ivory Coast', 'cca2': 'CI', 'callingCode': '225' },
//             { 'name': 'Cameroon', 'cca2': 'CM', 'callingCode': '237' },
//             { 'name': 'DR Congo', 'cca2': 'CD', 'callingCode': '243' },
//             {
//                 'name': 'Republic of the Congo',
//                 'cca2': 'CG',
//                 'callingCode': '242',
//             },
//             { 'name': 'Cook Islands', 'cca2': 'CK', 'callingCode': '682' },
//             { 'name': 'Colombia', 'cca2': 'CO', 'callingCode': '57' },
//             { 'name': 'Comoros', 'cca2': 'KM', 'callingCode': '269' },
//             { 'name': 'Cape Verde', 'cca2': 'CV', 'callingCode': '238' },
//             { 'name': 'Costa Rica', 'cca2': 'CR', 'callingCode': '506' },
//             { 'name': 'Cuba', 'cca2': 'CU', 'callingCode': '53' },
//             { 'name': 'Curaçao', 'cca2': 'CW', 'callingCode': '5999' },
//             { 'name': 'Christmas Island', 'cca2': 'CX', 'callingCode': '61' },
//             { 'name': 'Cayman Islands', 'cca2': 'KY', 'callingCode': '1345' },
//             { 'name': 'Cyprus', 'cca2': 'CY', 'callingCode': '357' },
//             { 'name': 'Czech Republic', 'cca2': 'CZ', 'callingCode': '420' },
//             { 'name': 'Germany', 'cca2': 'DE', 'callingCode': '49' },
//             { 'name': 'Djibouti', 'cca2': 'DJ', 'callingCode': '253' },
//             { 'name': 'Dominica', 'cca2': 'DM', 'callingCode': '1767' },
//             { 'name': 'Denmark', 'cca2': 'DK', 'callingCode': '45' },
//             {
//                 'name': 'Dominican Republic',
//                 'cca2': 'DO',
//                 'callingCode': '1809',
//             },
//             { 'name': 'Algeria', 'cca2': 'DZ', 'callingCode': '213' },
//             { 'name': 'Ecuador', 'cca2': 'EC', 'callingCode': '593' },
//             { 'name': 'Egypt', 'cca2': 'EG', 'callingCode': '20' },
//             { 'name': 'Eritrea', 'cca2': 'ER', 'callingCode': '291' },
//             { 'name': 'Western Sahara', 'cca2': 'EH', 'callingCode': '212' },
//             { 'name': 'Spain', 'cca2': 'ES', 'callingCode': '34' },
//             { 'name': 'Estonia', 'cca2': 'EE', 'callingCode': '372' },
//             { 'name': 'Ethiopia', 'cca2': 'ET', 'callingCode': '251' },
//             { 'name': 'Finland', 'cca2': 'FI', 'callingCode': '358' },
//             { 'name': 'Fiji', 'cca2': 'FJ', 'callingCode': '679' },
//             { 'name': 'Falkland Islands', 'cca2': 'FK', 'callingCode': '500' },
//             { 'name': 'France', 'cca2': 'FR', 'callingCode': '33' },
//             { 'name': 'Faroe Islands', 'cca2': 'FO', 'callingCode': '298' },
//             { 'name': 'Micronesia', 'cca2': 'FM', 'callingCode': '691' },
//             { 'name': 'Gabon', 'cca2': 'GA', 'callingCode': '241' },
//             { 'name': 'United Kingdom', 'cca2': 'GB', 'callingCode': '44' },
//             { 'name': 'Georgia', 'cca2': 'GE', 'callingCode': '995' },
//             { 'name': 'Guernsey', 'cca2': 'GG', 'callingCode': '44' },
//             { 'name': 'Ghana', 'cca2': 'GH', 'callingCode': '233' },
//             { 'name': 'Gibraltar', 'cca2': 'GI', 'callingCode': '350' },
//             { 'name': 'Guinea', 'cca2': 'GN', 'callingCode': '224' },
//             { 'name': 'Guadeloupe', 'cca2': 'GP', 'callingCode': '590' },
//             { 'name': 'Gambia', 'cca2': 'GM', 'callingCode': '220' },
//             { 'name': 'Guinea-Bissau', 'cca2': 'GW', 'callingCode': '245' },
//             { 'name': 'Equatorial Guinea', 'cca2': 'GQ', 'callingCode': '240' },
//             { 'name': 'Greece', 'cca2': 'GR', 'callingCode': '30' },
//             { 'name': 'Grenada', 'cca2': 'GD', 'callingCode': '1473' },
//             { 'name': 'Greenland', 'cca2': 'GL', 'callingCode': '299' },
//             { 'name': 'Guatemala', 'cca2': 'GT', 'callingCode': '502' },
//             { 'name': 'French Guiana', 'cca2': 'GF', 'callingCode': '594' },
//             { 'name': 'Guam', 'cca2': 'GU', 'callingCode': '1671' },
//             { 'name': 'Guyana', 'cca2': 'GY', 'callingCode': '592' },
//             { 'name': 'Hong Kong', 'cca2': 'HK', 'callingCode': '852' },
//             {
//                 'name': 'Heard Island and McDonald Islands',
//                 'cca2': 'HM',
//                 'callingCode': '',
//             },
//             { 'name': 'Honduras', 'cca2': 'HN', 'callingCode': '504' },
//             { 'name': 'Croatia', 'cca2': 'HR', 'callingCode': '385' },
//             { 'name': 'Haiti', 'cca2': 'HT', 'callingCode': '509' },
//             { 'name': 'Hungary', 'cca2': 'HU', 'callingCode': '36' },
//             { 'name': 'Indonesia', 'cca2': 'ID', 'callingCode': '62' },
//             { 'name': 'Isle of Man', 'cca2': 'IM', 'callingCode': '44' },
//             { 'name': 'India', 'cca2': 'IN', 'callingCode': '91' },
//             {
//                 'name': 'British Indian Ocean Territory',
//                 'cca2': 'IO',
//                 'callingCode': '246',
//             },
//             { 'name': 'Ireland', 'cca2': 'IE', 'callingCode': '353' },
//             { 'name': 'Iran', 'cca2': 'IR', 'callingCode': '98' },
//             { 'name': 'Iraq', 'cca2': 'IQ', 'callingCode': '964' },
//             { 'name': 'Iceland', 'cca2': 'IS', 'callingCode': '354' },
//             { 'name': 'Israel', 'cca2': 'IL', 'callingCode': '972' },
//             { 'name': 'Italy', 'cca2': 'IT', 'callingCode': '39' },
//             { 'name': 'Jamaica', 'cca2': 'JM', 'callingCode': '1876' },
//             { 'name': 'Jersey', 'cca2': 'JE', 'callingCode': '44' },
//             { 'name': 'Jordan', 'cca2': 'JO', 'callingCode': '962' },
//             { 'name': 'Japan', 'cca2': 'JP', 'callingCode': '81' },
//             { 'name': 'Kazakhstan', 'cca2': 'KZ', 'callingCode': '76' },
//             { 'name': 'Kenya', 'cca2': 'KE', 'callingCode': '254' },
//             { 'name': 'Kyrgyzstan', 'cca2': 'KG', 'callingCode': '996' },
//             { 'name': 'Cambodia', 'cca2': 'KH', 'callingCode': '855' },
//             { 'name': 'Kiribati', 'cca2': 'KI', 'callingCode': '686' },
//             {
//                 'name': 'Saint Kitts and Nevis',
//                 'cca2': 'KN',
//                 'callingCode': '1869',
//             },
//             { 'name': 'South Korea', 'cca2': 'KR', 'callingCode': '82' },
//             { 'name': 'Kosovo', 'cca2': 'XK', 'callingCode': '383' },
//             { 'name': 'Kuwait', 'cca2': 'KW', 'callingCode': '965' },
//             { 'name': 'Laos', 'cca2': 'LA', 'callingCode': '856' },
//             { 'name': 'Lebanon', 'cca2': 'LB', 'callingCode': '961' },
//             { 'name': 'Liberia', 'cca2': 'LR', 'callingCode': '231' },
//             { 'name': 'Libya', 'cca2': 'LY', 'callingCode': '218' },
//             { 'name': 'Saint Lucia', 'cca2': 'LC', 'callingCode': '1758' },
//             { 'name': 'Liechtenstein', 'cca2': 'LI', 'callingCode': '423' },
//             { 'name': 'Sri Lanka', 'cca2': 'LK', 'callingCode': '94' },
//             { 'name': 'Lesotho', 'cca2': 'LS', 'callingCode': '266' },
//             { 'name': 'Lithuania', 'cca2': 'LT', 'callingCode': '370' },
//             { 'name': 'Luxembourg', 'cca2': 'LU', 'callingCode': '352' },
//             { 'name': 'Latvia', 'cca2': 'LV', 'callingCode': '371' },
//             { 'name': 'Macau', 'cca2': 'MO', 'callingCode': '853' },
//             { 'name': 'Saint Martin', 'cca2': 'MF', 'callingCode': '590' },
//             { 'name': 'Morocco', 'cca2': 'MA', 'callingCode': '212' },
//             { 'name': 'Monaco', 'cca2': 'MC', 'callingCode': '377' },
//             { 'name': 'Moldova', 'cca2': 'MD', 'callingCode': '373' },
//             { 'name': 'Madagascar', 'cca2': 'MG', 'callingCode': '261' },
//             { 'name': 'Maldives', 'cca2': 'MV', 'callingCode': '960' },
//             { 'name': 'Mexico', 'cca2': 'MX', 'callingCode': '52' },
//             { 'name': 'Marshall Islands', 'cca2': 'MH', 'callingCode': '692' },
//             { 'name': 'Macedonia', 'cca2': 'MK', 'callingCode': '389' },
//             { 'name': 'Mali', 'cca2': 'ML', 'callingCode': '223' },
//             { 'name': 'Malta', 'cca2': 'MT', 'callingCode': '356' },
//             { 'name': 'Myanmar', 'cca2': 'MM', 'callingCode': '95' },
//             { 'name': 'Montenegro', 'cca2': 'ME', 'callingCode': '382' },
//             { 'name': 'Mongolia', 'cca2': 'MN', 'callingCode': '976' },
//             {
//                 'name': 'Northern Mariana Islands',
//                 'cca2': 'MP',
//                 'callingCode': '1670',
//             },
//             { 'name': 'Mozambique', 'cca2': 'MZ', 'callingCode': '258' },
//             { 'name': 'Mauritania', 'cca2': 'MR', 'callingCode': '222' },
//             { 'name': 'Montserrat', 'cca2': 'MS', 'callingCode': '1664' },
//             { 'name': 'Martinique', 'cca2': 'MQ', 'callingCode': '596' },
//             { 'name': 'Mauritius', 'cca2': 'MU', 'callingCode': '230' },
//             { 'name': 'Malawi', 'cca2': 'MW', 'callingCode': '265' },
//             { 'name': 'Malaysia', 'cca2': 'MY', 'callingCode': '60' },
//             { 'name': 'Mayotte', 'cca2': 'YT', 'callingCode': '262' },
//             { 'name': 'Namibia', 'cca2': 'NA', 'callingCode': '264' },
//             { 'name': 'New Caledonia', 'cca2': 'NC', 'callingCode': '687' },
//             { 'name': 'Niger', 'cca2': 'NE', 'callingCode': '227' },
//             { 'name': 'Norfolk Island', 'cca2': 'NF', 'callingCode': '672' },
//             { 'name': 'Nigeria', 'cca2': 'NG', 'callingCode': '234' },
//             { 'name': 'Nicaragua', 'cca2': 'NI', 'callingCode': '505' },
//             { 'name': 'Niue', 'cca2': 'NU', 'callingCode': '683' },
//             { 'name': 'Netherlands', 'cca2': 'NL', 'callingCode': '31' },
//             { 'name': 'Norway', 'cca2': 'NO', 'callingCode': '47' },
//             { 'name': 'Nepal', 'cca2': 'NP', 'callingCode': '977' },
//             { 'name': 'Nauru', 'cca2': 'NR', 'callingCode': '674' },
//             { 'name': 'New Zealand', 'cca2': 'NZ', 'callingCode': '64' },
//             { 'name': 'Oman', 'cca2': 'OM', 'callingCode': '968' },
//             { 'name': 'Pakistan', 'cca2': 'PK', 'callingCode': '92' },
//             { 'name': 'Panama', 'cca2': 'PA', 'callingCode': '507' },
//             { 'name': 'Pitcairn Islands', 'cca2': 'PN', 'callingCode': '64' },
//             { 'name': 'Peru', 'cca2': 'PE', 'callingCode': '51' },
//             { 'name': 'Philippines', 'cca2': 'PH', 'callingCode': '63' },
//             { 'name': 'Palau', 'cca2': 'PW', 'callingCode': '680' },
//             { 'name': 'Papua New Guinea', 'cca2': 'PG', 'callingCode': '675' },
//             { 'name': 'Poland', 'cca2': 'PL', 'callingCode': '48' },
//             { 'name': 'Puerto Rico', 'cca2': 'PR', 'callingCode': '1787' },
//             { 'name': 'North Korea', 'cca2': 'KP', 'callingCode': '850' },
//             { 'name': 'Portugal', 'cca2': 'PT', 'callingCode': '351' },
//             { 'name': 'Paraguay', 'cca2': 'PY', 'callingCode': '595' },
//             { 'name': 'Palestine', 'cca2': 'PS', 'callingCode': '970' },
//             { 'name': 'French Polynesia', 'cca2': 'PF', 'callingCode': '689' },
//             { 'name': 'Qatar', 'cca2': 'QA', 'callingCode': '974' },
//             { 'name': 'Réunion', 'cca2': 'RE', 'callingCode': '262' },
//             { 'name': 'Romania', 'cca2': 'RO', 'callingCode': '40' },
//             { 'name': 'Russia', 'cca2': 'RU', 'callingCode': '7' },
//             { 'name': 'Rwanda', 'cca2': 'RW', 'callingCode': '250' },
//             { 'name': 'Saudi Arabia', 'cca2': 'SA', 'callingCode': '966' },
//             { 'name': 'Sudan', 'cca2': 'SD', 'callingCode': '249' },
//             { 'name': 'Senegal', 'cca2': 'SN', 'callingCode': '221' },
//             { 'name': 'Singapore', 'cca2': 'SG', 'callingCode': '65' },
//             { 'name': 'South Georgia', 'cca2': 'GS', 'callingCode': '500' },
//             {
//                 'name': 'Svalbard and Jan Mayen',
//                 'cca2': 'SJ',
//                 'callingCode': '4779',
//             },
//             { 'name': 'Solomon Islands', 'cca2': 'SB', 'callingCode': '677' },
//             { 'name': 'Sierra Leone', 'cca2': 'SL', 'callingCode': '232' },
//             { 'name': 'El Salvador', 'cca2': 'SV', 'callingCode': '503' },
//             { 'name': 'San Marino', 'cca2': 'SM', 'callingCode': '378' },
//             { 'name': 'Somalia', 'cca2': 'SO', 'callingCode': '252' },
//             {
//                 'name': 'Saint Pierre and Miquelon',
//                 'cca2': 'PM',
//                 'callingCode': '508',
//             },
//             { 'name': 'Serbia', 'cca2': 'RS', 'callingCode': '381' },
//             { 'name': 'South Sudan', 'cca2': 'SS', 'callingCode': '211' },
//             {
//                 'name': 'São Tomé and Príncipe',
//                 'cca2': 'ST',
//                 'callingCode': '239',
//             },
//             { 'name': 'Suriname', 'cca2': 'SR', 'callingCode': '597' },
//             { 'name': 'Slovakia', 'cca2': 'SK', 'callingCode': '421' },
//             { 'name': 'Slovenia', 'cca2': 'SI', 'callingCode': '386' },
//             { 'name': 'Sweden', 'cca2': 'SE', 'callingCode': '46' },
//             { 'name': 'Swaziland', 'cca2': 'SZ', 'callingCode': '268' },
//             { 'name': 'Sint Maarten', 'cca2': 'SX', 'callingCode': '1721' },
//             { 'name': 'Seychelles', 'cca2': 'SC', 'callingCode': '248' },
//             { 'name': 'Syria', 'cca2': 'SY', 'callingCode': '963' },
//             {
//                 'name': 'Turks and Caicos Islands',
//                 'cca2': 'TC',
//                 'callingCode': '1649',
//             },
//             { 'name': 'Chad', 'cca2': 'TD', 'callingCode': '235' },
//             { 'name': 'Togo', 'cca2': 'TG', 'callingCode': '228' },
//             { 'name': 'Thailand', 'cca2': 'TH', 'callingCode': '66' },
//             { 'name': 'Tajikistan', 'cca2': 'TJ', 'callingCode': '992' },
//             { 'name': 'Tokelau', 'cca2': 'TK', 'callingCode': '690' },
//             { 'name': 'Turkmenistan', 'cca2': 'TM', 'callingCode': '993' },
//             { 'name': 'Timor-Leste', 'cca2': 'TL', 'callingCode': '670' },
//             { 'name': 'Tonga', 'cca2': 'TO', 'callingCode': '676' },
//             {
//                 'name': 'Trinidad and Tobago',
//                 'cca2': 'TT',
//                 'callingCode': '1868',
//             },
//             { 'name': 'Tunisia', 'cca2': 'TN', 'callingCode': '216' },
//             { 'name': 'Turkey', 'cca2': 'TR', 'callingCode': '90' },
//             { 'name': 'Tuvalu', 'cca2': 'TV', 'callingCode': '688' },
//             { 'name': 'Taiwan', 'cca2': 'TW', 'callingCode': '886' },
//             { 'name': 'Tanzania', 'cca2': 'TZ', 'callingCode': '255' },
//             { 'name': 'Uganda', 'cca2': 'UG', 'callingCode': '256' },
//             { 'name': 'Ukraine', 'cca2': 'UA', 'callingCode': '380' },
//             {
//                 'name': 'United States Minor Outlying Islands',
//                 'cca2': 'UM',
//                 'callingCode': '',
//             },
//             { 'name': 'Uruguay', 'cca2': 'UY', 'callingCode': '598' },
//             { 'name': 'United States', 'cca2': 'US', 'callingCode': '1' },
//             { 'name': 'Uzbekistan', 'cca2': 'UZ', 'callingCode': '998' },
//             { 'name': 'Vatican City', 'cca2': 'VA', 'callingCode': '3906698' },
//             {
//                 'name': 'Saint Vincent and the Grenadines',
//                 'cca2': 'VC',
//                 'callingCode': '1784',
//             },
//             { 'name': 'Venezuela', 'cca2': 'VE', 'callingCode': '58' },
//             {
//                 'name': 'British Virgin Islands',
//                 'cca2': 'VG',
//                 'callingCode': '1284',
//             },
//             {
//                 'name': 'United States Virgin Islands',
//                 'cca2': 'VI',
//                 'callingCode': '1340',
//             },
//             { 'name': 'Vietnam', 'cca2': 'VN', 'callingCode': '84' },
//             { 'name': 'Vanuatu', 'cca2': 'VU', 'callingCode': '678' },
//             { 'name': 'Wallis and Futuna', 'cca2': 'WF', 'callingCode': '681' },
//             { 'name': 'Samoa', 'cca2': 'WS', 'callingCode': '685' },
//             { 'name': 'Yemen', 'cca2': 'YE', 'callingCode': '967' },
//             { 'name': 'South Africa', 'cca2': 'ZA', 'callingCode': '27' },
//             { 'name': 'Zambia', 'cca2': 'ZM', 'callingCode': '260' },
//             { 'name': 'Zimbabwe', 'cca2': 'ZW', 'callingCode': '263' }],
//         error_message: {
//             'INVALID_PH_N': 'Invalid phone number',
//             'INVALID_CC': 'Invalid country code',
//             'TOO_SHORT': 'The phone number supplier is too short',
//             'TOO_LONG': 'The phone number supplier is too long',
//             'UNKNOWN': 'Unknow phone number',
//         },
//         item: '<li><a href="javascript:void(0)" role="button" class="country"><i id="@cca2" class="flag @cca2"></i>@name<i id="@callingCode" class="callingCode">+@callingCode</i></a><li>',
//         intlInputPhone: '<input type="hidden" name="intlInputPhone" class="intlInputPhone" size="2" value=\'@data\' />',
//         separator: '<li role="separator" class="divider"></li>',
//         template: '<div class="input-group"><div class="input-group-btn"><button type="button" id="btn-country" class="btn btn-default  f16 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="flag @cca2 btn-flag"></span><span class="btn-cc">&nbsp;&nbsp; +@callingCode &nbsp;&nbsp;</span><span class="caretButton"></span></button> <ul class="dropdown-menu f16">@country_items</ul></div><input type="text" name="phone" id="phoneNumber"  onkeyup="if (/\\D/g.test(this.value)) this.value = this.value.replace(/\\D/g,\'\')" class="form-control phoneNumber" required placeholder="Phone Number" size="25" /><input type="hidden" name="defaultCountry" id="defaultCountry" size="2" value="@cca2" /><input type="hidden" name="region_code" id="carrierCode" size="2" value="@callingCode" /></div>',
//     };
//
//     IntlInputPhone.prototype.init = function () {
//         this.render(IntlInputPhone.DEFAULTS.template, {
//             cca2: this.getDefaultCountry().cca2.toLowerCase(),
//             callingCode: this.getDefaultCountry().callingCode,
//             country_items: this.countryItems(),
//         });
//         this.btnEvent();
//         this.inputEvent();
//         this.formEvent();
//     };
//
//     IntlInputPhone.prototype.getDefaultCountry = function () {
//         var dc, $this = this;
//         $.each(IntlInputPhone.DEFAULTS.countries, function (index, value) {
//             value.cca2 == $this.preferred_country[0].toUpperCase()
//                 ? dc = value
//                 : null;
//         });
//         if (typeof dc == 'object') return dc; else throw new Error(
//             'Invalid default country.');
//     };
//
//     IntlInputPhone.prototype.countryItems = function () {
//         var items = '', $this = this, pc = '', cs = '';
//         $.each(IntlInputPhone.DEFAULTS.countries, function (index, value) {
//             $.each($this.preferred_country, function (k, v) {
//                 if (v.toUpperCase() == value.cca2) {
//                     var c = $this.arrayToKeysValues(value).keys,
//                         d = $.map(value, function (vl, ix) {
//                             if (ix ==
//                                 'cca2') return vl.toLowerCase(); else return vl;
//                         });
//                     pc += IntlInputPhone.DEFAULTS.item.format(c, d);
//                 }
//             });
//             var a = $this.arrayToKeysValues(value).keys, b = $.map(value,
//                 function (vl, ix) {
//                     if (ix == 'cca2') return vl.toLowerCase(); else return vl;
//                 });
//             cs += IntlInputPhone.DEFAULTS.item.format(a, b);
//         });
//         if (pc.length > 0) {
//             items += pc;
//             items += IntlInputPhone.DEFAULTS.separator;
//         }
//         items += cs;
//         return items;
//     };
//
//     IntlInputPhone.prototype.btnEvent = function () {
//         var country = $('.country'), btn_flag = $('.btn-flag'),
//             btn_cc = $('.btn-cc'), input_cca2 = $('#defaultCountry'),
//             input_cc = $('#carrierCode');
//
//         country.click(function () {
//             var callingCode = $(this).find('.callingCode').attr('id'),
//                 flag = $(this).find('.flag').attr('id');
//             btn_flag.attr('class', 'flag ' + flag);
//             btn_cc.html('&nbsp;&nbsp;+' + callingCode + '&nbsp;&nbsp;');
//             input_cca2.val(flag);
//             input_cc.val(callingCode);
//         });
//     };
//
//     IntlInputPhone.prototype.inputEvent = function () {
//         var $this = this, h = '';
//         $('input.phoneNumber').on('blur', function () {
//             $this.validate($(this));
//         });
//     };
//
//     IntlInputPhone.prototype.formEvent = function () {
//         var form = this.element.closest('form'), $this = this;
//         form.submit(function () {
//             if ($this.validate($('input[name=phoneNumber]')) == false) {
//                 return false;
//             }
//         });
//     };
//
//     IntlInputPhone.prototype.validate = function (el) {
//         var r = phoneNumberParser(), h = '';
//         if (typeof r == 'object') {
//             this.hideError(el);
//             h = IntlInputPhone.DEFAULTS.intlInputPhone.format(['data'],
//                 [JSON.stringify(r)]);
//             if ($('.intlInputPhone').length > 0) {
//                 $('.intlInputPhone').
//                     remove();
//                 $('.input-group').append(h);
//             } else { $('.input-group').append(h); }
//         } else {
//             $('.intlInputPhone').remove();
//             this.showError(el, this.getErrorMessage(r));
//             return false;
//         }
//     };
//
//     IntlInputPhone.prototype.showError = function (el, message) {
//         if (typeof this.display_error == 'string' && this.display_error ==
//             'on') {
//             el.attr('data-container', 'body');
//             el.attr('data-toggle', 'popover');
//             el.attr('data-placement', 'right');
//             el.attr('data-content', message);
//             el.popover('show');
//         } else if (typeof this.display_error ==
//             'object') { this.display_error.text(message); } else { return; }
//     };
//
//     IntlInputPhone.prototype.hideError = function (el) {
//         if (typeof this.display_error ==
//             'object') { this.display_error.remove(); }
//         el.removeAttr('data-container');
//         el.removeAttr('data-toggle');
//         el.removeAttr('data-placement');
//         el.removeAttr('data-content');
//         el.popover('destroy');
//     };
//
//     IntlInputPhone.prototype.getErrorMessage = function (error_type) {
//         var msg = '', $this = this;
//         switch (error_type) {
//             case 'INVALID_PH_N':
//                 msg = $this.error_message.INVALID_PH_N;
//                 break;
//             case 'INVALID_COUNTRY_CODE':
//                 msg = $this.error_message.INVALID_CC;
//                 break;
//             case 'TOO_SHORT':
//                 msg = $this.error_message.TOO_SHORT;
//                 break;
//             case 'TOO_LONG':
//                 msg = $this.error_message.TOO_LONG;
//                 break;
//             case 'UNKNOWN':
//                 msg = $this.error_message.UNKNOWN;
//                 break;
//             default:
//                 msg = error_type;
//         }
//         return msg;
//     };
//
//     IntlInputPhone.prototype.render = function (template, data) {
//         this.element.html(template.format(this.arrayToKeysValues(data).keys,
//             this.arrayToKeysValues(data).values));
//     };
//
//     IntlInputPhone.prototype.arrayToKeysValues = function (data) {
//         if (typeof data == 'undefined') throw new Error(
//             'Can\'convert undefined object');
//         else return {
//             keys: Object.keys(data),
//             values: $.map(data, function (el) {return el;}),
//         };
//     };
//
//     String.prototype.format = function (find, replace) {
//         var replaceString = this, regex;
//         for (var i = 0; i < find.length; i++) {
//             regex = new RegExp('@' + find[i], 'g');
//             replaceString = replaceString.replace(regex, replace[i]);
//         }
//         return replaceString;
//     };
//
//     function Plugin (options) {
//         var inputPhone = new IntlInputPhone(this, options);
//         inputPhone.init();
//     }
//
//     $.fn.intlInputPhone = Plugin;
// })(jQuery);
//
// // Bootstrap: dropdown.js, tooltip.js, popover.js v3.3.6
//
// +function (t) {
//     'use strict';
//     // var e = t.fn.jquery.split(' ')[0].split('.');
//     // if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >
//     //     2) throw new Error(
//     //     'Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3');
// }(jQuery), +function (t) {
//     'use strict';
//
//     function e (e) {
//         var o = e.attr('data-target');
//         o || (o = e.attr('href'), o = o && /#[A-Za-z]/.test(o) &&
//             o.replace(/.*(?=#[^\s]*$)/, ''));
//         var i = o && t(o);
//         return i && i.length ? i : e.parent();
//     }
//
//     function o (o) {
//         o && 3 === o.which || (t(n).remove(), t(r).
//             each(function () {
//                 var i = t(this), n = e(i), r = { relatedTarget: this };
//                 n.hasClass('open') && (o && 'click' == o.type &&
//                     /input|textarea/i.test(o.target.tagName) &&
//                     t.contains(n[0], o.target) || (n.trigger(
//                         o = t.Event('hide.bs.dropdown',
//                             r)), o.isDefaultPrevented() ||
//                     (i.attr('aria-expanded', 'false'), n.removeClass('open').
//                         trigger(t.Event('hidden.bs.dropdown', r)))));
//             }));
//     }
//
//     function i (e) {
//         return this.each(function () {
//             var o = t(this), i = o.data('bs.dropdown');
//             i || o.data('bs.dropdown', i = new s(this)), 'string' == typeof e &&
//             i[e].call(o);
//         });
//     }
//
//     var n = '.dropdown-backdrop', r = '[data-toggle="dropdown"]',
//         s = function (e) {t(e).on('click.bs.dropdown', this.toggle);};
//     s.VERSION = '3.3.6', s.prototype.toggle = function (i) {
//         var n = t(this);
//         if (!n.is('.disabled, :disabled')) {
//             var r = e(n), s = r.hasClass('open');
//             if (o(), !s) {
//                 'ontouchstart' in document.documentElement &&
//                 !r.closest('.navbar-nav').length &&
//                 t(document.createElement('div')).
//                     addClass('dropdown-backdrop').
//                     insertAfter(t(this)).
//                     on('click', o);
//                 var a = { relatedTarget: this };
//                 if (r.trigger(i = t.Event('show.bs.dropdown',
//                     a)), i.isDefaultPrevented()) return;
//                 n.trigger('focus').attr('aria-expanded', 'true'), r.toggleClass(
//                     'open').trigger(t.Event('shown.bs.dropdown', a));
//             }
//             return !1;
//         }
//     }, s.prototype.keydown = function (o) {
//         if (/(38|40|27|32)/.test(o.which) &&
//             !/input|textarea/i.test(o.target.tagName)) {
//             var i = t(this);
//             if (o.preventDefault(), o.stopPropagation(), !i.is(
//                 '.disabled, :disabled')) {
//                 var n = e(i), s = n.hasClass('open');
//                 if (!s && 27 != o.which || s && 27 == o.which) return 27 ==
//                 o.which && n.find(r).trigger('focus'), i.trigger('click');
//                 var a = ' li:not(.disabled):visible a',
//                     p = n.find('.dropdown-menu' + a);
//                 if (p.length) {
//                     var l = p.index(o.target);
//                     38 == o.which && l > 0 && l--, 40 == o.which && l <
//                     p.length - 1 && l++, ~l || (l = 0), p.eq(l).trigger('focus');
//                 }
//             }
//         }
//     };
//     var a = t.fn.dropdown;
//     t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {return t.fn.dropdown = a, this;}, t(
//         document).
//         on('click.bs.dropdown.data-api', o).
//         on('click.bs.dropdown.data-api', '.dropdown form',
//             function (t) {t.stopPropagation();}).
//         on('click.bs.dropdown.data-api', r, s.prototype.toggle).
//         on('keydown.bs.dropdown.data-api', r, s.prototype.keydown).
//         on('keydown.bs.dropdown.data-api', '.dropdown-menu',
//             s.prototype.keydown);
// }(jQuery), +function (t) {
//     'use strict';
//
//     function e (e) {
//         return this.each(function () {
//             var i = t(this), n = i.data('bs.tooltip'),
//                 r = 'object' == typeof e && e;
//             (n || !/destroy|hide/.test(e)) &&
//             (n || i.data('bs.tooltip', n = new o(this, r)), 'string' ==
//             typeof e && n[e]());
//         });
//     }
//
//     var o = function (
//         t, e) {
//         this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init(
//             'tooltip', t, e);
//     };
//     o.VERSION = '3.3.6', o.TRANSITION_DURATION = 150, o.DEFAULTS = {
//         animation: !0,
//         placement: 'top',
//         selector: !1,
//         template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
//         trigger: 'hover focus',
//         title: '',
//         delay: 0,
//         html: !1,
//         container: !1,
//         viewport: { selector: 'body', padding: 0 },
//     }, o.prototype.init = function (e, o, i) {
//         if (this.enabled = !0, this.type = e, this.$element = t(
//             o), this.options = this.getOptions(
//             i), this.$viewport = this.options.viewport &&
//             t(t.isFunction(this.options.viewport) ? this.options.viewport.call(
//                 this, this.$element) : this.options.viewport.selector ||
//                 this.options.viewport), this.inState = {
//             click: !1,
//             hover: !1,
//             focus: !1,
//         }, this.$element[0] instanceof document.constructor &&
//         !this.options.selector) throw new Error(
//             '`selector` option must be specified when initializing ' +
//             this.type + ' on the window.document object!');
//         for (var n = this.options.trigger.split(' '), r = n.length; r--;) {
//             var s = n[r];
//             if ('click' == s) this.$element.on('click.' + this.type,
//                 this.options.selector,
//                 t.proxy(this.toggle, this)); else if ('manual' != s) {
//                 var a = 'hover' == s ? 'mouseenter' : 'focusin',
//                     p = 'hover' == s ? 'mouseleave' : 'focusout';
//                 this.$element.on(a + '.' + this.type, this.options.selector,
//                     t.proxy(this.enter, this)), this.$element.on(
//                     p + '.' + this.type, this.options.selector,
//                     t.proxy(this.leave, this));
//             }
//         }
//         this.options.selector ? this._options = t.extend({}, this.options,
//             { trigger: 'manual', selector: '' }) : this.fixTitle();
//     }, o.prototype.getDefaults = function () {return o.DEFAULTS;}, o.prototype.getOptions = function (e) {
//         return e = t.extend({}, this.getDefaults(), this.$element.data(),
//             e), e.delay && 'number' == typeof e.delay &&
//         (e.delay = { show: e.delay, hide: e.delay }), e;
//     }, o.prototype.getDelegateOptions = function () {
//         var e = {}, o = this.getDefaults();
//         return this._options &&
//         t.each(this._options, function (t, i) {o[t] != i && (e[t] = i);}), e;
//     }, o.prototype.enter = function (e) {
//         var o = e instanceof this.constructor
//             ? e
//             : t(e.currentTarget).data('bs.' + this.type);
//         return o || (o = new this.constructor(e.currentTarget,
//             this.getDelegateOptions()), t(e.currentTarget).
//             data('bs.' + this.type, o)), e instanceof t.Event &&
//         (o.inState['focusin' == e.type ? 'focus' : 'hover'] = !0), o.tip().
//             hasClass('in') || 'in' == o.hoverState
//             ? void (o.hoverState = 'in')
//             : (clearTimeout(o.timeout), o.hoverState = 'in', o.options.delay &&
//             o.options.delay.show ? void (o.timeout = setTimeout(
//                 function () {'in' == o.hoverState && o.show();},
//                 o.options.delay.show)) : o.show());
//     }, o.prototype.isInStateTrue = function () {
//         for (var t in this.inState) if (this.inState[t]) return !0;
//         return !1;
//     }, o.prototype.leave = function (e) {
//         var o = e instanceof this.constructor
//             ? e
//             : t(e.currentTarget).data('bs.' + this.type);
//         return o || (o = new this.constructor(e.currentTarget,
//             this.getDelegateOptions()), t(e.currentTarget).
//             data('bs.' + this.type, o)), e instanceof t.Event &&
//         (o.inState['focusout' == e.type
//             ? 'focus'
//             : 'hover'] = !1), o.isInStateTrue() ? void 0 : (clearTimeout(
//             o.timeout), o.hoverState = 'out', o.options.delay &&
//         o.options.delay.hide ? void (o.timeout = setTimeout(
//             function () {'out' == o.hoverState && o.hide();},
//             o.options.delay.hide)) : o.hide());
//     }, o.prototype.show = function () {
//         var e = t.Event('show.bs.' + this.type);
//         if (this.hasContent() && this.enabled) {
//             this.$element.trigger(e);
//             var i = t.contains(this.$element[0].ownerDocument.documentElement,
//                 this.$element[0]);
//             if (e.isDefaultPrevented() || !i) return;
//             var n = this, r = this.tip(), s = this.getUID(this.type);
//             this.setContent(), r.attr('id', s), this.$element.attr(
//                 'aria-describedby', s), this.options.animation &&
//             r.addClass('fade');
//             var a = 'function' == typeof this.options.placement
//                 ? this.options.placement.call(this, r[0], this.$element[0])
//                 : this.options.placement, p = /\s?auto?\s?/i, l = p.test(a);
//             l && (a = a.replace(p, '') || 'top'), r.detach().
//                 css({ top: 0, left: 0, display: 'block' }).
//                 addClass(a).
//                 data('bs.' + this.type, this), this.options.container
//                 ? r.appendTo(this.options.container)
//                 : r.insertAfter(this.$element), this.$element.trigger(
//                 'inserted.bs.' + this.type);
//             var h = this.getPosition(), d = r[0].offsetWidth,
//                 c = r[0].offsetHeight;
//             if (l) {
//                 var f = a, u = this.getPosition(this.$viewport);
//                 a = 'bottom' == a && h.bottom + c > u.bottom ? 'top' : 'top' ==
//                 a && h.top - c < u.top ? 'bottom' : 'right' == a && h.right +
//                 d > u.width ? 'left' : 'left' == a && h.left - d < u.left
//                     ? 'right'
//                     : a, r.removeClass(f).addClass(a);
//             }
//             var v = this.getCalculatedOffset(a, h, d, c);
//             this.applyPlacement(v, a);
//             var g = function () {
//                 var t = n.hoverState;
//                 n.$element.trigger(
//                     'shown.bs.' + n.type), n.hoverState = null, 'out' == t &&
//                 n.leave(n);
//             };
//             t.support.transition && this.$tip.hasClass('fade') ? r.one(
//                 'bsTransitionEnd', g).
//                 emulateTransitionEnd(o.TRANSITION_DURATION) : g();
//         }
//     }, o.prototype.applyPlacement = function (e, o) {
//         var i = this.tip(), n = i[0].offsetWidth, r = i[0].offsetHeight,
//             s = parseInt(i.css('margin-top'), 10),
//             a = parseInt(i.css('margin-left'), 10);
//         isNaN(s) && (s = 0), isNaN(a) &&
//         (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
//             using: function (t) {
//                 i.css({ top: Math.round(t.top), left: Math.round(t.left) });
//             },
//         }, e), 0), i.addClass('in');
//         var p = i[0].offsetWidth, l = i[0].offsetHeight;
//         'top' == o && l != r && (e.top = e.top + r - l);
//         var h = this.getViewportAdjustedDelta(o, e, p, l);
//         h.left ? e.left += h.left : e.top += h.top;
//         var d = /top|bottom/.test(o),
//             c = d ? 2 * h.left - n + p : 2 * h.top - r + l,
//             f = d ? 'offsetWidth' : 'offsetHeight';
//         i.offset(e), this.replaceArrow(c, i[0][f], d);
//     }, o.prototype.replaceArrow = function (t, e, o) {
//         this.arrow().
//             css(o ? 'left' : 'top', 50 * (1 - t / e) + '%').
//             css(o ? 'top' : 'left', '');
//     }, o.prototype.setContent = function () {
//         var t = this.tip(), e = this.getTitle();
//         t.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](
//             e), t.removeClass('fade in top bottom left right');
//     }, o.prototype.hide = function (e) {
//         function i () {
//             'in' != n.hoverState && r.detach(), n.$element.removeAttr(
//                 'aria-describedby').
//                 trigger('hidden.bs.' + n.type), e && e();
//         }
//
//         var n = this, r = t(this.$tip), s = t.Event('hide.bs.' + this.type);
//         return this.$element.trigger(s), s.isDefaultPrevented()
//             ? void 0
//             : (r.removeClass('in'), t.support.transition && r.hasClass('fade')
//                 ? r.one('bsTransitionEnd', i).
//                     emulateTransitionEnd(o.TRANSITION_DURATION)
//                 : i(), this.hoverState = null, this);
//     }, o.prototype.fixTitle = function () {
//         var t = this.$element;
//         (t.attr('title') || 'string' != typeof t.attr('data-original-title')) &&
//         t.attr('data-original-title', t.attr('title') || '').attr('title', '');
//     }, o.prototype.hasContent = function () {return this.getTitle();}, o.prototype.getPosition = function (e) {
//         e = e || this.$element;
//         var o = e[0], i = 'BODY' == o.tagName, n = o.getBoundingClientRect();
//         null == n.width && (n = t.extend({}, n,
//             { width: n.right - n.left, height: n.bottom - n.top }));
//         var r = i ? { top: 0, left: 0 } : e.offset(), s = {
//             scroll: i ? document.documentElement.scrollTop ||
//                 document.body.scrollTop : e.scrollTop(),
//         }, a = i
//             ? { width: t(window).width(), height: t(window).height() }
//             : null;
//         return t.extend({}, n, s, a, r);
//     }, o.prototype.getCalculatedOffset = function (
//         t, e, o, i) {
//         return 'bottom' == t
//             ? { top: e.top + e.height, left: e.left + e.width / 2 - o / 2 }
//             : 'top' == t
//                 ? { top: e.top - i, left: e.left + e.width / 2 - o / 2 }
//                 : 'left' == t ? {
//                     top: e.top + e.height / 2 - i / 2,
//                     left: e.left - o,
//                 } : {
//                     top: e.top + e.height / 2 - i / 2,
//                     left: e.left + e.width,
//                 };
//     }, o.prototype.getViewportAdjustedDelta = function (
//         t, e, o, i) {
//         var n = {
//             top: 0,
//             left: 0,
//         };
//         if (!this.$viewport) return n;
//         var r = this.options.viewport && this.options.viewport.padding || 0,
//             s = this.getPosition(this.$viewport);
//         if (/right|left/.test(t)) {
//             var a = e.top - r - s.scroll, p = e.top + r - s.scroll + i;
//             a < s.top ? n.top = s.top - a : p > s.top + s.height &&
//                 (n.top = s.top + s.height - p);
//         } else {
//             var l = e.left - r, h = e.left + r + o;
//             l < s.left ? n.left = s.left - l : h > s.right &&
//                 (n.left = s.left + s.width - h);
//         }
//         return n;
//     }, o.prototype.getTitle = function () {
//         var t, e = this.$element, o = this.options;
//         return t = e.attr('data-original-title') ||
//             ('function' == typeof o.title ? o.title.call(e[0]) : o.title);
//     }, o.prototype.getUID = function (t) {
//         do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
//         return t;
//     }, o.prototype.tip = function () {
//         if (!this.$tip && (this.$tip = t(this.options.template), 1 !=
//         this.$tip.length)) throw new Error(this.type +
//             ' `template` option must consist of exactly 1 top-level element!');
//         return this.$tip;
//     }, o.prototype.arrow = function () {
//         return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
//     }, o.prototype.enable = function () {this.enabled = !0;}, o.prototype.disable = function () {this.enabled = !1;}, o.prototype.toggleEnabled = function () {this.enabled = !this.enabled;}, o.prototype.toggle = function (e) {
//         var o = this;
//         e && (o = t(e.currentTarget).data('bs.' + this.type), o ||
//         (o = new this.constructor(e.currentTarget,
//             this.getDelegateOptions()), t(e.currentTarget).
//             data('bs.' + this.type, o))), e
//             ? (o.inState.click = !o.inState.click, o.isInStateTrue() ? o.enter(
//                 o) : o.leave(o))
//             : o.tip().hasClass('in') ? o.leave(o) : o.enter(o);
//     }, o.prototype.destroy = function () {
//         var t = this;
//         clearTimeout(this.timeout), this.hide(function () {
//             t.$element.off('.' + t.type).
//                 removeData('bs.' + t.type), t.$tip &&
//             t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null;
//         });
//     };
//     var i = t.fn.tooltip;
//     t.fn.tooltip = e, t.fn.tooltip.Constructor = o, t.fn.tooltip.noConflict = function () {return t.fn.tooltip = i, this;};
// }(jQuery), +function (t) {
//     'use strict';
//
//     function e (e) {
//         return this.each(function () {
//             var i = t(this), n = i.data('bs.popover'),
//                 r = 'object' == typeof e && e;
//             (n || !/destroy|hide/.test(e)) &&
//             (n || i.data('bs.popover', n = new o(this, r)), 'string' ==
//             typeof e && n[e]());
//         });
//     }
//
//     var o = function (t, e) {this.init('popover', t, e);};
//     if (!t.fn.tooltip) throw new Error('Popover requires tooltip.js');
//     o.VERSION = '3.3.6', o.DEFAULTS = t.extend({},
//         t.fn.tooltip.Constructor.DEFAULTS, {
//             placement: 'right',
//             trigger: 'click',
//             content: '',
//             template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
//         }), o.prototype = t.extend({},
//         t.fn.tooltip.Constructor.prototype), o.prototype.constructor = o, o.prototype.getDefaults = function () {return o.DEFAULTS;}, o.prototype.setContent = function () {
//         var t = this.tip(), e = this.getTitle(), o = this.getContent();
//         t.find('.popover-title')[this.options.html ? 'html' : 'text'](
//             e), t.find('.popover-content').
//             children().
//             detach().
//             end()[this.options.html
//             ? 'string' == typeof o ? 'html' : 'append'
//             : 'text'](o), t.removeClass(
//             'fade top bottom left right in'), t.find('.popover-title').html() ||
//         t.find('.popover-title').hide();
//     }, o.prototype.hasContent = function () {
//         return this.getTitle() || this.getContent();
//     }, o.prototype.getContent = function () {
//         var t = this.$element, e = this.options;
//         return t.attr('data-content') ||
//             ('function' == typeof e.content ? e.content.call(t[0]) : e.content);
//     }, o.prototype.arrow = function () {
//         return this.$arrow = this.$arrow || this.tip().find('.arrow');
//     };
//     var i = t.fn.popover;
//     t.fn.popover = e, t.fn.popover.Constructor = o, t.fn.popover.noConflict = function () {return t.fn.popover = i, this;};
// }(jQuery);
//
// // Google Libphonenumber
//
// !function () {
//     function d (d) {return 'string' == typeof d;}
//
//     function A (d, A) {
//         function N () {}
//
//         N.prototype = A.prototype, d.ha = A.prototype, d.prototype = new N, d.prototype.constructor = d, d.ma = function (
//             d, N, $) {
//             for (var e = Array(arguments.length - 2), n = 2; n <
//             arguments.length; n++) e[n - 2] = arguments[n];
//             return A.prototype[N].apply(d, e);
//         };
//     }
//
//     function N (d) {
//         if (Error.captureStackTrace) Error.captureStackTrace(this, N); else {
//             var A = Error().stack;
//             A && (this.stack = A);
//         }
//         d && (this.message = String(d));
//     }
//
//     function $ (d, A) {
//         for (var N = d.split('%s'), $ = '', e = Array.prototype.slice.call(
//             arguments, 1); e.length && 1 < N.length;) $ += N.shift() +
//             e.shift();
//         return $ + N.join('%s');
//     }
//
//     function e (d, A) {return A > d ? -1 : d > A ? 1 : 0;}
//
//     function n (d, A) {A.unshift(d), N.call(this, $.apply(null, A)), A.shift();}
//
//     function t (d, A) {
//         throw new n('Failure' + (d ? ': ' + d : ''),
//             Array.prototype.slice.call(arguments, 1));
//     }
//
//     function r (d, A) {d.sort(A || a);}
//
//     function a (d, A) {return d > A ? 1 : A > d ? -1 : 0;}
//
//     function i (d) {
//         var A, N = [], $ = 0;
//         for (A in d) N[$++] = d[A];
//         return N;
//     }
//
//     function o (d, A) {
//         var N;
//         d:{
//             for (N in d) if (A.call(void 0, d[N], N, d)) break d;
//             N = void 0;
//         }
//         return N && d[N];
//     }
//
//     function u () {
//         var d = md;
//         return Rd ? /rv\:([^\);]+)(\)|;)/.exec(d) : Id ? /Edge\/([\d\.]+)/.exec(
//             d) : xd ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(d) : _d
//             ? /WebKit\/(\S+)/.exec(d)
//             : void 0;
//     }
//
//     function l () {
//         var d = Sd.document;
//         return d ? d.documentMode : void 0;
//     }
//
//     function f (d) {
//         if (!Od[d]) {
//             for (var A = 0, N = bd(String(Bd)).
//                 split('.'), $ = bd(String(d)).split('.'), n = Math.max(N.length,
//                 $.length), t = 0; 0 == A && n > t; t++) {
//                 var r = N[t] || '', a = $[t] || '',
//                     i = RegExp('(\\d*)(\\D*)', 'g'),
//                     o = RegExp('(\\d*)(\\D*)', 'g');
//                 do {
//                     var u = i.exec(r) || ['', '', ''],
//                         l = o.exec(a) || ['', '', ''];
//                     if (0 == u[0].length && 0 == l[0].length) break;
//                     A = e(0 == u[1].length ? 0 : parseInt(u[1], 10),
//                         0 == l[1].length ? 0 : parseInt(l[1], 10)) ||
//                         e(0 == u[2].length, 0 == l[2].length) || e(u[2], l[2]);
//                 } while (0 == A);
//             }
//             Od[d] = A >= 0;
//         }
//     }
//
//     function c (A) {
//         var N = document;
//         return d(A) ? N.getElementById(A) : A;
//     }
//
//     function s (
//         d, A) {
//         switch (this.a = d, this.l = A.name, this.f = !!A.ba, this.b = A.c, this.j = A.type, this.i = !1, this.b) {
//             case Ud:
//             case wd:
//             case Vd:
//             case Hd:
//             case Zd:
//             case Dd:
//             case Fd:
//                 this.i = !0;
//         }
//         this.g = A.defaultValue;
//     }
//
//     function p (d, A) {
//         this.b = d, this.a = {};
//         for (var N = 0; N < A.length; N++) {
//             var $ = A[N];
//             this.a[$.a] = $;
//         }
//     }
//
//     function h (d) {
//         return d = i(d.a), r(d, function (d, A) {return d.a - A.a;}), d;
//     }
//
//     function g (d, A) {return o(d.a, function (d) {return d.l == A;}) || null;}
//
//     function C () {this.b = {}, this.f = this.h().a, this.a = this.g = null;}
//
//     function S (d, A) {
//         for (var N in d.b) {
//             var $ = Number(N);
//             d.f[$] || A.call(d, $, d.b[N]);
//         }
//     }
//
//     function b (d, A) {
//         for (var N = h(d.h()), $ = 0; $ < N.length; $++) {
//             var e = N[$], n = e.a;
//             if (m(A, n)) {
//                 d.a && delete d.a[e.a];
//                 var t = 11 == e.b || 10 == e.b;
//                 if (e.f) for (var e = M(A, n) || [], r = 0; r <
//                 e.length; r++) G(d, n, t ? e[r].clone() : e[r]); else e = M(A,
//                     n), t ? (t = M(d, n))
//                     ? b(t, e)
//                     : T(d, n, e.clone()) : T(d, n, e);
//             }
//         }
//     }
//
//     function m (d, A) {return null != d.b[A];}
//
//     function M (d, A) {
//         var N = d.b[A];
//         if (null == N) return null;
//         if (d.g) {
//             if (!(A in d.a)) {
//                 var $ = d.g, e = d.f[A];
//                 if (null != N) if (e.f) {
//                     for (var n = [], t = 0; t < N.length; t++) n[t] = $.a(e,
//                         N[t]);
//                     N = n;
//                 } else N = $.a(e, N);
//                 return d.a[A] = N;
//             }
//             return d.a[A];
//         }
//         return N;
//     }
//
//     function v (d, A, N) {
//         var $ = M(d, A);
//         return d.f[A].f ? $[N || 0] : $;
//     }
//
//     function y (d, A) {
//         var N;
//         if (m(d, A)) N = v(d, A, void 0); else d:{
//             if (N = d.f[A], void 0 === N.g) {
//                 var $ = N.j;
//                 if ($ === Boolean) N.g = !1; else if ($ ===
//                     Number) N.g = 0; else {
//                     if ($ !== String) {
//                         N = new $;
//                         break d;
//                     }
//                     N.g = N.i ? '0' : '';
//                 }
//             }
//             N = N.g;
//         }
//         return N;
//     }
//
//     function E (d, A) {
//         return d.f[A].f ? m(d, A) ? d.b[A].length : 0 : m(d, A)
//             ? 1
//             : 0;
//     }
//
//     function T (d, A, N) {d.b[A] = N, d.a && (d.a[A] = N);}
//
//     function G (d, A, N) {
//         d.b[A] || (d.b[A] = []), d.b[A].push(N), d.a && delete d.a[A];
//     }
//
//     function x (d, A) {delete d.b[A], d.a && delete d.a[A];}
//
//     function I (d, A) {
//         var N, $ = [];
//         for (N in A) 0 != N && $.push(new s(N, A[N]));
//         return new p(d, $);
//     }
//
//     function R () {}
//
//     function _ (d) {this.j = d;}
//
//     function B (d, A) {null != d && this.a.apply(this, arguments);}
//
//     function O (d) {d.b = '';}
//
//     function L () {C.call(this);}
//
//     function P () {C.call(this);}
//
//     function K () {C.call(this);}
//
//     function F () {C.call(this);}
//
//     function D () {}
//
//     function U () {}
//
//     function w () {this.a = {};}
//
//     function V (d) {
//         var A = d.search(eA);
//         return A >= 0
//             ? (d = d.substring(A), d = d.replace(tA, ''), A = d.search(nA), A >=
//             0 && (d = d.substring(0, A)))
//             : d = '', d;
//     }
//
//     function H (d) {return 2 > d.length ? !1 : gd(iA, d);}
//
//     function Z (d) {return gd(rA, d) ? Y(d, dA) : Y(d, zd);}
//
//     function W (d) {
//         var A = Z(d.toString());
//         O(d), d.a(A);
//     }
//
//     function Y (d, A) {
//         for (var N, $ = new B, e = d.length, n = 0; e > n; ++n) N = d.charAt(
//             n), N = A[N.toUpperCase()], null != N && $.a(N);
//         return $.toString();
//     }
//
//     function k (d) {return null != d && isNaN(d) && d.toUpperCase() in jd;}
//
//     function J (d, A, N) {
//         if (0 == v(A, 2) && m(A, 5)) {
//             var $ = y(A, 5);
//             if (0 < $.length) return $;
//         }
//         var $ = y(A, 1), e = z(A);
//         return 0 == N ? q($, 0, e, '') : $ in Xd ? (d = Q(d, $, od($)), A = $d(
//             A, d, N), e = dd(e, d, N), q($, N, e, A)) : e;
//     }
//
//     function Q (d, A, N) {return '001' == N ? nd(d, '' + A) : nd(d, N);}
//
//     function X (d, A, N) {
//         if (!k(N)) return J(d, A, 1);
//         var $ = y(A, 1), e = z(A);
//         if (!($ in Xd)) return e;
//         if (1 == $) {
//             if (null != N && 0 <= vd(Xd[1], N.toUpperCase())) return $ + ' ' +
//                 J(d, A, 2);
//         } else if ($ == ud(d, N)) return J(d, A, 2);
//         var n = nd(d, N), t = y(n, 11);
//         return N = '', gd(AA, t) ? N = t : m(n, 17) && (N = y(n, 17)), d = Q(d,
//             $, od($)), e = dd(e, d, 1), A = $d(A, d, 1), 0 < N.length ? N +
//             ' ' + $ + ' ' + e + A : q($, 1, e, A);
//     }
//
//     function j (d, A, N) {
//         var $;
//         if (($ = m(A, 5)) && (($ = m(A, 4)) &&
//         ($ = y(A, 1), $ = Q(d, $, od($)), $ = !(null != $ && y($, 26))), !$)) {
//             if ($ = y(A, 1), $ = Q(d, $, od($)), null == $) $ = !1; else {
//                 var e = z(A);
//                 $ = null != Ad(M($, 19) || [], e);
//             }
//             $ = !$;
//         }
//         if ($) return y(A, 5);
//         if (!m(A, 6)) return J(d, A, 2);
//         switch (v(A, 6)) {
//             case 1:
//                 d = J(d, A, 1);
//                 break;
//             case 5:
//                 d = X(d, A, N);
//                 break;
//             case 10:
//                 d = J(d, A, 1).substring(1);
//                 break;
//             default:
//                 $ = od(y(A, 1));
//                 var n;
//                 if (N = nd(d, $), null == N ? n = null : (N = y(N, 12), n = 0 ==
//                 N.length ? null : N = N.replace('~', '')), N = J(d, A,
//                     2), null == n || 0 == n.length) {
//                     d = N;
//                     break;
//                 }
//                 var t;
//                 d:{
//                     if (e = y(A, 5), e = Y(e, zd), 0 ==
//                     e.lastIndexOf(n, 0)) try {
//                         t = rd(d, hd(d, e.substring(n.length), $, !1));
//                         break d;
//                     } catch (r) {}
//                     t = !1;
//                 }
//                 if (t) {
//                     d = N;
//                     break;
//                 }
//                 if (t = nd(d, $), $ = z(A), t = Ad(M(t, 19) || [], $), null ==
//                 t) {
//                     d = N;
//                     break;
//                 }
//                 if ($ = y(t, 4), e = $.indexOf('$1'), 0 >= e) {
//                     d = N;
//                     break;
//                 }
//                 if ($ = $.substring(0, e), $ = Y($, zd), 0 == $.length) {
//                     d = N;
//                     break;
//                 }
//                 t = t.clone(), x(t, 4), $ = [t], t = y(A, 1), N = z(A), t in Xd
//                     ? (d = Q(d, t, od(t)), e = '', e = Ad($, N), null == e
//                         ? e = N
//                         : ($ = e.clone(), e = y(e, 4), 0 < e.length &&
//                         (n = y(d, 12), 0 < n.length ? (e = e.replace(uA, n).
//                             replace(lA, '$1'), T($, 4, e)) : x($, 4)), e = Nd(N,
//                             $, 2)), d = $d(A, d, 2), d = q(t, 2, e, d))
//                     : d = N;
//         }
//         return A = y(A, 5), null != d && 0 < A.length &&
//         (t = Y(d, qd), N = Y(A, qd), t != N && (d = A)), d;
//     }
//
//     function z (d) {
//         var A = '' + v(d, 2);
//         return m(d, 4) && v(d, 4) ? Array(y(d, 8) + 1).join('0') + A : A;
//     }
//
//     function q (d, A, N, $) {
//         switch (A) {
//             case 0:
//                 return '+' + d + N + $;
//             case 1:
//                 return '+' + d + ' ' + N + $;
//             case 3:
//                 return 'tel:+' + d + '-' + N + $;
//             default:
//                 return N + $;
//         }
//     }
//
//     function dd (d, A, N, $) {
//         return A = 0 == (M(A, 20) || []).length || 2 == N
//             ? M(A, 19) || []
//             : M(A, 20) || [], A = Ad(A, d), null == A ? d : Nd(d, A, N, $);
//     }
//
//     function Ad (d, A) {
//         for (var N, $ = d.length, e = 0; $ > e; ++e) {
//             N = d[e];
//             var n = E(N, 3);
//             if ((0 == n || 0 == A.search(v(N, 3, n - 1))) &&
//                 (n = new RegExp(v(N, 1)), gd(n, A))) return N;
//         }
//         return null;
//     }
//
//     function Nd (d, A, N, $) {
//         var e = y(A, 2), n = new RegExp(v(A, 1)), t = y(A, 5), r = '';
//         return 2 == N && null != $ && 0 < $.length && 0 < t.length
//             ? (A = t.replace(fA, $), e = e.replace(oA, A), r = d.replace(n, e))
//             : (A = y(A, 4), r = 2 == N && null != A && 0 < A.length ? d.replace(
//                 n, e.replace(oA, A)) : d.replace(n, e)), 3 == N &&
//         (r = r.replace(RegExp('^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]+'),
//             ''), r = r.replace(
//             RegExp('[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]+', 'g'), '-')), r;
//     }
//
//     function $d (d, A, N) {
//         return m(d, 3) && 0 != v(d, 3).length ? 3 == N
//             ? ';ext=' + v(d, 3)
//             : m(A, 13) ? v(A, 13) + y(d, 3) : ' ext. ' + y(d, 3) : '';
//     }
//
//     function ed (d, A) {
//         return td(d, v(A, 1)) ? td(d, v(A, 5)) ? 4 : td(d, v(A, 4)) ? 3 : td(d,
//             v(A, 6)) ? 5 : td(d, v(A, 8)) ? 6 : td(d, v(A, 7))
//             ? 7
//             : td(d, v(A, 21)) ? 8 : td(d, v(A, 25)) ? 9 : td(d, v(A, 28))
//                 ? 10
//                 : td(d, v(A, 2)) ? v(A, 18) || td(d, v(A, 3)) ? 2 : 0 : !v(A,
//                     18) && td(d, v(A, 3)) ? 1 : -1 : -1;
//     }
//
//     function nd (d, A) {
//         if (null == A) return null;
//         A = A.toUpperCase();
//         var N = d.a[A];
//         if (null == N) {
//             if (N = jd[A], null == N) return null;
//             N = (new U).f(K.h(), N), d.a[A] = N;
//         }
//         return N;
//     }
//
//     function td (d, A) {return gd(y(A, 3), d) && gd(y(A, 2), d);}
//
//     function rd (d, A) {
//         var N = id(d, A);
//         return ad(d, A, N);
//     }
//
//     function ad (d, A, N) {
//         var $ = y(A, 1), e = Q(d, $, N);
//         return null == e || '001' != N && $ != ud(d, N) ? !1 : (d = z(A), -1 !=
//         ed(d, e));
//     }
//
//     function id (d, A) {
//         if (null == A) return null;
//         var N = y(A, 1), N = Xd[N];
//         if (null == N) N = null; else if (1 == N.length) N = N[0]; else d:{
//             for (var $, e = z(A), n = N.length, t = 0; n > t; t++) {
//                 $ = N[t];
//                 var r = nd(d, $);
//                 if (m(r, 23)) {
//                     if (0 == e.search(v(r, 23))) {
//                         N = $;
//                         break d;
//                     }
//                 } else if (-1 != ed(e, r)) {
//                     N = $;
//                     break d;
//                 }
//             }
//             N = null;
//         }
//         return N;
//     }
//
//     function od (d) {return d = Xd[d], null == d ? 'ZZ' : d[0];}
//
//     function ud (d, A) {
//         var N = nd(d, A);
//         if (null == N) throw'Invalid region code: ' + A;
//         return y(N, 10);
//     }
//
//     function ld (d, A) {return gd(d, A) ? 0 : 0 == A.search(d) ? 3 : 2;}
//
//     function fd (d, A) {
//         var N = z(A), $ = y(A, 1);
//         return $ in Xd ? ($ = Q(d, $, od($)), $ = v($, 1), $ = y($, 3), ld($,
//             N)) : 1;
//     }
//
//     function cd (d, A) {
//         var N = d.toString();
//         if (0 == N.length || '0' == N.charAt(0)) return 0;
//         for (var $, e = N.length, n = 1; 3 >= n && e >=
//         n; ++n) if ($ = parseInt(N.substring(0, n), 10), $ in Xd) return A.a(
//             N.substring(n)), $;
//         return 0;
//     }
//
//     function sd (d, A, N, $, e) {
//         if (0 == d.length) return 0;
//         d = new B(d);
//         var n;
//         null != A && (n = v(A, 11)), null == n && (n = 'NonMatch');
//         var t = d.toString();
//         if (0 == t.length) n = 20; else if (NA.test(t)) t = t.replace(NA,
//             ''), O(d), d.a(Z(t)), n = 1; else {
//             if (t = new RegExp(n), W(d), n = d.toString(), 0 == n.search(t)) {
//                 var t = n.match(t)[0].length, r = n.substring(t).match($A);
//                 r && null != r[1] && 0 < r[1].length && '0' == Y(r[1], zd)
//                     ? n = !1
//                     : (O(d), d.a(n.substring(t)), n = !0);
//             } else n = !1;
//             n = n ? 5 : 20;
//         }
//         if ($ && T(e, 6, n), 20 != n) {
//             if (2 >= d.b.length) throw'Phone number too short after IDD';
//             if (N = cd(d, N), 0 != N) return T(e, 1, N), N;
//             throw'Invalid country calling code';
//         }
//         if (null != A && (n = y(A, 10), t = '' + n, r = d.toString(), 0 ==
//         r.lastIndexOf(t, 0))) {
//             var a = new B(r.substring(t.length)), r = v(A, 1),
//                 t = new RegExp(y(r, 2));
//             if (pd(a, A, null), A = a.toString(), r = y(r, 3), !gd(t,
//                 d.toString()) && gd(t, A) || 3 ==
//             ld(r, d.toString())) return N.a(A), $ && T(e, 6, 10), T(e, 1, n), n;
//         }
//         return T(e, 1, 0), 0;
//     }
//
//     function pd (d, A, N) {
//         var $ = d.toString(), e = $.length, n = v(A, 15);
//         if (0 != e && null != n && 0 != n.length &&
//             (n = new RegExp('^(?:' + n + ')'), e = n.exec($))) {
//             var t, r = RegExp;
//             t = v(A, 1), t = y(t, 2), r = new r(t), t = gd(r, $);
//             var a = e.length - 1;
//             A = v(A, 16), null == A || 0 == A.length || null == e[a] || 0 ==
//             e[a].length ? (!t || gd(r, $.substring(e[0].length))) &&
//                 (null != N && a > 0 && null != e[a] && N.a(e[1]), d.b = '' +
//                     $.substring(e[0].length)) : ($ = $.replace(n, A), (!t ||
//                 gd(r, $)) && (null != N && a > 0 && N.a(e[1]), d.b = '' + $));
//         }
//     }
//
//     function hd (d, A, N, $) {
//         if (null ==
//             A) throw'The string supplied did not seem to be a phone number';
//         if (250 <
//             A.length) throw'The string supplied is too long to be a phone number';
//         var e = new B, n = A.indexOf(';phone-context=');
//         if (n > 0) {
//             var t = n + 15;
//             if ('+' == A.charAt(t)) {
//                 var r = A.indexOf(';', t);
//                 r > 0 ? e.a(A.substring(t, r)) : e.a(A.substring(t));
//             }
//             t = A.indexOf('tel:'), e.a(A.substring(t >= 0 ? t + 4 : 0, n));
//         } else e.a(V(A));
//         if (n = e.toString(), t = n.indexOf(';isub='), t > 0 &&
//         (O(e), e.a(n.substring(0, t))), !H(
//             e.toString())) throw'The string supplied did not seem to be a phone number';
//         if (n = e.toString(), !(k(N) || null != n && 0 < n.length &&
//             NA.test(n))) throw'Invalid country calling code';
//         n = new F, $ && T(n, 5, A);
//         d:{
//             if (A = e.toString(), t = A.search(aA), t >= 0 &&
//             H(A.substring(0, t))) for (var r = A.match(
//                 aA), a = r.length, i = 1; a > i; ++i) if (null != r[i] && 0 <
//                 r[i].length) {
//                 O(e), e.a(A.substring(0, t)), A = r[i];
//                 break d;
//             }
//             A = '';
//         }
//         0 < A.length && T(n, 3, A), t = nd(d,
//             N), A = new B, r = 0, a = e.toString();
//         try {
//             r = sd(a, t, A, $, n);
//         } catch (o) {
//             if ('Invalid country calling code' != o || !NA.test(a)) throw o;
//             if (a = a.replace(NA, ''), r = sd(a, t, A, $, n), 0 == r) throw o;
//         }
//         if (0 != r ? (e = od(r), e != N && (t = Q(d, r, e))) : (W(e), A.a(
//             e.toString()), null != N ? (r = y(t, 10), T(n, 1, r)) : $ &&
//             x(n, 6)), 2 >
//         A.b.length) throw'The string supplied is too short to be a phone number';
//         if (null != t && (d = new B, N = new B(A.toString()), pd(N, t,
//             d), e = N.toString(), t = v(t, 1), t = y(t, 3), 2 != ld(t, e) &&
//         (A = N, $ &&
//         T(n, 7, d.toString()))), $ = A.toString(), d = $.length, 2 >
//         d) throw'The string supplied is too short to be a phone number';
//         if (d > 17) throw'The string supplied is too long to be a phone number';
//         if (1 < $.length && '0' == $.charAt(0)) {
//             for (T(n, 4, !0), d = 1; d < $.length - 1 && "0" ==
//             $.charAt(d);) d++;
//             1 != d && T(n, 8, d);
//         }
//         return T(n, 2, parseInt($, 10)), n;
//     }
//
//     function gd (d, A) {
//         var N = 'string' == typeof d ? A.match('^(?:' + d + ')$') : A.match(d);
//         return N && N[0].length == A.length ? !0 : !1;
//     }
//
//     function Cd () {
//         var d = c('phoneNumber').value, A = c('defaultCountry').value;
//         c('carrierCode').value, new B;
//         try {
//             var N, $ = w.a();
//             if (!k(A) && 0 < d.length && '+' !=
//                 d.charAt(0)) throw'Invalid country calling code';
//             N = hd($, d, A, !0);
//             var e = 0 == fd($, N);
//             if (e) {
//                 var n = rd($, N);
//                 if (n) {
//                     var t, r, a = id($, N), i = Q($, y(N, 1), a);
//                     if (null == i) t = -1; else {
//                         var o = z(N);
//                         t = ed(o, i);
//                     }
//                     switch (t) {
//                         case 0:
//                             r = 'FIXED_LINE';
//                             break;
//                         case 1:
//                             r = 'MOBILE';
//                             break;
//                         case 2:
//                             r = 'FIXED_LINE_OR_MOBILE';
//                             break;
//                         case 3:
//                             r = 'TOLL_FREE';
//                             break;
//                         case 4:
//                             r = 'PREMIUM_RATE';
//                             break;
//                         case 5:
//                             r = 'SHARED_COST';
//                             break;
//                         case 6:
//                             r = 'VOIP';
//                             break;
//                         case 7:
//                             r = 'PERSONAL_NUMBER';
//                             break;
//                         case 8:
//                             r = 'PAGER';
//                             break;
//                         case 9:
//                             r = 'UAN';
//                             break;
//                         case-1:
//                             r = 'UNKNOWN';
//                     }
//                     return {
//                         isValidNumber: n,
//                         isValidNumberForRegion: ad($, N, A),
//                         phoneNumberRegion: id($, N),
//                         numberType: r,
//                         format: {
//                             E164: J($, N, 0),
//                             orginal: j($, N, A),
//                             national: J($, N, 2),
//                             international: J($, N, 1),
//                             'out-country-us': X($, N, 'US'),
//                             'out-country-ch': X($, N, 'CH'),
//                         },
//                     };
//                 }
//                 return 'INVALID_PH_N';
//             }
//             switch (fd($, N)) {
//                 case 1:
//                     return 'INVALID_COUNTRY_CODE';
//                 case 2:
//                     return 'TOO_SHORT';
//                 case 3:
//                     return 'TOO_LONG';
//                 default:
//                     return 'UNKNOWN_TYPE';
//             }
//         } catch (u) {return u;}
//     }
//
//     var Sd = this;
//     A(N, Error), N.prototype.name = 'CustomError';
//     var bd = String.prototype.trim
//         ? function (d) {return d.trim();}
//         : function (d) {return d.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');};
//     A(n, N), n.prototype.name = 'AssertionError';
//     var md, Md = Array.prototype, vd = Md.indexOf
//         ? function (d, A, N) {return Md.indexOf.call(d, A, N);}
//         : function (A, N, $) {
//             if ($ = null == $ ? 0 : 0 > $ ? Math.max(0, A.length + $) : $, d(
//                 A)) return d(N) && 1 == N.length ? A.indexOf(N, $) : -1;
//             for (; $ < A.length; $++) if ($ in A && A[$] === N) return $;
//             return -1;
//         };
//     d:{
//         var yd = Sd.navigator;
//         if (yd) {
//             var Ed = yd.userAgent;
//             if (Ed) {
//                 md = Ed;
//                 break d;
//             }
//         }
//         md = '';
//     }
//     var Td, Gd = -1 != md.indexOf('Opera') || -1 != md.indexOf('OPR'),
//         xd = -1 != md.indexOf('Trident') || -1 != md.indexOf('MSIE'),
//         Id = -1 != md.indexOf('Edge'), Rd = !(-1 == md.indexOf('Gecko') || -1 !=
//         md.toLowerCase().indexOf('webkit') && -1 == md.indexOf('Edge') || -1 !=
//         md.indexOf('Trident') || -1 != md.indexOf('MSIE') || -1 !=
//         md.indexOf('Edge')),
//         _d = -1 != md.toLowerCase().indexOf('webkit') && -1 ==
//             md.indexOf('Edge'), Bd = function () {
//             if (Gd && Sd.opera) {
//                 var d, A = Sd.opera.version;
//                 try {d = A();} catch (N) {d = A;}
//                 return d;
//             }
//             return d = '', (A = u()) && (d = A ? A[1] : ''), xd &&
//             (A = l(), A > parseFloat(d)) ? String(A) : d;
//         }(), Od = {}, Ld = Sd.document, Pd = Ld && xd ? l() ||
//         ('CSS1Compat' == Ld.compatMode ? parseInt(Bd, 10) : 5) : void 0;
//     if (!(Td = !Rd && !xd)) {
//         var Kd;
//         (Kd = xd) && (Kd = Pd >= 9), Td = Kd;
//     }
//     Td || Rd && f('1.9.1'), xd && f('9');
//     var Fd = (/\uffff/.test('￿')
//         ? /[\\\"\x00-\x1f\x7f-\uffff]/g
//         : /[\\\"\x00-\x1f\x7f-\xff]/g, 1), Dd = 2, Ud = 3, wd = 4, Vd = 6,
//         Hd = 16, Zd = 18;
//     C.prototype.clone = function () {
//         var d = new this.constructor;
//         return d != this && (d.b = {}, d.a && (d.a = {}), b(d, this)), d;
//     }, R.prototype.b = function (d, A) {
//         return 11 == d.b || 10 == d.b ? this.g(A) : 'number' != typeof A ||
//         isFinite(A) ? A : A.toString();
//     }, R.prototype.f = function (d, A) {
//         var N = new d.b;
//         return this.i(N, A), N;
//     }, R.prototype.a = function (A, N) {
//         if (11 == A.b || 10 == A.b) return N instanceof C ? N : this.f(
//             A.j.prototype.h(), N);
//         if (14 == A.b || !A.i) return N;
//         var $ = A.j;
//         if ($ === String) {
//             if ('number' == typeof N) return String(N);
//         } else if ($ === Number && d(N) &&
//             ('Infinity' === N || '-Infinity' === N || 'NaN' === N ||
//                 /^-?[0-9]+$/.test(N))) return Number(N);
//         return N;
//     }, A(_, R), _.prototype.g = function (d) {
//         for (var A = h(d.h()), N = {}, $ = 0; $ < A.length; $++) {
//             var e = A[$], n = 1 == this.j ? e.l : e.a;
//             if (m(d, e.a)) if (e.f) {
//                 var t = [];
//                 for (N[n] = t, n = 0; n < E(d, e.a); n++) t.push(
//                     this.b(e, v(d, e.a, n)));
//             } else N[n] = this.b(e, v(d, e.a, void 0));
//         }
//         return S(d, function (d, A) {N[d] = A;}), N;
//     }, _.prototype.a = function (d, A) {
//         return 8 == d.b && 'number' == typeof A
//             ? Boolean(A)
//             : _.ha.a.call(this, d, A);
//     }, _.prototype.i = function (d, A) {
//         var N, $ = d.h();
//         for (N in A) {
//             var e, n = A[N], r = !/[^0-9]/.test(N);
//             if (e = r ? $.a[parseInt(N, 10)] || null : g($,
//                 N)) if (e.f) for (r = 0; r < n.length; r++) {
//                 var a = this.a(e, n[r]);
//                 G(d, e.a, a);
//             } else n = this.a(e, n), T(d, e.a, n); else r ? (e = d, r = Number(
//                 N), e.b[r] = n, e.a && delete e.a[r]) : t(
//                 'Failed to find field: ' + e);
//         }
//     }, B.prototype.b = '', B.prototype.a = function (
//         d, A, N) {
//         if (this.b += d, null != A) for (var $ = 1; $ <
//         arguments.length; $++) this.b += arguments[$];
//         return this;
//     }, B.prototype.toString = function () {return this.b;};
//     var Wd;
//     A(L, C);
//     var Yd;
//     A(P, C);
//     var kd;
//     A(K, C), L.prototype.h = function () {
//         return Wd || (Wd = I(L, {
//             0: { name: 'NumberFormat', aa: 'i18n.phonenumbers.NumberFormat' },
//             1: { name: 'pattern', required: !0, c: 9, type: String },
//             2: { name: 'format', required: !0, c: 9, type: String },
//             3: { name: 'leading_digits_pattern', ba: !0, c: 9, type: String },
//             4: { name: 'national_prefix_formatting_rule', c: 9, type: String },
//             6: {
//                 name: 'national_prefix_optional_when_formatting',
//                 c: 8,
//                 type: Boolean,
//             },
//             5: {
//                 name: 'domestic_carrier_code_formatting_rule',
//                 c: 9,
//                 type: String,
//             },
//         })), Wd;
//     }, L.ctor = L, L.ctor.h = L.prototype.h, P.prototype.h = function () {
//         return Yd || (Yd = I(P, {
//             0: {
//                 name: 'PhoneNumberDesc',
//                 aa: 'i18n.phonenumbers.PhoneNumberDesc',
//             },
//             2: { name: 'national_number_pattern', c: 9, type: String },
//             3: { name: 'possible_number_pattern', c: 9, type: String },
//             6: { name: 'example_number', c: 9, type: String },
//             7: { name: 'national_number_matcher_data', c: 12, type: String },
//             8: { name: 'possible_number_matcher_data', c: 12, type: String },
//         })), Yd;
//     }, P.ctor = P, P.ctor.h = P.prototype.h, K.prototype.h = function () {
//         return kd || (kd = I(K, {
//             0: { name: 'PhoneMetadata', aa: 'i18n.phonenumbers.PhoneMetadata' },
//             1: { name: 'general_desc', c: 11, type: P },
//             2: { name: 'fixed_line', c: 11, type: P },
//             3: { name: 'mobile', c: 11, type: P },
//             4: { name: 'toll_free', c: 11, type: P },
//             5: { name: 'premium_rate', c: 11, type: P },
//             6: { name: 'shared_cost', c: 11, type: P },
//             7: { name: 'personal_number', c: 11, type: P },
//             8: { name: 'voip', c: 11, type: P },
//             21: { name: 'pager', c: 11, type: P },
//             25: { name: 'uan', c: 11, type: P },
//             27: { name: 'emergency', c: 11, type: P },
//             28: { name: 'voicemail', c: 11, type: P },
//             24: { name: 'no_international_dialling', c: 11, type: P },
//             9: { name: 'id', required: !0, c: 9, type: String },
//             10: { name: 'country_code', c: 5, type: Number },
//             11: { name: 'international_prefix', c: 9, type: String },
//             17: { name: 'preferred_international_prefix', c: 9, type: String },
//             12: { name: 'national_prefix', c: 9, type: String },
//             13: { name: 'preferred_extn_prefix', c: 9, type: String },
//             15: { name: 'national_prefix_for_parsing', c: 9, type: String },
//             16: { name: 'national_prefix_transform_rule', c: 9, type: String },
//             18: {
//                 name: 'same_mobile_and_fixed_line_pattern',
//                 c: 8,
//                 defaultValue: !1,
//                 type: Boolean,
//             },
//             19: { name: 'number_format', ba: !0, c: 11, type: L },
//             20: { name: 'intl_number_format', ba: !0, c: 11, type: L },
//             22: {
//                 name: 'main_country_for_code',
//                 c: 8,
//                 defaultValue: !1,
//                 type: Boolean,
//             },
//             23: { name: 'leading_digits', c: 9, type: String },
//             26: {
//                 name: 'leading_zero_possible',
//                 c: 8,
//                 defaultValue: !1,
//                 type: Boolean,
//             },
//         })), kd;
//     }, K.ctor = K, K.ctor.h = K.prototype.h;
//     var Jd;
//     A(F, C);
//     var Qd = { la: 1, ka: 5, ja: 10, ia: 20 };
//     F.prototype.h = function () {
//         return Jd || (Jd = I(F, {
//             0: { name: 'PhoneNumber', aa: 'i18n.phonenumbers.PhoneNumber' },
//             1: { name: 'country_code', required: !0, c: 5, type: Number },
//             2: { name: 'national_number', required: !0, c: 4, type: Number },
//             3: { name: 'extension', c: 9, type: String },
//             4: { name: 'italian_leading_zero', c: 8, type: Boolean },
//             8: {
//                 name: 'number_of_leading_zeros',
//                 c: 5,
//                 defaultValue: 1,
//                 type: Number,
//             },
//             5: { name: 'raw_input', c: 9, type: String },
//             6: {
//                 name: 'country_code_source',
//                 c: 14,
//                 defaultValue: 1,
//                 type: Qd,
//             },
//             7: { name: 'preferred_domestic_carrier_code', c: 9, type: String },
//         })), Jd;
//     }, F.ctor = F, F.ctor.h = F.prototype.h, A(D,
//         R), D.prototype.f = function (d, A) {
//         var N = new d.b;
//         return N.g = this, N.b = A, N.a = {}, N;
//     }, D.prototype.i = function () {throw Error('Unimplemented');}, A(U,
//         D), U.prototype.g = function (d) {
//         for (var A = h(d.h()), N = [], $ = 0; $ < A.length; $++) {
//             var e = A[$];
//             if (m(d, e.a)) {
//                 var n = e.a;
//                 if (e.f) {
//                     N[n] = [];
//                     for (var t = 0; t < E(d, e.a); t++) N[n][t] = this.b(e,
//                         v(d, e.a, t));
//                 } else N[n] = this.b(e, v(d, e.a, void 0));
//             }
//         }
//         return S(d, function (d, A) {N[d] = A;}), N;
//     }, U.prototype.b = function (d, A) {
//         return 8 == d.b
//             ? A ? 1 : 0
//             : R.prototype.b.apply(this, arguments);
//     }, U.prototype.a = function (d, A) {
//         return 8 == d.b
//             ? !!A
//             : R.prototype.a.apply(this, arguments);
//     }, U.prototype.f = function (d, A) {return U.ha.f.call(this, d, A);};
//     var Xd = {
//         1: 'US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI'.split(
//             ' '),
//         7: ['RU', 'KZ'],
//         20: ['EG'],
//         27: ['ZA'],
//         30: ['GR'],
//         31: ['NL'],
//         32: ['BE'],
//         33: ['FR'],
//         34: ['ES'],
//         36: ['HU'],
//         39: ['IT', 'VA'],
//         40: ['RO'],
//         41: ['CH'],
//         43: ['AT'],
//         44: ['GB', 'GG', 'IM', 'JE'],
//         45: ['DK'],
//         46: ['SE'],
//         47: ['NO', 'SJ'],
//         48: ['PL'],
//         49: ['DE'],
//         51: ['PE'],
//         52: ['MX'],
//         53: ['CU'],
//         54: ['AR'],
//         55: ['BR'],
//         56: ['CL'],
//         57: ['CO'],
//         58: ['VE'],
//         60: ['MY'],
//         61: ['AU', 'CC', 'CX'],
//         62: ['ID'],
//         63: ['PH'],
//         64: ['NZ'],
//         65: ['SG'],
//         66: ['TH'],
//         81: ['JP'],
//         82: ['KR'],
//         84: ['VN'],
//         86: ['CN'],
//         90: ['TR'],
//         91: ['IN'],
//         92: ['PK'],
//         93: ['AF'],
//         94: ['LK'],
//         95: ['MM'],
//         98: ['IR'],
//         211: ['SS'],
//         212: ['MA', 'EH'],
//         213: ['DZ'],
//         216: ['TN'],
//         218: ['LY'],
//         220: ['GM'],
//         221: ['SN'],
//         222: ['MR'],
//         223: ['ML'],
//         224: ['GN'],
//         225: ['CI'],
//         226: ['BF'],
//         227: ['NE'],
//         228: ['TG'],
//         229: ['BJ'],
//         230: ['MU'],
//         231: ['LR'],
//         232: ['SL'],
//         233: ['GH'],
//         234: ['NG'],
//         235: ['TD'],
//         236: ['CF'],
//         237: ['CM'],
//         238: ['CV'],
//         239: ['ST'],
//         240: ['GQ'],
//         241: ['GA'],
//         242: ['CG'],
//         243: ['CD'],
//         244: ['AO'],
//         245: ['GW'],
//         246: ['IO'],
//         247: ['AC'],
//         248: ['SC'],
//         249: ['SD'],
//         250: ['RW'],
//         251: ['ET'],
//         252: ['SO'],
//         253: ['DJ'],
//         254: ['KE'],
//         255: ['TZ'],
//         256: ['UG'],
//         257: ['BI'],
//         258: ['MZ'],
//         260: ['ZM'],
//         261: ['MG'],
//         262: ['RE', 'YT'],
//         263: ['ZW'],
//         264: ['NA'],
//         265: ['MW'],
//         266: ['LS'],
//         267: ['BW'],
//         268: ['SZ'],
//         269: ['KM'],
//         290: ['SH', 'TA'],
//         291: ['ER'],
//         297: ['AW'],
//         298: ['FO'],
//         299: ['GL'],
//         350: ['GI'],
//         351: ['PT'],
//         352: ['LU'],
//         353: ['IE'],
//         354: ['IS'],
//         355: ['AL'],
//         356: ['MT'],
//         357: ['CY'],
//         358: ['FI', 'AX'],
//         359: ['BG'],
//         370: ['LT'],
//         371: ['LV'],
//         372: ['EE'],
//         373: ['MD'],
//         374: ['AM'],
//         375: ['BY'],
//         376: ['AD'],
//         377: ['MC'],
//         378: ['SM'],
//         380: ['UA'],
//         381: ['RS'],
//         382: ['ME'],
//         385: ['HR'],
//         386: ['SI'],
//         387: ['BA'],
//         389: ['MK'],
//         420: ['CZ'],
//         421: ['SK'],
//         423: ['LI'],
//         500: ['FK'],
//         501: ['BZ'],
//         502: ['GT'],
//         503: ['SV'],
//         504: ['HN'],
//         505: ['NI'],
//         506: ['CR'],
//         507: ['PA'],
//         508: ['PM'],
//         509: ['HT'],
//         590: ['GP', 'BL', 'MF'],
//         591: ['BO'],
//         592: ['GY'],
//         593: ['EC'],
//         594: ['GF'],
//         595: ['PY'],
//         596: ['MQ'],
//         597: ['SR'],
//         598: ['UY'],
//         599: ['CW', 'BQ'],
//         670: ['TL'],
//         672: ['NF'],
//         673: ['BN'],
//         674: ['NR'],
//         675: ['PG'],
//         676: ['TO'],
//         677: ['SB'],
//         678: ['VU'],
//         679: ['FJ'],
//         680: ['PW'],
//         681: ['WF'],
//         682: ['CK'],
//         683: ['NU'],
//         685: ['WS'],
//         686: ['KI'],
//         687: ['NC'],
//         688: ['TV'],
//         689: ['PF'],
//         690: ['TK'],
//         691: ['FM'],
//         692: ['MH'],
//         800: ['001'],
//         808: ['001'],
//         850: ['KP'],
//         852: ['HK'],
//         853: ['MO'],
//         855: ['KH'],
//         856: ['LA'],
//         870: ['001'],
//         878: ['001'],
//         880: ['BD'],
//         881: ['001'],
//         882: ['001'],
//         883: ['001'],
//         886: ['TW'],
//         888: ['001'],
//         960: ['MV'],
//         961: ['LB'],
//         962: ['JO'],
//         963: ['SY'],
//         964: ['IQ'],
//         965: ['KW'],
//         966: ['SA'],
//         967: ['YE'],
//         968: ['OM'],
//         970: ['PS'],
//         971: ['AE'],
//         972: ['IL'],
//         973: ['BH'],
//         974: ['QA'],
//         975: ['BT'],
//         976: ['MN'],
//         977: ['NP'],
//         979: ['001'],
//         992: ['TJ'],
//         993: ['TM'],
//         994: ['AZ'],
//         995: ['GE'],
//         996: ['KG'],
//         998: ['UZ'],
//     }, jd = {
//         AC: [
//             ,
//             [, , '[46]\\d{4}|[01589]\\d{5}', '\\d{5,6}'],
//             [, , '6[2-467]\\d{3}', '\\d{5}', , , '62889'],
//             [, , '4\\d{4}', '\\d{5}', , , '40123'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'AC',
//             247,
//             '00', , , , , , , , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '[01589]\\d{5}', '\\d{6}', , , '542011'], , ,
//             [, , 'NA', 'NA']],
//         AD: [
//             ,
//             [, , '(?:[346-9]|180)\\d{5}', '\\d{6,8}'],
//             [, , '[78]\\d{5}', '\\d{6}', , , '712345'],
//             [, , '[346]\\d{5}', '\\d{6}', , , '312345'],
//             [, , '180[02]\\d{4}', '\\d{8}', , , '18001234'],
//             [, , '9\\d{5}', '\\d{6}', , , '912345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'AD',
//             376,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{3})(\\d{3})', '$1 $2', ['[346-9]']],
//                 [, '(180[02])(\\d{4})', '$1 $2', ['1']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         AE: [
//             ,
//             [, , '[2-79]\\d{7,8}|800\\d{2,9}', '\\d{5,12}'],
//             [, , '[2-4679][2-8]\\d{6}', '\\d{7,8}', , , '22345678'],
//             [, , '5[0256]\\d{7}', '\\d{9}', , , '501234567'],
//             [, , '400\\d{6}|800\\d{2,9}', '\\d{5,12}', , , '800123456'],
//             [, , '900[02]\\d{5}', '\\d{9}', , , '900234567'],
//             [, , '700[05]\\d{5}', '\\d{9}', , , '700012345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'AE',
//             971,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '([2-4679])(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['[2-4679][2-8]'],
//                     '0$1'],
//                 [, '(5[0256])(\\d{3})(\\d{4})', '$1 $2 $3', ['5'], '0$1'],
//                 [, '([479]00)(\\d)(\\d{5})', '$1 $2 $3', ['[479]0'], '$1'],
//                 [, '([68]00)(\\d{2,9})', '$1 $2', ['60|8'], '$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '600[25]\\d{5}', '\\d{9}', , , '600212345'], , ,
//             [, , 'NA', 'NA']],
//         AF: [
//             ,
//             [, , '[2-7]\\d{8}', '\\d{7,9}'],
//             [
//                 , ,
//                 '(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}',
//                 '\\d{7,9}', , ,
//                 '234567890'],
//             [, , '7(?:[014-9]\\d{7}|2[89]\\d{6})', '\\d{9}', , , '701234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'AF',
//             93,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [[, '([2-7]\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['[2-7]'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         AG: [
//             ,
//             [, , '[2589]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '2684601234'],
//             [
//                 , ,
//                 '268(?:464|7(?:2[0-9]|64|7[0-689]|8[02-68]))\\d{4}',
//                 '\\d{10}', , ,
//                 '2684641234'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002123456'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , '26848[01]\\d{4}', '\\d{10}', , , '2684801234'],
//             'AG',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , '26840[69]\\d{4}', '\\d{10}', , , '2684061234'], ,
//             '268',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         AI: [
//             ,
//             [, , '[2589]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '2644(?:6[12]|9[78])\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '2644612345'],
//             [
//                 , ,
//                 '264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}',
//                 '\\d{10}', , ,
//                 '2642351234'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002123456'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'AI',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '264',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         AL: [
//             ,
//             [, , '[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}', '\\d{5,9}'],
//             [
//                 , ,
//                 '(?:2(?:[168][1-9]|[247]\\d|9[1-7])|3(?:1[1-3]|[2-6]\\d|[79][1-8]|8[1-9])|4\\d{2}|5(?:1[1-4]|[2-578]\\d|6[1-5]|9[1-7])|8(?:[19][1-5]|[2-6]\\d|[78][1-7]))\\d{5}',
//                 '\\d{5,8}', , ,
//                 '22345678'],
//             [, , '6[6-9]\\d{7}', '\\d{9}', , , '661234567'],
//             [, , '800\\d{4}', '\\d{7}', , , '8001234'],
//             [, , '900\\d{3}', '\\d{6}', , , '900123'],
//             [, , '808\\d{3}', '\\d{6}', , , '808123'],
//             [, , '700\\d{5}', '\\d{8}', , , '70012345'],
//             [, , 'NA', 'NA'],
//             'AL',
//             355,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(4)(\\d{3})(\\d{4})', '$1 $2 $3', ['4[0-6]'], '0$1'],
//                 [, '(6[6-9])(\\d{3})(\\d{4})', '$1 $2 $3', ['6'], '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['[2358][2-5]|4[7-9]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3,5})',
//                     '$1 $2',
//                     ['[235][16-9]|8[016-9]|[79]'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         AM: [
//             ,
//             [, , '[1-9]\\d{7}', '\\d{5,8}'],
//             [
//                 , ,
//                 '(?:1[01]\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2|47\\d)\\d{5}',
//                 '\\d{5,8}', , ,
//                 '10123456'],
//             [, , '(?:4[139]|55|77|9[1-9])\\d{6}', '\\d{8}', , , '77123456'],
//             [, , '800\\d{5}', '\\d{8}', , , '80012345'],
//             [, , '90[016]\\d{5}', '\\d{8}', , , '90012345'],
//             [, , '80[1-4]\\d{5}', '\\d{8}', , , '80112345'],
//             [, , 'NA', 'NA'],
//             [, , '60[2-6]\\d{5}', '\\d{8}', , , '60271234'],
//             'AM',
//             374,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(\\d{2})(\\d{6})', '$1 $2', ['1|47'], '(0$1)'],
//                 [, '(\\d{2})(\\d{6})', '$1 $2', ['4[139]|[5-7]|9[1-9]'], '0$1'],
//                 [, '(\\d{3})(\\d{5})', '$1 $2', ['[23]'], '(0$1)'],
//                 [, '(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['8|90'], '0 $1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         AO: [
//             ,
//             [, , '[29]\\d{8}', '\\d{9}'],
//             [
//                 , ,
//                 '2\\d(?:[26-9]\\d|\\d[26-9])\\d{5}',
//                 '\\d{9}', , ,
//                 '222123456'],
//             [, , '9[1-49]\\d{7}', '\\d{9}', , , '923123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'AO',
//             244,
//             '00', , , , , , , ,
//             [[, '(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         AR: [
//             ,
//             [, , '11\\d{8}|[2368]\\d{9}|9\\d{10}', '\\d{6,11}'],
//             [
//                 , ,
//                 '11\\d{8}|(?:2(?:2(?:[013]\\d|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[067]\\d)|4(?:7[3-8]|9\\d)|6(?:[01346]\\d|2[24-6]|5[15-8])|80\\d|9(?:[0124789]\\d|3[1-6]|5[234]|6[2-46]))|3(?:3(?:2[79]|6\\d|8[2578])|4(?:[78]\\d|0[0124-9]|[1-35]\\d|4[24-7]|6[02-9]|9[123678])|5(?:[138]\\d|2[1245]|4[1-9]|6[2-4]|7[1-6])|6[24]\\d|7(?:[0469]\\d|1[1568]|2[013-9]|3[145]|5[14-8]|7[2-57]|8[0-24-9])|8(?:[013578]\\d|2[15-7]|4[13-6]|6[1-357-9]|9[124]))|670\\d)\\d{6}',
//                 '\\d{6,10}', , ,
//                 '1123456789'],
//             [
//                 , ,
//                 '675\\d{7}|9(?:11[2-9]\\d{7}|(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))[2-9]\\d{6}|\\d{4}[2-9]\\d{5})',
//                 '\\d{6,11}', , ,
//                 '91123456789'],
//             [, , '800\\d{7}', '\\d{10}', , , '8001234567'],
//             [, , '60[04579]\\d{7}', '\\d{10}', , , '6001234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'AR',
//             54,
//             '00',
//             '0', , ,
//             '0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?',
//             '9$1', , ,
//             [
//                 [, '([68]\\d{2})(\\d{3})(\\d{4})', '$1-$2-$3', ['[68]'], '0$1'],
//                 [, '(\\d{2})(\\d{4})', '$1-$2', ['[2-9]'], '$1'],
//                 [, '(\\d{3})(\\d{4})', '$1-$2', ['[2-9]'], '$1'],
//                 [, '(\\d{4})(\\d{4})', '$1-$2', ['[2-9]'], '$1'],
//                 [, '(9)(11)(\\d{4})(\\d{4})', '$2 15-$3-$4', ['911'], '0$1'],
//                 [
//                     ,
//                     '(9)(\\d{3})(\\d{3})(\\d{4})',
//                     '$2 15-$3-$4',
//                     [
//                         '9(?:2[234689]|3[3-8])',
//                         '9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578]))',
//                         '9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))',
//                         '9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))'],
//                     '0$1'],
//                 [
//                     ,
//                     '(9)(\\d{4})(\\d{2})(\\d{4})',
//                     '$2 15-$3-$4',
//                     ['9[23]'],
//                     '0$1'],
//                 [, '(11)(\\d{4})(\\d{4})', '$1 $2-$3', ['1'], '0$1', , 1],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{4})',
//                     '$1 $2-$3',
//                     [
//                         '2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578])',
//                         '2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))',
//                         '2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))'],
//                     '0$1', ,
//                     1],
//                 [
//                     ,
//                     '(\\d{4})(\\d{2})(\\d{4})',
//                     '$1 $2-$3',
//                     ['[23]'],
//                     '0$1', ,
//                     1],
//                 [, '(\\d{3})', '$1', ['1[012]|911'], '$1']],
//             [
//                 [, '([68]\\d{2})(\\d{3})(\\d{4})', '$1-$2-$3', ['[68]'], '0$1'],
//                 [, '(9)(11)(\\d{4})(\\d{4})', '$1 $2 $3-$4', ['911']],
//                 [
//                     ,
//                     '(9)(\\d{3})(\\d{3})(\\d{4})',
//                     '$1 $2 $3-$4',
//                     [
//                         '9(?:2[234689]|3[3-8])',
//                         '9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578]))',
//                         '9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))',
//                         '9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))']],
//                 [, '(9)(\\d{4})(\\d{2})(\\d{4})', '$1 $2 $3-$4', ['9[23]']],
//                 [, '(11)(\\d{4})(\\d{4})', '$1 $2-$3', ['1'], '0$1', , 1],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{4})',
//                     '$1 $2-$3',
//                     [
//                         '2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578])',
//                         '2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))',
//                         '2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))'],
//                     '0$1', ,
//                     1],
//                 [
//                     ,
//                     '(\\d{4})(\\d{2})(\\d{4})',
//                     '$1 $2-$3',
//                     ['[23]'],
//                     '0$1', ,
//                     1]],
//             [, , 'NA', 'NA'], , ,
//             [, , '810\\d{7}', '\\d{10}', , , '8101234567'],
//             [, , '810\\d{7}', '\\d{10}', , , '8101234567'], , ,
//             [, , 'NA', 'NA']],
//         AS: [
//             ,
//             [, , '[5689]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '6846(?:22|33|44|55|77|88|9[19])\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '6846221234'],
//             [
//                 , ,
//                 '684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}',
//                 '\\d{10}', , ,
//                 '6847331234'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002123456'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'AS',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '684',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         AT: [
//             ,
//             [, , '[1-9]\\d{3,12}', '\\d{3,13}'],
//             [
//                 , ,
//                 '1\\d{3,12}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|63|7[1368]|8[2457])|5(?:12|2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[1-35-8]|5[468]|62)|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,10}',
//                 '\\d{3,13}', , ,
//                 '1234567890'],
//             [
//                 , ,
//                 '6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}',
//                 '\\d{7,13}', , ,
//                 '664123456'],
//             [, , '800\\d{6,10}', '\\d{9,13}', , , '800123456'],
//             [
//                 , ,
//                 '(?:9(?:0[01]|3[019]))\\d{6,10}',
//                 '\\d{9,13}', , ,
//                 '900123456'],
//             [
//                 , ,
//                 '8(?:10\\d|2(?:[01]\\d|8\\d?))\\d{5,9}',
//                 '\\d{8,13}', , ,
//                 '810123456'],
//             [, , 'NA', 'NA'],
//             [, , '780\\d{6,10}', '\\d{9,13}', , , '780123456'],
//             'AT',
//             43,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(116\\d{3})', '$1', ['116'], '$1'],
//                 [, '(1)(\\d{3,12})', '$1 $2', ['1'], '0$1'],
//                 [, '(5\\d)(\\d{3,5})', '$1 $2', ['5[079]'], '0$1'],
//                 [, '(5\\d)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['5[079]'], '0$1'],
//                 [, '(5\\d)(\\d{4})(\\d{4,7})', '$1 $2 $3', ['5[079]'], '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3,10})',
//                     '$1 $2',
//                     ['316|46|51|732|6(?:5[0-3579]|[6-9])|7(?:[28]0)|[89]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{4})(\\d{3,9})',
//                     '$1 $2',
//                     ['2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:2[1-8]|35|4[1-8]|[5-79])'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:(?:0[1-9]|17)\\d{2,10}|[79]\\d{3,11})|720\\d{6,10}',
//                 '\\d{5,13}', , ,
//                 '50123'], , ,
//             [, , 'NA', 'NA']],
//         AU: [
//             ,
//             [, , '[1-578]\\d{5,9}', '\\d{6,10}'],
//             [
//                 , ,
//                 '[237]\\d{8}|8(?:[6-8]\\d{3}|9(?:[02-9]\\d{2}|1(?:[0-57-9]\\d|6[0135-9])))\\d{4}',
//                 '\\d{8,9}', , ,
//                 '212345678'],
//             [
//                 , ,
//                 '14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}',
//                 '\\d{9}', , ,
//                 '412345678'],
//             [, , '180(?:0\\d{3}|2)\\d{3}', '\\d{7,10}', , , '1800123456'],
//             [, , '19(?:0[0126]\\d|[679])\\d{5}', '\\d{8,10}', , , '1900123456'],
//             [
//                 , ,
//                 '13(?:00\\d{3}|45[0-4]|\\d)\\d{3}',
//                 '\\d{6,10}', , ,
//                 '1300123456'],
//             [, , '500\\d{6}', '\\d{9}', , , '500123456'],
//             [, , '550\\d{6}', '\\d{9}', , , '550123456'],
//             'AU',
//             61,
//             '(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]',
//             '0', , ,
//             '0', ,
//             '0011', ,
//             [
//                 [, '([2378])(\\d{4})(\\d{4})', '$1 $2 $3', ['[2378]'], '(0$1)'],
//                 [, '(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[45]|14'], '0$1'],
//                 [, '(16)(\\d{3})(\\d{2,4})', '$1 $2 $3', ['16'], '0$1'],
//                 [
//                     ,
//                     '(1[389]\\d{2})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['1(?:[38]0|90)', '1(?:[38]00|90)'],
//                     '$1'],
//                 [, '(180)(2\\d{3})', '$1 $2', ['180', '1802'], '$1'],
//                 [, '(19\\d)(\\d{3})', '$1 $2', ['19[13]'], '$1'],
//                 [, '(19\\d{2})(\\d{4})', '$1 $2', ['19[679]'], '$1'],
//                 [, '(13)(\\d{2})(\\d{2})', '$1 $2 $3', ['13[1-9]'], '$1']], ,
//             [, , '16\\d{3,7}', '\\d{5,9}', , , '1612345'],
//             1, ,
//             [
//                 , ,
//                 '1(?:3(?:00\\d{3}|45[0-4]|\\d)\\d{3}|80(?:0\\d{6}|2\\d{3}))',
//                 '\\d{6,10}', , ,
//                 '1300123456'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         AW: [
//             ,
//             [, , '[25-9]\\d{6}', '\\d{7}'],
//             [, , '5(?:2\\d|8[1-9])\\d{4}', '\\d{7}', , , '5212345'],
//             [
//                 , ,
//                 '(?:5(?:6\\d|9[2-478])|6(?:[039]0|22|4[01]|6[0-2])|7[34]\\d|9(?:6[45]|9[4-8]))\\d{4}',
//                 '\\d{7}', , ,
//                 '5601234'],
//             [, , '800\\d{4}', '\\d{7}', , , '8001234'],
//             [, , '900\\d{4}', '\\d{7}', , , '9001234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '28\\d{5}|501\\d{4}', '\\d{7}', , , '5011234'],
//             'AW',
//             297,
//             '00', , , , , , , ,
//             [[, '(\\d{3})(\\d{4})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         AX: [
//             ,
//             [
//                 , ,
//                 '[135]\\d{5,9}|[27]\\d{4,9}|4\\d{5,10}|6\\d{7,8}|8\\d{6,9}',
//                 '\\d{5,12}'],
//             [, , '18[1-8]\\d{3,9}', '\\d{6,12}', , , '1812345678'],
//             [, , '4\\d{5,10}|50\\d{4,8}', '\\d{6,11}', , , '412345678'],
//             [, , '800\\d{4,7}', '\\d{7,10}', , , '8001234567'],
//             [, , '[67]00\\d{5,6}', '\\d{8,9}', , , '600123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'AX',
//             358,
//             '00|99[049]',
//             '0', , ,
//             '0', , , , , ,
//             [, , 'NA', 'NA'], , ,
//             [
//                 , ,
//                 '[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})',
//                 '\\d{5,10}', , ,
//                 '100123'],
//             [
//                 , ,
//                 '[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})',
//                 '\\d{5,10}', , ,
//                 '10112345'], , ,
//             [, , 'NA', 'NA']],
//         AZ: [
//             ,
//             [, , '[1-9]\\d{8}', '\\d{7,9}'],
//             [
//                 , ,
//                 '(?:1[28]\\d|2(?:02|1[24]|2[2-4]|33|[45]2|6[23])|365)\\d{6}',
//                 '\\d{7,9}', , ,
//                 '123123456'],
//             [, , '(?:4[04]|5[015]|60|7[07])\\d{7}', '\\d{9}', , , '401234567'],
//             [, , '88\\d{7}', '\\d{9}', , , '881234567'],
//             [, , '900200\\d{3}', '\\d{9}', , , '900200123'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'AZ',
//             994,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['(?:1[28]|2(?:[45]2|[0-36])|365)'],
//                     '(0$1)'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[4-8]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['9'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         BA: [
//             ,
//             [, , '[3-9]\\d{7,8}', '\\d{6,9}'],
//             [, , '(?:[35]\\d|49)\\d{6}', '\\d{6,8}', , , '30123456'],
//             [, , '6(?:03|44|71|[1-356])\\d{6}', '\\d{8,9}', , , '61123456'],
//             [, , '8[08]\\d{6}', '\\d{8}', , , '80123456'],
//             [, , '9[0246]\\d{6}', '\\d{8}', , , '90123456'],
//             [, , '8[12]\\d{6}', '\\d{8}', , , '82123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'BA',
//             387,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(\\d{2})(\\d{3})(\\d{3})', '$1 $2-$3', ['[3-5]'], '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['6[1-356]|[7-9]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2})(\\d{3})',
//                     '$1 $2 $3 $4',
//                     ['6[047]'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '70[23]\\d{5}', '\\d{8}', , , '70223456'], , ,
//             [, , 'NA', 'NA']],
//         BB: [
//             ,
//             [, , '[2589]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7(?:37|57)|9(?:1[89]|63))\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '2464123456'],
//             [
//                 , ,
//                 '246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|8(?:[2-5]\\d|83))\\d{4}',
//                 '\\d{10}', , ,
//                 '2462501234'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002123456'],
//             [, , '900\\d{7}|246976\\d{4}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , '24631\\d{5}', '\\d{10}', , , '2463101234'],
//             'BB',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '246',
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '246(?:292|41[7-9]|43[01])\\d{4}',
//                 '\\d{10}', , ,
//                 '2464301234'], , ,
//             [, , 'NA', 'NA']],
//         BD: [
//             ,
//             [, , '[2-79]\\d{5,9}|1\\d{9}|8[0-7]\\d{4,8}', '\\d{6,10}'],
//             [
//                 , ,
//                 '2(?:550\\d|7(?:1[0-267]|2[0-289]|3[0-29]|[46][01]|5[1-3]|7[017]|91)|8(?:0[125]|[139][1-6]|2[0157-9]|6[1-35]|7[1-5]|8[1-8]|90)|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[0167]|7[15]|8[0146-8]))\\d{4}|3(?:12?[5-7]\\d{2}|0(?:2(?:[025-79]\\d|[348]\\d{1,2})|3(?:[2-4]\\d|[56]\\d?))|2(?:1\\d{2}|2(?:[12]\\d|[35]\\d{1,2}|4\\d?))|3(?:1\\d{2}|2(?:[2356]\\d|4\\d{1,2}))|4(?:1\\d{2}|2(?:2\\d{1,2}|[47]|5\\d{2}))|5(?:1\\d{2}|29)|[67]1\\d{2}|8(?:1\\d{2}|2(?:2\\d{2}|3|4\\d)))\\d{3}|4(?:0(?:2(?:[09]\\d|7)|33\\d{2})|1\\d{3}|2(?:1\\d{2}|2(?:[25]\\d?|[348]\\d|[67]\\d{1,2}))|3(?:1\\d{2}(?:\\d{2})?|2(?:[045]\\d|[236-9]\\d{1,2})|32\\d{2})|4(?:[18]\\d{2}|2(?:[2-46]\\d{2}|3)|5[25]\\d{2})|5(?:1\\d{2}|2(?:3\\d|5))|6(?:[18]\\d{2}|2(?:3(?:\\d{2})?|[46]\\d{1,2}|5\\d{2}|7\\d)|5(?:3\\d?|4\\d|[57]\\d{1,2}|6\\d{2}|8))|71\\d{2}|8(?:[18]\\d{2}|23\\d{2}|54\\d{2})|9(?:[18]\\d{2}|2[2-5]\\d{2}|53\\d{1,2}))\\d{3}|5(?:02[03489]\\d{2}|1\\d{2}|2(?:1\\d{2}|2(?:2(?:\\d{2})?|[457]\\d{2}))|3(?:1\\d{2}|2(?:[37](?:\\d{2})?|[569]\\d{2}))|4(?:1\\d{2}|2[46]\\d{2})|5(?:1\\d{2}|26\\d{1,2})|6(?:[18]\\d{2}|2|53\\d{2})|7(?:1|24)\\d{2}|8(?:1|26)\\d{2}|91\\d{2})\\d{3}|6(?:0(?:1\\d{2}|2(?:3\\d{2}|4\\d{1,2}))|2(?:2[2-5]\\d{2}|5(?:[3-5]\\d{2}|7)|8\\d{2})|3(?:1|2[3478])\\d{2}|4(?:1|2[34])\\d{2}|5(?:1|2[47])\\d{2}|6(?:[18]\\d{2}|6(?:2(?:2\\d|[34]\\d{2})|5(?:[24]\\d{2}|3\\d|5\\d{1,2})))|72[2-5]\\d{2}|8(?:1\\d{2}|2[2-5]\\d{2})|9(?:1\\d{2}|2[2-6]\\d{2}))\\d{3}|7(?:(?:02|[3-589]1|6[12]|72[24])\\d{2}|21\\d{3}|32)\\d{3}|8(?:(?:4[12]|[5-7]2|1\\d?)|(?:0|3[12]|[5-7]1|217)\\d)\\d{4}|9(?:[35]1|(?:[024]2|81)\\d|(?:1|[24]1)\\d{2})\\d{3}',
//                 '\\d{6,9}', , ,
//                 '27111234'],
//             [
//                 , ,
//                 '(?:1[13-9]\\d|(?:3[78]|44)[02-9]|6(?:44|6[02-9]))\\d{7}',
//                 '\\d{10}', , ,
//                 '1812345678'],
//             [, , '80[03]\\d{7}', '\\d{10}', , , '8001234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '96(?:0[49]|1[0-4]|6[69])\\d{6}', '\\d{10}', , , '9604123456'],
//             'BD',
//             880,
//             '00[12]?',
//             '0', , ,
//             '0', ,
//             '00', ,
//             [
//                 [, '(2)(\\d{7,8})', '$1-$2', ['2'], '0$1'],
//                 [, '(\\d{2})(\\d{4,6})', '$1-$2', ['[3-79]1'], '0$1'],
//                 [
//                     ,
//                     '(\\d{4})(\\d{3,6})',
//                     '$1-$2',
//                     ['1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])'],
//                     '0$1'],
//                 [, '(\\d{3})(\\d{3,7})', '$1-$2', ['[3-79][2-9]|8'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         BE: [
//             ,
//             [, , '[1-9]\\d{7,8}', '\\d{8,9}'],
//             [
//                 , ,
//                 '(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}|80[2-8]\\d{5}',
//                 '\\d{8}', , ,
//                 '12345678'],
//             [
//                 , ,
//                 '4(?:6[0135-8]|[79]\\d|8[3-9])\\d{6}',
//                 '\\d{9}', , ,
//                 '470123456'],
//             [, , '800\\d{5}', '\\d{8}', , , '80012345'],
//             [, , '(?:70[2-467]|90[0-79])\\d{5}', '\\d{8}', , , '90123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'BE',
//             32,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['4[6-9]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d)(\\d{3})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[23]|4[23]|9[2-4]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[156]|7[018]|8(?:0[1-9]|[1-79])'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{3})',
//                     '$1 $2 $3',
//                     ['(?:80|9)0'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '78\\d{6}', '\\d{8}', , , '78123456'], , ,
//             [, , 'NA', 'NA']],
//         BF: [
//             ,
//             [, , '[267]\\d{7}', '\\d{8}'],
//             [
//                 , ,
//                 '2(?:0(?:49|5[23]|9[016-9])|4(?:4[569]|5[4-6]|7[0179])|5(?:[34]\\d|50))\\d{4}',
//                 '\\d{8}', , ,
//                 '20491234'],
//             [
//                 , ,
//                 '6(?:[0-689]\\d|7[0-5])\\d{5}|7\\d{7}',
//                 '\\d{8}', , ,
//                 '70123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'BF',
//             226,
//             '00', , , , , , , ,
//             [[, '(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         BG: [
//             ,
//             [, , '[23567]\\d{5,7}|[489]\\d{6,8}', '\\d{5,9}'],
//             [
//                 , ,
//                 '2(?:[0-8]\\d{5,6}|9\\d{4,6})|(?:[36]\\d|5[1-9]|8[1-6]|9[1-7])\\d{5,6}|(?:4(?:[124-7]\\d|3[1-6])|7(?:0[1-9]|[1-9]\\d))\\d{4,5}',
//                 '\\d{5,8}', , ,
//                 '2123456'],
//             [
//                 , ,
//                 '(?:8[7-9]\\d|9(?:8\\d|99))\\d{6}|4(?:3[0789]|8\\d)\\d{5}',
//                 '\\d{8,9}', , ,
//                 '48123456'],
//             [, , '800\\d{5}', '\\d{8}', , , '80012345'],
//             [, , '90\\d{6}', '\\d{8}', , , '90123456'],
//             [, , 'NA', 'NA'],
//             [, , '700\\d{5}', '\\d{5,9}', , , '70012345'],
//             [, , 'NA', 'NA'],
//             'BG',
//             359,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(2)(\\d{5})', '$1 $2', ['29'], '0$1'],
//                 [, '(2)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['2'], '0$1'],
//                 [, '(\\d{3})(\\d{4})', '$1 $2', ['43[124-7]|70[1-9]'], '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{2})',
//                     '$1 $2 $3',
//                     ['43[124-7]|70[1-9]'],
//                     '0$1'],
//                 [, '(\\d{3})(\\d{2})(\\d{3})', '$1 $2 $3', ['[78]00'], '0$1'],
//                 [, '(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['999'], '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{2,3})',
//                     '$1 $2 $3',
//                     ['[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{3,4})',
//                     '$1 $2 $3',
//                     ['48|8[7-9]|9[08]'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         BH: [
//             ,
//             [, , '[136-9]\\d{7}', '\\d{8}'],
//             [
//                 , ,
//                 '(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9])|9[69][69])|7(?:1(?:11|78)|7\\d{2}))\\d{4}',
//                 '\\d{8}', , ,
//                 '17001234'],
//             [
//                 , ,
//                 '(?:3(?:[1-4679]\\d|5[013569]|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:[69]\\d|3[03-9]|7[0-6])))\\d{4}',
//                 '\\d{8}', , ,
//                 '36001234'],
//             [, , '80\\d{6}', '\\d{8}', , , '80123456'],
//             [, , '(?:87|9[014578])\\d{6}', '\\d{8}', , , '90123456'],
//             [, , '84\\d{6}', '\\d{8}', , , '84123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'BH',
//             973,
//             '00', , , , , , , ,
//             [[, '(\\d{4})(\\d{4})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         BI: [
//             ,
//             [, , '[267]\\d{7}', '\\d{8}'],
//             [, , '22\\d{6}', '\\d{8}', , , '22201234'],
//             [, , '(?:29|6[189]|7[124-9])\\d{6}', '\\d{8}', , , '79561234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'BI',
//             257,
//             '00', , , , , , , ,
//             [[, '(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         BJ: [
//             ,
//             [, , '[2689]\\d{7}|7\\d{3}', '\\d{4,8}'],
//             [, , '2(?:02|1[037]|2[45]|3[68])\\d{5}', '\\d{8}', , , '20211234'],
//             [, , '(?:6[1-8]|9[03-9])\\d{6}', '\\d{8}', , , '90011234'],
//             [, , '7[3-5]\\d{2}', '\\d{4}', , , '7312'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '857[58]\\d{4}', '\\d{8}', , , '85751234'],
//             'BJ',
//             229,
//             '00', , , , , , , ,
//             [[, '(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '81\\d{6}', '\\d{8}', , , '81123456'], , ,
//             [, , 'NA', 'NA']],
//         BL: [
//             ,
//             [, , '[56]\\d{8}', '\\d{9}'],
//             [, , '590(?:2[7-9]|5[12]|87)\\d{4}', '\\d{9}', , , '590271234'],
//             [, , '690(?:0[0-7]|[1-9]\\d)\\d{4}', '\\d{9}', , , '690301234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'BL',
//             590,
//             '00',
//             '0', , ,
//             '0', , , , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         BM: [
//             ,
//             [, , '[4589]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '441(?:2(?:02|23|61|[3479]\\d)|[46]\\d{2}|5(?:4\\d|60|89)|824)\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '4412345678'],
//             [, , '441(?:[37]\\d|5[0-39])\\d{5}', '\\d{10}', , , '4413701234'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002123456'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'BM',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '441',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         BN: [
//             ,
//             [, , '[2-578]\\d{6}', '\\d{7}'],
//             [
//                 , ,
//                 '2(?:[013-9]\\d|2[0-7])\\d{4}|[3-5]\\d{6}',
//                 '\\d{7}', , ,
//                 '2345678'],
//             [, , '22[89]\\d{4}|[78]\\d{6}', '\\d{7}', , , '7123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'BN',
//             673,
//             '00', , , , , , , ,
//             [[, '([2-578]\\d{2})(\\d{4})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         BO: [
//             ,
//             [, , '[23467]\\d{7}', '\\d{7,8}'],
//             [
//                 , ,
//                 '(?:2(?:2\\d{2}|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d{2}|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:2\\d|3[234]|4[248]|5[24]|6[2-6]|7\\d))|4(?:4\\d{2}|6(?:11|[24689]\\d|72)))\\d{4}',
//                 '\\d{7,8}', , ,
//                 '22123456'],
//             [, , '[67]\\d{7}', '\\d{8}', , , '71234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'BO',
//             591,
//             '00(1\\d)?',
//             '0', , ,
//             '0(1\\d)?', , , ,
//             [
//                 [, '([234])(\\d{7})', '$1 $2', ['[234]'], , '0$CC $1'],
//                 [, '([67]\\d{7})', '$1', ['[67]'], , '0$CC $1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         BQ: [
//             ,
//             [, , '[347]\\d{6}', '\\d{7}'],
//             [
//                 , ,
//                 '(?:318[023]|416[023]|7(?:1[578]|50)\\d)\\d{3}',
//                 '\\d{7}', , ,
//                 '7151234'],
//             [
//                 , ,
//                 '(?:318[14-68]|416[15-9]|7(?:0[01]|7[07]|[89]\\d)\\d)\\d{3}',
//                 '\\d{7}', , ,
//                 '3181234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'BQ',
//             599,
//             '00', , , , , , , , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         BR: [
//             ,
//             [, , '[1-46-9]\\d{7,10}|5\\d{8,9}', '\\d{8,11}'],
//             [
//                 , ,
//                 '(?:[14689][1-9]|2[12478]|3[1-578]|5[1-5]|7[13-579])[2-5]\\d{7}',
//                 '\\d{8,11}', , ,
//                 '1123456789'],
//             [
//                 , ,
//                 '1[1-9](?:7|9\\d)\\d{7}|(?:2[12478]|3[1-578]|[689][1-9]|7[13-579])(?:[6-8]|9\\d?)\\d{7}|(?:4[1-9]|5[1-5])[6-9]\\d{7}',
//                 '\\d{10,11}', , ,
//                 '11961234567'],
//             [, , '800\\d{6,7}', '\\d{8,11}', , , '800123456'],
//             [, , '(?:300|[59]00\\d?)\\d{6}', '\\d{8,11}', , , '300123456'],
//             [
//                 , ,
//                 '(?:300\\d(?:\\d{2})?|40(?:0\\d|20))\\d{4}',
//                 '\\d{8,10}', , ,
//                 '40041234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'BR',
//             55,
//             '00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)',
//             '0', , ,
//             '0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?',
//             '$2', , ,
//             [
//                 [
//                     ,
//                     '(\\d{4})(\\d{4})',
//                     '$1-$2',
//                     ['[2-9](?:[1-9]|0[1-9])'],
//                     '$1'],
//                 [, '(\\d{5})(\\d{4})', '$1-$2', ['9(?:[1-9]|0[1-9])'], '$1'],
//                 [, '(\\d{3,5})', '$1', ['1[125689]'], '$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{5})(\\d{4})',
//                     '$1 $2-$3',
//                     ['(?:[1689][1-9]|2[12478]|3[1-578]|7[13-579])9'],
//                     '($1)',
//                     '0 $CC ($1)'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{4})(\\d{4})',
//                     '$1 $2-$3',
//                     ['[1-9][1-9]'],
//                     '($1)',
//                     '0 $CC ($1)'],
//                 [, '(\\d{4})(\\d{4})', '$1-$2', ['(?:300|40(?:0|20))']],
//                 [
//                     ,
//                     '([3589]00)(\\d{2,3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['[3589]00'],
//                     '0$1']],
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{5})(\\d{4})',
//                     '$1 $2-$3',
//                     ['(?:[1689][1-9]|2[12478]|3[1-578]|7[13-579])9'],
//                     '($1)',
//                     '0 $CC ($1)'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{4})(\\d{4})',
//                     '$1 $2-$3',
//                     ['[1-9][1-9]'],
//                     '($1)',
//                     '0 $CC ($1)'],
//                 [, '(\\d{4})(\\d{4})', '$1-$2', ['(?:300|40(?:0|20))']],
//                 [
//                     ,
//                     '([3589]00)(\\d{2,3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['[3589]00'],
//                     '0$1']],
//             [, , 'NA', 'NA'], , ,
//             [, , '(?:300\\d|40(?:0\\d|20))\\d{4}', '\\d{8}', , , '40041234'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         BS: [
//             ,
//             [, , '[2589]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[3467]|8[0-4]|9[2-467])|461|502|6(?:0[1-3]|12|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '2423456789'],
//             [
//                 , ,
//                 '242(?:3(?:5[79]|[79]5)|4(?:[2-4][1-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-9]|65|77)|6[34]6|727)\\d{4}',
//                 '\\d{10}', , ,
//                 '2423591234'],
//             [
//                 , ,
//                 '242300\\d{4}|8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002123456'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'BS',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '242',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         BT: [
//             ,
//             [, , '[1-8]\\d{6,7}', '\\d{6,8}'],
//             [
//                 , ,
//                 '(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}',
//                 '\\d{6,7}', , ,
//                 '2345678'],
//             [, , '(?:1[67]|77)\\d{6}', '\\d{8}', , , '17123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'BT',
//             975,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['1|77']],
//                 [, '([2-8])(\\d{3})(\\d{3})', '$1 $2 $3', ['[2-68]|7[246]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         BW: [
//             ,
//             [, , '[2-79]\\d{6,7}', '\\d{7,8}'],
//             [
//                 , ,
//                 '(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0235-9]|55|[69]\\d|7[01])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}',
//                 '\\d{7}', , ,
//                 '2401234'],
//             [, , '7(?:[1-6]\\d|7[014-8])\\d{5}', '\\d{8}', , , '71123456'],
//             [, , 'NA', 'NA'],
//             [, , '90\\d{5}', '\\d{7}', , , '9012345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '79[12][01]\\d{4}', '\\d{8}', , , '79101234'],
//             'BW',
//             267,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{3})(\\d{4})', '$1 $2', ['[2-6]']],
//                 [, '(7\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['7']],
//                 [, '(90)(\\d{5})', '$1 $2', ['9']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         BY: [
//             ,
//             [, , '[1-4]\\d{8}|800\\d{3,7}|[89]\\d{9,10}', '\\d{6,11}'],
//             [
//                 , ,
//                 '(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d{2})|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}',
//                 '\\d{6,11}', , ,
//                 '152450911'],
//             [
//                 , ,
//                 '(?:2(?:5[5679]|9[1-9])|33\\d|44\\d)\\d{6}',
//                 '\\d{9}', , ,
//                 '294911911'],
//             [
//                 , ,
//                 '8(?:0[13]|20\\d)\\d{7}|800\\d{3,7}',
//                 '\\d{6,11}', , ,
//                 '8011234567'],
//             [, , '(?:810|902)\\d{7}', '\\d{10}', , , '9021234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '249\\d{6}', '\\d{9}', , , '249123456'],
//             'BY',
//             375,
//             '810',
//             '8', , ,
//             '8?0?', ,
//             '8~10', ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
//                     '$1 $2-$3-$4',
//                     [
//                         '17[0-3589]|2[4-9]|[34]',
//                         '17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]'],
//                     '8 0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2-$3-$4',
//                     [
//                         '1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])',
//                         '1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])'],
//                     '8 0$1'],
//                 [
//                     ,
//                     '(\\d{4})(\\d{2})(\\d{3})',
//                     '$1 $2-$3',
//                     [
//                         '1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])',
//                         '1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])'],
//                     '8 0$1'],
//                 [
//                     ,
//                     '([89]\\d{2})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['8[01]|9'],
//                     '8 $1'],
//                 [, '(82\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['82'], '8 $1'],
//                 [, '(800)(\\d{3})', '$1 $2', ['800'], '8 $1'],
//                 [, '(800)(\\d{2})(\\d{2,4})', '$1 $2 $3', ['800'], '8 $1']], ,
//             [, , 'NA', 'NA'], , ,
//             [
//                 , ,
//                 '8(?:[013]|[12]0)\\d{8}|800\\d{3,7}|902\\d{7}',
//                 '\\d{6,11}', , ,
//                 '82012345678'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         BZ: [
//             ,
//             [, , '[2-8]\\d{6}|0\\d{10}', '\\d{7}(?:\\d{4})?'],
//             [, , '[234578][02]\\d{5}', '\\d{7}', , , '2221234'],
//             [, , '6[0-35-7]\\d{5}', '\\d{7}', , , '6221234'],
//             [, , '0800\\d{7}', '\\d{11}', , , '08001234123'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'BZ',
//             501,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{3})(\\d{4})', '$1-$2', ['[2-8]']],
//                 [, '(0)(800)(\\d{4})(\\d{3})', '$1-$2-$3-$4', ['0']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA']],
//         CA: [
//             ,
//             [, , '[2-9]\\d{9}|3\\d{6}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}|310\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '2042345678'],
//             [
//                 , ,
//                 '(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '2042345678'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}|310\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '8002123456'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'CA',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         CC: [
//             ,
//             [, , '[1458]\\d{5,9}', '\\d{6,10}'],
//             [, , '89162\\d{4}', '\\d{8,9}', , , '891621234'],
//             [
//                 , ,
//                 '14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}',
//                 '\\d{9}', , ,
//                 '412345678'],
//             [, , '180(?:0\\d{3}|2)\\d{3}', '\\d{7,10}', , , '1800123456'],
//             [, , '190[0126]\\d{6}', '\\d{10}', , , '1900123456'],
//             [, , '13(?:00\\d{2})?\\d{4}', '\\d{6,10}', , , '1300123456'],
//             [, , '500\\d{6}', '\\d{9}', , , '500123456'],
//             [, , '550\\d{6}', '\\d{9}', , , '550123456'],
//             'CC',
//             61,
//             '(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]',
//             '0', , ,
//             '0', ,
//             '0011', , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         CD: [
//             ,
//             [, , '[2-6]\\d{6}|[18]\\d{6,8}|9\\d{8}', '\\d{7,9}'],
//             [, , '1(?:2\\d{7}|\\d{6})|[2-6]\\d{6}', '\\d{7,9}', , , '1234567'],
//             [
//                 , ,
//                 '8(?:[0-2459]\\d{2}|8)\\d{5}|9[7-9]\\d{7}',
//                 '\\d{7,9}', , ,
//                 '991234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'CD',
//             243,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['12'], '0$1'],
//                 [
//                     ,
//                     '([89]\\d{2})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['8[0-2459]|9'],
//                     '0$1'],
//                 [, '(\\d{2})(\\d{2})(\\d{3})', '$1 $2 $3', ['88'], '0$1'],
//                 [, '(\\d{2})(\\d{5})', '$1 $2', ['[1-6]'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         CF: [
//             ,
//             [, , '[278]\\d{7}', '\\d{8}'],
//             [, , '2[12]\\d{6}', '\\d{8}', , , '21612345'],
//             [, , '7[0257]\\d{6}', '\\d{8}', , , '70012345'],
//             [, , 'NA', 'NA'],
//             [, , '8776\\d{4}', '\\d{8}', , , '87761234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'CF',
//             236,
//             '00', , , , , , , ,
//             [[, '(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         CG: [
//             ,
//             [, , '[028]\\d{8}', '\\d{9}'],
//             [, , '222[1-589]\\d{5}', '\\d{9}', , , '222123456'],
//             [, , '0[14-6]\\d{7}', '\\d{9}', , , '061234567'],
//             [, , 'NA', 'NA'],
//             [, , '800\\d{6}', '\\d{9}', , , '800123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'CG',
//             242,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[02]']],
//                 [, '(\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['8']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA']],
//         CH: [
//             ,
//             [, , '[2-9]\\d{8}|860\\d{9}', '\\d{9}(?:\\d{3})?'],
//             [
//                 , ,
//                 '(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}',
//                 '\\d{9}', , ,
//                 '212345678'],
//             [, , '7[5-9]\\d{7}', '\\d{9}', , , '781234567'],
//             [, , '800\\d{6}', '\\d{9}', , , '800123456'],
//             [, , '90[016]\\d{6}', '\\d{9}', , , '900123456'],
//             [, , '84[0248]\\d{6}', '\\d{9}', , , '840123456'],
//             [, , '878\\d{6}', '\\d{9}', , , '878123456'],
//             [, , 'NA', 'NA'],
//             'CH',
//             41,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[2-7]|[89]1'],
//                     '0$1'],
//                 [
//                     ,
//                     '([89]\\d{2})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['8[047]|90'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4 $5',
//                     ['860'],
//                     '0$1']], ,
//             [, , '74[0248]\\d{6}', '\\d{9}', , , '740123456'], , ,
//             [, , 'NA', 'NA'],
//             [, , '5[18]\\d{7}', '\\d{9}', , , '581234567'], , ,
//             [, , '860\\d{9}', '\\d{12}', , , '860123456789']],
//         CI: [
//             ,
//             [, , '[02-8]\\d{7}', '\\d{8}'],
//             [
//                 , ,
//                 '(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}',
//                 '\\d{8}', , ,
//                 '21234567'],
//             [
//                 , ,
//                 '(?:0[1-9]|4\\d|5[14-9]|6[015-79]|7[578]|87)\\d{6}',
//                 '\\d{8}', , ,
//                 '01234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'CI',
//             225,
//             '00', , , , , , , ,
//             [[, '(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA']],
//         CK: [
//             ,
//             [, , '[2-8]\\d{4}', '\\d{5}'],
//             [, , '(?:2\\d|3[13-7]|4[1-5])\\d{3}', '\\d{5}', , , '21234'],
//             [, , '[5-8]\\d{4}', '\\d{5}', , , '71234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'CK',
//             682,
//             '00', , , , , , , ,
//             [[, '(\\d{2})(\\d{3})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         CL: [
//             ,
//             [, , '(?:[2-9]|600|123)\\d{7,8}', '\\d{7,11}'],
//             [
//                 , ,
//                 '2(?:1962\\d{4}|2\\d{7}|32[0-2]\\d{5})|(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57])\\d{7}',
//                 '\\d{7,9}', , ,
//                 '221234567'],
//             [, , '9[4-9]\\d{7}', '\\d{8,9}', , , '961234567'],
//             [, , '800\\d{6}|1230\\d{7}', '\\d{9,11}', , , '800123456'],
//             [, , 'NA', 'NA'],
//             [, , '600\\d{7,8}', '\\d{10,11}', , , '6001234567'],
//             [, , 'NA', 'NA'],
//             [, , '44\\d{7}', '\\d{9}', , , '441234567'],
//             'CL',
//             56,
//             '(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0',
//             '0', , ,
//             '0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))', , , ,
//             [
//                 [
//                     ,
//                     '(\\d)(\\d{4})(\\d{4})',
//                     '$1 $2 $3',
//                     ['2[23]'],
//                     '($1)',
//                     '$CC ($1)'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['[357]|4[1-35]|6[13-57]'],
//                     '($1)',
//                     '$CC ($1)'],
//                 [, '(9)(\\d{4})(\\d{4})', '$1 $2 $3', ['9'], '0$1'],
//                 [, '(44)(\\d{3})(\\d{4})', '$1 $2 $3', ['44'], '0$1'],
//                 [, '([68]00)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['60|8'], '$1'],
//                 [
//                     ,
//                     '(600)(\\d{3})(\\d{2})(\\d{3})',
//                     '$1 $2 $3 $4',
//                     ['60'],
//                     '$1'],
//                 [, '(1230)(\\d{3})(\\d{4})', '$1 $2 $3', ['1'], '$1'],
//                 [, '(\\d{5})(\\d{4})', '$1 $2', ['219'], '($1)', '$CC ($1)'],
//                 [, '(\\d{4,5})', '$1', ['[1-9]'], '$1']],
//             [
//                 [
//                     ,
//                     '(\\d)(\\d{4})(\\d{4})',
//                     '$1 $2 $3',
//                     ['2[23]'],
//                     '($1)',
//                     '$CC ($1)'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['[357]|4[1-35]|6[13-57]'],
//                     '($1)',
//                     '$CC ($1)'],
//                 [, '(9)(\\d{4})(\\d{4})', '$1 $2 $3', ['9'], '0$1'],
//                 [, '(44)(\\d{3})(\\d{4})', '$1 $2 $3', ['44'], '0$1'],
//                 [, '([68]00)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['60|8'], '$1'],
//                 [
//                     ,
//                     '(600)(\\d{3})(\\d{2})(\\d{3})',
//                     '$1 $2 $3 $4',
//                     ['60'],
//                     '$1'],
//                 [, '(1230)(\\d{3})(\\d{4})', '$1 $2 $3', ['1'], '$1'],
//                 [, '(\\d{5})(\\d{4})', '$1 $2', ['219'], '($1)', '$CC ($1)']],
//             [, , 'NA', 'NA'], , ,
//             [, , '600\\d{7,8}', '\\d{10,11}', , , '6001234567'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         CM: [
//             ,
//             [, , '[2368]\\d{7,8}', '\\d{8,9}'],
//             [, , '2(?:22|33|4[23])\\d{6}', '\\d{9}', , , '222123456'],
//             [, , '6[5-9]\\d{7}', '\\d{9}', , , '671234567'],
//             [, , '800\\d{5}', '\\d{8}', , , '80012345'],
//             [, , '88\\d{6}', '\\d{8}', , , '88012345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'CM',
//             237,
//             '00', , , , , , , ,
//             [
//                 [
//                     ,
//                     '([26])(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4 $5',
//                     ['[26]']],
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[23]|88']],
//                 [, '(800)(\\d{2})(\\d{3})', '$1 $2 $3', ['80']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         CN: [
//             ,
//             [, , '[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,10}', '\\d{4,12}'],
//             [
//                 , ,
//                 '21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-4689]|6[2368]|9[02-9])|8(?:078|1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})|80(?:29|6[03578]|7[018]|81)\\d{4}',
//                 '\\d{4,12}', , ,
//                 '1012345678'],
//             [
//                 , ,
//                 '1(?:[38]\\d|4[57]|5[0-35-9]|7[036-8])\\d{8}',
//                 '\\d{11}', , ,
//                 '13123456789'],
//             [, , '(?:10)?800\\d{7}', '\\d{10,12}', , , '8001234567'],
//             [, , '16[08]\\d{5}', '\\d{8}', , , '16812345'],
//             [
//                 , ,
//                 '400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}',
//                 '\\d{7,11}', , ,
//                 '4001234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'CN',
//             86,
//             '(1(?:[129]\\d{3}|79\\d{2}))?00',
//             '0', , ,
//             '(1(?:[129]\\d{3}|79\\d{2}))|0', ,
//             '00', ,
//             [
//                 [
//                     ,
//                     '(80\\d{2})(\\d{4})',
//                     '$1 $2',
//                     ['80[2678]'],
//                     '0$1',
//                     '$CC $1',
//                     1],
//                 [, '([48]00)(\\d{3})(\\d{4})', '$1 $2 $3', ['[48]00']],
//                 [, '(\\d{5,6})', '$1', ['100|95']],
//                 [
//                     ,
//                     '(\\d{2})(\\d{5,6})',
//                     '$1 $2',
//                     [
//                         '(?:10|2\\d)[19]',
//                         '(?:10|2\\d)(?:10|9[56])',
//                         '(?:10|2\\d)(?:100|9[56])'],
//                     '0$1',
//                     '$CC $1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{5,6})',
//                     '$1 $2',
//                     ['[3-9]', '[3-9]\\d{2}[19]', '[3-9]\\d{2}(?:10|9[56])'],
//                     '0$1',
//                     '$CC $1'],
//                 [, '(\\d{3,4})(\\d{4})', '$1 $2', ['[2-9]']],
//                 [
//                     ,
//                     '(21)(\\d{4})(\\d{4,6})',
//                     '$1 $2 $3',
//                     ['21'],
//                     '0$1',
//                     '$CC $1',
//                     1],
//                 [
//                     ,
//                     '([12]\\d)(\\d{4})(\\d{4})',
//                     '$1 $2 $3',
//                     [
//                         '10[1-9]|2[02-9]',
//                         '10[1-9]|2[02-9]',
//                         '10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]'],
//                     '0$1',
//                     '$CC $1',
//                     1],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])'],
//                     '0$1',
//                     '$CC $1',
//                     1],
//                 [
//                     ,
//                     '(\\d{3})(\\d{4})(\\d{4})',
//                     '$1 $2 $3',
//                     ['3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98)'],
//                     '0$1',
//                     '$CC $1',
//                     1],
//                 [
//                     ,
//                     '(\\d{4})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['807', '8078'],
//                     '0$1',
//                     '$CC $1',
//                     1],
//                 [
//                     ,
//                     '(\\d{3})(\\d{4})(\\d{4})',
//                     '$1 $2 $3',
//                     ['1[3-578]'], ,
//                     '$CC $1'],
//                 [
//                     ,
//                     '(10800)(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['108', '1080', '10800']],
//                 [, '(\\d{3})(\\d{7,8})', '$1 $2', ['950']]],
//             [
//                 [
//                     ,
//                     '(80\\d{2})(\\d{4})',
//                     '$1 $2',
//                     ['80[2678]'],
//                     '0$1',
//                     '$CC $1',
//                     1],
//                 [, '([48]00)(\\d{3})(\\d{4})', '$1 $2 $3', ['[48]00']],
//                 [
//                     ,
//                     '(\\d{2})(\\d{5,6})',
//                     '$1 $2',
//                     [
//                         '(?:10|2\\d)[19]',
//                         '(?:10|2\\d)(?:10|9[56])',
//                         '(?:10|2\\d)(?:100|9[56])'],
//                     '0$1',
//                     '$CC $1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{5,6})',
//                     '$1 $2',
//                     ['[3-9]', '[3-9]\\d{2}[19]', '[3-9]\\d{2}(?:10|9[56])'],
//                     '0$1',
//                     '$CC $1'],
//                 [
//                     ,
//                     '(21)(\\d{4})(\\d{4,6})',
//                     '$1 $2 $3',
//                     ['21'],
//                     '0$1',
//                     '$CC $1',
//                     1],
//                 [
//                     ,
//                     '([12]\\d)(\\d{4})(\\d{4})',
//                     '$1 $2 $3',
//                     [
//                         '10[1-9]|2[02-9]',
//                         '10[1-9]|2[02-9]',
//                         '10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]'],
//                     '0$1',
//                     '$CC $1',
//                     1],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])'],
//                     '0$1',
//                     '$CC $1',
//                     1],
//                 [
//                     ,
//                     '(\\d{3})(\\d{4})(\\d{4})',
//                     '$1 $2 $3',
//                     ['3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98)'],
//                     '0$1',
//                     '$CC $1',
//                     1],
//                 [
//                     ,
//                     '(\\d{4})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['807', '8078'],
//                     '0$1',
//                     '$CC $1',
//                     1],
//                 [
//                     ,
//                     '(\\d{3})(\\d{4})(\\d{4})',
//                     '$1 $2 $3',
//                     ['1[3-578]'], ,
//                     '$CC $1'],
//                 [
//                     ,
//                     '(10800)(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['108', '1080', '10800']],
//                 [, '(\\d{3})(\\d{7,8})', '$1 $2', ['950']]],
//             [, , 'NA', 'NA'], , ,
//             [
//                 , ,
//                 '(?:4|(?:10)?8)00\\d{7}|950\\d{7,8}',
//                 '\\d{10,12}', , ,
//                 '4001234567'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         CO: [
//             ,
//             [, , '(?:[13]\\d{0,3}|[24-8])\\d{7}', '\\d{7,11}'],
//             [, , '[124-8][2-9]\\d{6}', '\\d{8}', , , '12345678'],
//             [
//                 , ,
//                 '3(?:0[0-5]|1\\d|2[0-2]|5[01])\\d{7}',
//                 '\\d{10}', , ,
//                 '3211234567'],
//             [, , '1800\\d{7}', '\\d{11}', , , '18001234567'],
//             [, , '19(?:0[01]|4[78])\\d{7}', '\\d{11}', , , '19001234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'CO',
//             57,
//             '00(?:4(?:[14]4|56)|[579])',
//             '0', , ,
//             '0([3579]|4(?:44|56))?', , , ,
//             [
//                 [
//                     ,
//                     '(\\d)(\\d{7})',
//                     '$1 $2',
//                     [
//                         '1(?:8[2-9]|9[0-3]|[2-7])|[24-8]',
//                         '1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]'],
//                     '($1)',
//                     '0$CC $1'],
//                 [, '(\\d{3})(\\d{7})', '$1 $2', ['3'], , '0$CC $1'],
//                 [
//                     ,
//                     '(1)(\\d{3})(\\d{7})',
//                     '$1-$2-$3',
//                     ['1(?:80|9[04])', '1(?:800|9(?:0[01]|4[78]))'],
//                     '0$1']],
//             [
//                 [
//                     ,
//                     '(\\d)(\\d{7})',
//                     '$1 $2',
//                     [
//                         '1(?:8[2-9]|9[0-3]|[2-7])|[24-8]',
//                         '1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]'],
//                     '($1)',
//                     '0$CC $1'],
//                 [, '(\\d{3})(\\d{7})', '$1 $2', ['3'], , '0$CC $1'],
//                 [
//                     ,
//                     '(1)(\\d{3})(\\d{7})',
//                     '$1 $2 $3',
//                     ['1(?:80|9[04])', '1(?:800|9(?:0[01]|4[78]))']]],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         CR: [
//             ,
//             [, , '[24-9]\\d{7,9}', '\\d{8,10}'],
//             [, , '2[0-24-7]\\d{6}', '\\d{8}', , , '22123456'],
//             [
//                 , ,
//                 '5(?:0[01]|7[0-3])\\d{5}|(?:[67][0-3]|8[3-9])\\d{6}',
//                 '\\d{8}', , ,
//                 '83123456'],
//             [, , '800\\d{7}', '\\d{10}', , , '8001234567'],
//             [, , '90[059]\\d{7}', '\\d{10}', , , '9001234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '210[0-6]\\d{4}|4\\d{7}|5100\\d{4}', '\\d{8}', , , '40001234'],
//             'CR',
//             506,
//             '00', , , ,
//             '(19(?:0[012468]|1[09]|20|66|77|99))', , , ,
//             [
//                 [, '(\\d{4})(\\d{4})', '$1 $2', ['[24-7]|8[3-9]'], , '$CC $1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{4})',
//                     '$1-$2-$3',
//                     ['[89]0'], ,
//                     '$CC $1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         CU: [
//             ,
//             [, , '[2-57]\\d{5,7}', '\\d{4,8}'],
//             [
//                 , ,
//                 '2[1-4]\\d{5,6}|3(?:1\\d{6}|[23]\\d{4,6})|4(?:[125]\\d{5,6}|[36]\\d{6}|[78]\\d{4,6})|7\\d{6,7}',
//                 '\\d{4,8}', , ,
//                 '71234567'],
//             [, , '5\\d{7}', '\\d{8}', , , '51234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'CU',
//             53,
//             '119',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(\\d)(\\d{6,7})', '$1 $2', ['7'], '(0$1)'],
//                 [, '(\\d{2})(\\d{4,6})', '$1 $2', ['[2-4]'], '(0$1)'],
//                 [, '(\\d)(\\d{7})', '$1 $2', ['5'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         CV: [
//             ,
//             [, , '[259]\\d{6}', '\\d{7}'],
//             [
//                 , ,
//                 '2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}',
//                 '\\d{7}', , ,
//                 '2211234'],
//             [, , '(?:9\\d|59)\\d{5}', '\\d{7}', , , '9911234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'CV',
//             238,
//             '0', , , , , , , ,
//             [[, '(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         CW: [
//             ,
//             [, , '[169]\\d{6,7}', '\\d{7,8}'],
//             [
//                 , ,
//                 '9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}',
//                 '\\d{7,8}', , ,
//                 '94151234'],
//             [
//                 , ,
//                 '9(?:5(?:[12467]\\d|3[01])|6(?:[15-9]\\d|3[01]))\\d{4}',
//                 '\\d{7,8}', , ,
//                 '95181234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '60[0-2]\\d{4}', '\\d{7}', , , '6001234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'CW',
//             599,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{3})(\\d{4})', '$1 $2', ['[13-7]']],
//                 [, '(9)(\\d{3})(\\d{4})', '$1 $2 $3', ['9']]], ,
//             [, , '955\\d{5}', '\\d{7,8}', , , '95581234'],
//             1, ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         CX: [
//             ,
//             [, , '[1458]\\d{5,9}', '\\d{6,10}'],
//             [, , '89164\\d{4}', '\\d{8,9}', , , '891641234'],
//             [
//                 , ,
//                 '14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}',
//                 '\\d{9}', , ,
//                 '412345678'],
//             [, , '180(?:0\\d{3}|2)\\d{3}', '\\d{7,10}', , , '1800123456'],
//             [, , '190[0126]\\d{6}', '\\d{10}', , , '1900123456'],
//             [, , '13(?:00\\d{2})?\\d{4}', '\\d{6,10}', , , '1300123456'],
//             [, , '500\\d{6}', '\\d{9}', , , '500123456'],
//             [, , '550\\d{6}', '\\d{9}', , , '550123456'],
//             'CX',
//             61,
//             '(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]',
//             '0', , ,
//             '0', ,
//             '0011', , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         CY: [
//             ,
//             [, , '[257-9]\\d{7}', '\\d{8}'],
//             [, , '2[2-6]\\d{6}', '\\d{8}', , , '22345678'],
//             [, , '9[4-79]\\d{6}', '\\d{8}', , , '96123456'],
//             [, , '800\\d{5}', '\\d{8}', , , '80001234'],
//             [, , '90[09]\\d{5}', '\\d{8}', , , '90012345'],
//             [, , '80[1-9]\\d{5}', '\\d{8}', , , '80112345'],
//             [, , '700\\d{5}', '\\d{8}', , , '70012345'],
//             [, , 'NA', 'NA'],
//             'CY',
//             357,
//             '00', , , , , , , ,
//             [[, '(\\d{2})(\\d{6})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '(?:50|77)\\d{6}', '\\d{8}', , , '77123456'], , ,
//             [, , 'NA', 'NA']],
//         CZ: [
//             ,
//             [, , '[2-8]\\d{8}|9\\d{8,11}', '\\d{9,12}'],
//             [
//                 , ,
//                 '2\\d{8}|(?:3[1257-9]|4[16-9]|5[13-9])\\d{7}',
//                 '\\d{9,12}', , ,
//                 '212345678'],
//             [
//                 , ,
//                 '(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}',
//                 '\\d{9,12}', , ,
//                 '601123456'],
//             [, , '800\\d{6}', '\\d{9,12}', , , '800123456'],
//             [, , '9(?:0[05689]|76)\\d{6}', '\\d{9,12}', , , '900123456'],
//             [, , '8[134]\\d{7}', '\\d{9,12}', , , '811234567'],
//             [, , '70[01]\\d{6}', '\\d{9,12}', , , '700123456'],
//             [, , '9[17]0\\d{6}', '\\d{9,12}', , , '910123456'],
//             'CZ',
//             420,
//             '00', , , , , , , ,
//             [
//                 [
//                     ,
//                     '([2-9]\\d{2})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['[2-8]|9[015-7]']],
//                 [, '(96\\d)(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['96']],
//                 [
//                     ,
//                     '(9\\d)(\\d{3})(\\d{3})(\\d{3})',
//                     '$1 $2 $3 $4',
//                     ['9[36]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '9(?:5\\d|7[234])\\d{6}', '\\d{9,12}', , , '972123456'], , ,
//             [, , '9(?:3\\d{9}|6\\d{7,10})', '\\d{9,12}', , , '93123456789']],
//         DE: [
//             ,
//             [
//                 , ,
//                 '[1-35-9]\\d{3,14}|4(?:[0-8]\\d{4,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})',
//                 '\\d{2,15}'],
//             [
//                 , ,
//                 '[246]\\d{5,13}|3(?:0\\d{3,13}|2\\d{9}|[3-9]\\d{4,13})|5(?:0[2-8]|[1256]\\d|[38][0-8]|4\\d{0,2}|[79][0-7])\\d{3,11}|7(?:0[2-8]|[1-9]\\d)\\d{3,10}|8(?:0[2-9]|[1-9]\\d)\\d{3,10}|9(?:0[6-9]\\d{3,10}|1\\d{4,12}|[2-9]\\d{4,11})',
//                 '\\d{2,15}', , ,
//                 '30123456'],
//             [
//                 , ,
//                 '1(?:5[0-25-9]\\d{8}|6[023]\\d{7,8}|7(?:[0-57-9]\\d?|6\\d)\\d{7})',
//                 '\\d{10,11}', , ,
//                 '15123456789'],
//             [, , '800\\d{7,12}', '\\d{10,15}', , , '8001234567890'],
//             [
//                 , ,
//                 '137[7-9]\\d{6}|900(?:[135]\\d{6}|9\\d{7})',
//                 '\\d{10,11}', , ,
//                 '9001234567'],
//             [
//                 , ,
//                 '1(?:3(?:7[1-6]\\d{6}|8\\d{4})|80\\d{5,11})',
//                 '\\d{7,14}', , ,
//                 '18012345'],
//             [, , '700\\d{8}', '\\d{11}', , , '70012345678'],
//             [, , 'NA', 'NA'],
//             'DE',
//             49,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(1\\d{2})(\\d{7,8})', '$1 $2', ['1[67]'], '0$1'],
//                 [, '(15\\d{3})(\\d{6})', '$1 $2', ['15[0568]'], '0$1'],
//                 [, '(1\\d{3})(\\d{7})', '$1 $2', ['15'], '0$1'],
//                 [, '(\\d{2})(\\d{3,11})', '$1 $2', ['3[02]|40|[68]9'], '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3,11})',
//                     '$1 $2',
//                     ['2(?:\\d1|0[2389]|1[24]|28|34)|3(?:[3-9][15]|40)|[4-8][1-9]1|9(?:06|[1-9]1)'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{4})(\\d{2,11})',
//                     '$1 $2',
//                     [
//                         '[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])',
//                         '[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|4[1246]|6[1-4]|7[1346]|8[13568]|9[1246])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))'],
//                     '0$1'],
//                 [, '(3\\d{4})(\\d{1,10})', '$1 $2', ['3'], '0$1'],
//                 [, '(800)(\\d{7,12})', '$1 $2', ['800'], '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d)(\\d{4,10})',
//                     '$1 $2 $3',
//                     ['(?:18|90)0|137', '1(?:37|80)|900[1359]'],
//                     '0$1'],
//                 [, '(1\\d{2})(\\d{5,11})', '$1 $2', ['181'], '0$1'],
//                 [
//                     ,
//                     '(18\\d{3})(\\d{6})',
//                     '$1 $2',
//                     ['185', '1850', '18500'],
//                     '0$1'],
//                 [, '(18\\d{2})(\\d{7})', '$1 $2', ['18[68]'], '0$1'],
//                 [, '(18\\d)(\\d{8})', '$1 $2', ['18[2-579]'], '0$1'],
//                 [, '(700)(\\d{4})(\\d{4})', '$1 $2 $3', ['700'], '0$1'],
//                 [, '(138)(\\d{4})', '$1 $2', ['138'], '0$1'],
//                 [
//                     ,
//                     '(15[013-68])(\\d{2})(\\d{8})',
//                     '$1 $2 $3',
//                     ['15[013-68]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(15[279]\\d)(\\d{2})(\\d{7})',
//                     '$1 $2 $3',
//                     ['15[279]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(1[67]\\d)(\\d{2})(\\d{7,8})',
//                     '$1 $2 $3',
//                     ['1(?:6[023]|7)'],
//                     '0$1']], ,
//             [
//                 , ,
//                 '16(?:4\\d{1,10}|[89]\\d{1,11})',
//                 '\\d{4,14}', , ,
//                 '16412345'], , ,
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '18(?:1\\d{5,11}|[2-9]\\d{8})',
//                 '\\d{8,14}', , ,
//                 '18500123456'], , ,
//             [
//                 , ,
//                 '1(?:5(?:(?:2\\d55|7\\d99|9\\d33)\\d{7}|(?:[034568]00|113)\\d{8})|6(?:013|255|399)\\d{7,8}|7(?:[015]13|[234]55|[69]33|[78]99)\\d{7,8})',
//                 '\\d{12,13}', , ,
//                 '177991234567']],
//         DJ: [
//             ,
//             [, , '[27]\\d{7}', '\\d{8}'],
//             [, , '2(?:1[2-5]|7[45])\\d{5}', '\\d{8}', , , '21360003'],
//             [, , '77[0-26-8]\\d{5}', '\\d{8}', , , '77831001'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'DJ',
//             253,
//             '00', , , , , , , ,
//             [[, '(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         DK: [
//             ,
//             [, , '[2-9]\\d{7}', '\\d{8}'],
//             [
//                 , ,
//                 '(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}',
//                 '\\d{8}', , ,
//                 '32123456'],
//             [
//                 , ,
//                 '(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}',
//                 '\\d{8}', , ,
//                 '20123456'],
//             [, , '80\\d{6}', '\\d{8}', , , '80123456'],
//             [, , '90\\d{6}', '\\d{8}', , , '90123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'DK',
//             45,
//             '00', , , , , , ,
//             1,
//             [[, '(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         DM: [
//             ,
//             [, , '[57-9]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '7674201234'],
//             [
//                 , ,
//                 '767(?:2(?:[234689]5|7[5-7])|31[5-7]|61[2-7])\\d{4}',
//                 '\\d{10}', , ,
//                 '7672251234'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002123456'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'DM',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '767',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         DO: [
//             ,
//             [, , '[589]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '8(?:[04]9[2-9]\\d{6}|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d{2}|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9]))\\d{4})',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '8092345678'],
//             [, , '8[024]9[2-9]\\d{6}', '\\d{7}(?:\\d{3})?', , , '8092345678'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002123456'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'DO',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '8[024]9',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         DZ: [
//             ,
//             [, , '(?:[1-4]|[5-9]\\d)\\d{7}', '\\d{8,9}'],
//             [
//                 , ,
//                 '(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d{6}|9619\\d{5}',
//                 '\\d{8,9}', , ,
//                 '12345678'],
//             [
//                 , ,
//                 '(?:5[4-6]|7[7-9])\\d{7}|6(?:[569]\\d|7[0-6])\\d{6}',
//                 '\\d{9}', , ,
//                 '551234567'],
//             [, , '800\\d{6}', '\\d{9}', , , '800123456'],
//             [, , '80[3-689]1\\d{5}', '\\d{9}', , , '808123456'],
//             [, , '80[12]1\\d{5}', '\\d{9}', , , '801123456'],
//             [, , 'NA', 'NA'],
//             [, , '98[23]\\d{6}', '\\d{9}', , , '983123456'],
//             'DZ',
//             213,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[1-4]'],
//                     '0$1'],
//                 [
//                     ,
//                     '([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[5-8]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(9\\d)(\\d{3})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['9'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         EC: [
//             ,
//             [, , '1\\d{9,10}|[2-8]\\d{7}|9\\d{8}', '\\d{7,11}'],
//             [, , '[2-7][2-7]\\d{6}', '\\d{7,8}', , , '22123456'],
//             [
//                 , ,
//                 '9(?:39|[45][89]|[67][7-9]|[89]\\d)\\d{6}',
//                 '\\d{9}', , ,
//                 '991234567'],
//             [, , '1800\\d{6,7}', '\\d{10,11}', , , '18001234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '[2-7]890\\d{4}', '\\d{8}', , , '28901234'],
//             'EC',
//             593,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d)(\\d{3})(\\d{4})',
//                     '$1 $2-$3',
//                     ['[247]|[356][2-8]'],
//                     '(0$1)'],
//                 [, '(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['9'], '0$1'],
//                 [, '(1800)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['1'], '$1']],
//             [
//                 [, '(\\d)(\\d{3})(\\d{4})', '$1-$2-$3', ['[247]|[356][2-8]']],
//                 [, '(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['9'], '0$1'],
//                 [, '(1800)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['1'], '$1']],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         EE: [
//             ,
//             [, , '1\\d{3,4}|[3-9]\\d{6,7}|800\\d{6,7}', '\\d{4,10}'],
//             [
//                 , ,
//                 '(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}',
//                 '\\d{7}', , ,
//                 '3212345'],
//             [
//                 , ,
//                 '(?:5\\d|8[1-5])\\d{6}|5(?:[02]\\d{2}|1(?:[0-8]\\d|95)|5[0-478]\\d|64[0-4]|65[1-589])\\d{3}',
//                 '\\d{7,8}', , ,
//                 '51234567'],
//             [
//                 , ,
//                 '800(?:0\\d{3}|1\\d|[2-9])\\d{3}',
//                 '\\d{7,10}', , ,
//                 '80012345'],
//             [, , '(?:40\\d{2}|900)\\d{4}', '\\d{7,8}', , , '9001234'],
//             [, , 'NA', 'NA'],
//             [, , '70[0-2]\\d{5}', '\\d{8}', , , '70012345'],
//             [, , 'NA', 'NA'],
//             'EE',
//             372,
//             '00', , , , , , , ,
//             [
//                 [
//                     ,
//                     '([3-79]\\d{2})(\\d{4})',
//                     '$1 $2',
//                     [
//                         '[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]',
//                         '[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]']],
//                 [, '(70)(\\d{2})(\\d{4})', '$1 $2 $3', ['70']],
//                 [, '(8000)(\\d{3})(\\d{3})', '$1 $2 $3', ['800', '8000']],
//                 [
//                     ,
//                     '([458]\\d{3})(\\d{3,4})',
//                     '$1 $2',
//                     ['40|5|8(?:00|[1-5])', '40|5|8(?:00[1-9]|[1-5])']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , '1\\d{3,4}|800[2-9]\\d{3}', '\\d{4,7}', , , '8002123'],
//             [
//                 , ,
//                 '1(?:2[01245]|3[0-6]|4[1-489]|5[0-59]|6[1-46-9]|7[0-27-9]|8[189]|9[012])\\d{1,2}',
//                 '\\d{4,5}', , ,
//                 '12123'], , ,
//             [, , 'NA', 'NA']],
//         EG: [
//             ,
//             [, , '1\\d{4,9}|[2456]\\d{8}|3\\d{7}|[89]\\d{8,9}', '\\d{5,10}'],
//             [
//                 , ,
//                 '(?:1(?:3[23]\\d|5(?:[23]|9\\d))|2[2-4]\\d{2}|3\\d{2}|4(?:0[2-5]|[578][23]|64)\\d|5(?:0[2-7]|[57][23])\\d|6[24-689]3\\d|8(?:2[2-57]|4[26]|6[237]|8[2-4])\\d|9(?:2[27]|3[24]|52|6[2356]|7[2-4])\\d)\\d{5}|1[69]\\d{3}',
//                 '\\d{5,9}', , ,
//                 '234567890'],
//             [
//                 , ,
//                 '1(?:0[0-269]|1[0-245]|2[0-278])\\d{7}',
//                 '\\d{10}', , ,
//                 '1001234567'],
//             [, , '800\\d{7}', '\\d{10}', , , '8001234567'],
//             [, , '900\\d{7}', '\\d{10}', , , '9001234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'EG',
//             20,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(\\d)(\\d{7,8})', '$1 $2', ['[23]'], '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['1[012]|[89]00'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{6,7})',
//                     '$1 $2',
//                     ['1[35]|[4-6]|[89][2-9]'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         EH: [
//             ,
//             [, , '[5689]\\d{8}', '\\d{9}'],
//             [, , '528[89]\\d{5}', '\\d{9}', , , '528812345'],
//             [
//                 , ,
//                 '6(?:0[0-8]|[12-79]\\d|8[017])\\d{6}',
//                 '\\d{9}', , ,
//                 '650123456'],
//             [, , '80\\d{7}', '\\d{9}', , , '801234567'],
//             [, , '89\\d{7}', '\\d{9}', , , '891234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'EH',
//             212,
//             '00',
//             '0', , ,
//             '0', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '528[89]',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         ER: [
//             ,
//             [, , '[178]\\d{6}', '\\d{6,7}'],
//             [
//                 , ,
//                 '1(?:1[12568]|20|40|55|6[146])\\d{4}|8\\d{6}',
//                 '\\d{6,7}', , ,
//                 '8370362'],
//             [, , '17[1-3]\\d{4}|7\\d{6}', '\\d{7}', , , '7123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'ER',
//             291,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [[, '(\\d)(\\d{3})(\\d{3})', '$1 $2 $3', , '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         ES: [
//             ,
//             [, , '[5-9]\\d{8}', '\\d{9}'],
//             [
//                 , ,
//                 '8(?:[13]0|[28][0-8]|[47][1-9]|5[01346-9]|6[0457-9])\\d{6}|9(?:[1238][0-8]\\d{6}|4[1-9]\\d{6}|5\\d{7}|6(?:[0-8]\\d{6}|9(?:0(?:[0-57-9]\\d{4}|6(?:0[0-8]|1[1-9]|[2-9]\\d)\\d{2})|[1-9]\\d{5}))|7(?:[124-9]\\d{2}|3(?:[0-8]\\d|9[1-9]))\\d{4})',
//                 '\\d{9}', , ,
//                 '810123456'],
//             [
//                 , ,
//                 '(?:6\\d{6}|7[1-4]\\d{5}|9(?:6906(?:09|10)|7390\\d{2}))\\d{2}',
//                 '\\d{9}', , ,
//                 '612345678'],
//             [, , '[89]00\\d{6}', '\\d{9}', , , '800123456'],
//             [, , '80[367]\\d{6}', '\\d{9}', , , '803123456'],
//             [, , '90[12]\\d{6}', '\\d{9}', , , '901123456'],
//             [, , '70\\d{7}', '\\d{9}', , , '701234567'],
//             [, , 'NA', 'NA'],
//             'ES',
//             34,
//             '00', , , , , , , ,
//             [
//                 [, '([89]00)(\\d{3})(\\d{3})', '$1 $2 $3', ['[89]00']],
//                 [
//                     ,
//                     '([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[568]|[79][0-8]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '51\\d{7}', '\\d{9}', , , '511234567'], , ,
//             [, , 'NA', 'NA']],
//         ET: [
//             ,
//             [, , '[1-59]\\d{8}', '\\d{7,9}'],
//             [
//                 , ,
//                 '(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:18|2[69]|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|22[0-6]|33[0134689]|44[04]|55[0-6]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:11[1-9]|22[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}',
//                 '\\d{7,9}', , ,
//                 '111112345'],
//             [, , '9(?:[1-46]\\d|5[89])\\d{6}', '\\d{9}', , , '911234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'ET',
//             251,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [[, '([1-59]\\d)(\\d{3})(\\d{4})', '$1 $2 $3', , '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         FI: [
//             ,
//             [, , '1\\d{4,11}|[2-9]\\d{4,10}', '\\d{5,12}'],
//             [
//                 , ,
//                 '1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}',
//                 '\\d{5,12}', , ,
//                 '1312345678'],
//             [, , '4\\d{5,10}|50\\d{4,8}', '\\d{6,11}', , , '412345678'],
//             [, , '800\\d{4,7}', '\\d{7,10}', , , '8001234567'],
//             [, , '[67]00\\d{5,6}', '\\d{8,9}', , , '600123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'FI',
//             358,
//             '00|99[049]',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{3})(\\d{3,7})',
//                     '$1 $2',
//                     ['(?:[1-3]00|[6-8]0)'],
//                     '0$1'],
//                 [, '(116\\d{3})', '$1', ['116'], '$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{4,10})',
//                     '$1 $2',
//                     ['[14]|2[09]|50|7[135]'],
//                     '0$1'],
//                 [, '(\\d)(\\d{4,11})', '$1 $2', ['[25689][1-8]|3'], '0$1']], ,
//             [, , 'NA', 'NA'],
//             1, ,
//             [
//                 , ,
//                 '[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})',
//                 '\\d{5,10}', , ,
//                 '100123'],
//             [
//                 , ,
//                 '[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})',
//                 '\\d{5,10}', , ,
//                 '10112345'], , ,
//             [, , 'NA', 'NA']],
//         FJ: [
//             ,
//             [, , '[36-9]\\d{6}|0\\d{10}', '\\d{7}(?:\\d{4})?'],
//             [, , '(?:3[0-5]|6[25-7]|8[58])\\d{5}', '\\d{7}', , , '3212345'],
//             [, , '(?:7[0-8]|8[034679]|9\\d)\\d{5}', '\\d{7}', , , '7012345'],
//             [, , '0800\\d{7}', '\\d{11}', , , '08001234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'FJ',
//             679,
//             '0(?:0|52)', , , , , ,
//             '00', ,
//             [
//                 [, '(\\d{3})(\\d{4})', '$1 $2', ['[36-9]']],
//                 [, '(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['0']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA']],
//         FK: [
//             ,
//             [, , '[2-7]\\d{4}', '\\d{5}'],
//             [, , '[2-47]\\d{4}', '\\d{5}', , , '31234'],
//             [, , '[56]\\d{4}', '\\d{5}', , , '51234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'FK',
//             500,
//             '00', , , , , , , , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         FM: [
//             ,
//             [, , '[39]\\d{6}', '\\d{7}'],
//             [, , '3[2357]0[1-9]\\d{3}|9[2-6]\\d{5}', '\\d{7}', , , '3201234'],
//             [, , '3[2357]0[1-9]\\d{3}|9[2-7]\\d{5}', '\\d{7}', , , '3501234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'FM',
//             691,
//             '00', , , , , , , ,
//             [[, '(\\d{3})(\\d{4})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         FO: [
//             ,
//             [, , '[2-9]\\d{5}', '\\d{6}'],
//             [, , '(?:20|[3-4]\\d|8[19])\\d{4}', '\\d{6}', , , '201234'],
//             [, , '(?:[27][1-9]|5\\d)\\d{4}', '\\d{6}', , , '211234'],
//             [, , '80[257-9]\\d{3}', '\\d{6}', , , '802123'],
//             [
//                 , ,
//                 '90(?:[1345][15-7]|2[125-7]|99)\\d{2}',
//                 '\\d{6}', , ,
//                 '901123'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '(?:6[0-36]|88)\\d{4}', '\\d{6}', , , '601234'],
//             'FO',
//             298,
//             '00', , , ,
//             '(10(?:01|[12]0|88))', , , ,
//             [[, '(\\d{6})', '$1', , , '$CC $1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         FR: [
//             ,
//             [, , '[1-9]\\d{8}', '\\d{9}'],
//             [, , '[1-5]\\d{8}', '\\d{9}', , , '123456789'],
//             [
//                 , ,
//                 '6\\d{8}|7(?:00\\d{6}|[3-9]\\d{7})',
//                 '\\d{9}', , ,
//                 '612345678'],
//             [, , '80\\d{7}', '\\d{9}', , , '801234567'],
//             [, , '89[1-37-9]\\d{6}', '\\d{9}', , , '891123456'],
//             [, , '8(?:1[019]|2[0156]|84|90)\\d{6}', '\\d{9}', , , '810123456'],
//             [, , 'NA', 'NA'],
//             [, , '9\\d{8}', '\\d{9}', , , '912345678'],
//             'FR',
//             33,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4 $5',
//                     ['[1-79]'],
//                     '0$1'],
//                 [, '(1\\d{2})(\\d{3})', '$1 $2', ['11'], '$1'],
//                 [
//                     ,
//                     '(8\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['8'],
//                     '0 $1']],
//             [
//                 [
//                     ,
//                     '([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4 $5',
//                     ['[1-79]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(8\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['8'],
//                     '0 $1']],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         GA: [
//             ,
//             [, , '0?\\d{7}', '\\d{7,8}'],
//             [, , '01\\d{6}', '\\d{8}', , , '01441234'],
//             [, , '0?[2-7]\\d{6}', '\\d{7,8}', , , '06031234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'GA',
//             241,
//             '00', , , , , , , ,
//             [
//                 [
//                     ,
//                     '(\\d)(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[2-7]'],
//                     '0$1'],
//                 [, '(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['0']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA']],
//         GB: [
//             ,
//             [, , '\\d{7,10}', '\\d{4,10}'],
//             [
//                 , ,
//                 '2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[012])\\d{7}|1(?:(?:1(?:3[0-48]|[46][0-4]|5[012789]|7[0-49]|8[01349])|21[0-7]|31[0-8]|[459]1\\d|61[0-46-9]))\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-4789]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1235679]|9[24578])|4(?:0[03-9]|[28][02-5789]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1235-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-5789])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[023678]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-5789]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-5789]|4[2-9]|5[0-579]|6[234789]|7[0124578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-4789]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[015789]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[234678]\\d{2}|16977[23]\\d{3}',
//                 '\\d{4,10}', , ,
//                 '1212345678'],
//             [
//                 , ,
//                 '7(?:[1-4]\\d\\d|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[04-9]\\d|1[02-9]|2[0-35-9]|3[0-689]))\\d{6}',
//                 '\\d{10}', , ,
//                 '7400123456'],
//             [
//                 , ,
//                 '80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}',
//                 '\\d{7}(?:\\d{2,3})?', , ,
//                 '8001234567'],
//             [
//                 , ,
//                 '(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}',
//                 '\\d{10}', , ,
//                 '9012345678'],
//             [
//                 , ,
//                 '8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '8431234567'],
//             [, , '70\\d{8}', '\\d{10}', , , '7012345678'],
//             [, , '56\\d{8}', '\\d{10}', , , '5612345678'],
//             'GB',
//             44,
//             '00',
//             '0',
//             ' x', ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{4})(\\d{4})',
//                     '$1 $2 $3',
//                     [
//                         '2|5[56]|7(?:0|6[013-9])',
//                         '2|5[56]|7(?:0|6(?:[013-9]|2[0-35-9]))'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['1(?:1|\\d1)|3|9[018]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{5})(\\d{4,5})',
//                     '$1 $2',
//                     [
//                         '1(?:38|5[23]|69|76|94)',
//                         '1(?:387|5(?:24|39)|697|768|946)',
//                         '1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)'],
//                     '0$1'],
//                 [, '(1\\d{3})(\\d{5,6})', '$1 $2', ['1'], '0$1'],
//                 [
//                     ,
//                     '(7\\d{3})(\\d{6})',
//                     '$1 $2',
//                     ['7(?:[1-5789]|62)', '7(?:[1-5789]|624)'],
//                     '0$1'],
//                 [
//                     ,
//                     '(800)(\\d{4})',
//                     '$1 $2',
//                     ['800', '8001', '80011', '800111', '8001111'],
//                     '0$1'],
//                 [
//                     ,
//                     '(845)(46)(4\\d)',
//                     '$1 $2 $3',
//                     ['845', '8454', '84546', '845464'],
//                     '0$1'],
//                 [
//                     ,
//                     '(8\\d{2})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['8(?:4[2-5]|7[0-3])'],
//                     '0$1'],
//                 [, '(80\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['80'], '0$1'],
//                 [, '([58]00)(\\d{6})', '$1 $2', ['[58]00'], '0$1']], ,
//             [
//                 , ,
//                 '76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}',
//                 '\\d{10}', , ,
//                 '7640123456'],
//             1, ,
//             [, , 'NA', 'NA'],
//             [, , '(?:3[0347]|55)\\d{8}', '\\d{10}', , , '5512345678'], , ,
//             [, , 'NA', 'NA']],
//         GD: [
//             ,
//             [, , '[4589]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|68|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '4732691234'],
//             [
//                 , ,
//                 '473(?:4(?:0[2-79]|1[04-9]|20|58)|5(?:2[01]|3[3-8])|901)\\d{4}',
//                 '\\d{10}', , ,
//                 '4734031234'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002123456'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'GD',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '473',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         GE: [
//             ,
//             [, , '[34578]\\d{8}', '\\d{6,9}'],
//             [
//                 , ,
//                 '(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}',
//                 '\\d{6,9}', , ,
//                 '322123456'],
//             [
//                 , ,
//                 '5(?:14|5[01578]|68|7[0147-9]|9[0-35-9])\\d{6}',
//                 '\\d{9}', , ,
//                 '555123456'],
//             [, , '800\\d{6}', '\\d{9}', , , '800123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '706\\d{6}', '\\d{9}', , , '706123456'],
//             'GE',
//             995,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[348]'],
//                     '0$1'],
//                 [, '(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['7'], '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['5'],
//                     '$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , '706\\d{6}', '\\d{9}', , , '706123456'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         GF: [
//             ,
//             [, , '[56]\\d{8}', '\\d{9}'],
//             [
//                 , ,
//                 '594(?:10|2[012457-9]|3[0-57-9]|4[3-9]|5[7-9]|6[0-3]|9[014])\\d{4}',
//                 '\\d{9}', , ,
//                 '594101234'],
//             [
//                 , ,
//                 '694(?:[04][0-7]|1[0-5]|3[018]|[29]\\d)\\d{4}',
//                 '\\d{9}', , ,
//                 '694201234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'GF',
//             594,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [[, '(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', , '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         GG: [
//             ,
//             [, , '[135789]\\d{6,9}', '\\d{6,10}'],
//             [, , '1481\\d{6}', '\\d{6,10}', , , '1481456789'],
//             [, , '7(?:781|839|911)\\d{6}', '\\d{10}', , , '7781123456'],
//             [
//                 , ,
//                 '80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}',
//                 '\\d{7}(?:\\d{2,3})?', , ,
//                 '8001234567'],
//             [
//                 , ,
//                 '(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}',
//                 '\\d{10}', , ,
//                 '9012345678'],
//             [
//                 , ,
//                 '8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '8431234567'],
//             [, , '70\\d{8}', '\\d{10}', , , '7012345678'],
//             [, , '56\\d{8}', '\\d{10}', , , '5612345678'],
//             'GG',
//             44,
//             '00',
//             '0',
//             ' x', ,
//             '0', , , , , ,
//             [
//                 , ,
//                 '76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}',
//                 '\\d{10}', , ,
//                 '7640123456'], , ,
//             [, , 'NA', 'NA'],
//             [, , '(?:3[0347]|55)\\d{8}', '\\d{10}', , , '5512345678'], , ,
//             [, , 'NA', 'NA']],
//         GH: [
//             ,
//             [, , '[235]\\d{8}|8\\d{7}', '\\d{7,9}'],
//             [
//                 , ,
//                 '3(?:0[237]\\d|[167](?:2[0-6]|7\\d)|2(?:2[0-5]|7\\d)|3(?:2[0-3]|7\\d)|4(?:2[013-9]|3[01]|7\\d)|5(?:2[0-7]|7\\d)|8(?:2[0-2]|7\\d)|9(?:20|7\\d))\\d{5}',
//                 '\\d{7,9}', , ,
//                 '302345678'],
//             [
//                 , ,
//                 '(?:2[034678]\\d|5(?:[047]\\d|5[3-6]|6[01]))\\d{6}',
//                 '\\d{9}', , ,
//                 '231234567'],
//             [, , '800\\d{5}', '\\d{8}', , , '80012345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'GH',
//             233,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[235]'], '0$1'],
//                 [, '(\\d{3})(\\d{5})', '$1 $2', ['8'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , '800\\d{5}', '\\d{8}', , , '80012345'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         GI: [
//             ,
//             [, , '[2568]\\d{7}', '\\d{8}'],
//             [
//                 , ,
//                 '2(?:00\\d|1(?:6[24-7]|9\\d)|2(?:00|2[2457]))\\d{4}',
//                 '\\d{8}', , ,
//                 '20012345'],
//             [, , '(?:5[46-8]|62)\\d{6}', '\\d{8}', , , '57123456'],
//             [, , '80\\d{6}', '\\d{8}', , , '80123456'],
//             [, , '8[1-689]\\d{6}', '\\d{8}', , , '88123456'],
//             [, , '87\\d{6}', '\\d{8}', , , '87123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'GI',
//             350,
//             '00', , , , , , , ,
//             [[, '(\\d{3})(\\d{5})', '$1 $2', ['2']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         GL: [
//             ,
//             [, , '[1-689]\\d{5}', '\\d{6}'],
//             [
//                 , ,
//                 '(?:19|3[1-6]|6[14689]|8[14-79]|9\\d)\\d{4}',
//                 '\\d{6}', , ,
//                 '321000'],
//             [, , '[245][2-9]\\d{4}', '\\d{6}', , , '221234'],
//             [, , '80\\d{4}', '\\d{6}', , , '801234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '3[89]\\d{4}', '\\d{6}', , , '381234'],
//             'GL',
//             299,
//             '00', , , , , , , ,
//             [[, '(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         GM: [
//             ,
//             [, , '[2-9]\\d{6}', '\\d{7}'],
//             [
//                 , ,
//                 '(?:4(?:[23]\\d{2}|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6(?:[67]\\d)|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}',
//                 '\\d{7}', , ,
//                 '5661234'],
//             [, , '[23679]\\d{6}', '\\d{7}', , , '3012345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'GM',
//             220,
//             '00', , , , , , , ,
//             [[, '(\\d{3})(\\d{4})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         GN: [
//             ,
//             [, , '[367]\\d{7,8}', '\\d{8,9}'],
//             [
//                 , ,
//                 '30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}',
//                 '\\d{8}', , ,
//                 '30241234'],
//             [, , '6[02356]\\d{7}', '\\d{9}', , , '601123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '722\\d{6}', '\\d{9}', , , '722123456'],
//             'GN',
//             224,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['3']],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[67]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         GP: [
//             ,
//             [, , '[56]\\d{8}', '\\d{9}'],
//             [
//                 , ,
//                 '590(?:0[13468]|1[012]|2[0-68]|3[28]|4[0-8]|5[579]|6[0189]|70|8[0-689]|9\\d)\\d{4}',
//                 '\\d{9}', , ,
//                 '590201234'],
//             [, , '690(?:0[0-7]|[1-9]\\d)\\d{4}', '\\d{9}', , , '690301234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'GP',
//             590,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [[, '([56]90)(\\d{2})(\\d{4})', '$1 $2-$3', , '0$1']], ,
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         GQ: [
//             ,
//             [, , '[23589]\\d{8}', '\\d{9}'],
//             [
//                 , ,
//                 '3(?:3(?:3\\d[7-9]|[0-24-9]\\d[46])|5\\d{2}[7-9])\\d{4}',
//                 '\\d{9}', , ,
//                 '333091234'],
//             [, , '(?:222|55[15])\\d{6}', '\\d{9}', , , '222123456'],
//             [, , '80\\d[1-9]\\d{5}', '\\d{9}', , , '800123456'],
//             [, , '90\\d[1-9]\\d{5}', '\\d{9}', , , '900123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'GQ',
//             240,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[235]']],
//                 [, '(\\d{3})(\\d{6})', '$1 $2', ['[89]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         GR: [
//             ,
//             [, , '[26-9]\\d{9}', '\\d{10}'],
//             [
//                 , ,
//                 '2(?:1\\d{2}|2(?:2[1-46-9]|3[1-8]|4[1-7]|5[1-4]|6[1-8]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|3[1245]|4[1-7]|5[13-9]|[269][1-6]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}',
//                 '\\d{10}', , ,
//                 '2123456789'],
//             [, , '69\\d{8}', '\\d{10}', , , '6912345678'],
//             [, , '800\\d{7}', '\\d{10}', , , '8001234567'],
//             [, , '90[19]\\d{7}', '\\d{10}', , , '9091234567'],
//             [, , '8(?:0[16]|12|25)\\d{7}', '\\d{10}', , , '8011234567'],
//             [, , '70\\d{8}', '\\d{10}', , , '7012345678'],
//             [, , 'NA', 'NA'],
//             'GR',
//             30,
//             '00', , , , , , , ,
//             [
//                 [, '([27]\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['21|7']],
//                 [, '(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['2[2-9]1|[689]']],
//                 [, '(2\\d{3})(\\d{6})', '$1 $2', ['2[2-9][02-9]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         GT: [
//             ,
//             [, , '[2-7]\\d{7}|1[89]\\d{9}', '\\d{8}(?:\\d{3})?'],
//             [, , '[267][2-9]\\d{6}', '\\d{8}', , , '22456789'],
//             [, , '[345]\\d{7}', '\\d{8}', , , '51234567'],
//             [, , '18[01]\\d{8}', '\\d{11}', , , '18001112222'],
//             [, , '19\\d{9}', '\\d{11}', , , '19001112222'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'GT',
//             502,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{4})(\\d{4})', '$1 $2', ['[2-7]']],
//                 [, '(\\d{4})(\\d{3})(\\d{4})', '$1 $2 $3', ['1']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         GU: [
//             ,
//             [, , '[5689]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '6713001234'],
//             [
//                 , ,
//                 '671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '6713001234'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002123456'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'GU',
//             1,
//             '011',
//             '1', , ,
//             '1', , ,
//             1, , ,
//             [, , 'NA', 'NA'], ,
//             '671',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         GW: [
//             ,
//             [, , '(?:4(?:0\\d{5}|4\\d{7})|9\\d{8})', '\\d{7,9}'],
//             [
//                 , ,
//                 '443(?:2[0125]|3[1245]|4[12]|5[1-4]|70|9[1-467])\\d{4}',
//                 '\\d{7,9}', , ,
//                 '443201234'],
//             [
//                 , ,
//                 '9(?:55\\d|6(?:6\\d|9[012])|77\\d)\\d{5}',
//                 '\\d{7,9}', , ,
//                 '955012345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '40\\d{5}', '\\d{7,9}', , , '4012345'],
//             'GW',
//             245,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['44|9[567]']],
//                 [, '(\\d{3})(\\d{4})', '$1 $2', ['40']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         GY: [
//             ,
//             [, , '[2-4679]\\d{6}', '\\d{7}'],
//             [
//                 , ,
//                 '(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}',
//                 '\\d{7}', , ,
//                 '2201234'],
//             [, , '6\\d{6}', '\\d{7}', , , '6091234'],
//             [, , '(?:289|862)\\d{4}', '\\d{7}', , , '2891234'],
//             [, , '9008\\d{3}', '\\d{7}', , , '9008123'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'GY',
//             592,
//             '001', , , , , , , ,
//             [[, '(\\d{3})(\\d{4})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         HK: [
//             ,
//             [, , '[235-7]\\d{7}|8\\d{7,8}|9\\d{4,10}', '\\d{5,11}'],
//             [, , '(?:[23]\\d|58)\\d{6}', '\\d{8}', , , '21234567'],
//             [
//                 , ,
//                 '(?:5[1-79]\\d|6\\d{2}|8[4-79]\\d|9(?:0[1-9]|[1-8]\\d))\\d{5}',
//                 '\\d{8}', , ,
//                 '51234567'],
//             [, , '800\\d{6}', '\\d{9}', , , '800123456'],
//             [
//                 , ,
//                 '900(?:[0-24-9]\\d{7}|3\\d{1,4})',
//                 '\\d{5,11}', , ,
//                 '90012345678'],
//             [, , 'NA', 'NA'],
//             [, , '8[1-3]\\d{6}', '\\d{8}', , , '81123456'],
//             [, , 'NA', 'NA'],
//             'HK',
//             852,
//             '00', , , , , , , ,
//             [
//                 [
//                     ,
//                     '(\\d{4})(\\d{4})',
//                     '$1 $2',
//                     ['[235-7]|[89](?:0[1-9]|[1-9])']],
//                 [, '(800)(\\d{3})(\\d{3})', '$1 $2 $3', ['800']],
//                 [, '(900)(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['900']],
//                 [, '(900)(\\d{2,5})', '$1 $2', ['900']]], ,
//             [, , '7\\d{7}', '\\d{8}', , , '71234567'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         HN: [
//             ,
//             [, , '[237-9]\\d{7}', '\\d{8}'],
//             [
//                 , ,
//                 '2(?:2(?:0[019]|1[1-36]|[23]\\d|4[056]|5[57]|7[01389]|8[0146-9]|9[012])|4(?:2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:4[3-5]|5\\d|6[56]|74)|6(?:[056]\\d|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[34])|8(?:79|8[0-35789]|9[1-57-9]))\\d{4}',
//                 '\\d{8}', , ,
//                 '22123456'],
//             [, , '[37-9]\\d{7}', '\\d{8}', , , '91234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'HN',
//             504,
//             '00', , , , , , , ,
//             [[, '(\\d{4})(\\d{4})', '$1-$2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         HR: [
//             ,
//             [, , '[1-7]\\d{5,8}|[89]\\d{6,11}', '\\d{6,12}'],
//             [
//                 , ,
//                 '1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}',
//                 '\\d{6,9}', , ,
//                 '12345678'],
//             [
//                 , ,
//                 '9(?:[1-9]\\d{6,10}|01\\d{6,9})',
//                 '\\d{8,12}', , ,
//                 '912345678'],
//             [, , '80[01]\\d{4,7}', '\\d{7,10}', , , '8001234567'],
//             [, , '6(?:[01459]\\d{4,7})', '\\d{6,9}', , , '611234'],
//             [, , 'NA', 'NA'],
//             [, , '7[45]\\d{4,7}', '\\d{6,9}', , , '741234567'],
//             [, , 'NA', 'NA'],
//             'HR',
//             385,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(1)(\\d{4})(\\d{3})', '$1 $2 $3', ['1'], '0$1'],
//                 [, '(6[09])(\\d{4})(\\d{3})', '$1 $2 $3', ['6[09]'], '0$1'],
//                 [, '([67]2)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['[67]2'], '0$1'],
//                 [
//                     ,
//                     '([2-5]\\d)(\\d{3})(\\d{3,4})',
//                     '$1 $2 $3',
//                     ['[2-5]'],
//                     '0$1'],
//                 [, '(9\\d)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['9'], '0$1'],
//                 [, '(9\\d)(\\d{4})(\\d{4})', '$1 $2 $3', ['9'], '0$1'],
//                 [
//                     ,
//                     '(9\\d)(\\d{3,4})(\\d{3})(\\d{3})',
//                     '$1 $2 $3 $4',
//                     ['9'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2,3})',
//                     '$1 $2 $3',
//                     ['6[0145]|7'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3,4})(\\d{3})',
//                     '$1 $2 $3',
//                     ['6[0145]|7'],
//                     '0$1'],
//                 [, '(80[01])(\\d{2})(\\d{2,3})', '$1 $2 $3', ['8'], '0$1'],
//                 [, '(80[01])(\\d{3,4})(\\d{3})', '$1 $2 $3', ['8'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '[76]2\\d{6,7}', '\\d{8,9}', , , '62123456'], , ,
//             [, , 'NA', 'NA']],
//         HT: [
//             ,
//             [, , '[2-489]\\d{7}', '\\d{8}'],
//             [, , '2(?:[248]\\d|5[1-5]|94)\\d{5}', '\\d{8}', , , '22453300'],
//             [
//                 , ,
//                 '(?:3[1-9]\\d|4\\d{2}|9(?:8[0-35]|9[5-9]))\\d{5}',
//                 '\\d{8}', , ,
//                 '34101234'],
//             [, , '8\\d{7}', '\\d{8}', , , '80012345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '98[89]\\d{5}', '\\d{8}', , , '98901234'],
//             'HT',
//             509,
//             '00', , , , , , , ,
//             [[, '(\\d{2})(\\d{2})(\\d{4})', '$1 $2 $3']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         HU: [
//             ,
//             [, , '[1-9]\\d{7,8}', '\\d{6,9}'],
//             [
//                 , ,
//                 '(?:1\\d|2(?:1\\d|[2-9])|3(?:[2-7]|8\\d)|4[24-9]|5[2-79]|6[23689]|7(?:1\\d|[2-9])|8[2-57-9]|9[2-69])\\d{6}',
//                 '\\d{6,9}', , ,
//                 '12345678'],
//             [, , '(?:[257]0|3[01])\\d{7}', '\\d{9}', , , '201234567'],
//             [, , '80\\d{6}', '\\d{8}', , , '80123456'],
//             [, , '9[01]\\d{6}', '\\d{8}', , , '90123456'],
//             [, , '40\\d{6}', '\\d{8}', , , '40123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'HU',
//             36,
//             '00',
//             '06', , ,
//             '06', , , ,
//             [
//                 [, '(1)(\\d{3})(\\d{4})', '$1 $2 $3', ['1'], '($1)'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{3,4})',
//                     '$1 $2 $3',
//                     ['[2-9]'],
//                     '($1)']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , '[48]0\\d{6}', '\\d{8}', , , '80123456'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         ID: [
//             ,
//             [, , '(?:[1-79]\\d{6,10}|8\\d{7,11})', '\\d{5,12}'],
//             [
//                 , ,
//                 '2(?:1(?:14\\d{3}|[0-8]\\d{6,7}|500\\d{3}|9\\d{6})|2\\d{6,8}|4\\d{7,8})|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:19?|[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}',
//                 '\\d{5,11}', , ,
//                 '612345678'],
//             [
//                 , ,
//                 '(?:2(?:1(?:3[145]|4[01]|5[1-469]|60|8[0359]|9\\d)|2(?:88|9[1256])|3[1-4]9|4(?:36|91)|5(?:1[349]|[2-4]9)|6[0-7]9|7(?:[1-36]9|4[39])|8[1-5]9|9[1-48]9)|3(?:19[1-3]|2[12]9|3[13]9|4(?:1[69]|39)|5[14]9|6(?:1[69]|2[89])|709)|4[13]19|5(?:1(?:19|8[39])|4[129]9|6[12]9)|6(?:19[12]|2(?:[23]9|77))|7(?:1[13]9|2[15]9|419|5(?:1[89]|29)|6[15]9|7[178]9))\\d{5,6}|8[1-35-9]\\d{7,10}',
//                 '\\d{9,12}', , ,
//                 '812345678'],
//             [, , '177\\d{6,8}|800\\d{5,7}', '\\d{8,11}', , , '8001234567'],
//             [, , '809\\d{7}', '\\d{10}', , , '8091234567'],
//             [, , '804\\d{7}', '\\d{10}', , , '8041234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'ID',
//             62,
//             '0(?:0[1789]|10(?:00|1[67]))',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(\\d{2})(\\d{5,8})', '$1 $2', ['2[124]|[36]1'], '(0$1)'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{5,8})',
//                     '$1 $2',
//                     ['[4579]|2[035-9]|[36][02-9]'],
//                     '(0$1)'],
//                 [
//                     ,
//                     '(8\\d{2})(\\d{3,4})(\\d{3,5})',
//                     '$1-$2-$3',
//                     ['8[1-35-9]'],
//                     '0$1'],
//                 [, '(1)(500)(\\d{3})', '$1 $2 $3', ['15'], '$1'],
//                 [, '(177)(\\d{6,8})', '$1 $2', ['17'], '0$1'],
//                 [, '(800)(\\d{5,7})', '$1 $2', ['800'], '0$1'],
//                 [, '(804)(\\d{3})(\\d{4})', '$1 $2 $3', ['804'], '0$1'],
//                 [
//                     ,
//                     '(80\\d)(\\d)(\\d{3})(\\d{3})',
//                     '$1 $2 $3 $4',
//                     ['80[79]'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , '8071\\d{6}', '\\d{10}', , , '8071123456'],
//             [, , '1500\\d{3}|8071\\d{6}', '\\d{7,10}', , , '8071123456'], , ,
//             [, , 'NA', 'NA']],
//         IE: [
//             ,
//             [, , '[124-9]\\d{6,9}', '\\d{5,10}'],
//             [
//                 , ,
//                 '1\\d{7,8}|2(?:1\\d{6,7}|3\\d{7}|[24-9]\\d{5})|4(?:0[24]\\d{5}|[1-469]\\d{7}|5\\d{6}|7\\d{5}|8[0-46-9]\\d{7})|5(?:0[45]\\d{5}|1\\d{6}|[23679]\\d{7}|8\\d{5})|6(?:1\\d{6}|[237-9]\\d{5}|[4-6]\\d{7})|7[14]\\d{7}|9(?:1\\d{6}|[04]\\d{7}|[35-9]\\d{5})',
//                 '\\d{5,10}', , ,
//                 '2212345'],
//             [, , '8(?:22\\d{6}|[35-9]\\d{7})', '\\d{9}', , , '850123456'],
//             [, , '1800\\d{6}', '\\d{10}', , , '1800123456'],
//             [
//                 , ,
//                 '15(?:1[2-8]|[2-8]0|9[089])\\d{6}',
//                 '\\d{10}', , ,
//                 '1520123456'],
//             [, , '18[59]0\\d{6}', '\\d{10}', , , '1850123456'],
//             [, , '700\\d{6}', '\\d{9}', , , '700123456'],
//             [, , '76\\d{7}', '\\d{9}', , , '761234567'],
//             'IE',
//             353,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(1)(\\d{3,4})(\\d{4})', '$1 $2 $3', ['1'], '(0$1)'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{5})',
//                     '$1 $2',
//                     ['2[24-9]|47|58|6[237-9]|9[35-9]'],
//                     '(0$1)'],
//                 [, '(\\d{3})(\\d{5})', '$1 $2', ['40[24]|50[45]'], '(0$1)'],
//                 [, '(48)(\\d{4})(\\d{4})', '$1 $2 $3', ['48'], '(0$1)'],
//                 [, '(818)(\\d{3})(\\d{3})', '$1 $2 $3', ['81'], '(0$1)'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{3,4})',
//                     '$1 $2 $3',
//                     ['[24-69]|7[14]'],
//                     '(0$1)'],
//                 [
//                     ,
//                     '([78]\\d)(\\d{3,4})(\\d{4})',
//                     '$1 $2 $3',
//                     ['76|8[35-9]'],
//                     '0$1'],
//                 [, '(700)(\\d{3})(\\d{3})', '$1 $2 $3', ['70'], '0$1'],
//                 [
//                     ,
//                     '(\\d{4})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['1(?:8[059]|5)', '1(?:8[059]0|5)'],
//                     '$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , '18[59]0\\d{6}', '\\d{10}', , , '1850123456'],
//             [, , '818\\d{6}', '\\d{9}', , , '818123456'], , ,
//             [, , '8[35-9]\\d{8}', '\\d{10}', , , '8501234567']],
//         IL: [
//             ,
//             [
//                 , ,
//                 '[17]\\d{6,9}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}',
//                 '\\d{4,10}'],
//             [, , '[2-489]\\d{7}', '\\d{7,8}', , , '21234567'],
//             [
//                 , ,
//                 '5(?:[02-47-9]\\d{2}|5(?:01|2[23]|3[2-4]|4[45]|5[5689]|6[67]|7[0178]|8[6-9]|9[5-9])|6[2-9]\\d)\\d{5}',
//                 '\\d{9}', , ,
//                 '501234567'],
//             [, , '1(?:80[019]\\d{3}|255)\\d{3}', '\\d{7,10}', , , '1800123456'],
//             [
//                 , ,
//                 '1(?:212|(?:9(?:0[01]|19)|200)\\d{2})\\d{4}',
//                 '\\d{8,10}', , ,
//                 '1919123456'],
//             [, , '1700\\d{6}', '\\d{10}', , , '1700123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '7(?:18\\d|2[23]\\d|3[237]\\d|47\\d|6(?:5\\d|8[0168])|7\\d{2}|8(?:2\\d|33|55|77|81)|9[29]\\d)\\d{5}',
//                 '\\d{9}', , ,
//                 '771234567'],
//             'IL',
//             972,
//             '0(?:0|1[2-9])',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '([2-489])(\\d{3})(\\d{4})', '$1-$2-$3', ['[2-489]'], '0$1'],
//                 [, '([57]\\d)(\\d{3})(\\d{4})', '$1-$2-$3', ['[57]'], '0$1'],
//                 [
//                     ,
//                     '(1)([7-9]\\d{2})(\\d{3})(\\d{3})',
//                     '$1-$2-$3-$4',
//                     ['1[7-9]'],
//                     '$1'],
//                 [, '(1255)(\\d{3})', '$1-$2', ['125'], '$1'],
//                 [, '(1200)(\\d{3})(\\d{3})', '$1-$2-$3', ['120'], '$1'],
//                 [, '(1212)(\\d{2})(\\d{2})', '$1-$2-$3', ['121'], '$1'],
//                 [, '(1599)(\\d{6})', '$1-$2', ['15'], '$1'],
//                 [, '(\\d{4})', '*$1', ['[2-689]'], '$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , '1700\\d{6}|[2-689]\\d{3}', '\\d{4,10}', , , '1700123456'],
//             [
//                 , ,
//                 '[2-689]\\d{3}|1599\\d{6}',
//                 '\\d{4}(?:\\d{6})?', , ,
//                 '1599123456'], , ,
//             [, , 'NA', 'NA']],
//         IM: [
//             ,
//             [, , '[135789]\\d{6,9}', '\\d{6,10}'],
//             [, , '1624\\d{6}', '\\d{6,10}', , , '1624456789'],
//             [, , '7[569]24\\d{6}', '\\d{10}', , , '7924123456'],
//             [, , '808162\\d{4}', '\\d{10}', , , '8081624567'],
//             [, , '(?:872299|90[0167]624)\\d{4}', '\\d{10}', , , '9016247890'],
//             [
//                 , ,
//                 '8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}',
//                 '\\d{10}', , ,
//                 '8456247890'],
//             [, , '70\\d{8}', '\\d{10}', , , '7012345678'],
//             [, , '56\\d{8}', '\\d{10}', , , '5612345678'],
//             'IM',
//             44,
//             '00',
//             '0',
//             ' x', ,
//             '0', , , , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}',
//                 '\\d{10}', , ,
//                 '5512345678'], , ,
//             [, , 'NA', 'NA']],
//         IN: [
//             ,
//             [, , '1\\d{7,12}|[2-9]\\d{9,10}', '\\d{6,13}'],
//             [
//                 , ,
//                 '(?:11|2[02]|33|4[04]|79)[2-7]\\d{7}|80[2-467]\\d{7}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[13-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1-5]|4[25-8]|5[125689]|6[235-7]|7[157-9]|8[2-467])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|[57][2-689]|6[24-578]|8[1-6])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d|7(?:(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|9\\d)\\d|8(?:2[0-6]|[013-8]\\d)))[2-7]\\d{5}',
//                 '\\d{6,10}', , ,
//                 '1123456789'],
//             [
//                 , ,
//                 '(?:7(?:0\\d{3}|2(?:[0235679]\\d|[14][017-9]|8[0-59]|9[389])\\d|3(?:[05-8]\\d{2}|1(?:[089]\\d|7[5-8])|2(?:[5-8]\\d|[01][089])|3[17-9]\\d|4[789]\\d|9[01689]\\d)|4(?:0[1-9]\\d|1(?:[015-9]\\d|4[08])|[29][89]\\d|39\\d|8[389]\\d)|5(?:[034678]\\d|2[03-9]|5[017-9]|9[7-9])\\d|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9]\\d)\\d|7(?:0[2-9]|[1-79]\\d|8[1-9])\\d|8[0-79]\\d{2}|99[4-9]\\d)|8(?:0(?:[01589]\\d|6[67])|1(?:[02-57-9]\\d|1[0135-9])|2(?:[236-9]\\d|5[1-9])|3(?:[0357-9]\\d|4[1-9])|[45]\\d{2}|6[02457-9]\\d|7(?:07|[1-69]\\d)|8(?:[0-26-9]\\d|44|5[2-9])|9(?:[035-9]\\d|2[2-9]|4[0-8]))\\d|9\\d{4})\\d{5}',
//                 '\\d{10}', , ,
//                 '9123456789'],
//             [
//                 , ,
//                 '1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))',
//                 '\\d{8,13}', , ,
//                 '1800123456'],
//             [, , '186[12]\\d{9}', '\\d{13}', , , '1861123456789'],
//             [, , '1860\\d{7}', '\\d{11}', , , '18603451234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'IN',
//             91,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{5})(\\d{5})',
//                     '$1 $2',
//                     [
//                         '7(?:[02357]|4[0-389]|6[0-35-9]|8[0-79]|99)|8(?:0[015689]|1[0-57-9]|2[2356-9]|3[0-57-9]|[45]|6[02457-9]|7[01-69]|8[0-24-9]|9[02-9])|9',
//                         '7(?:0|2(?:[0235679]|[14][017-9]|8[0-59]|9[389])|3(?:[05-8]|1[07-9]|2[015-8]|3[17-9]|4[789]|9[01689])|4(?:0[1-9]|1[014-9]|[29][89]|39|8[389])|5(?:[034678]|2[03-9]|5[017-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9])|7(?:0[2-9]|[1-79]|8[1-9])|8[0-79]|99[4-9])|8(?:0(?:[01589]|6[67])|1(?:[02-57-9]|1[0135-9])|2(?:[236-9]|5[1-9])|3(?:[0357-9]|4[1-9])|[45]|6[02457-9]|7(?:07|[1-69])|8(?:[0-26-9]|44|5[2-9])|9(?:[035-9]|2[2-9]|4[0-8]))|9',
//                         '7(?:0|2(?:[0235679]|[14][017-9]|8[0-59]|9[389])|3(?:[05-8]|1(?:[089]|7[5-9])|2(?:[5-8]|[01][089])|3[17-9]|4[789]|9[01689])|4(?:0[1-9]|1(?:[015-9]|4[08])|[29][89]|39|8[389])|5(?:[034678]|2[03-9]|5[017-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9])|7(?:0[2-9]|[1-79]|8[1-9])|8[0-79]|99[4-9])|8(?:0(?:[01589]|6[67])|1(?:[02-57-9]|1[0135-9])|2(?:[236-9]|5[1-9])|3(?:[0357-9]|4[1-9])|[45]|6[02457-9]|7(?:07|[1-69])|8(?:[0-26-9]|44|5[2-9])|9(?:[035-9]|2[2-9]|4[0-8]))|9'],
//                     '0$1', ,
//                     1],
//                 [
//                     ,
//                     '(\\d{2})(\\d{4})(\\d{4})',
//                     '$1 $2 $3',
//                     ['11|2[02]|33|4[04]|79|80[2-46]'],
//                     '0$1', ,
//                     1],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['1(?:2[0-249]|3[0-25]|4[145]|[569][14]|7[1257]|8[1346]|[68][1-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)'],
//                     '0$1', ,
//                     1],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     [
//                         '7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)',
//                         '7(?:12|2[14]|3[134]|4[47]|5(?:1|5[2-6])|[67]1|88)'],
//                     '0$1', ,
//                     1],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)'],
//                     '0$1', ,
//                     1],
//                 [
//                     ,
//                     '(\\d{4})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['1(?:[23579]|[468][1-9])|[2-8]'],
//                     '0$1', ,
//                     1],
//                 [
//                     ,
//                     '(1600)(\\d{2})(\\d{4})',
//                     '$1 $2 $3',
//                     ['160', '1600'],
//                     '$1', ,
//                     1],
//                 [, '(1800)(\\d{4,5})', '$1 $2', ['180', '1800'], '$1', , 1],
//                 [
//                     ,
//                     '(18[06]0)(\\d{2,4})(\\d{4})',
//                     '$1 $2 $3',
//                     ['18[06]', '18[06]0'],
//                     '$1', ,
//                     1],
//                 [, '(140)(\\d{3})(\\d{4})', '$1 $2 $3', ['140'], '$1', , 1],
//                 [
//                     ,
//                     '(\\d{4})(\\d{3})(\\d{3})(\\d{3})',
//                     '$1 $2 $3 $4',
//                     ['18[06]', '18(?:0[03]|6[12])'],
//                     '$1', ,
//                     1]], ,
//             [, , 'NA', 'NA'], , ,
//             [
//                 , ,
//                 '1(?:600\\d{6}|8(?:0(?:0\\d{4,9}|3\\d{9})|6(?:0\\d{7}|[12]\\d{9})))',
//                 '\\d{8,13}', , ,
//                 '1800123456'],
//             [, , '140\\d{7}', '\\d{10}', , , '1409305260'], , ,
//             [, , 'NA', 'NA']],
//         IO: [
//             ,
//             [, , '3\\d{6}', '\\d{7}'],
//             [, , '37\\d{5}', '\\d{7}', , , '3709100'],
//             [, , '38\\d{5}', '\\d{7}', , , '3801234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'IO',
//             246,
//             '00', , , , , , , ,
//             [[, '(\\d{3})(\\d{4})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         IQ: [
//             ,
//             [, , '[1-7]\\d{7,9}', '\\d{6,10}'],
//             [
//                 , ,
//                 '1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}',
//                 '\\d{6,9}', , ,
//                 '12345678'],
//             [, , '7[3-9]\\d{8}', '\\d{10}', , , '7912345678'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'IQ',
//             964,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(1)(\\d{3})(\\d{4})', '$1 $2 $3', ['1'], '0$1'],
//                 [
//                     ,
//                     '([2-6]\\d)(\\d{3})(\\d{3,4})',
//                     '$1 $2 $3',
//                     ['[2-6]'],
//                     '0$1'],
//                 [, '(7\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['7'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         IR: [
//             ,
//             [, , '[1-8]\\d{9}|9(?:[0-4]\\d{8}|9\\d{2,8})', '\\d{4,10}'],
//             [
//                 , ,
//                 '(?:1[137]|2[13-68]|3[1458]|4[145]|5[146-8]|6[146]|7[1467]|8[13467])\\d{8}',
//                 '\\d{10}', , ,
//                 '2123456789'],
//             [
//                 , ,
//                 '9(?:0[1-3]|[13]\\d|2[0-2]|90)\\d{7}',
//                 '\\d{10}', , ,
//                 '9123456789'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '(?:[2-6]0\\d|993)\\d{7}', '\\d{10}', , , '9932123456'],
//             'IR',
//             98,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(21)(\\d{3,5})', '$1 $2', ['21'], '0$1'],
//                 [, '(\\d{2})(\\d{4})(\\d{4})', '$1 $2 $3', ['[1-8]'], '0$1'],
//                 [, '(\\d{3})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['9'], '0$1'],
//                 [, '(\\d{3})(\\d{2})(\\d{2,3})', '$1 $2 $3', ['9'], '0$1'],
//                 [, '(\\d{3})(\\d{3})', '$1 $2', ['9'], '0$1']], ,
//             [, , '943\\d{7}', '\\d{10}', , , '9432123456'], , ,
//             [, , 'NA', 'NA'],
//             [, , '9990\\d{0,6}', '\\d{4,10}', , , '9990123456'], , ,
//             [, , 'NA', 'NA']],
//         IS: [
//             ,
//             [, , '[4-9]\\d{6}|38\\d{7}', '\\d{7,9}'],
//             [
//                 , ,
//                 '(?:4(?:1[0-24-6]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[013-79]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}',
//                 '\\d{7}', , ,
//                 '4101234'],
//             [
//                 , ,
//                 '38[589]\\d{6}|(?:6(?:1[1-8]|2[056]|3[089]|4[0167]|5[0159]|[67][0-69]|9\\d)|7(?:5[057]|6[0-2]|[78]\\d)|8(?:2[0-59]|3[0-4]|[469]\\d|5[1-9]))\\d{4}',
//                 '\\d{7,9}', , ,
//                 '6111234'],
//             [, , '800\\d{4}', '\\d{7}', , , '8001234'],
//             [, , '90\\d{5}', '\\d{7}', , , '9011234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '49\\d{5}', '\\d{7}', , , '4921234'],
//             'IS',
//             354,
//             '1(?:0(?:01|10|20)|100)|00', , , , , ,
//             '00', ,
//             [
//                 [, '(\\d{3})(\\d{4})', '$1 $2', ['[4-9]']],
//                 [, '(3\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['3']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '809\\d{4}', '\\d{7}', , , '8091234'], , ,
//             [
//                 , ,
//                 '(?:6(?:2[1-478]|49|8\\d)|8(?:7[0189]|80)|95[48])\\d{4}',
//                 '\\d{7}', , ,
//                 '6211234']],
//         IT: [
//             ,
//             [
//                 , ,
//                 '[01589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9})',
//                 '\\d{6,11}'],
//             [
//                 , ,
//                 '0(?:[26]\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7})',
//                 '\\d{6,11}', , ,
//                 '0212345678'],
//             [
//                 , ,
//                 '3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})',
//                 '\\d{9,11}', , ,
//                 '3123456789'],
//             [, , '80(?:0\\d{6}|3\\d{3})', '\\d{6,9}', , , '800123456'],
//             [
//                 , ,
//                 '0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})',
//                 '\\d{6,10}', , ,
//                 '899123456'],
//             [, , '84(?:[08]\\d{6}|[17]\\d{3})', '\\d{6,9}', , , '848123456'],
//             [, , '1(?:78\\d|99)\\d{6}', '\\d{9,10}', , , '1781234567'],
//             [, , '55\\d{8}', '\\d{10}', , , '5512345678'],
//             'IT',
//             39,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{2})(\\d{3,4})(\\d{4})', '$1 $2 $3', ['0[26]|55']],
//                 [, '(0[26])(\\d{4})(\\d{5})', '$1 $2 $3', ['0[26]']],
//                 [, '(0[26])(\\d{4,6})', '$1 $2', ['0[26]']],
//                 [
//                     ,
//                     '(0\\d{2})(\\d{3,4})(\\d{4})',
//                     '$1 $2 $3',
//                     ['0[13-57-9][0159]']],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3,6})',
//                     '$1 $2',
//                     [
//                         '0[13-57-9][0159]|8(?:03|4[17]|9[245])',
//                         '0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))']],
//                 [
//                     ,
//                     '(0\\d{3})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['0[13-57-9][2-46-8]']],
//                 [, '(0\\d{3})(\\d{2,6})', '$1 $2', ['0[13-57-9][2-46-8]']],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{3,4})',
//                     '$1 $2 $3',
//                     [
//                         '[13]|8(?:00|4[08]|9[59])',
//                         '[13]|8(?:00|4[08]|9(?:5[5-9]|9))']],
//                 [, '(\\d{4})(\\d{4})', '$1 $2', ['894', '894[5-9]']],
//                 [, '(\\d{3})(\\d{4})(\\d{4})', '$1 $2 $3', ['3']]], ,
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , '848\\d{6}', '\\d{9}', , , '848123456'],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA']],
//         JE: [
//             ,
//             [, , '[135789]\\d{6,9}', '\\d{6,10}'],
//             [, , '1534\\d{6}', '\\d{6,10}', , , '1534456789'],
//             [
//                 , ,
//                 '7(?:509|7(?:00|97)|829|937)\\d{6}',
//                 '\\d{10}', , ,
//                 '7797123456'],
//             [, , '80(?:07(?:35|81)|8901)\\d{4}', '\\d{10}', , , '8007354567'],
//             [
//                 , ,
//                 '(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}',
//                 '\\d{10}', , ,
//                 '9018105678'],
//             [
//                 , ,
//                 '8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}',
//                 '\\d{10}', , ,
//                 '8447034567'],
//             [, , '701511\\d{4}', '\\d{10}', , , '7015115678'],
//             [, , '56\\d{8}', '\\d{10}', , , '5612345678'],
//             'JE',
//             44,
//             '00',
//             '0',
//             ' x', ,
//             '0', , , , , ,
//             [
//                 , ,
//                 '76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}',
//                 '\\d{10}', , ,
//                 '7640123456'], , ,
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}',
//                 '\\d{10}', , ,
//                 '5512345678'], , ,
//             [, , 'NA', 'NA']],
//         JM: [
//             ,
//             [, , '[589]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[027-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468]))\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '8765123456'],
//             [
//                 , ,
//                 '876(?:2[16-9]\\d|[348]\\d{2}|5(?:0[3-9]|27|6[0-24-9]|[3-578]\\d)|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}',
//                 '\\d{10}', , ,
//                 '8762101234'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002123456'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'JM',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '876',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         JO: [
//             ,
//             [, , '[235-9]\\d{7,8}', '\\d{8,9}'],
//             [
//                 , ,
//                 '(?:2(?:6(?:2[0-35-9]|3[0-57-8]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2[50]0|3(?:00|33)|4(?:0[0125]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[17-8]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[02-39]))|87(?:[02]0|7[08]|90))\\d{4}',
//                 '\\d{8}', , ,
//                 '62001234'],
//             [
//                 , ,
//                 '7(?:55|7[025-9]|8[015-9]|9[0-25-9])\\d{6}',
//                 '\\d{9}', , ,
//                 '790123456'],
//             [, , '80\\d{6}', '\\d{8}', , , '80012345'],
//             [, , '900\\d{5}', '\\d{8}', , , '90012345'],
//             [, , '85\\d{6}', '\\d{8}', , , '85012345'],
//             [, , '70\\d{7}', '\\d{9}', , , '700123456'],
//             [, , 'NA', 'NA'],
//             'JO',
//             962,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['[2356]|87'], '(0$1)'],
//                 [, '(7)(\\d{4})(\\d{4})', '$1 $2 $3', ['7[457-9]'], '0$1'],
//                 [, '(\\d{3})(\\d{5,6})', '$1 $2', ['70|8[0158]|9'], '0$1']], ,
//             [, , '74(?:66|77)\\d{5}', '\\d{9}', , , '746612345'], , ,
//             [, , 'NA', 'NA'],
//             [, , '8(?:10|8\\d)\\d{5}', '\\d{8}', , , '88101234'], , ,
//             [, , 'NA', 'NA']],
//         JP: [
//             ,
//             [
//                 , ,
//                 '[1-9]\\d{8,9}|00(?:[36]\\d{7,14}|7\\d{5,7}|8\\d{7})',
//                 '\\d{8,17}'],
//             [
//                 , ,
//                 '(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|2[2-9]\\d|[36][1-9]\\d|4(?:6[02-8]|[2-578]\\d|9[2-59])|5(?:6[1-9]|7[2-8]|[2-589]\\d)|7(?:3[4-9]|4[02-9]|[25-9]\\d)|8(?:3[2-9]|4[5-9]|5[1-9]|8[03-9]|[2679]\\d)|9(?:[679][1-9]|[2-58]\\d))\\d{6}',
//                 '\\d{9}', , ,
//                 '312345678'],
//             [, , '[7-9]0[1-9]\\d{7}', '\\d{10}', , , '9012345678'],
//             [
//                 , ,
//                 '120\\d{6}|800\\d{7}|00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})',
//                 '\\d{8,17}', , ,
//                 '120123456'],
//             [, , '990\\d{6}', '\\d{9}', , , '990123456'],
//             [, , 'NA', 'NA'],
//             [, , '60\\d{7}', '\\d{9}', , , '601234567'],
//             [, , '50[1-9]\\d{7}', '\\d{10}', , , '5012345678'],
//             'JP',
//             81,
//             '010',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{3})',
//                     '$1-$2-$3',
//                     ['(?:12|57|99)0'],
//                     '0$1'],
//                 [, '(\\d{3})(\\d{3})(\\d{4})', '$1-$2-$3', ['800'], '0$1'],
//                 [, '(\\d{4})(\\d{4})', '$1-$2', ['0077'], '$1'],
//                 [, '(\\d{4})(\\d{2})(\\d{3,4})', '$1-$2-$3', ['0077'], '$1'],
//                 [, '(\\d{4})(\\d{2})(\\d{4})', '$1-$2-$3', ['0088'], '$1'],
//                 [
//                     ,
//                     '(\\d{4})(\\d{3})(\\d{3,4})',
//                     '$1-$2-$3',
//                     ['00(?:37|66)'],
//                     '$1'],
//                 [
//                     ,
//                     '(\\d{4})(\\d{4})(\\d{4,5})',
//                     '$1-$2-$3',
//                     ['00(?:37|66)'],
//                     '$1'],
//                 [
//                     ,
//                     '(\\d{4})(\\d{5})(\\d{5,6})',
//                     '$1-$2-$3',
//                     ['00(?:37|66)'],
//                     '$1'],
//                 [
//                     ,
//                     '(\\d{4})(\\d{6})(\\d{6,7})',
//                     '$1-$2-$3',
//                     ['00(?:37|66)'],
//                     '$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{4})(\\d{4})',
//                     '$1-$2-$3',
//                     ['[2579]0|80[1-9]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{4})(\\d)(\\d{4})',
//                     '$1-$2-$3',
//                     [
//                         '1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])',
//                         '1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))',
//                         '1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{4})',
//                     '$1-$2-$3',
//                     [
//                         '1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])',
//                         '1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))',
//                         '1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))',
//                         '1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{4})',
//                     '$1-$2-$3',
//                     [
//                         '1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)',
//                         '1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])',
//                         '1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{4})',
//                     '$1-$2-$3',
//                     ['2(?:9[14-79]|74|[34]7|[56]9)|82|993'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d)(\\d{4})(\\d{4})',
//                     '$1-$2-$3',
//                     ['3|4(?:2[09]|7[01])|6[1-9]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{4})',
//                     '$1-$2-$3',
//                     ['[2479][1-9]'],
//                     '0$1']],
//             [
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{3})',
//                     '$1-$2-$3',
//                     ['(?:12|57|99)0'],
//                     '0$1'],
//                 [, '(\\d{3})(\\d{3})(\\d{4})', '$1-$2-$3', ['800'], '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{4})(\\d{4})',
//                     '$1-$2-$3',
//                     ['[2579]0|80[1-9]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{4})(\\d)(\\d{4})',
//                     '$1-$2-$3',
//                     [
//                         '1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])',
//                         '1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))',
//                         '1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{4})',
//                     '$1-$2-$3',
//                     [
//                         '1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])',
//                         '1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))',
//                         '1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))',
//                         '1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{4})',
//                     '$1-$2-$3',
//                     [
//                         '1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)',
//                         '1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])',
//                         '1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{4})',
//                     '$1-$2-$3',
//                     ['2(?:9[14-79]|74|[34]7|[56]9)|82|993'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d)(\\d{4})(\\d{4})',
//                     '$1-$2-$3',
//                     ['3|4(?:2[09]|7[01])|6[1-9]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{4})',
//                     '$1-$2-$3',
//                     ['[2479][1-9]'],
//                     '0$1']],
//             [, , '20\\d{8}', '\\d{10}', , , '2012345678'], , ,
//             [
//                 , ,
//                 '00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})',
//                 '\\d{8,17}', , ,
//                 '00777012'],
//             [, , '570\\d{6}', '\\d{9}', , , '570123456'],
//             1, ,
//             [, , 'NA', 'NA']],
//         KE: [
//             ,
//             [, , '20\\d{6,7}|[4-9]\\d{6,9}', '\\d{7,10}'],
//             [
//                 , ,
//                 '20\\d{6,7}|4(?:[0136]\\d{7}|[245]\\d{5,7})|5(?:[08]\\d{7}|[1-79]\\d{5,7})|6(?:[01457-9]\\d{5,7}|[26]\\d{7})',
//                 '\\d{7,9}', , ,
//                 '202012345'],
//             [
//                 , ,
//                 '7(?:[0-36]\\d|5[0-6]|[79][0-7]|8[0-25-9])\\d{6}',
//                 '\\d{9}', , ,
//                 '712123456'],
//             [, , '800[24-8]\\d{5,6}', '\\d{9,10}', , , '800223456'],
//             [, , '900[02-9]\\d{5}', '\\d{9}', , , '900223456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'KE',
//             254,
//             '000',
//             '0', , ,
//             '005|0', , , ,
//             [
//                 [, '(\\d{2})(\\d{5,7})', '$1 $2', ['[24-6]'], '0$1'],
//                 [, '(\\d{3})(\\d{6})', '$1 $2', ['7'], '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{3,4})',
//                     '$1 $2 $3',
//                     ['[89]'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         KG: [
//             ,
//             [, , '[235-8]\\d{8,9}', '\\d{5,10}'],
//             [
//                 , ,
//                 '(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}',
//                 '\\d{5,10}', , ,
//                 '312123456'],
//             [
//                 , ,
//                 '(?:20[0-35]|5[124-7]\\d|7[07]\\d)\\d{6}',
//                 '\\d{9}', , ,
//                 '700123456'],
//             [, , '800\\d{6,7}', '\\d{9,10}', , , '800123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'KG',
//             996,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['[25-7]|31[25]'],
//                     '0$1'],
//                 [, '(\\d{4})(\\d{5})', '$1 $2', ['3(?:1[36]|[2-9])'], '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d)(\\d{3})',
//                     '$1 $2 $3 $4',
//                     ['8'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         KH: [
//             ,
//             [, , '[1-9]\\d{7,9}', '\\d{6,10}'],
//             [
//                 , ,
//                 '(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:[237-9]|4[56]|5\\d|6\\d?)\\d{5}|23(?:4[234]|8\\d{2})\\d{4}',
//                 '\\d{6,9}', , ,
//                 '23756789'],
//             [
//                 , ,
//                 '(?:1(?:[013-79]\\d|[28]\\d{1,2})|2[3-6]48|3(?:[18]\\d{2}|[2-6]48)|4[2-4]48|5[2-5]48|6(?:[016-9]\\d|[2-5]48)|7(?:[07-9]\\d|[16]\\d{2}|[2-5]48)|8(?:[013-79]\\d|8\\d{2})|9(?:6\\d{2}|7\\d{1,2}|[0-589]\\d))\\d{5}',
//                 '\\d{8,9}', , ,
//                 '91234567'],
//             [, , '1800(?:1\\d|2[019])\\d{4}', '\\d{10}', , , '1800123456'],
//             [, , '1900(?:1\\d|2[09])\\d{4}', '\\d{10}', , , '1900123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'KH',
//             855,
//             '00[14-9]',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{3,4})',
//                     '$1 $2 $3',
//                     ['1\\d[1-9]|[2-9]'],
//                     '0$1'],
//                 [, '(1[89]00)(\\d{3})(\\d{3})', '$1 $2 $3', ['1[89]0']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         KI: [
//             ,
//             [, , '[2458]\\d{4}|3\\d{4,7}|7\\d{7}', '\\d{5,8}'],
//             [, , '(?:[24]\\d|3[1-9]|50|8[0-5])\\d{3}', '\\d{5}', , , '31234'],
//             [, , '7\\d{7}', '\\d{8}', , , '72012345'],
//             [, , 'NA', 'NA'],
//             [, , '3001\\d{4}', '\\d{5,8}', , , '30010000'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'KI',
//             686,
//             '00', , , ,
//             '0', , , , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         KM: [
//             ,
//             [, , '[379]\\d{6}', '\\d{7}'],
//             [, , '7(?:6[0-37-9]|7[0-57-9])\\d{4}', '\\d{7}', , , '7712345'],
//             [, , '3[234]\\d{5}', '\\d{7}', , , '3212345'],
//             [, , 'NA', 'NA'],
//             [, , '(?:39[01]|9[01]0)\\d{4}', '\\d{7}', , , '9001234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'KM',
//             269,
//             '00', , , , , , , ,
//             [[, '(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         KN: [
//             ,
//             [, , '[589]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '8692361234'],
//             [
//                 , ,
//                 '869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-6])\\d{4}',
//                 '\\d{10}', , ,
//                 '8697652917'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002123456'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'KN',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '869',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         KP: [
//             ,
//             [, , '1\\d{9}|[28]\\d{7}', '\\d{6,8}|\\d{10}'],
//             [, , '2\\d{7}|85\\d{6}', '\\d{6,8}', , , '21234567'],
//             [, , '19[123]\\d{7}', '\\d{10}', , , '1921234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'KP',
//             850,
//             '00|99',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['1'], '0$1'],
//                 [, '(\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['2'], '0$1'],
//                 [, '(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['8'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [
//                 , ,
//                 '2(?:[0-24-9]\\d{2}|3(?:[0-79]\\d|8[02-9]))\\d{4}',
//                 '\\d{8}', , ,
//                 '23821234'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         KR: [
//             ,
//             [, , '[1-7]\\d{3,9}|8\\d{8}', '\\d{4,10}'],
//             [
//                 , ,
//                 '(?:2|3[1-3]|[46][1-4]|5[1-5])(?:1\\d{2,3}|[1-9]\\d{6,7})',
//                 '\\d{4,10}', , ,
//                 '22123456'],
//             [, , '1[0-26-9]\\d{7,8}', '\\d{9,10}', , , '1000000000'],
//             [, , '80\\d{7}', '\\d{9}', , , '801234567'],
//             [, , '60[2-9]\\d{6}', '\\d{9}', , , '602345678'],
//             [, , 'NA', 'NA'],
//             [, , '50\\d{8}', '\\d{10}', , , '5012345678'],
//             [, , '70\\d{8}', '\\d{10}', , , '7012345678'],
//             'KR',
//             82,
//             '00(?:[124-68]|[37]\\d{2})',
//             '0', , ,
//             '0(8[1-46-8]|85\\d{2})?', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{4})(\\d{4})',
//                     '$1-$2-$3',
//                     [
//                         '1(?:0|1[19]|[69]9|5[458])|[57]0',
//                         '1(?:0|1[19]|[69]9|5(?:44|59|8))|[57]0'],
//                     '0$1',
//                     '0$CC-$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3,4})(\\d{4})',
//                     '$1-$2-$3',
//                     [
//                         '1(?:[01]|5[1-4]|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]',
//                         '1(?:[01]|5(?:[1-3]|4[56])|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]'],
//                     '0$1',
//                     '0$CC-$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d)(\\d{4})',
//                     '$1-$2-$3',
//                     ['131', '1312'],
//                     '0$1',
//                     '0$CC-$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{4})',
//                     '$1-$2-$3',
//                     ['131', '131[13-9]'],
//                     '0$1',
//                     '0$CC-$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{4})',
//                     '$1-$2-$3',
//                     ['13[2-9]'],
//                     '0$1',
//                     '0$CC-$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{3})(\\d{4})',
//                     '$1-$2-$3-$4',
//                     ['30'],
//                     '0$1',
//                     '0$CC-$1'],
//                 [
//                     ,
//                     '(\\d)(\\d{3,4})(\\d{4})',
//                     '$1-$2-$3',
//                     ['2[1-9]'],
//                     '0$1',
//                     '0$CC-$1'],
//                 [
//                     ,
//                     '(\\d)(\\d{3,4})',
//                     '$1-$2',
//                     ['21[0-46-9]'],
//                     '0$1',
//                     '0$CC-$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3,4})',
//                     '$1-$2',
//                     ['[3-6][1-9]1', '[3-6][1-9]1(?:[0-46-9])'],
//                     '0$1',
//                     '0$CC-$1'],
//                 [
//                     ,
//                     '(\\d{4})(\\d{4})',
//                     '$1-$2',
//                     [
//                         '1(?:5[46-9]|6[04678]|8[0579])',
//                         '1(?:5(?:44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|55|77|99))'],
//                     '$1',
//                     '0$CC-$1']], ,
//             [, , '15\\d{7,8}', '\\d{9,10}', , , '1523456789'], , ,
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '1(?:5(?:44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|55|77|99))\\d{4}',
//                 '\\d{8}', , ,
//                 '15441234'], , ,
//             [, , 'NA', 'NA']],
//         KW: [
//             ,
//             [, , '[12569]\\d{6,7}', '\\d{7,8}'],
//             [
//                 , ,
//                 '(?:18\\d|2(?:[23]\\d{2}|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7])))\\d{4}',
//                 '\\d{7,8}', , ,
//                 '22345678'],
//             [
//                 , ,
//                 '(?:5(?:[05]\\d{2}|1[0-7]\\d|2(?:22|5[25]))|6(?:0[034679]\\d|5[015-9]\\d|6\\d{2}|7[067]\\d|9[0369]\\d)|9(?:0[09]\\d|22\\d|4[01479]\\d|55\\d|6[0679]\\d|[79]\\d{2}|8[057-9]\\d))\\d{4}',
//                 '\\d{8}', , ,
//                 '50012345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'KW',
//             965,
//             '00', , , , , , , ,
//             [
//                 [
//                     ,
//                     '(\\d{4})(\\d{3,4})',
//                     '$1 $2',
//                     ['[16]|2(?:[0-35-9]|4[0-35-9])|9[024-9]|52[25]']],
//                 [, '(\\d{3})(\\d{5})', '$1 $2', ['244|5[015]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         KY: [
//             ,
//             [, , '[3589]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '3452221234'],
//             [
//                 , ,
//                 '345(?:32[1-9]|5(?:1[67]|2[5-7]|4[6-8]|76)|9(?:1[67]|2[2-9]|3[689]))\\d{4}',
//                 '\\d{10}', , ,
//                 '3453231234'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002345678'],
//             [, , '900[2-9]\\d{6}|345976\\d{4}', '\\d{10}', , , '9002345678'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'KY',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , '345849\\d{4}', '\\d{10}', , , '3458491234'], ,
//             '345',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         KZ: [
//             ,
//             [, , '(?:33\\d|7\\d{2}|80[09])\\d{7}', '\\d{10}'],
//             [
//                 , ,
//                 '33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[023]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[1-79]|4[0-35-9]|59)|4(?:2\\d|3[013-79]|4[0-8]|5[1-79])|5(?:2\\d|3[1-8]|4[1-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[237]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}',
//                 '\\d{10}', , ,
//                 '7123456789'],
//             [
//                 , ,
//                 '7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\d{7}',
//                 '\\d{10}', , ,
//                 '7710009998'],
//             [, , '800\\d{7}', '\\d{10}', , , '8001234567'],
//             [, , '809\\d{7}', '\\d{10}', , , '8091234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '751\\d{7}', '\\d{10}', , , '7511234567'],
//             'KZ',
//             7,
//             '810',
//             '8', , ,
//             '8', ,
//             '8~10', , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , '751\\d{7}', '\\d{10}', , , '7511234567'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         LA: [
//             ,
//             [, , '[2-8]\\d{7,9}', '\\d{6,10}'],
//             [
//                 , ,
//                 '(?:2[13]|3(?:0\\d|[14])|[5-7][14]|41|8[1468])\\d{6}',
//                 '\\d{6,9}', , ,
//                 '21212862'],
//             [
//                 , ,
//                 '20(?:2[2389]|5[4-689]|7[6-8]|9[15-9])\\d{6}',
//                 '\\d{10}', , ,
//                 '2023123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'LA',
//             856,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(20)(\\d{2})(\\d{3})(\\d{3})',
//                     '$1 $2 $3 $4',
//                     ['20'],
//                     '0$1'],
//                 [
//                     ,
//                     '([2-8]\\d)(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['2[13]|3[14]|[4-8]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(30)(\\d{2})(\\d{2})(\\d{3})',
//                     '$1 $2 $3 $4',
//                     ['30'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         LB: [
//             ,
//             [, , '[13-9]\\d{6,7}', '\\d{7,8}'],
//             [
//                 , ,
//                 '(?:[14-6]\\d{2}|7(?:[2-57]\\d|62|8[0-7]|9[04-9])|8[02-9]\\d|9\\d{2})\\d{4}',
//                 '\\d{7}', , ,
//                 '1123456'],
//             [
//                 , ,
//                 '(?:3\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3])|81\\d)\\d{5}',
//                 '\\d{7,8}', , ,
//                 '71123456'],
//             [, , 'NA', 'NA'],
//             [, , '9[01]\\d{6}', '\\d{8}', , , '90123456'],
//             [, , '80\\d{6}', '\\d{8}', , , '80123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'LB',
//             961,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d)(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['[13-6]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]|9'],
//                     '0$1'],
//                 [
//                     ,
//                     '([7-9]\\d)(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['[89][01]|7(?:[01]|6[013-9]|8[89]|9[1-3])']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         LC: [
//             ,
//             [, , '[5789]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '758(?:4(?:30|5[0-9]|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '7584305678'],
//             [
//                 , ,
//                 '758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2[0-8]))\\d{4}',
//                 '\\d{10}', , ,
//                 '7582845678'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002123456'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'LC',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '758',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         LI: [
//             ,
//             [, , '6\\d{8}|[23789]\\d{6}', '\\d{7,9}'],
//             [
//                 , ,
//                 '(?:2(?:01|1[27]|3\\d|6[02-578]|96)|3(?:7[0135-7]|8[048]|9[0269]))\\d{4}',
//                 '\\d{7}', , ,
//                 '2345678'],
//             [
//                 , ,
//                 '6(?:51[01]|6(?:0[0-6]|2[016-9]|39))\\d{5}|7(?:[37-9]\\d|42|56)\\d{4}',
//                 '\\d{7,9}', , ,
//                 '660234567'],
//             [, , '80(?:02[28]|9\\d{2})\\d{2}', '\\d{7}', , , '8002222'],
//             [
//                 , ,
//                 '90(?:02[258]|1(?:23|3[14])|66[136])\\d{2}',
//                 '\\d{7}', , ,
//                 '9002222'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'LI',
//             423,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3', ['[23789]']],
//                 [, '(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['6[56]']],
//                 [, '(69)(7\\d{2})(\\d{4})', '$1 $2 $3', ['697']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '870(?:28|87)\\d{2}', '\\d{7}', , , '8702812'], , ,
//             [, , '697(?:42|56|[7-9]\\d)\\d{4}', '\\d{9}', , , '697861234']],
//         LK: [
//             ,
//             [, , '[1-9]\\d{8}', '\\d{7,9}'],
//             [
//                 , ,
//                 '(?:[189]1|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}',
//                 '\\d{7,9}', , ,
//                 '112345678'],
//             [, , '7[0125-8]\\d{7}', '\\d{9}', , , '712345678'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'LK',
//             94,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(\\d{2})(\\d{1})(\\d{6})', '$1 $2 $3', ['[1-689]'], '0$1'],
//                 [, '(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['7'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         LR: [
//             ,
//             [, , '2\\d{7,8}|[37-9]\\d{8}|4\\d{6}|5\\d{6,8}', '\\d{7,9}'],
//             [, , '2\\d{7}', '\\d{8}', , , '21234567'],
//             [
//                 , ,
//                 '(?:330\\d|4[67]|5\\d|77\\d{2}|88\\d{2}|994\\d)\\d{5}|(?:20\\d{3}|33(?:0\\d{2}|2(?:02|5\\d))|555\\d{2}|77[0567]\\d{2}|88[068]\\d{2}|994\\d{2})\\d{4}',
//                 '\\d{7,9}', , ,
//                 '770123456'],
//             [, , 'NA', 'NA'],
//             [, , '90[03]\\d{6}', '\\d{9}', , , '900123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '332(?:0[02]|5\\d)\\d{4}', '\\d{9}', , , '332001234'],
//             'LR',
//             231,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(2\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['2'], '0$1'],
//                 [, '(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['[2579]'], '0$1'],
//                 [, '([4-6])(\\d{3})(\\d{3})', '$1 $2 $3', ['[4-6]'], '0$1'],
//                 [, '(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[38]'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         LS: [
//             ,
//             [, , '[2568]\\d{7}', '\\d{8}'],
//             [, , '2\\d{7}', '\\d{8}', , , '22123456'],
//             [, , '[56]\\d{7}', '\\d{8}', , , '50123456'],
//             [, , '800[256]\\d{4}', '\\d{8}', , , '80021234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'LS',
//             266,
//             '00', , , , , , , ,
//             [[, '(\\d{4})(\\d{4})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         LT: [
//             ,
//             [, , '[3-9]\\d{7}', '\\d{8}'],
//             [, , '(?:3[1478]|4[124-6]|52)\\d{6}', '\\d{8}', , , '31234567'],
//             [, , '6\\d{7}', '\\d{8}', , , '61234567'],
//             [, , '800\\d{5}', '\\d{8}', , , '80012345'],
//             [, , '9(?:0[0239]|10)\\d{5}', '\\d{8}', , , '90012345'],
//             [, , '808\\d{5}', '\\d{8}', , , '80812345'],
//             [, , '700\\d{5}', '\\d{8}', , , '70012345'],
//             [, , 'NA', 'NA'],
//             'LT',
//             370,
//             '00',
//             '8', , ,
//             '[08]', , , ,
//             [
//                 [
//                     ,
//                     '([34]\\d)(\\d{6})',
//                     '$1 $2',
//                     ['37|4(?:1|5[45]|6[2-4])'],
//                     '(8-$1)', ,
//                     1],
//                 [
//                     ,
//                     '([3-6]\\d{2})(\\d{5})',
//                     '$1 $2',
//                     ['3[148]|4(?:[24]|6[09])|528|6'],
//                     '(8-$1)', ,
//                     1],
//                 [
//                     ,
//                     '([7-9]\\d{2})(\\d{2})(\\d{3})',
//                     '$1 $2 $3',
//                     ['[7-9]'],
//                     '8 $1', ,
//                     1],
//                 [
//                     ,
//                     '(5)(2\\d{2})(\\d{4})',
//                     '$1 $2 $3',
//                     ['52[0-79]'],
//                     '(8-$1)', ,
//                     1]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '70[67]\\d{5}', '\\d{8}', , , '70712345'], , ,
//             [, , 'NA', 'NA']],
//         LU: [
//             ,
//             [
//                 , ,
//                 '[24-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5[013-9]\\d{1,8})',
//                 '\\d{4,11}'],
//             [
//                 , ,
//                 '(?:2[2-9]\\d{2,9}|(?:[3457]\\d{2}|8(?:0[2-9]|[13-9]\\d)|9(?:0[89]|[2-579]\\d))\\d{1,8})',
//                 '\\d{4,11}', , ,
//                 '27123456'],
//             [, , '6[2679][18]\\d{6}', '\\d{9}', , , '628123456'],
//             [, , '800\\d{5}', '\\d{8}', , , '80012345'],
//             [, , '90[015]\\d{5}', '\\d{8}', , , '90012345'],
//             [, , '801\\d{5}', '\\d{8}', , , '80112345'],
//             [, , '70\\d{6}', '\\d{8}', , , '70123456'],
//             [, , '20(?:1\\d{5}|[2-689]\\d{1,7})', '\\d{4,10}', , , '20201234'],
//             'LU',
//             352,
//             '00', , , ,
//             '(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})',
//                     '$1 $2',
//                     ['[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])'], ,
//                     '$CC $1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3',
//                     ['[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])'], ,
//                     '$CC $1'],
//                 [, '(\\d{2})(\\d{2})(\\d{3})', '$1 $2 $3', ['20'], , '$CC $1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})',
//                     '$1 $2 $3 $4',
//                     ['2(?:[0367]|4[3-8])'], ,
//                     '$CC $1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2})(\\d{3})',
//                     '$1 $2 $3 $4',
//                     ['20'], ,
//                     '$CC $1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})',
//                     '$1 $2 $3 $4 $5',
//                     ['2(?:[0367]|4[3-8])'], ,
//                     '$CC $1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})',
//                     '$1 $2 $3 $4',
//                     ['2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:[1-9]|0[2-9])|9(?:[1-9]|0[2-46-9])'], ,
//                     '$CC $1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{3})',
//                     '$1 $2 $3',
//                     ['70|80[01]|90[015]'], ,
//                     '$CC $1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['6'], ,
//                     '$CC $1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         LV: [
//             ,
//             [, , '[2689]\\d{7}', '\\d{8}'],
//             [, , '6[3-8]\\d{6}', '\\d{8}', , , '63123456'],
//             [, , '2\\d{7}', '\\d{8}', , , '21234567'],
//             [, , '80\\d{6}', '\\d{8}', , , '80123456'],
//             [, , '90\\d{6}', '\\d{8}', , , '90123456'],
//             [, , '81\\d{6}', '\\d{8}', , , '81123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'LV',
//             371,
//             '00', , , , , , , ,
//             [[, '([2689]\\d)(\\d{3})(\\d{3})', '$1 $2 $3']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         LY: [
//             ,
//             [, , '[25679]\\d{8}', '\\d{7,9}'],
//             [
//                 , ,
//                 '(?:2[1345]|5[1347]|6[123479]|71)\\d{7}',
//                 '\\d{7,9}', , ,
//                 '212345678'],
//             [, , '9[1-6]\\d{7}', '\\d{9}', , , '912345678'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'LY',
//             218,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [[, '([25679]\\d)(\\d{7})', '$1-$2', , '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MA: [
//             ,
//             [, , '[5689]\\d{8}', '\\d{9}'],
//             [
//                 , ,
//                 '5(?:2(?:(?:[015-7]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\d|9(?:0\\d|[89]0))|3(?:(?:[0-4]\\d|[57][2-9]|6[235-8]|9[3-9])\\d|8(?:0\\d|[89]0)))\\d{4}',
//                 '\\d{9}', , ,
//                 '520123456'],
//             [
//                 , ,
//                 '6(?:0[0-8]|[12-79]\\d|8[017])\\d{6}',
//                 '\\d{9}', , ,
//                 '650123456'],
//             [, , '80\\d{7}', '\\d{9}', , , '801234567'],
//             [, , '89\\d{7}', '\\d{9}', , , '891234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'MA',
//             212,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '([56]\\d{2})(\\d{6})',
//                     '$1-$2',
//                     ['5(?:2[015-7]|3[0-4])|6'],
//                     '0$1'],
//                 [
//                     ,
//                     '([58]\\d{3})(\\d{5})',
//                     '$1-$2',
//                     [
//                         '5(?:2[2-489]|3[5-9])|892',
//                         '5(?:2(?:[2-48]|90)|3(?:[5-79]|80))|892'],
//                     '0$1'],
//                 [
//                     ,
//                     '(5\\d{4})(\\d{4})',
//                     '$1-$2',
//                     ['5(?:29|38)', '5(?:29|38)[89]'],
//                     '0$1'],
//                 [, '(8[09])(\\d{7})', '$1-$2', ['8(?:0|9[013-9])'], '0$1']], ,
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MC: [
//             ,
//             [, , '[4689]\\d{7,8}', '\\d{8,9}'],
//             [, , '870\\d{5}|9[2-47-9]\\d{6}', '\\d{8}', , , '99123456'],
//             [, , '6\\d{8}|4(?:4\\d|5[1-9])\\d{5}', '\\d{8,9}', , , '612345678'],
//             [, , '90\\d{6}', '\\d{8}', , , '90123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'MC',
//             377,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['9'],
//                     '$1'],
//                 [, '(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['4'], '0$1'],
//                 [
//                     ,
//                     '(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4 $5',
//                     ['6'],
//                     '0$1'],
//                 [, '(\\d{3})(\\d{3})(\\d{2})', '$1 $2 $3', ['8'], '$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , '8\\d{7}', '\\d{8}'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MD: [
//             ,
//             [, , '[235-9]\\d{7}', '\\d{8}'],
//             [
//                 , ,
//                 '(?:2(?:1[0569]|2\\d|3[015-7]|4[1-46-9]|5[0-24689]|6[2-589]|7[1-37]|9[1347-9])|5(?:33|5[257]))\\d{5}',
//                 '\\d{8}', , ,
//                 '22212345'],
//             [
//                 , ,
//                 '(?:562\\d|6(?:[089]\\d{2}|[12][01]\\d|7(?:[1-6]\\d|7[0-4]))|7(?:6[07]|7[457-9]|[89]\\d)\\d)\\d{4}',
//                 '\\d{8}', , ,
//                 '62112345'],
//             [, , '800\\d{5}', '\\d{8}', , , '80012345'],
//             [, , '90[056]\\d{5}', '\\d{8}', , , '90012345'],
//             [, , '808\\d{5}', '\\d{8}', , , '80812345'],
//             [, , 'NA', 'NA'],
//             [, , '3[08]\\d{6}', '\\d{8}', , , '30123456'],
//             'MD',
//             373,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['22|3'], '0$1'],
//                 [
//                     ,
//                     '([25-7]\\d{2})(\\d{2})(\\d{3})',
//                     '$1 $2 $3',
//                     ['2[13-79]|[5-7]'],
//                     '0$1'],
//                 [, '([89]\\d{2})(\\d{5})', '$1 $2', ['[89]'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '8(?:03|14)\\d{5}', '\\d{8}', , , '80312345'], , ,
//             [, , 'NA', 'NA']],
//         ME: [
//             ,
//             [, , '[2-9]\\d{7,8}', '\\d{6,9}'],
//             [
//                 , ,
//                 '(?:20[2-8]|3(?:0[2-7]|[12][35-7]|3[4-7])|4(?:0[2367]|1[267])|5(?:0[467]|1[267]|2[367]))\\d{5}',
//                 '\\d{6,8}', , ,
//                 '30234567'],
//             [
//                 , ,
//                 '6(?:00\\d|32\\d|[89]\\d{2}|61\\d|7(?:[0-8]\\d|9(?:[3-9]|[0-2]\\d)))\\d{4}',
//                 '\\d{8,9}', , ,
//                 '67622901'],
//             [, , '80\\d{6}', '\\d{8}', , , '80080002'],
//             [, , '(?:9(?:4[1568]|5[178]))\\d{5}', '\\d{8}', , , '94515151'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '78[1-9]\\d{5}', '\\d{8}', , , '78108780'],
//             'ME',
//             382,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     [
//                         '[2-57-9]|6[036-9]',
//                         '[2-57-9]|6(?:[03689]|7(?:[0-8]|9[3-9]))'],
//                     '0$1'],
//                 [
//                     ,
//                     '(67)(9)(\\d{3})(\\d{3})',
//                     '$1 $2 $3 $4',
//                     ['679', '679[0-2]'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '77\\d{6}', '\\d{8}', , , '77273012'], , ,
//             [, , 'NA', 'NA']],
//         MF: [
//             ,
//             [, , '[56]\\d{8}', '\\d{9}'],
//             [
//                 , ,
//                 '590(?:[02][79]|13|5[0-268]|[78]7)\\d{4}',
//                 '\\d{9}', , ,
//                 '590271234'],
//             [, , '690(?:0[0-7]|[1-9]\\d)\\d{4}', '\\d{9}', , , '690301234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'MF',
//             590,
//             '00',
//             '0', , ,
//             '0', , , , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MG: [
//             ,
//             [, , '[23]\\d{8}', '\\d{7,9}'],
//             [
//                 , ,
//                 '20(?:2\\d{2}|4[47]\\d|5[3467]\\d|6[279]\\d|7(?:2[29]|[35]\\d)|8[268]\\d|9[245]\\d)\\d{4}',
//                 '\\d{7,9}', , ,
//                 '202123456'],
//             [, , '3[2-49]\\d{7}', '\\d{9}', , , '321234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '22\\d{7}', '\\d{9}', , , '221234567'],
//             'MG',
//             261,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [[, '([23]\\d)(\\d{2})(\\d{3})(\\d{2})', '$1 $2 $3 $4', , '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MH: [
//             ,
//             [, , '[2-6]\\d{6}', '\\d{7}'],
//             [, , '(?:247|528|625)\\d{4}', '\\d{7}', , , '2471234'],
//             [, , '(?:235|329|45[56]|545)\\d{4}', '\\d{7}', , , '2351234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '635\\d{4}', '\\d{7}', , , '6351234'],
//             'MH',
//             692,
//             '011',
//             '1', , ,
//             '1', , , ,
//             [[, '(\\d{3})(\\d{4})', '$1-$2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MK: [
//             ,
//             [, , '[2-578]\\d{7}', '\\d{8}'],
//             [
//                 , ,
//                 '(?:2(?:[23]\\d|5[124578]|6[01])|3(?:1[3-6]|[23][2-6]|4[2356])|4(?:[23][2-6]|4[3-6]|5[256]|6[25-8]|7[24-6]|8[4-6]))\\d{5}',
//                 '\\d{6,8}', , ,
//                 '22212345'],
//             [
//                 , ,
//                 '7(?:[0-25-8]\\d{2}|32\\d|421)\\d{4}',
//                 '\\d{8}', , ,
//                 '72345678'],
//             [, , '800\\d{5}', '\\d{8}', , , '80012345'],
//             [, , '5[02-9]\\d{6}', '\\d{8}', , , '50012345'],
//             [, , '8(?:0[1-9]|[1-9]\\d)\\d{5}', '\\d{8}', , , '80123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'MK',
//             389,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(2)(\\d{3})(\\d{4})', '$1 $2 $3', ['2'], '0$1'],
//                 [, '([347]\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['[347]'], '0$1'],
//                 [
//                     ,
//                     '([58]\\d{2})(\\d)(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[58]'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         ML: [
//             ,
//             [, , '[246-9]\\d{7}', '\\d{8}'],
//             [
//                 , ,
//                 '(?:2(?:0(?:2\\d|7[0-8])|1(?:2[5-7]|[3-689]\\d))|44[1239]\\d)\\d{4}',
//                 '\\d{8}', , ,
//                 '20212345'],
//             [
//                 , ,
//                 '(?:2(?:079|17\\d)|[679]\\d{3}|8[239]\\d{2})\\d{4}',
//                 '\\d{8}', , ,
//                 '65012345'],
//             [, , '80\\d{6}', '\\d{8}', , , '80012345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'ML',
//             223,
//             '00', , , , , , , ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[246-9]']],
//                 [, '(\\d{4})', '$1', ['67|74']]],
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[246-9]']]],
//             [, , 'NA', 'NA'], , ,
//             [, , '80\\d{6}', '\\d{8}', , , '80012345'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MM: [
//             ,
//             [
//                 , ,
//                 '[14578]\\d{5,7}|[26]\\d{5,8}|9(?:2\\d{0,2}|[58]|3\\d|4\\d{1,2}|6\\d?|[79]\\d{0,2})\\d{6}',
//                 '\\d{5,10}'],
//             [
//                 , ,
//                 '1(?:2\\d{1,2}|[3-5]\\d|6\\d?|[89][0-6]\\d)\\d{4}|2(?:2(?:000\\d{3}|\\d{4})|3\\d{4}|4(?:0\\d{5}|\\d{4})|5(?:1\\d{3,6}|[02-9]\\d{3,5})|[6-9]\\d{4})|4(?:2[245-8]|[346][2-6]|5[3-5])\\d{4}|5(?:2(?:20?|[3-8])|3[2-68]|4(?:21?|[4-8])|5[23]|6[2-4]|7[2-8]|8[24-7]|9[2-7])\\d{4}|6(?:0[23]|1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7(?:[2367]|4\\d|5\\d?|8[145]\\d)|8[245]|9[24])\\d{4}|7(?:[04][24-8]|[15][2-7]|22|3[2-4])\\d{4}|8(?:1(?:2\\d{1,2}|[3-689]\\d)|2(?:2\\d|3(?:\\d|20)|[4-8]\\d)|3[24]\\d|4[24-7]\\d|5[245]\\d|6[23]\\d)\\d{3}',
//                 '\\d{5,9}', , ,
//                 '1234567'],
//             [
//                 , ,
//                 '17[01]\\d{4}|9(?:2(?:[0-4]|5\\d{2}|6[0-5]\\d)|3[0-36]\\d|4(?:0[0-4]\\d|[1379]\\d|2\\d{2}|4[0-589]\\d|5\\d{2}|88)|5[0-6]|61?\\d|7(?:3\\d|[789]\\d{2})|8\\d|9(?:1\\d|[67]\\d{2}|[089]))\\d{5}',
//                 '\\d{7,10}', , ,
//                 '92123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '1333\\d{4}', '\\d{8}', , , '13331234'],
//             'MM',
//             95,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(\\d)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['1|2[245]'], '0$1'],
//                 [, '(2)(\\d{4})(\\d{4})', '$1 $2 $3', ['251'], '0$1'],
//                 [, '(\\d)(\\d{2})(\\d{3})', '$1 $2 $3', ['16|2'], '0$1'],
//                 [, '(\\d{2})(\\d{3})(\\d{3,4})', '$1 $2 $3', ['67|81'], '0$1'],
//                 [, '(\\d{2})(\\d{2})(\\d{3,4})', '$1 $2 $3', ['[4-8]'], '0$1'],
//                 [
//                     ,
//                     '(9)(\\d{3})(\\d{4,6})',
//                     '$1 $2 $3',
//                     ['9(?:2[0-4]|[35-9]|4[137-9])'],
//                     '0$1'],
//                 [
//                     ,
//                     '(9)([34]\\d{4})(\\d{4})',
//                     '$1 $2 $3',
//                     ['9(?:3[0-36]|4[0-57-9])'],
//                     '0$1'],
//                 [
//                     ,
//                     '(9)(\\d{3})(\\d{3})(\\d{3})',
//                     '$1 $2 $3 $4',
//                     ['92[56]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(9)(\\d{3})(\\d{3})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['93'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MN: [
//             ,
//             [, , '[12]\\d{7,9}|[57-9]\\d{7}', '\\d{6,10}'],
//             [
//                 , ,
//                 '[12](?:1\\d|2(?:[1-3]\\d?|7\\d)|3[2-8]\\d{1,2}|4[2-68]\\d{1,2}|5[1-4689]\\d{1,2})\\d{5}|5[0568]\\d{6}',
//                 '\\d{6,10}', , ,
//                 '50123456'],
//             [
//                 , ,
//                 '(?:8(?:[05689]\\d|3[01])|9[013-9]\\d)\\d{5}',
//                 '\\d{8}', , ,
//                 '88123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '7[05-8]\\d{6}', '\\d{8}', , , '75123456'],
//             'MN',
//             976,
//             '001',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '([12]\\d)(\\d{2})(\\d{4})', '$1 $2 $3', ['[12]1'], '0$1'],
//                 [, '([12]2\\d)(\\d{5,6})', '$1 $2', ['[12]2[1-3]'], '0$1'],
//                 [
//                     ,
//                     '([12]\\d{3})(\\d{5})',
//                     '$1 $2',
//                     ['[12](?:27|[3-5])', '[12](?:27|[3-5]\\d)2'],
//                     '0$1'],
//                 [, '(\\d{4})(\\d{4})', '$1 $2', ['[57-9]'], '$1'],
//                 [
//                     ,
//                     '([12]\\d{4})(\\d{4,5})',
//                     '$1 $2',
//                     ['[12](?:27|[3-5])', '[12](?:27|[3-5]\\d)[4-9]'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MO: [
//             ,
//             [, , '[268]\\d{7}', '\\d{8}'],
//             [, , '(?:28[2-57-9]|8[2-57-9]\\d)\\d{5}', '\\d{8}', , , '28212345'],
//             [, , '6(?:[2356]\\d|8[158])\\d{5}', '\\d{8}', , , '66123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'MO',
//             853,
//             '00', , , , , , , ,
//             [[, '([268]\\d{3})(\\d{4})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MP: [
//             ,
//             [, , '[5689]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[589]|8[3-9]8|989)\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '6702345678'],
//             [
//                 , ,
//                 '670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[589]|8[3-9]8|989)\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '6702345678'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002123456'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'MP',
//             1,
//             '011',
//             '1', , ,
//             '1', , ,
//             1, , ,
//             [, , 'NA', 'NA'], ,
//             '670',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MQ: [
//             ,
//             [, , '[56]\\d{8}', '\\d{9}'],
//             [
//                 , ,
//                 '596(?:0[2-5]|[12]0|3[05-9]|4[024-8]|[5-7]\\d|89|9[4-8])\\d{4}',
//                 '\\d{9}', , ,
//                 '596301234'],
//             [
//                 , ,
//                 '696(?:[0-479]\\d|5[01]|8[0-689])\\d{4}',
//                 '\\d{9}', , ,
//                 '696201234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'MQ',
//             596,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [[, '(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', , '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MR: [
//             ,
//             [, , '[2-48]\\d{7}', '\\d{8}'],
//             [
//                 , ,
//                 '25[08]\\d{5}|35\\d{6}|45[1-7]\\d{5}',
//                 '\\d{8}', , ,
//                 '35123456'],
//             [, , '[234][0-46-9]\\d{6}', '\\d{8}', , , '22123456'],
//             [, , '800\\d{5}', '\\d{8}', , , '80012345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'MR',
//             222,
//             '00', , , , , , , ,
//             [[, '([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MS: [
//             ,
//             [, , '[5689]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [, , '664491\\d{4}', '\\d{7}(?:\\d{3})?', , , '6644912345'],
//             [, , '66449[2-6]\\d{4}', '\\d{10}', , , '6644923456'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002123456'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'MS',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '664',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MT: [
//             ,
//             [, , '[2357-9]\\d{7}', '\\d{8}'],
//             [
//                 , ,
//                 '2(?:0(?:1[0-6]|3[1-4]|[69]\\d)|[1-357]\\d{2})\\d{4}',
//                 '\\d{8}', , ,
//                 '21001234'],
//             [
//                 , ,
//                 '(?:7(?:210|[79]\\d{2})|9(?:2(?:1[01]|31)|696|8(?:1[1-3]|89|97)|9\\d{2}))\\d{4}',
//                 '\\d{8}', , ,
//                 '96961234'],
//             [, , '800[3467]\\d{4}', '\\d{8}', , , '80071234'],
//             [
//                 , ,
//                 '5(?:0(?:0(?:37|43)|6\\d{2}|70\\d|9[0168])|[12]\\d0[1-5])\\d{3}',
//                 '\\d{8}', , ,
//                 '50037123'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '3550\\d{4}', '\\d{8}', , , '35501234'],
//             'MT',
//             356,
//             '00', , , , , , , ,
//             [[, '(\\d{4})(\\d{4})', '$1 $2']], ,
//             [, , '7117\\d{4}', '\\d{8}', , , '71171234'], , ,
//             [, , 'NA', 'NA'],
//             [, , '501\\d{5}', '\\d{8}', , , '50112345'], , ,
//             [, , 'NA', 'NA']],
//         MU: [
//             ,
//             [, , '[2-9]\\d{6,7}', '\\d{7,8}'],
//             [
//                 , ,
//                 '(?:2(?:[03478]\\d|1[0-7]|6[1-69])|4(?:[013568]\\d|2[4-7])|5(?:44\\d|471)|6\\d{2}|8(?:14|3[129]))\\d{4}',
//                 '\\d{7,8}', , ,
//                 '2012345'],
//             [
//                 , ,
//                 '5(?:2[59]\\d|4(?:2[1-389]|4\\d|7[1-9]|9\\d)|7\\d{2}|8(?:[0-2568]\\d|7[15-8])|9[0-8]\\d)\\d{4}',
//                 '\\d{8}', , ,
//                 '52512345'],
//             [, , '80[012]\\d{4}', '\\d{7}', , , '8001234'],
//             [, , '30\\d{5}', '\\d{7}', , , '3012345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '3(?:20|9\\d)\\d{4}', '\\d{7}', , , '3201234'],
//             'MU',
//             230,
//             '0(?:0|[2-7]0|33)', , , , , ,
//             '020', ,
//             [
//                 [, '([2-46-9]\\d{2})(\\d{4})', '$1 $2', ['[2-46-9]']],
//                 [, '(5\\d{3})(\\d{4})', '$1 $2', ['5']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MV: [
//             ,
//             [, , '[3467]\\d{6}|9(?:00\\d{7}|\\d{6})', '\\d{7,10}'],
//             [
//                 , ,
//                 '(?:3(?:0[01]|3[0-59])|6(?:[567][02468]|8[024689]|90))\\d{4}',
//                 '\\d{7}', , ,
//                 '6701234'],
//             [
//                 , ,
//                 '(?:46[46]|7[3-9]\\d|9[15-9]\\d)\\d{4}',
//                 '\\d{7}', , ,
//                 '7712345'],
//             [, , 'NA', 'NA'],
//             [, , '900\\d{7}', '\\d{10}', , , '9001234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'MV',
//             960,
//             '0(?:0|19)', , , , , ,
//             '00', ,
//             [
//                 [, '(\\d{3})(\\d{4})', '$1-$2', ['[3467]|9(?:[1-9]|0[1-9])']],
//                 [, '(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['900']]], ,
//             [, , '781\\d{4}', '\\d{7}', , , '7812345'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MW: [
//             ,
//             [, , '(?:1(?:\\d{2})?|[2789]\\d{2})\\d{6}', '\\d{7,9}'],
//             [, , '(?:1[2-9]|21\\d{2})\\d{5}', '\\d{7,9}', , , '1234567'],
//             [, , '(?:111|77\\d|88\\d|99\\d)\\d{6}', '\\d{9}', , , '991234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'MW',
//             265,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['1'], '0$1'],
//                 [, '(2\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['2'], '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[1789]'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MX: [
//             ,
//             [, , '[1-9]\\d{9,10}', '\\d{7,11}'],
//             [
//                 , ,
//                 '(?:33|55|81)\\d{8}|(?:2(?:0[01]|2[2-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[234][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}',
//                 '\\d{7,10}', , ,
//                 '2221234567'],
//             [
//                 , ,
//                 '1(?:(?:33|55|81)\\d{8}|(?:2(?:2[2-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7})',
//                 '\\d{11}', , ,
//                 '12221234567'],
//             [, , '8(?:00|88)\\d{7}', '\\d{10}', , , '8001234567'],
//             [, , '900\\d{7}', '\\d{10}', , , '9001234567'],
//             [, , '300\\d{7}', '\\d{10}', , , '3001234567'],
//             [, , '500\\d{7}', '\\d{10}', , , '5001234567'],
//             [, , 'NA', 'NA'],
//             'MX',
//             52,
//             '0[09]',
//             '01', , ,
//             '0[12]|04[45](\\d{10})',
//             '1$1', , ,
//             [
//                 [
//                     ,
//                     '([358]\\d)(\\d{4})(\\d{4})',
//                     '$1 $2 $3',
//                     ['33|55|81'],
//                     '01 $1', ,
//                     1],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]'],
//                     '01 $1', ,
//                     1],
//                 [
//                     ,
//                     '(1)([358]\\d)(\\d{4})(\\d{4})',
//                     '044 $2 $3 $4',
//                     ['1(?:33|55|81)'],
//                     '$1', ,
//                     1],
//                 [
//                     ,
//                     '(1)(\\d{3})(\\d{3})(\\d{4})',
//                     '044 $2 $3 $4',
//                     ['1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])'],
//                     '$1', ,
//                     1]],
//             [
//                 [
//                     ,
//                     '([358]\\d)(\\d{4})(\\d{4})',
//                     '$1 $2 $3',
//                     ['33|55|81'],
//                     '01 $1', ,
//                     1],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]'],
//                     '01 $1', ,
//                     1],
//                 [
//                     ,
//                     '(1)([358]\\d)(\\d{4})(\\d{4})',
//                     '$1 $2 $3 $4',
//                     ['1(?:33|55|81)']],
//                 [
//                     ,
//                     '(1)(\\d{3})(\\d{3})(\\d{4})',
//                     '$1 $2 $3 $4',
//                     ['1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])']]],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA']],
//         MY: [
//             ,
//             [, , '[13-9]\\d{7,9}', '\\d{6,10}'],
//             [, , '(?:3[2-9]\\d|[4-9][2-9])\\d{6}', '\\d{6,9}', , , '323456789'],
//             [
//                 , ,
//                 '1(?:1[1-5]\\d{2}|[02-4679][2-9]\\d|59\\d{2}|8(?:1[23]|[2-9]\\d))\\d{5}',
//                 '\\d{9,10}', , ,
//                 '123456789'],
//             [, , '1[378]00\\d{6}', '\\d{10}', , , '1300123456'],
//             [, , '1600\\d{6}', '\\d{10}', , , '1600123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '154\\d{7}', '\\d{10}', , , '1541234567'],
//             'MY',
//             60,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '([4-79])(\\d{3})(\\d{4})', '$1-$2 $3', ['[4-79]'], '0$1'],
//                 [, '(3)(\\d{4})(\\d{4})', '$1-$2 $3', ['3'], '0$1'],
//                 [
//                     ,
//                     '([18]\\d)(\\d{3})(\\d{3,4})',
//                     '$1-$2 $3',
//                     ['1[02-46-9][1-9]|8'],
//                     '0$1'],
//                 [
//                     ,
//                     '(1)([36-8]00)(\\d{2})(\\d{4})',
//                     '$1-$2-$3-$4',
//                     ['1[36-8]0']],
//                 [, '(11)(\\d{4})(\\d{4})', '$1-$2 $3', ['11'], '0$1'],
//                 [, '(15[49])(\\d{3})(\\d{4})', '$1-$2 $3', ['15'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         MZ: [
//             ,
//             [, , '[28]\\d{7,8}', '\\d{8,9}'],
//             [
//                 , ,
//                 '2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}',
//                 '\\d{8}', , ,
//                 '21123456'],
//             [, , '8[23467]\\d{7}', '\\d{9}', , , '821234567'],
//             [, , '800\\d{6}', '\\d{9}', , , '800123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'MZ',
//             258,
//             '00', , , , , , , ,
//             [
//                 [, '([28]\\d)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['2|8[2-7]']],
//                 [, '(80\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['80']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         NA: [
//             ,
//             [, , '[68]\\d{7,8}', '\\d{8,9}'],
//             [
//                 , ,
//                 '6(?:1(?:17|2(?:[0189]\\d|[2-6]|7\\d?)|3(?:[01378]|2\\d)|4(?:[024]|10?|3[15]?)|69|7[014])|2(?:17|5(?:[0-36-8]|4\\d?)|69|70)|3(?:17|2(?:[0237]\\d?|[14-689])|34|6[289]|7[01]|81)|4(?:17|2(?:[012]|7?)|4(?:[06]|1\\d?)|5(?:[01357]|[25]\\d?)|69|7[01])|5(?:17|2(?:[0459]|[23678]\\d?)|69|7[01])|6(?:17|2(?:5|6\\d?)|38|42|69|7[01])|7(?:17|2(?:[569]|[234]\\d?)|3(?:0\\d?|[13])|69|7[01]))\\d{4}',
//                 '\\d{8,9}', , ,
//                 '61221234'],
//             [, , '(?:60|8[125])\\d{7}', '\\d{9}', , , '811234567'],
//             [, , 'NA', 'NA'],
//             [, , '8701\\d{5}', '\\d{9}', , , '870123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '8(?:3\\d{2}|86)\\d{5}', '\\d{8,9}', , , '88612345'],
//             'NA',
//             264,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(8\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['8[1235]'], '0$1'],
//                 [, '(6\\d)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['6'], '0$1'],
//                 [, '(88)(\\d{3})(\\d{3})', '$1 $2 $3', ['88'], '0$1'],
//                 [, '(870)(\\d{3})(\\d{3})', '$1 $2 $3', ['870'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         NC: [
//             ,
//             [, , '[2-57-9]\\d{5}', '\\d{6}'],
//             [, , '(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}', '\\d{6}', , , '201234'],
//             [, , '(?:5[0-4]|[79]\\d|8[0-79])\\d{4}', '\\d{6}', , , '751234'],
//             [, , 'NA', 'NA'],
//             [, , '36\\d{4}', '\\d{6}', , , '366711'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'NC',
//             687,
//             '00', , , , , , , ,
//             [[, '(\\d{2})(\\d{2})(\\d{2})', '$1.$2.$3', ['[2-46-9]|5[0-4]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         NE: [
//             ,
//             [, , '[0289]\\d{7}', '\\d{8}'],
//             [
//                 , ,
//                 '2(?:0(?:20|3[1-7]|4[134]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}',
//                 '\\d{8}', , ,
//                 '20201234'],
//             [, , '(?:8[089]|9\\d)\\d{6}', '\\d{8}', , , '93123456'],
//             [, , '08\\d{6}', '\\d{8}', , , '08123456'],
//             [, , '09\\d{6}', '\\d{8}', , , '09123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'NE',
//             227,
//             '00', , , , , , , ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[289]|09']],
//                 [, '(08)(\\d{3})(\\d{3})', '$1 $2 $3', ['08']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA']],
//         NF: [
//             ,
//             [, , '[13]\\d{5}', '\\d{5,6}'],
//             [
//                 , ,
//                 '(?:1(?:06|17|28|39)|3[012]\\d)\\d{3}',
//                 '\\d{5,6}', , ,
//                 '106609'],
//             [, , '3[58]\\d{4}', '\\d{5,6}', , , '381234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'NF',
//             672,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{2})(\\d{4})', '$1 $2', ['1']],
//                 [, '(\\d)(\\d{5})', '$1 $2', ['3']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         NG: [
//             ,
//             [, , '[1-6]\\d{5,8}|9\\d{5,9}|[78]\\d{5,13}', '\\d{5,14}'],
//             [
//                 , ,
//                 '[12]\\d{6,7}|9(?:0[3-9]|[1-9]\\d)\\d{5}|(?:3\\d|4[023568]|5[02368]|6[02-469]|7[4-69]|8[2-9])\\d{6}|(?:4[47]|5[14579]|6[1578]|7[0-357])\\d{5,6}|(?:78|41)\\d{5}',
//                 '\\d{5,9}', , ,
//                 '12345678'],
//             [
//                 , ,
//                 '(?:1(?:7[34]\\d|8(?:04|[124579]\\d|8[0-3])|95\\d)|287[0-7]|3(?:18[1-8]|88[0-7]|9(?:8[5-9]|6[1-5]))|4(?:28[0-2]|6(?:7[1-9]|8[02-47])|88[0-2])|5(?:2(?:7[7-9]|8\\d)|38[1-79]|48[0-7]|68[4-7])|6(?:2(?:7[7-9]|8\\d)|4(?:3[7-9]|[68][129]|7[04-69]|9[1-8])|58[0-2]|98[7-9])|7(?:38[0-7]|69[1-8]|78[2-4])|8(?:28[3-9]|38[0-2]|4(?:2[12]|3[147-9]|5[346]|7[4-9]|8[014-689]|90)|58[1-8]|78[2-9]|88[5-7])|98[07]\\d)\\d{4}|(?:70[1-689]\\d|8(?:0(?:1[01]|[2-9]\\d)|1(?:[0-8]\\d|9[01]))|90[23589]\\d)\\d{6}',
//                 '\\d{8,10}', , ,
//                 '8021234567'],
//             [, , '800\\d{7,11}', '\\d{10,14}', , , '80017591759'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'NG',
//             234,
//             '009',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{3,4})',
//                     '$1 $2 $3',
//                     ['70|8[01]|90[23589]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d)(\\d{3})(\\d{3,4})',
//                     '$1 $2 $3',
//                     ['[12]|9(?:0[3-9]|[1-9])'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{2,3})',
//                     '$1 $2 $3',
//                     ['[3-6]|7(?:[1-79]|0[1-9])|8[2-9]'],
//                     '0$1'],
//                 [, '([78]00)(\\d{4})(\\d{4,5})', '$1 $2 $3', ['[78]00'], '0$1'],
//                 [, '([78]00)(\\d{5})(\\d{5,6})', '$1 $2 $3', ['[78]00'], '0$1'],
//                 [, '(78)(\\d{2})(\\d{3})', '$1 $2 $3', ['78'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '700\\d{7,11}', '\\d{10,14}', , , '7001234567'], , ,
//             [, , 'NA', 'NA']],
//         NI: [
//             ,
//             [, , '[12578]\\d{7}', '\\d{8}'],
//             [, , '2\\d{7}', '\\d{8}', , , '21234567'],
//             [
//                 , ,
//                 '5(?:5[0-7]\\d{5}|[78]\\d{6})|7[5-8]\\d{6}|8\\d{7}',
//                 '\\d{8}', , ,
//                 '81234567'],
//             [, , '1800\\d{4}', '\\d{8}', , , '18001234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'NI',
//             505,
//             '00', , , , , , , ,
//             [[, '(\\d{4})(\\d{4})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         NL: [
//             ,
//             [, , '1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}', '\\d{5,10}'],
//             [
//                 , ,
//                 '(?:1[0135-8]|2[02-69]|3[0-68]|4[0135-9]|[57]\\d|8[478])\\d{7}',
//                 '\\d{9}', , ,
//                 '101234567'],
//             [, , '6[1-58]\\d{7}', '\\d{9}', , , '612345678'],
//             [, , '800\\d{4,7}', '\\d{7,10}', , , '8001234'],
//             [, , '90[069]\\d{4,7}', '\\d{7,10}', , , '9061234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '85\\d{7}', '\\d{9}', , , '851234567'],
//             'NL',
//             31,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '([1-578]\\d)(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]'],
//                     '0$1'],
//                 [
//                     ,
//                     '([1-5]\\d{2})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['1[16-8]|2[259]|3[124]|4[17-9]|5[124679]'],
//                     '0$1'],
//                 [, '(6)(\\d{8})', '$1 $2', ['6[0-57-9]'], '0$1'],
//                 [, '(66)(\\d{7})', '$1 $2', ['66'], '0$1'],
//                 [, '(14)(\\d{3,4})', '$1 $2', ['14'], '$1'],
//                 [, '([89]0\\d)(\\d{4,7})', '$1 $2', ['80|9'], '0$1']], ,
//             [, , '66\\d{7}', '\\d{9}', , , '662345678'], , ,
//             [, , '14\\d{3,4}', '\\d{5,6}'],
//             [
//                 , ,
//                 '140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])',
//                 '\\d{5,6}', , ,
//                 '14020'], , ,
//             [, , 'NA', 'NA']],
//         NO: [
//             ,
//             [, , '0\\d{4}|[2-9]\\d{7}', '\\d{5}(?:\\d{3})?'],
//             [
//                 , ,
//                 '(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}',
//                 '\\d{8}', , ,
//                 '21234567'],
//             [, , '(?:4[015-8]|5[89]|87|9\\d)\\d{6}', '\\d{8}', , , '40612345'],
//             [, , '80[01]\\d{5}', '\\d{8}', , , '80012345'],
//             [, , '82[09]\\d{5}', '\\d{8}', , , '82012345'],
//             [, , '810(?:0[0-6]|[2-8]\\d)\\d{3}', '\\d{8}', , , '81021234'],
//             [, , '880\\d{5}', '\\d{8}', , , '88012345'],
//             [, , '85[0-5]\\d{5}', '\\d{8}', , , '85012345'],
//             'NO',
//             47,
//             '00', , , , , , , ,
//             [
//                 [, '([489]\\d{2})(\\d{2})(\\d{3})', '$1 $2 $3', ['[489]']],
//                 [
//                     ,
//                     '([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[235-7]']]], ,
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}',
//                 '\\d{5}(?:\\d{3})?', , ,
//                 '01234'],
//             1, ,
//             [, , '81[23]\\d{5}', '\\d{8}', , , '81212345']],
//         NP: [
//             ,
//             [
//                 , ,
//                 '[1-8]\\d{7}|9(?:[1-69]\\d{6,8}|7[2-6]\\d{5,7}|8\\d{8})',
//                 '\\d{6,10}'],
//             [
//                 , ,
//                 '(?:1[0-6]\\d|2[13-79][2-6]|3[135-8][2-6]|4[146-9][2-6]|5[135-7][2-6]|6[13-9][2-6]|7[15-9][2-6]|8[1-46-9][2-6]|9[1-79][2-6])\\d{5}',
//                 '\\d{6,8}', , ,
//                 '14567890'],
//             [
//                 , ,
//                 '9(?:6[013]|7[245]|8[0-24-6])\\d{7}',
//                 '\\d{10}', , ,
//                 '9841234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'NP',
//             977,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(1)(\\d{7})', '$1-$2', ['1[2-6]'], '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{6})',
//                     '$1-$2',
//                     ['1[01]|[2-8]|9(?:[1-69]|7[15-9])'],
//                     '0$1'],
//                 [
//                     ,
//                     '(9\\d{2})(\\d{7})',
//                     '$1-$2',
//                     ['9(?:6[013]|7[245]|8)'],
//                     '$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         NR: [
//             ,
//             [, , '[458]\\d{6}', '\\d{7}'],
//             [, , '(?:444|888)\\d{4}', '\\d{7}', , , '4441234'],
//             [, , '55[5-9]\\d{4}', '\\d{7}', , , '5551234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'NR',
//             674,
//             '00', , , , , , , ,
//             [[, '(\\d{3})(\\d{4})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         NU: [
//             ,
//             [, , '[1-5]\\d{3}', '\\d{4}'],
//             [, , '[34]\\d{3}', '\\d{4}', , , '4002'],
//             [, , '[125]\\d{3}', '\\d{4}', , , '1234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'NU',
//             683,
//             '00', , , , , , , , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         NZ: [
//             ,
//             [, , '6[235-9]\\d{6}|[2-57-9]\\d{7,10}', '\\d{7,11}'],
//             [
//                 , ,
//                 '(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}|24099\\d{3}',
//                 '\\d{7,8}', , ,
//                 '32345678'],
//             [
//                 , ,
//                 '2(?:[028]\\d{7,8}|1(?:[03]\\d{5,7}|[12457]\\d{5,6}|[689]\\d{5})|[79]\\d{7})',
//                 '\\d{8,10}', , ,
//                 '211234567'],
//             [, , '508\\d{6,7}|80\\d{6,8}', '\\d{8,10}', , , '800123456'],
//             [, , '90\\d{7,9}', '\\d{9,11}', , , '900123456'],
//             [, , 'NA', 'NA'],
//             [, , '70\\d{7}', '\\d{9}', , , '701234567'],
//             [, , 'NA', 'NA'],
//             'NZ',
//             64,
//             '0(?:0|161)',
//             '0', , ,
//             '0', ,
//             '00', ,
//             [
//                 [
//                     ,
//                     '([34679])(\\d{3})(\\d{4})',
//                     '$1-$2 $3',
//                     ['[346]|7[2-57-9]|9[1-9]'],
//                     '0$1'],
//                 [, '(24099)(\\d{3})', '$1 $2', ['240', '2409', '24099'], '0$1'],
//                 [, '(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['21'], '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{3,5})',
//                     '$1 $2 $3',
//                     ['2(?:1[1-9]|[69]|7[0-35-9])|70|86'],
//                     '0$1'],
//                 [, '(2\\d)(\\d{3,4})(\\d{4})', '$1 $2 $3', ['2[028]'], '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{3,4})',
//                     '$1 $2 $3',
//                     ['2(?:10|74)|5|[89]0'],
//                     '0$1']], ,
//             [, , '[28]6\\d{6,7}', '\\d{8,9}', , , '26123456'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         OM: [
//             ,
//             [, , '(?:5|[279]\\d)\\d{6}|800\\d{5,6}', '\\d{7,9}'],
//             [, , '2[2-6]\\d{6}', '\\d{8}', , , '23123456'],
//             [
//                 , ,
//                 '7[19]\\d{6}|9(?:0[1-9]|[1-9]\\d)\\d{5}',
//                 '\\d{8}', , ,
//                 '92123456'],
//             [, , '8007\\d{4,5}|500\\d{4}', '\\d{7,9}', , , '80071234'],
//             [, , '900\\d{5}', '\\d{8}', , , '90012345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'OM',
//             968,
//             '00', , , , , , , ,
//             [
//                 [, '(2\\d)(\\d{6})', '$1 $2', ['2']],
//                 [, '([79]\\d{3})(\\d{4})', '$1 $2', ['[79]']],
//                 [, '([58]00)(\\d{4,6})', '$1 $2', ['[58]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         PA: [
//             ,
//             [, , '[1-9]\\d{6,7}', '\\d{7,8}'],
//             [
//                 , ,
//                 '(?:1(?:0[0-8]|1[49]|2[37]|3[0137]|4[147]|5[05]|6[58]|7[0167]|8[58]|9[139])|2(?:[0235679]\\d|1[0-7]|4[04-9]|8[028])|3(?:[09]\\d|1[014-7]|2[0-3]|3[03]|4[03-57]|55|6[068]|7[06-8]|8[06-9])|4(?:3[013-69]|4\\d|7[0-589])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-267]|3[06]|[469]0|5[06-9]|7[0-24-79]|8[7-9])|8(?:09|[34]\\d|5[0134]|8[02])|9(?:0[6-9]|1[016-8]|2[036-8]|3[3679]|40|5[0489]|6[06-9]|7[046-9]|8[36-8]|9[1-9]))\\d{4}',
//                 '\\d{7}', , ,
//                 '2001234'],
//             [
//                 , ,
//                 '(?:1[16]1|21[89]|8(?:1[01]|7[23]))\\d{4}|6(?:[024-9]\\d|1[0-5]|3[0-24-9])\\d{5}',
//                 '\\d{7,8}', , ,
//                 '60012345'],
//             [, , '80[09]\\d{4}', '\\d{7}', , , '8001234'],
//             [
//                 , ,
//                 '(?:779|8(?:55|60|7[78])|9(?:00|81))\\d{4}',
//                 '\\d{7}', , ,
//                 '8601234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'PA',
//             507,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{3})(\\d{4})', '$1-$2', ['[1-57-9]']],
//                 [, '(\\d{4})(\\d{4})', '$1-$2', ['6']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         PE: [
//             ,
//             [, , '[14-9]\\d{7,8}', '\\d{6,9}'],
//             [
//                 , ,
//                 '(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}',
//                 '\\d{6,8}', , ,
//                 '11234567'],
//             [, , '9\\d{8}', '\\d{9}', , , '912345678'],
//             [, , '800\\d{5}', '\\d{8}', , , '80012345'],
//             [, , '805\\d{5}', '\\d{8}', , , '80512345'],
//             [, , '801\\d{5}', '\\d{8}', , , '80112345'],
//             [, , '80[24]\\d{5}', '\\d{8}', , , '80212345'],
//             [, , 'NA', 'NA'],
//             'PE',
//             51,
//             '19(?:1[124]|77|90)00',
//             '0',
//             ' Anexo ', ,
//             '0', , , ,
//             [
//                 [, '(1)(\\d{7})', '$1 $2', ['1'], '(0$1)'],
//                 [, '([4-8]\\d)(\\d{6})', '$1 $2', ['[4-7]|8[2-4]'], '(0$1)'],
//                 [, '(\\d{3})(\\d{5})', '$1 $2', ['80'], '(0$1)'],
//                 [, '(9\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['9'], '$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         PF: [
//             ,
//             [, , '4\\d{5,7}|8\\d{7}', '\\d{6}(?:\\d{2})?'],
//             [
//                 , ,
//                 '4(?:[09][45689]\\d|4)\\d{4}',
//                 '\\d{6}(?:\\d{2})?', , ,
//                 '40412345'],
//             [, , '8[79]\\d{6}', '\\d{8}', , , '87123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'PF',
//             689,
//             '00', , , , , , , ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['4[09]|8[79]']],
//                 [, '(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3', ['44']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , '44\\d{4}', '\\d{6}', , , '441234'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         PG: [
//             ,
//             [, , '[1-9]\\d{6,7}', '\\d{7,8}'],
//             [
//                 , ,
//                 '(?:3[0-2]\\d|4[25]\\d|5[34]\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9]|9[78]\\d)\\d{4}',
//                 '\\d{7}', , ,
//                 '3123456'],
//             [
//                 , ,
//                 '(?:20150|68\\d{2}|7(?:[0-689]\\d|75)\\d{2})\\d{3}',
//                 '\\d{7,8}', , ,
//                 '6812345'],
//             [, , '180\\d{4}', '\\d{7}', , , '1801234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '275\\d{4}', '\\d{7}', , , '2751234'],
//             'PG',
//             675,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{3})(\\d{4})', '$1 $2', ['[13-689]|27']],
//                 [, '(\\d{4})(\\d{4})', '$1 $2', ['20|7']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         PH: [
//             ,
//             [, , '2\\d{5,7}|[3-9]\\d{7,9}|1800\\d{7,9}', '\\d{5,13}'],
//             [
//                 , ,
//                 '2\\d{5}(?:\\d{2})?|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578]|8[2-8])\\d{7}|88(?:22\\d{6}|42\\d{4})',
//                 '\\d{5,10}', , ,
//                 '21234567'],
//             [
//                 , ,
//                 '(?:81[37]|9(?:0[5-9]|1[024-9]|2[0-35-9]|3[02-9]|4[236-9]|50|7[34-79]|89|9[4-9]))\\d{7}',
//                 '\\d{10}', , ,
//                 '9051234567'],
//             [, , '1800\\d{7,9}', '\\d{11,13}', , , '180012345678'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'PH',
//             63,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(2)(\\d{3})(\\d{4})', '$1 $2 $3', ['2'], '(0$1)'],
//                 [, '(2)(\\d{5})', '$1 $2', ['2'], '(0$1)'],
//                 [
//                     ,
//                     '(\\d{4})(\\d{4,6})',
//                     '$1 $2',
//                     [
//                         '3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])',
//                         '3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))'],
//                     '(0$1)'],
//                 [
//                     ,
//                     '(\\d{5})(\\d{4})',
//                     '$1 $2',
//                     ['346|4(?:27|9[35])|883', '3469|4(?:279|9(?:30|56))|8834'],
//                     '(0$1)'],
//                 [
//                     ,
//                     '([3-8]\\d)(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['[3-8]'],
//                     '(0$1)'],
//                 [, '(\\d{3})(\\d{3})(\\d{4})', '$1 $2 $3', ['81|9'], '0$1'],
//                 [, '(1800)(\\d{3})(\\d{4})', '$1 $2 $3', ['1']],
//                 [, '(1800)(\\d{1,2})(\\d{3})(\\d{4})', '$1 $2 $3 $4', ['1']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         PK: [
//             ,
//             [
//                 , ,
//                 '1\\d{8}|[2-8]\\d{5,11}|9(?:[013-9]\\d{4,9}|2\\d(?:111\\d{6}|\\d{3,7}))',
//                 '\\d{6,12}'],
//             [
//                 , ,
//                 '(?:21|42)[2-9]\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}|58[126]\\d{7}',
//                 '\\d{6,10}', , ,
//                 '2123456789'],
//             [
//                 , ,
//                 '3(?:0\\d|1[0-6]|2[0-5]|3[0-7]|4[0-8]|55|64)\\d{7}',
//                 '\\d{10}', , ,
//                 '3012345678'],
//             [, , '800\\d{5}', '\\d{8}', , , '80012345'],
//             [, , '900\\d{5}', '\\d{8}', , , '90012345'],
//             [, , 'NA', 'NA'],
//             [, , '122\\d{6}', '\\d{9}', , , '122044444'],
//             [, , 'NA', 'NA'],
//             'PK',
//             92,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(111)(\\d{3})(\\d{3})',
//                     '$1 $2 $3 $4',
//                     [
//                         '(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1',
//                         '(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11',
//                         '(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111'],
//                     '(0$1)'],
//                 [
//                     ,
//                     '(\\d{3})(111)(\\d{3})(\\d{3})',
//                     '$1 $2 $3 $4',
//                     [
//                         '2[349]|45|54|60|72|8[2-5]|9[2-9]',
//                         '(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1',
//                         '(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11',
//                         '(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111'],
//                     '(0$1)'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{7,8})',
//                     '$1 $2',
//                     ['(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]'],
//                     '(0$1)'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{6,7})',
//                     '$1 $2',
//                     [
//                         '2[349]|45|54|60|72|8[2-5]|9[2-9]',
//                         '(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d[2-9]'],
//                     '(0$1)'],
//                 [, '(3\\d{2})(\\d{7})', '$1 $2', ['3'], '0$1'],
//                 [, '([15]\\d{3})(\\d{5,6})', '$1 $2', ['58[12]|1'], '(0$1)'],
//                 [, '(586\\d{2})(\\d{5})', '$1 $2', ['586'], '(0$1)'],
//                 [
//                     ,
//                     '([89]00)(\\d{3})(\\d{2})',
//                     '$1 $2 $3',
//                     ['[89]00'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:[1-8]|0[468])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}',
//                 '\\d{11,12}', , ,
//                 '21111825888'], , ,
//             [, , 'NA', 'NA']],
//         PL: [
//             ,
//             [, , '[12]\\d{6,8}|[3-57-9]\\d{8}|6\\d{5,8}', '\\d{6,9}'],
//             [
//                 , ,
//                 '(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])\\d{7}|[12]2\\d{5}',
//                 '\\d{6,9}', , ,
//                 '123456789'],
//             [
//                 , ,
//                 '(?:5[0137]|6[069]|7[2389]|88)\\d{7}',
//                 '\\d{9}', , ,
//                 '512345678'],
//             [, , '800\\d{6}', '\\d{9}', , , '800123456'],
//             [, , '70\\d{7}', '\\d{9}', , , '701234567'],
//             [, , '801\\d{6}', '\\d{9}', , , '801234567'],
//             [, , 'NA', 'NA'],
//             [, , '39\\d{7}', '\\d{9}', , , '391234567'],
//             'PL',
//             48,
//             '00', , , , , , , ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]']],
//                 [, '(\\d{2})(\\d{1})(\\d{4})', '$1 $2 $3', ['[12]2']],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['26|39|5[0137]|6[0469]|7[02389]|8[08]']],
//                 [, '(\\d{3})(\\d{2})(\\d{2,3})', '$1 $2 $3', ['64']],
//                 [, '(\\d{3})(\\d{3})', '$1 $2', ['64']]], ,
//             [, , '64\\d{4,7}', '\\d{6,9}', , , '641234567'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         PM: [
//             ,
//             [, , '[45]\\d{5}', '\\d{6}'],
//             [, , '41\\d{4}', '\\d{6}', , , '411234'],
//             [, , '55\\d{4}', '\\d{6}', , , '551234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'PM',
//             508,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [[, '([45]\\d)(\\d{2})(\\d{2})', '$1 $2 $3', , '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         PR: [
//             ,
//             [, , '[5789]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '(?:787|939)[2-9]\\d{6}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '7872345678'],
//             [
//                 , ,
//                 '(?:787|939)[2-9]\\d{6}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '7872345678'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002345678'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002345678'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'PR',
//             1,
//             '011',
//             '1', , ,
//             '1', , ,
//             1, , ,
//             [, , 'NA', 'NA'], ,
//             '787|939',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         PS: [
//             ,
//             [, , '[24589]\\d{7,8}|1(?:[78]\\d{8}|[49]\\d{2,3})', '\\d{4,10}'],
//             [
//                 , ,
//                 '(?:22[234789]|42[45]|82[01458]|92[369])\\d{5}',
//                 '\\d{7,8}', , ,
//                 '22234567'],
//             [, , '5[69]\\d{7}', '\\d{9}', , , '599123456'],
//             [, , '1800\\d{6}', '\\d{10}', , , '1800123456'],
//             [, , '1(?:4|9\\d)\\d{2}', '\\d{4,5}', , , '19123'],
//             [, , '1700\\d{6}', '\\d{10}', , , '1700123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'PS',
//             970,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '([2489])(2\\d{2})(\\d{4})', '$1 $2 $3', ['[2489]'], '0$1'],
//                 [, '(5[69]\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['5'], '0$1'],
//                 [, '(1[78]00)(\\d{3})(\\d{3})', '$1 $2 $3', ['1[78]'], '$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         PT: [
//             ,
//             [, , '[2-46-9]\\d{8}', '\\d{9}'],
//             [
//                 , ,
//                 '2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}',
//                 '\\d{9}', , ,
//                 '212345678'],
//             [, , '9(?:[1236]\\d{2}|480)\\d{5}', '\\d{9}', , , '912345678'],
//             [, , '80[02]\\d{6}', '\\d{9}', , , '800123456'],
//             [
//                 , ,
//                 '6(?:0[178]|4[68])\\d{6}|76(?:0[1-57]|1[2-47]|2[237])\\d{5}',
//                 '\\d{9}', , ,
//                 '760123456'],
//             [, , '80(?:8\\d|9[1579])\\d{5}', '\\d{9}', , , '808123456'],
//             [, , '884[0-4689]\\d{5}', '\\d{9}', , , '884123456'],
//             [, , '30\\d{7}', '\\d{9}', , , '301234567'],
//             'PT',
//             351,
//             '00', , , , , , , ,
//             [
//                 [, '(2\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['2[12]']],
//                 [
//                     ,
//                     '([2-46-9]\\d{2})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['2[3-9]|[346-9]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '7(?:0(?:7\\d|8[17]))\\d{5}', '\\d{9}', , , '707123456'], , ,
//             [, , '600\\d{6}', '\\d{9}', , , '600110000']],
//         PW: [
//             ,
//             [, , '[2-8]\\d{6}', '\\d{7}'],
//             [
//                 , ,
//                 '2552255|(?:277|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76))\\d{4}',
//                 '\\d{7}', , ,
//                 '2771234'],
//             [, , '(?:6[234689]0|77[45789])\\d{4}', '\\d{7}', , , '6201234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'PW',
//             680,
//             '01[12]', , , , , , , ,
//             [[, '(\\d{3})(\\d{4})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         PY: [
//             ,
//             [, , '5[0-5]\\d{4,7}|[2-46-9]\\d{5,8}', '\\d{5,9}'],
//             [
//                 , ,
//                 '(?:[26]1|3[289]|4[124678]|7[123]|8[1236])\\d{5,7}|(?:2(?:2[4568]|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51)|4(?:18|2[45]|3[12]|5[13]|64|71|9[1-47])|5(?:[1-4]\\d|5[0234])|6(?:3[1-3]|44|7[1-4678])|7(?:17|4[0-4]|6[1-578]|75|8[0-8])|858)\\d{5,6}',
//                 '\\d{5,9}', , ,
//                 '212345678'],
//             [
//                 , ,
//                 '9(?:6[12]|[78][1-6]|9[1-5])\\d{6}',
//                 '\\d{9}', , ,
//                 '961456789'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '8700[0-4]\\d{4}', '\\d{9}', , , '870012345'],
//             'PY',
//             595,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{5,7})',
//                     '$1 $2',
//                     ['(?:[26]1|3[289]|4[124678]|7[123]|8[1236])'],
//                     '($1)'],
//                 [, '(\\d{3})(\\d{3,6})', '$1 $2', ['[2-9]0'], '0$1'],
//                 [, '(\\d{3})(\\d{6})', '$1 $2', ['9[1-9]'], '0$1'],
//                 [, '(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['8700']],
//                 [, '(\\d{3})(\\d{4,6})', '$1 $2', ['[2-8][1-9]'], '($1)']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '[2-9]0\\d{4,7}', '\\d{6,9}', , , '201234567'], , ,
//             [, , 'NA', 'NA']],
//         QA: [
//             ,
//             [, , '[2-8]\\d{6,7}', '\\d{7,8}'],
//             [, , '4[04]\\d{6}', '\\d{7,8}', , , '44123456'],
//             [, , '[3567]\\d{7}', '\\d{7,8}', , , '33123456'],
//             [, , '800\\d{4}', '\\d{7,8}', , , '8001234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'QA',
//             974,
//             '00', , , , , , , ,
//             [
//                 [, '([28]\\d{2})(\\d{4})', '$1 $2', ['[28]']],
//                 [, '([3-7]\\d{3})(\\d{4})', '$1 $2', ['[3-7]']]], ,
//             [, , '2(?:[12]\\d|61)\\d{4}', '\\d{7}', , , '2123456'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         RE: [
//             ,
//             [, , '[268]\\d{8}', '\\d{9}'],
//             [, , '262\\d{6}', '\\d{9}', , , '262161234'],
//             [, , '6(?:9[23]|47)\\d{6}', '\\d{9}', , , '692123456'],
//             [, , '80\\d{7}', '\\d{9}', , , '801234567'],
//             [, , '89[1-37-9]\\d{6}', '\\d{9}', , , '891123456'],
//             [, , '8(?:1[019]|2[0156]|84|90)\\d{6}', '\\d{9}', , , '810123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'RE',
//             262,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4', ,
//                     '0$1']], ,
//             [, , 'NA', 'NA'],
//             1,
//             '262|6[49]|8',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         RO: [
//             ,
//             [, , '2\\d{5,8}|[37-9]\\d{8}', '\\d{6,9}'],
//             [
//                 , ,
//                 '2(?:1(?:\\d{7}|9\\d{3})|[3-6](?:\\d{7}|\\d9\\d{2}))|3[13-6]\\d{7}',
//                 '\\d{6,9}', , ,
//                 '211234567'],
//             [, , '7(?:[0-8]\\d{2}|99\\d)\\d{5}', '\\d{9}', , , '712345678'],
//             [, , '800\\d{6}', '\\d{9}', , , '800123456'],
//             [, , '90[036]\\d{6}', '\\d{9}', , , '900123456'],
//             [, , '801\\d{6}', '\\d{9}', , , '801123456'],
//             [, , '802\\d{6}', '\\d{9}', , , '802123456'],
//             [, , 'NA', 'NA'],
//             'RO',
//             40,
//             '00',
//             '0',
//             ' int ', ,
//             '0', , , ,
//             [
//                 [, '(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', ['[23]1'], '0$1'],
//                 [, '(21)(\\d{4})', '$1 $2', ['21'], '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['[23][3-7]|[7-9]'],
//                     '0$1'],
//                 [, '(2\\d{2})(\\d{3})', '$1 $2', ['2[3-6]'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '37\\d{7}', '\\d{9}', , , '372123456'], , ,
//             [, , 'NA', 'NA']],
//         RS: [
//             ,
//             [
//                 , ,
//                 '[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})',
//                 '\\d{5,12}'],
//             [
//                 , ,
//                 '(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:[2-9]\\d|0[2-9])))\\d{3,8}',
//                 '\\d{5,12}', , ,
//                 '10234567'],
//             [, , '6(?:[0-689]|7\\d)\\d{6,7}', '\\d{8,10}', , , '601234567'],
//             [, , '800\\d{3,9}', '\\d{6,12}', , , '80012345'],
//             [, , '(?:90[0169]|78\\d)\\d{3,7}', '\\d{6,12}', , , '90012345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'RS',
//             381,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '([23]\\d{2})(\\d{4,9})',
//                     '$1 $2',
//                     ['(?:2[389]|39)0'],
//                     '0$1'],
//                 [
//                     ,
//                     '([1-3]\\d)(\\d{5,10})',
//                     '$1 $2',
//                     ['1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])'],
//                     '0$1'],
//                 [, '(6\\d)(\\d{6,8})', '$1 $2', ['6'], '0$1'],
//                 [, '([89]\\d{2})(\\d{3,9})', '$1 $2', ['[89]'], '0$1'],
//                 [, '(7[26])(\\d{4,9})', '$1 $2', ['7[26]'], '0$1'],
//                 [, '(7[08]\\d)(\\d{4,9})', '$1 $2', ['7[08]'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '7[06]\\d{4,10}', '\\d{6,12}', , , '700123456'], , ,
//             [, , 'NA', 'NA']],
//         RU: [
//             ,
//             [, , '[3489]\\d{9}', '\\d{10}'],
//             [
//                 , ,
//                 '(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}',
//                 '\\d{10}', , ,
//                 '3011234567'],
//             [, , '9\\d{9}', '\\d{10}', , , '9123456789'],
//             [, , '80[04]\\d{7}', '\\d{10}', , , '8001234567'],
//             [, , '80[39]\\d{7}', '\\d{10}', , , '8091234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'RU',
//             7,
//             '810',
//             '8', , ,
//             '8', ,
//             '8~10', ,
//             [
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{2})',
//                     '$1-$2-$3',
//                     ['[1-79]'],
//                     '$1', ,
//                     1],
//                 [
//                     ,
//                     '([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})',
//                     '$1 $2-$3-$4',
//                     ['[34689]'],
//                     '8 ($1)', ,
//                     1],
//                 [
//                     ,
//                     '(7\\d{2})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['7'],
//                     '8 ($1)', ,
//                     1]],
//             [
//                 [
//                     ,
//                     '([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})',
//                     '$1 $2-$3-$4',
//                     ['[34689]'],
//                     '8 ($1)', ,
//                     1],
//                 [
//                     ,
//                     '(7\\d{2})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['7'],
//                     '8 ($1)', ,
//                     1]],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         RW: [
//             ,
//             [, , '[027-9]\\d{7,8}', '\\d{8,9}'],
//             [, , '2[258]\\d{7}|06\\d{6}', '\\d{8,9}', , , '250123456'],
//             [, , '7[238]\\d{7}', '\\d{9}', , , '720123456'],
//             [, , '800\\d{6}', '\\d{9}', , , '800123456'],
//             [, , '900\\d{6}', '\\d{9}', , , '900123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'RW',
//             250,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(2\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['2'], '$1'],
//                 [
//                     ,
//                     '([7-9]\\d{2})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['[7-9]'],
//                     '0$1'],
//                 [, '(0\\d)(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['0']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA']],
//         SA: [
//             ,
//             [, , '1\\d{7,8}|(?:[2-467]|92)\\d{7}|5\\d{8}|8\\d{9}', '\\d{7,10}'],
//             [
//                 , ,
//                 '11\\d{7}|1?(?:2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}',
//                 '\\d{7,9}', , ,
//                 '112345678'],
//             [
//                 , ,
//                 '(?:5(?:[013-689]\\d|7[0-26-8])|811\\d)\\d{6}',
//                 '\\d{9,10}', , ,
//                 '512345678'],
//             [, , '800\\d{7}', '\\d{10}', , , '8001234567'],
//             [, , 'NA', 'NA'],
//             [, , '92[05]\\d{6}', '\\d{9}', , , '920012345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'SA',
//             966,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '([1-467])(\\d{3})(\\d{4})', '$1 $2 $3', ['[1-467]'], '0$1'],
//                 [, '(1\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['1[1-467]'], '0$1'],
//                 [, '(5\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['5'], '0$1'],
//                 [, '(92\\d{2})(\\d{5})', '$1 $2', ['92'], '$1'],
//                 [, '(800)(\\d{3})(\\d{4})', '$1 $2 $3', ['80'], '$1'],
//                 [, '(811)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['81'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         SB: [
//             ,
//             [, , '[1-9]\\d{4,6}', '\\d{5,7}'],
//             [
//                 , ,
//                 '(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}',
//                 '\\d{5}', , ,
//                 '40123'],
//             [
//                 , ,
//                 '48\\d{3}|7(?:30|[46-8]\\d|5[025-9]|9[0-5])\\d{4}|8[4-9]\\d{5}|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8])\\d{4}',
//                 '\\d{5,7}', , ,
//                 '7421234'],
//             [, , '1[38]\\d{3}', '\\d{5}', , , '18123'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '5[12]\\d{3}', '\\d{5}', , , '51123'],
//             'SB',
//             677,
//             '0[01]', , , , , , , ,
//             [[, '(\\d{2})(\\d{5})', '$1 $2', ['[7-9]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         SC: [
//             ,
//             [, , '[2468]\\d{5,6}', '\\d{6,7}'],
//             [, , '4[2-46]\\d{5}', '\\d{7}', , , '4217123'],
//             [, , '2[5-8]\\d{5}', '\\d{7}', , , '2510123'],
//             [, , '8000\\d{2}', '\\d{6}', , , '800000'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '64\\d{5}', '\\d{7}', , , '6412345'],
//             'SC',
//             248,
//             '0[0-2]', , , , , ,
//             '00', ,
//             [
//                 [, '(\\d{3})(\\d{3})', '$1 $2', ['8']],
//                 [, '(\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['[246]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         SD: [
//             ,
//             [, , '[19]\\d{8}', '\\d{9}'],
//             [, , '1(?:[125]\\d|8[3567])\\d{6}', '\\d{9}', , , '121231234'],
//             [, , '9[0-3569]\\d{7}', '\\d{9}', , , '911231234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'SD',
//             249,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [[, '(\\d{2})(\\d{3})(\\d{4})', '$1 $2 $3', , '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         SE: [
//             ,
//             [, , '[1-35-9]\\d{5,11}|4\\d{6,8}', '\\d{6,12}'],
//             [
//                 , ,
//                 '1(?:0[1-8]\\d{6}|[136]\\d{5,7}|(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)\\d{5,6})|2(?:[136]\\d{5,7}|(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])\\d{5,6})|3(?:[356]\\d{5,7}|(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])\\d{5,6})|4(?:[0246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])\\d{5,6}|6(?:[03]\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8\\d{6,8}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})',
//                 '\\d{7,9}', , ,
//                 '8123456'],
//             [, , '7[02369]\\d{7}', '\\d{9}', , , '701234567'],
//             [, , '20\\d{4,7}', '\\d{6,9}', , , '20123456'],
//             [
//                 , ,
//                 '649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}',
//                 '\\d{7,10}', , ,
//                 '9001234567'],
//             [
//                 , ,
//                 '77(?:0\\d{3}(?:\\d{3})?|[1-7]\\d{6})',
//                 '\\d{6}(?:\\d{3})?', , ,
//                 '771234567'],
//             [, , '75[1-8]\\d{6}', '\\d{9}', , , '751234567'],
//             [, , 'NA', 'NA'],
//             'SE',
//             46,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(8)(\\d{2,3})(\\d{2,3})(\\d{2})',
//                     '$1-$2 $3 $4',
//                     ['8'],
//                     '0$1'],
//                 [
//                     ,
//                     '([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})',
//                     '$1-$2 $3 $4',
//                     ['1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90'],
//                     '0$1'],
//                 [
//                     ,
//                     '([1-469]\\d)(\\d{3})(\\d{2})',
//                     '$1-$2 $3',
//                     ['1[136]|2[136]|3[356]|4[0246]|6[03]|90'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1-$2 $3 $4',
//                     ['1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2,3})(\\d{2})',
//                     '$1-$2 $3',
//                     ['1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])'],
//                     '0$1'],
//                 [
//                     ,
//                     '(7\\d)(\\d{3})(\\d{2})(\\d{2})',
//                     '$1-$2 $3 $4',
//                     ['7'],
//                     '0$1'],
//                 [, '(77)(\\d{2})(\\d{2})', '$1-$2$3', ['7'], '0$1'],
//                 [, '(20)(\\d{2,3})(\\d{2})', '$1-$2 $3', ['20'], '0$1'],
//                 [
//                     ,
//                     '(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})',
//                     '$1-$2 $3 $4',
//                     ['9[034]'],
//                     '0$1'],
//                 [, '(9[034]\\d)(\\d{4})', '$1-$2', ['9[034]'], '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
//                     '$1-$2 $3 $4 $5',
//                     ['25[245]|67[3-6]'],
//                     '0$1']],
//             [
//                 [, '(8)(\\d{2,3})(\\d{2,3})(\\d{2})', '$1 $2 $3 $4', ['8']],
//                 [
//                     ,
//                     '([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90']],
//                 [
//                     ,
//                     '([1-469]\\d)(\\d{3})(\\d{2})',
//                     '$1 $2 $3',
//                     ['1[136]|2[136]|3[356]|4[0246]|6[03]|90']],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])']],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2,3})(\\d{2})',
//                     '$1 $2 $3',
//                     ['1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])']],
//                 [, '(7\\d)(\\d{3})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['7']],
//                 [, '(77)(\\d{2})(\\d{2})', '$1 $2 $3', ['7']],
//                 [, '(20)(\\d{2,3})(\\d{2})', '$1 $2 $3', ['20']],
//                 [
//                     ,
//                     '(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})',
//                     '$1 $2 $3 $4',
//                     ['9[034]']],
//                 [, '(9[034]\\d)(\\d{4})', '$1 $2', ['9[034]']],
//                 [
//                     ,
//                     '(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4 $5',
//                     ['25[245]|67[3-6]']]],
//             [, , '74[02-9]\\d{6}', '\\d{9}', , , '740123456'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , '(?:25[245]|67[3-6])\\d{9}', '\\d{12}', , , '254123456789']],
//         SG: [
//             ,
//             [, , '[36]\\d{7}|[17-9]\\d{7,10}', '\\d{8,11}'],
//             [, , '6[1-9]\\d{6}', '\\d{8}', , , '61234567'],
//             [, , '(?:8[1-8]|9[0-8])\\d{6}', '\\d{8}', , , '81234567'],
//             [, , '1?800\\d{7}', '\\d{10,11}', , , '18001234567'],
//             [, , '1900\\d{7}', '\\d{11}', , , '19001234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '3[12]\\d{6}', '\\d{8}', , , '31234567'],
//             'SG',
//             65,
//             '0[0-3]\\d', , , , , , , ,
//             [
//                 [, '([3689]\\d{3})(\\d{4})', '$1 $2', ['[369]|8[1-9]']],
//                 [, '(1[89]00)(\\d{3})(\\d{4})', '$1 $2 $3', ['1[89]']],
//                 [, '(7000)(\\d{4})(\\d{3})', '$1 $2 $3', ['70']],
//                 [, '(800)(\\d{3})(\\d{4})', '$1 $2 $3', ['80']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '7000\\d{7}', '\\d{11}', , , '70001234567'], , ,
//             [, , 'NA', 'NA']],
//         SH: [
//             ,
//             [, , '[256]\\d{4}', '\\d{4,5}'],
//             [, , '2(?:[0-57-9]\\d|6[4-9])\\d{2}', '\\d{5}', , , '22158'],
//             [, , '[56]\\d{4}', '\\d{5}'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '262\\d{2}', '\\d{5}'],
//             'SH',
//             290,
//             '00', , , , , , , , , ,
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         SI: [
//             ,
//             [, , '[1-7]\\d{6,7}|[89]\\d{4,7}', '\\d{5,8}'],
//             [
//                 , ,
//                 '(?:1\\d|[25][2-8]|3[24-8]|4[24-8]|7[3-8])\\d{6}',
//                 '\\d{7,8}', , ,
//                 '11234567'],
//             [
//                 , ,
//                 '(?:[37][01]|4[0139]|51|6[48])\\d{6}',
//                 '\\d{8}', , ,
//                 '31234567'],
//             [, , '80\\d{4,6}', '\\d{6,8}', , , '80123456'],
//             [, , '90\\d{4,6}|89[1-3]\\d{2,5}', '\\d{5,8}', , , '90123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '(?:59|8[1-3])\\d{6}', '\\d{8}', , , '59012345'],
//             'SI',
//             386,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d)(\\d{3})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[12]|3[24-8]|4[24-8]|5[2-8]|7[3-8]'],
//                     '(0$1)'],
//                 [
//                     ,
//                     '([3-7]\\d)(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['[37][01]|4[0139]|51|6'],
//                     '0$1'],
//                 [, '([89][09])(\\d{3,6})', '$1 $2', ['[89][09]'], '0$1'],
//                 [, '([58]\\d{2})(\\d{5})', '$1 $2', ['59|8[1-3]'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         SJ: [
//             ,
//             [, , '0\\d{4}|[4789]\\d{7}', '\\d{5}(?:\\d{3})?'],
//             [, , '79\\d{6}', '\\d{8}', , , '79123456'],
//             [, , '(?:4[015-8]|5[89]|9\\d)\\d{6}', '\\d{8}', , , '41234567'],
//             [, , '80[01]\\d{5}', '\\d{8}', , , '80012345'],
//             [, , '82[09]\\d{5}', '\\d{8}', , , '82012345'],
//             [, , '810(?:0[0-6]|[2-8]\\d)\\d{3}', '\\d{8}', , , '81021234'],
//             [, , '880\\d{5}', '\\d{8}', , , '88012345'],
//             [, , '85[0-5]\\d{5}', '\\d{8}', , , '85012345'],
//             'SJ',
//             47,
//             '00', , , , , , , , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}',
//                 '\\d{5}(?:\\d{3})?', , ,
//                 '01234'],
//             1, ,
//             [, , '81[23]\\d{5}', '\\d{8}', , , '81212345']],
//         SK: [
//             ,
//             [, , '(?:[2-68]\\d{5,8}|9\\d{6,8})', '\\d{6,9}'],
//             [
//                 , ,
//                 '2(?:16\\d{3,4}|\\d{8})|[3-5](?:[1-8]16\\d{2,3}|\\d{8})',
//                 '\\d{6,9}', , ,
//                 '212345678'],
//             [
//                 , ,
//                 '9(?:0[1-8]|1[0-24-9]|4[0489]|50)\\d{6}',
//                 '\\d{9}', , ,
//                 '912123456'],
//             [, , '800\\d{6}', '\\d{9}', , , '800123456'],
//             [, , '9(?:[78]\\d{7}|00\\d{6})', '\\d{9}', , , '900123456'],
//             [, , '8[5-9]\\d{7}', '\\d{9}', , , '850123456'],
//             [, , 'NA', 'NA'],
//             [, , '6(?:02|5[0-4]|9[0-6])\\d{6}', '\\d{9}', , , '690123456'],
//             'SK',
//             421,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(2)(16)(\\d{3,4})', '$1 $2 $3', ['216'], '0$1'],
//                 [, '([3-5]\\d)(16)(\\d{2,3})', '$1 $2 $3', ['[3-5]'], '0$1'],
//                 [, '(2)(\\d{3})(\\d{3})(\\d{2})', '$1/$2 $3 $4', ['2'], '0$1'],
//                 [
//                     ,
//                     '([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})',
//                     '$1/$2 $3 $4',
//                     ['[3-5]'],
//                     '0$1'],
//                 [
//                     ,
//                     '([689]\\d{2})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['[689]'],
//                     '0$1'],
//                 [, '(9090)(\\d{3})', '$1 $2', ['9090'], '0$1']], ,
//             [, , '9090\\d{3}', '\\d{7}', , , '9090123'], , ,
//             [
//                 , ,
//                 '(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}|9090\\d{3}',
//                 '\\d{7,9}', , ,
//                 '800123456'],
//             [, , '96\\d{7}', '\\d{9}', , , '961234567'], , ,
//             [, , 'NA', 'NA']],
//         SL: [
//             ,
//             [, , '[2-9]\\d{7}', '\\d{6,8}'],
//             [, , '[235]2[2-4][2-9]\\d{4}', '\\d{6,8}', , , '22221234'],
//             [
//                 , ,
//                 '(?:2[15]|3[03-5]|4[04]|5[05]|66|7[6-9]|88|99)\\d{6}',
//                 '\\d{6,8}', , ,
//                 '25123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'SL',
//             232,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [[, '(\\d{2})(\\d{6})', '$1 $2', , '(0$1)']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         SM: [
//             ,
//             [, , '[05-7]\\d{7,9}', '\\d{6,10}'],
//             [, , '0549(?:8[0157-9]|9\\d)\\d{4}', '\\d{6,10}', , , '0549886377'],
//             [, , '6[16]\\d{6}', '\\d{8}', , , '66661212'],
//             [, , 'NA', 'NA'],
//             [, , '7[178]\\d{6}', '\\d{8}', , , '71123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '5[158]\\d{6}', '\\d{8}', , , '58001110'],
//             'SM',
//             378,
//             '00', , , ,
//             '(?:0549)?([89]\\d{5})',
//             '0549$1', , ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[5-7]']],
//                 [, '(0549)(\\d{6})', '$1 $2', ['0']],
//                 [, '(\\d{6})', '0549 $1', ['[89]']]],
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[5-7]']],
//                 [, '(0549)(\\d{6})', '($1) $2', ['0']],
//                 [, '(\\d{6})', '(0549) $1', ['[89]']]],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA']],
//         SN: [
//             ,
//             [, , '[3789]\\d{8}', '\\d{9}'],
//             [
//                 , ,
//                 '3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611|90[1-5])\\d{5}',
//                 '\\d{9}', , ,
//                 '301012345'],
//             [
//                 , ,
//                 '7(?:[067]\\d|21|8[0-26]|90)\\d{6}',
//                 '\\d{9}', , ,
//                 '701234567'],
//             [, , '800\\d{6}', '\\d{9}', , , '800123456'],
//             [, , '88[4689]\\d{6}', '\\d{9}', , , '884123456'],
//             [, , '81[02468]\\d{6}', '\\d{9}', , , '810123456'],
//             [, , 'NA', 'NA'],
//             [, , '3392\\d{5}|93330\\d{4}', '\\d{9}', , , '933301234'],
//             'SN',
//             221,
//             '00', , , , , , , ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['[379]']],
//                 [, '(\\d{3})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4', ['8']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         SO: [
//             ,
//             [, , '[1-79]\\d{6,8}', '\\d{7,9}'],
//             [
//                 , ,
//                 '(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|59)\\d{5}',
//                 '\\d{7}', , ,
//                 '4012345'],
//             [
//                 , ,
//                 '(?:15\\d|2(?:4\\d|8)|6[1-35-9]?\\d{2}|7(?:[1-8]\\d|99?\\d)|9(?:0[67]|[2-9])\\d)\\d{5}',
//                 '\\d{7,9}', , ,
//                 '71123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'SO',
//             252,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(\\d)(\\d{6})', '$1 $2', ['2[0-79]|[13-5]']],
//                 [, '(\\d)(\\d{7})', '$1 $2', ['24|[67]']],
//                 [
//                     ,
//                     '(\\d{2})(\\d{5,7})',
//                     '$1 $2',
//                     ['15|28|6[1-35-9]|799|9[2-9]']],
//                 [, '(90\\d)(\\d{3})(\\d{3})', '$1 $2 $3', ['90']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         SR: [
//             ,
//             [, , '[2-8]\\d{5,6}', '\\d{6,7}'],
//             [
//                 , ,
//                 '(?:2[1-3]|3[0-7]|4\\d|5[2-58]|68\\d)\\d{4}',
//                 '\\d{6,7}', , ,
//                 '211234'],
//             [, , '(?:7[124-7]|8[1-9])\\d{5}', '\\d{7}', , , '7412345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '5(?:6\\d{4}|90[0-4]\\d{3})', '\\d{6,7}', , , '561234'],
//             'SR',
//             597,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{3})(\\d{3})', '$1-$2', ['[2-4]|5[2-58]']],
//                 [, '(\\d{2})(\\d{2})(\\d{2})', '$1-$2-$3', ['56']],
//                 [, '(\\d{3})(\\d{4})', '$1-$2', ['59|[6-8]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         SS: [
//             ,
//             [, , '[19]\\d{8}', '\\d{9}'],
//             [, , '18\\d{7}', '\\d{9}', , , '181234567'],
//             [, , '(?:12|9[1257])\\d{7}', '\\d{9}', , , '977123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'SS',
//             211,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [[, '(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', , '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         ST: [
//             ,
//             [, , '[29]\\d{6}', '\\d{7}'],
//             [, , '22\\d{5}', '\\d{7}', , , '2221234'],
//             [
//                 , ,
//                 '9(?:0(?:0[5-9]|[1-9]\\d)|[89]\\d{2})\\d{3}',
//                 '\\d{7}', , ,
//                 '9812345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'ST',
//             239,
//             '00', , , , , , , ,
//             [[, '(\\d{3})(\\d{4})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         SV: [
//             ,
//             [, , '[267]\\d{7}|[89]\\d{6}(?:\\d{4})?', '\\d{7,8}|\\d{11}'],
//             [, , '2[1-6]\\d{6}', '\\d{8}', , , '21234567'],
//             [, , '[67]\\d{7}', '\\d{8}', , , '70123456'],
//             [, , '800\\d{4}(?:\\d{4})?', '\\d{7}(?:\\d{4})?', , , '8001234'],
//             [, , '900\\d{4}(?:\\d{4})?', '\\d{7}(?:\\d{4})?', , , '9001234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'SV',
//             503,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{4})(\\d{4})', '$1 $2', ['[267]']],
//                 [, '(\\d{3})(\\d{4})', '$1 $2', ['[89]']],
//                 [, '(\\d{3})(\\d{4})(\\d{4})', '$1 $2 $3', ['[89]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         SX: [
//             ,
//             [, , '[5789]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '7215(?:4[2-8]|8[239]|9[056])\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '7215425678'],
//             [
//                 , ,
//                 '7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}',
//                 '\\d{10}', , ,
//                 '7215205678'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002123456'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002123456'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'SX',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '721',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         SY: [
//             ,
//             [, , '[1-59]\\d{7,8}', '\\d{6,9}'],
//             [
//                 , ,
//                 '(?:1(?:1\\d?|4\\d|[2356])|2(?:1\\d?|[235])|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}',
//                 '\\d{6,9}', , ,
//                 '112345678'],
//             [
//                 , ,
//                 '9(?:22|[35][0-8]|4\\d|6[024-9]|88|9[0-489])\\d{6}',
//                 '\\d{9}', , ,
//                 '944567890'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'SY',
//             963,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{3,4})',
//                     '$1 $2 $3',
//                     ['[1-5]'],
//                     '0$1', ,
//                     1],
//                 [
//                     ,
//                     '(9\\d{2})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['9'],
//                     '0$1', ,
//                     1]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         SZ: [
//             ,
//             [, , '[027]\\d{7}', '\\d{8}'],
//             [, , '2[2-5]\\d{6}', '\\d{8}', , , '22171234'],
//             [, , '7[6-8]\\d{6}', '\\d{8}', , , '76123456'],
//             [, , '0800\\d{4}', '\\d{8}', , , '08001234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'SZ',
//             268,
//             '00', , , , , , , ,
//             [[, '(\\d{4})(\\d{4})', '$1 $2', ['[027]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , '0800\\d{4}', '\\d{8}', , , '08001234'],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA']],
//         TA: [
//             ,
//             [, , '8\\d{3}', '\\d{4}'],
//             [, , '8\\d{3}', '\\d{4}', , , '8999'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'TA',
//             290,
//             '00', , , , , , , , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         TC: [
//             ,
//             [, , '[5689]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '649(?:712|9(?:4\\d|50))\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '6497121234'],
//             [
//                 , ,
//                 '649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-7])|4[34][1-3])\\d{4}',
//                 '\\d{10}', , ,
//                 '6492311234'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002345678'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002345678'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , '64971[01]\\d{4}', '\\d{10}', , , '6497101234'],
//             'TC',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '649',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         TD: [
//             ,
//             [, , '[2679]\\d{7}', '\\d{8}'],
//             [, , '22(?:[3789]0|5[0-5]|6[89])\\d{4}', '\\d{8}', , , '22501234'],
//             [
//                 , ,
//                 '(?:6[023568]\\d|77\\d|9\\d{2})\\d{5}',
//                 '\\d{8}', , ,
//                 '63012345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'TD',
//             235,
//             '00|16', , , , , ,
//             '00', ,
//             [[, '(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         TG: [
//             ,
//             [, , '[29]\\d{7}', '\\d{8}'],
//             [
//                 , ,
//                 '2(?:2[2-7]|3[23]|44|55|66|77)\\d{5}',
//                 '\\d{8}', , ,
//                 '22212345'],
//             [, , '9[0-389]\\d{6}', '\\d{8}', , , '90112345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'TG',
//             228,
//             '00', , , , , , , ,
//             [[, '(\\d{2})(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3 $4']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         TH: [
//             ,
//             [, , '[2-9]\\d{7,8}|1\\d{3}(?:\\d{5,6})?', '\\d{4}|\\d{8,10}'],
//             [
//                 , ,
//                 '(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}',
//                 '\\d{8}', , ,
//                 '21234567'],
//             [, , '(?:14|6[1-3]|[89]\\d)\\d{7}', '\\d{9}', , , '812345678'],
//             [, , '1800\\d{6}', '\\d{10}', , , '1800123456'],
//             [, , '1900\\d{6}', '\\d{10}', , , '1900123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '6[08]\\d{7}', '\\d{9}', , , '601234567'],
//             'TH',
//             66,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(2)(\\d{3})(\\d{4})', '$1 $2 $3', ['2'], '0$1'],
//                 [
//                     ,
//                     '([13-9]\\d)(\\d{3})(\\d{3,4})',
//                     '$1 $2 $3',
//                     ['14|[3-9]'],
//                     '0$1'],
//                 [, '(1[89]00)(\\d{3})(\\d{3})', '$1 $2 $3', ['1'], '$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , '1\\d{3}', '\\d{4}', , , '1100'],
//             [, , '1\\d{3}', '\\d{4}', , , '1100'], , ,
//             [, , 'NA', 'NA']],
//         TJ: [
//             ,
//             [, , '[3-589]\\d{8}', '\\d{3,9}'],
//             [
//                 , ,
//                 '(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}',
//                 '\\d{3,9}', , ,
//                 '372123456'],
//             [
//                 , ,
//                 '(?:41[18]|50[125]|88\\d|9[0-35-9]\\d)\\d{6}',
//                 '\\d{9}', , ,
//                 '917123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'TJ',
//             992,
//             '810',
//             '8', , ,
//             '8', ,
//             '8~10', ,
//             [
//                 [
//                     ,
//                     '([349]\\d{2})(\\d{2})(\\d{4})',
//                     '$1 $2 $3',
//                     ['[34]7|91[78]'],
//                     '(8) $1', ,
//                     1],
//                 [
//                     ,
//                     '([4589]\\d)(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['4[148]|[58]|9(?:1[59]|[0235-9])'],
//                     '(8) $1', ,
//                     1],
//                 [
//                     ,
//                     '(331700)(\\d)(\\d{2})',
//                     '$1 $2 $3',
//                     ['331', '3317', '33170', '331700'],
//                     '(8) $1', ,
//                     1],
//                 [
//                     ,
//                     '(\\d{4})(\\d)(\\d{4})',
//                     '$1 $2 $3',
//                     ['3[1-5]', '3(?:[1245]|3(?:[02-9]|1[0-589]))'],
//                     '(8) $1', ,
//                     1]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         TK: [
//             ,
//             [, , '[2-47]\\d{3,6}', '\\d{4,7}'],
//             [, , '(?:2[2-4]|[34]\\d)\\d{2,5}', '\\d{4,7}', , , '3101'],
//             [, , '7[2-4]\\d{2,5}', '\\d{4,7}', , , '7290'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'TK',
//             690,
//             '00', , , , , , , , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         TL: [
//             ,
//             [, , '[2-489]\\d{6}|7\\d{6,7}', '\\d{7,8}'],
//             [, , '(?:2[1-5]|3[1-9]|4[1-4])\\d{5}', '\\d{7}', , , '2112345'],
//             [, , '7[3-8]\\d{6}', '\\d{8}', , , '77212345'],
//             [, , '80\\d{5}', '\\d{7}', , , '8012345'],
//             [, , '90\\d{5}', '\\d{7}', , , '9012345'],
//             [, , 'NA', 'NA'],
//             [, , '70\\d{5}', '\\d{7}', , , '7012345'],
//             [, , 'NA', 'NA'],
//             'TL',
//             670,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{3})(\\d{4})', '$1 $2', ['[2-489]']],
//                 [, '(\\d{4})(\\d{4})', '$1 $2', ['7']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         TM: [
//             ,
//             [, , '[1-6]\\d{7}', '\\d{8}'],
//             [
//                 , ,
//                 '(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}',
//                 '\\d{8}', , ,
//                 '12345678'],
//             [, , '6[1-9]\\d{6}', '\\d{8}', , , '66123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'TM',
//             993,
//             '810',
//             '8', , ,
//             '8', ,
//             '8~10', ,
//             [
//                 [
//                     ,
//                     '(\\d{2})(\\d{2})(\\d{2})(\\d{2})',
//                     '$1 $2-$3-$4',
//                     ['12'],
//                     '(8 $1)'],
//                 [, '(\\d{2})(\\d{6})', '$1 $2', ['6'], '8 $1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d)(\\d{2})(\\d{2})',
//                     '$1 $2-$3-$4',
//                     ['13|[2-5]'],
//                     '(8 $1)']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         TN: [
//             ,
//             [, , '[2-57-9]\\d{7}', '\\d{8}'],
//             [
//                 , ,
//                 '3(?:[012]\\d|6[0-4]|91)\\d{5}|7\\d{7}|81200\\d{3}',
//                 '\\d{8}', , ,
//                 '71234567'],
//             [, , '(?:[259]\\d|4[0-6])\\d{6}', '\\d{8}', , , '20123456'],
//             [, , '8010\\d{4}', '\\d{8}', , , '80101234'],
//             [, , '88\\d{6}', '\\d{8}', , , '88123456'],
//             [, , '8[12]10\\d{4}', '\\d{8}', , , '81101234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'TN',
//             216,
//             '00', , , , , , , ,
//             [[, '(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         TO: [
//             ,
//             [, , '[02-8]\\d{4,6}', '\\d{5,7}'],
//             [
//                 , ,
//                 '(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}',
//                 '\\d{5}', , ,
//                 '20123'],
//             [, , '(?:7[578]|8[47-9])\\d{5}', '\\d{7}', , , '7715123'],
//             [, , '0800\\d{3}', '\\d{7}', , , '0800222'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'TO',
//             676,
//             '00', , , , , , , ,
//             [
//                 [, '(\\d{2})(\\d{3})', '$1-$2', ['[1-6]|7[0-4]|8[05]']],
//                 [, '(\\d{3})(\\d{4})', '$1 $2', ['7[5-9]|8[47-9]']],
//                 [, '(\\d{4})(\\d{3})', '$1 $2', ['0']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA']],
//         TR: [
//             ,
//             [, , '[2-589]\\d{9}|444\\d{4}', '\\d{7,10}'],
//             [
//                 , ,
//                 '(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}',
//                 '\\d{10}', , ,
//                 '2123456789'],
//             [
//                 , ,
//                 '5(?:0[1-7]|22|[34]\\d|5[1-59]|9[246])\\d{7}',
//                 '\\d{10}', , ,
//                 '5012345678'],
//             [, , '800\\d{7}', '\\d{10}', , , '8001234567'],
//             [, , '900\\d{7}', '\\d{10}', , , '9001234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'TR',
//             90,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['[23]|4(?:[0-35-9]|4[0-35-9])'],
//                     '(0$1)', ,
//                     1],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['[589]'],
//                     '0$1', ,
//                     1],
//                 [, '(444)(\\d{1})(\\d{3})', '$1 $2 $3', ['444']]], ,
//             [, , '512\\d{7}', '\\d{10}', , , '5123456789'], , ,
//             [, , '444\\d{4}', '\\d{7}', , , '4441444'],
//             [, , '444\\d{4}|850\\d{7}', '\\d{7,10}', , , '4441444'], , ,
//             [, , 'NA', 'NA']],
//         TT: [
//             ,
//             [, , '[589]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '868(?:2(?:01|2[1-6]|3[1-5])|6(?:0[79]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '8682211234'],
//             [
//                 , ,
//                 '868(?:2(?:[789]\\d)|3(?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}',
//                 '\\d{10}', , ,
//                 '8682911234'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002345678'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002345678'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'TT',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '868',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , '868619\\d{4}', '\\d{10}']],
//         TV: [
//             ,
//             [, , '[279]\\d{4,6}', '\\d{5,7}'],
//             [, , '2[02-9]\\d{3}', '\\d{5}', , , '20123'],
//             [, , '(?:70\\d|90)\\d{4}', '\\d{6,7}', , , '901234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'TV',
//             688,
//             '00', , , , , , , , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         TW: [
//             ,
//             [, , '[2-689]\\d{7,8}|7\\d{7,9}', '\\d{8,10}'],
//             [, , '[2-8]\\d{7,8}', '\\d{8,9}', , , '21234567'],
//             [, , '9\\d{8}', '\\d{9}', , , '912345678'],
//             [, , '800\\d{6}', '\\d{9}', , , '800123456'],
//             [, , '900\\d{6}', '\\d{9}', , , '900123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '70\\d{8}', '\\d{10}', , , '7012345678'],
//             'TW',
//             886,
//             '0(?:0[25679]|19)',
//             '0',
//             '#', ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '([2-8])(\\d{3,4})(\\d{4})',
//                     '$1 $2 $3',
//                     ['[2-6]|[78][1-9]'],
//                     '0$1'],
//                 [, '([89]\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['80|9'], '0$1'],
//                 [, '(70)(\\d{4})(\\d{4})', '$1 $2 $3', ['70'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         TZ: [
//             ,
//             [, , '\\d{9}', '\\d{7,9}'],
//             [, , '2[2-8]\\d{7}', '\\d{7,9}', , , '222345678'],
//             [, , '(?:6[25-8]|7[13-9])\\d{7}', '\\d{9}', , , '621234567'],
//             [, , '80[08]\\d{6}', '\\d{9}', , , '800123456'],
//             [, , '90\\d{7}', '\\d{9}', , , '900123456'],
//             [, , '8(?:40|6[01])\\d{6}', '\\d{9}', , , '840123456'],
//             [, , 'NA', 'NA'],
//             [, , '41\\d{7}', '\\d{9}', , , '412345678'],
//             'TZ',
//             255,
//             '00[056]',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '([24]\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['[24]'], '0$1'],
//                 [, '([67]\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['[67]'], '0$1'],
//                 [
//                     ,
//                     '([89]\\d{2})(\\d{2})(\\d{4})',
//                     '$1 $2 $3',
//                     ['[89]'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         UA: [
//             ,
//             [, , '[3-9]\\d{8}', '\\d{5,9}'],
//             [
//                 , ,
//                 '(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}',
//                 '\\d{5,9}', , ,
//                 '311234567'],
//             [
//                 , ,
//                 '(?:39|50|6[36-8]|73|9[1-9])\\d{7}',
//                 '\\d{9}', , ,
//                 '391234567'],
//             [, , '800\\d{6}', '\\d{9}', , , '800123456'],
//             [, , '900\\d{6}', '\\d{9}', , , '900123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '89\\d{7}', '\\d{9}', , , '891234567'],
//             'UA',
//             380,
//             '00',
//             '0', , ,
//             '0', ,
//             '0~0', ,
//             [
//                 [
//                     ,
//                     '([3-9]\\d)(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     [
//                         '[38]9|4(?:[45][0-5]|87)|5(?:0|6[37]|7[37])|6[36-8]|73|9[1-9]',
//                         '[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|73|9[1-9]'],
//                     '0$1'],
//                 [
//                     ,
//                     '([3-689]\\d{2})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     [
//                         '3[1-8]2|4[13678]2|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90',
//                         '3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90'],
//                     '0$1'],
//                 [
//                     ,
//                     '([3-6]\\d{3})(\\d{5})',
//                     '$1 $2',
//                     [
//                         '3(?:5[013-9]|[1-46-8])|4(?:[137][013-9]|6|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6[0135-9]|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])',
//                         '3(?:5[013-9]|[1-46-8](?:22|[013-9]))|4(?:[137][013-9]|6(?:[013-9]|22)|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6(?:3[02389]|[015689])|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         UG: [
//             ,
//             [, , '\\d{9}', '\\d{5,9}'],
//             [
//                 , ,
//                 '20(?:[0147]\\d{2}|2(?:40|[5-9]\\d)|3[23]\\d|5[0-4]\\d|6[03]\\d|8[0-2]\\d)\\d{4}|[34]\\d{8}',
//                 '\\d{5,9}', , ,
//                 '312345678'],
//             [
//                 , ,
//                 '2030\\d{5}|7(?:0[0-7]|[15789]\\d|2[03]|30|[46][0-4])\\d{6}',
//                 '\\d{9}', , ,
//                 '712345678'],
//             [, , '800[123]\\d{5}', '\\d{9}', , , '800123456'],
//             [, , '90[123]\\d{6}', '\\d{9}', , , '901123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'UG',
//             256,
//             '00[057]',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '(\\d{3})(\\d{6})',
//                     '$1 $2',
//                     ['[7-9]|20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{7})',
//                     '$1 $2',
//                     ['3|4(?:[1-5]|6[0-36-9])'],
//                     '0$1'],
//                 [, '(2024)(\\d{5})', '$1 $2', ['2024'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         US: [
//             ,
//             [, , '[2-9]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '(?:2(?:0[1-35-9]|1[02-9]|2[04589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|69|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[12])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[01678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '2015555555'],
//             [
//                 , ,
//                 '(?:2(?:0[1-35-9]|1[02-9]|2[04589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|69|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[12])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[01678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '2015555555'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002345678'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002345678'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'US',
//             1,
//             '011',
//             '1', , ,
//             '1', , ,
//             1,
//             [
//                 [, '(\\d{3})(\\d{4})', '$1-$2', , , , 1],
//                 [, '(\\d{3})(\\d{3})(\\d{4})', '($1) $2-$3', , , , 1]],
//             [[, '(\\d{3})(\\d{3})(\\d{4})', '$1-$2-$3']],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         UY: [
//             ,
//             [, , '[2489]\\d{6,7}', '\\d{7,8}'],
//             [, , '2\\d{7}|4[2-7]\\d{6}', '\\d{7,8}', , , '21231234'],
//             [, , '9[1-9]\\d{6}', '\\d{8}', , , '94231234'],
//             [, , '80[05]\\d{4}', '\\d{7}', , , '8001234'],
//             [, , '90[0-8]\\d{4}', '\\d{7}', , , '9001234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'UY',
//             598,
//             '0(?:1[3-9]\\d|0)',
//             '0',
//             ' int. ', ,
//             '0', ,
//             '00', ,
//             [
//                 [, '(\\d{4})(\\d{4})', '$1 $2', ['[24]']],
//                 [, '(\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['9[1-9]'], '0$1'],
//                 [, '(\\d{3})(\\d{4})', '$1 $2', ['[89]0'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         UZ: [
//             ,
//             [, , '[679]\\d{8}', '\\d{7,9}'],
//             [
//                 , ,
//                 '(?:6(?:1(?:22|3[124]|4[1-4]|5[123578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d{2}|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[12456]|9[135-8])|1[12]\\d|2(?:22|3[1345789]|4[123579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}',
//                 '\\d{7,9}', , ,
//                 '662345678'],
//             [
//                 , ,
//                 '6(?:1(?:2(?:98|2[01])|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:11\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4])|7\\d{2})|5(?:19[01]|2(?:27|9[26])|30\\d|59\\d|7\\d{2})|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|3[79]\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79])|9[0-3]\\d)|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|5\\d|3[01]|7[0-4])|5[67]\\d|6(?:2[0-26]|8\\d)|7\\d{2}))\\d{4}|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|33\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078])|9[4-6]\\d)|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0127]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[05629]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))\\d{4}|9[0-57-9]\\d{7}',
//                 '\\d{7,9}', , ,
//                 '912345678'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'UZ',
//             998,
//             '810',
//             '8', , ,
//             '8', ,
//             '8~10', ,
//             [
//                 [
//                     ,
//                     '([679]\\d)(\\d{3})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4', ,
//                     '8 $1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         VA: [
//             ,
//             [
//                 , ,
//                 '(?:0(?:878\\d{5}|6698\\d{5})|[1589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9}))',
//                 '\\d{6,11}'],
//             [, , '06698\\d{5}', '\\d{10}', , , '0669812345'],
//             [
//                 , ,
//                 '3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})',
//                 '\\d{9,11}', , ,
//                 '3123456789'],
//             [, , '80(?:0\\d{6}|3\\d{3})', '\\d{6,9}', , , '800123456'],
//             [
//                 , ,
//                 '0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})',
//                 '\\d{6,10}', , ,
//                 '899123456'],
//             [, , '84(?:[08]\\d{6}|[17]\\d{3})', '\\d{6,9}', , , '848123456'],
//             [, , '1(?:78\\d|99)\\d{6}', '\\d{9,10}', , , '1781234567'],
//             [, , '55\\d{8}', '\\d{10}', , , '5512345678'],
//             'VA',
//             39,
//             '00', , , , , , , , , ,
//             [, , 'NA', 'NA'], , ,
//             [, , '848\\d{6}', '\\d{9}', , , '848123456'],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA']],
//         VC: [
//             ,
//             [, , '[5789]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '7842661234'],
//             [
//                 , ,
//                 '784(?:4(?:3[0-4]|5[45]|89|9[0-58])|5(?:2[6-9]|3[0-4]))\\d{4}',
//                 '\\d{10}', , ,
//                 '7844301234'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002345678'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002345678'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'VC',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '784',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         VE: [
//             ,
//             [, , '[24589]\\d{9}', '\\d{7,10}'],
//             [
//                 , ,
//                 '(?:2(?:12|3[457-9]|[58][1-9]|[467]\\d|9[1-6])|50[01])\\d{7}',
//                 '\\d{7,10}', , ,
//                 '2121234567'],
//             [, , '4(?:1[24-8]|2[46])\\d{7}', '\\d{10}', , , '4121234567'],
//             [, , '800\\d{7}', '\\d{10}', , , '8001234567'],
//             [, , '900\\d{7}', '\\d{10}', , , '9001234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'VE',
//             58,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [[, '(\\d{3})(\\d{7})', '$1-$2', , '0$1', '$CC $1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         VG: [
//             ,
//             [, , '[2589]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '284(?:(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}|496[0-5]\\d{3})',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '2842291234'],
//             [
//                 , ,
//                 '284(?:(?:3(?:0[0-3]|4[0-367]|94)|4(?:4[0-6]|68|99)|54[0-57])\\d{4}|496[6-9]\\d{3})',
//                 '\\d{10}', , ,
//                 '2843001234'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002345678'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002345678'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'VG',
//             1,
//             '011',
//             '1', , ,
//             '1', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '284',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         VI: [
//             ,
//             [, , '[3589]\\d{9}', '\\d{7}(?:\\d{3})?'],
//             [
//                 , ,
//                 '340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-589]|27|7\\d)|884|998)\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '3406421234'],
//             [
//                 , ,
//                 '340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-589]|27|7\\d)|884|998)\\d{4}',
//                 '\\d{7}(?:\\d{3})?', , ,
//                 '3406421234'],
//             [
//                 , ,
//                 '8(?:00|44|55|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '8002345678'],
//             [, , '900[2-9]\\d{6}', '\\d{10}', , , '9002345678'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '5(?:00|33|44|66|77|88)[2-9]\\d{6}',
//                 '\\d{10}', , ,
//                 '5002345678'],
//             [, , 'NA', 'NA'],
//             'VI',
//             1,
//             '011',
//             '1', , ,
//             '1', , ,
//             1, , ,
//             [, , 'NA', 'NA'], ,
//             '340',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         VN: [
//             ,
//             [, , '[17]\\d{6,9}|[2-69]\\d{7,9}|8\\d{6,8}', '\\d{7,10}'],
//             [
//                 , ,
//                 '(?:2(?:[025-79]|1[0189]|[348][01])|3(?:[0136-9]|[25][01])|4\\d|5(?:[01][01]|[2-9])|6(?:[0-46-8]|5[01])|7(?:[02-79]|[18][01]))\\d{7}|8(?:[1-57]\\d|[689][0-79])\\d{6}',
//                 '\\d{9,10}', , ,
//                 '2101234567'],
//             [
//                 , ,
//                 '(?:9\\d|1(?:2\\d|6[2-9]|8[68]|99))\\d{7}|8[689]8\\d{6}',
//                 '\\d{9,10}', , ,
//                 '912345678'],
//             [, , '1800\\d{4,6}', '\\d{8,10}', , , '1800123456'],
//             [, , '1900\\d{4,6}', '\\d{8,10}', , , '1900123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'VN',
//             84,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '([17]99)(\\d{4})', '$1 $2', ['[17]99'], '0$1', , 1],
//                 [
//                     ,
//                     '([48])(\\d{4})(\\d{4})',
//                     '$1 $2 $3',
//                     ['4|8(?:[1-57]|[689][0-79])'],
//                     '0$1', ,
//                     1],
//                 [
//                     ,
//                     '([235-7]\\d)(\\d{4})(\\d{3})',
//                     '$1 $2 $3',
//                     ['2[025-79]|3[0136-9]|5[2-9]|6[0-46-8]|7[02-79]'],
//                     '0$1', ,
//                     1],
//                 [, '(80)(\\d{5})', '$1 $2', ['80'], '0$1', , 1],
//                 [, '(69\\d)(\\d{4,5})', '$1 $2', ['69'], '0$1', , 1],
//                 [
//                     ,
//                     '([235-7]\\d{2})(\\d{4})(\\d{3})',
//                     '$1 $2 $3',
//                     ['2[1348]|3[25]|5[01]|65|7[18]'],
//                     '0$1', ,
//                     1],
//                 [
//                     ,
//                     '([89]\\d)(\\d{3})(\\d{2})(\\d{2})',
//                     '$1 $2 $3 $4',
//                     ['8[689]8|9'],
//                     '0$1', ,
//                     1],
//                 [
//                     ,
//                     '(1[2689]\\d)(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['1(?:[26]|8[68]|99)'],
//                     '0$1', ,
//                     1],
//                 [, '(1[89]00)(\\d{4,6})', '$1 $2', ['1[89]0'], '$1', , 1]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , '[17]99\\d{4}|69\\d{5,6}', '\\d{7,8}', , , '1992000'],
//             [
//                 , ,
//                 '[17]99\\d{4}|69\\d{5,6}|80\\d{5}',
//                 '\\d{7,8}', , ,
//                 '1992000'], , ,
//             [, , 'NA', 'NA']],
//         VU: [
//             ,
//             [, , '[2-57-9]\\d{4,6}', '\\d{5,7}'],
//             [
//                 , ,
//                 '(?:2[02-9]\\d|3(?:[5-7]\\d|8[0-8])|48[4-9]|88\\d)\\d{2}',
//                 '\\d{5}', , ,
//                 '22123'],
//             [
//                 , ,
//                 '(?:5(?:7[2-5]|[0-689]\\d)|7[013-7]\\d)\\d{4}',
//                 '\\d{7}', , ,
//                 '5912345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'VU',
//             678,
//             '00', , , , , , , ,
//             [[, '(\\d{3})(\\d{4})', '$1 $2', ['[579]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '3[03]\\d{3}|900\\d{4}', '\\d{5,7}', , , '30123'], , ,
//             [, , 'NA', 'NA']],
//         WF: [
//             ,
//             [, , '[4-8]\\d{5}', '\\d{6}'],
//             [, , '(?:50|68|72)\\d{4}', '\\d{6}', , , '501234'],
//             [, , '(?:50|68|72|8[23])\\d{4}', '\\d{6}', , , '501234'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'WF',
//             681,
//             '00', , , , , , , ,
//             [[, '(\\d{2})(\\d{2})(\\d{2})', '$1 $2 $3']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , '[48]0\\d{4}', '\\d{6}', , , '401234']],
//         WS: [
//             ,
//             [, , '[2-8]\\d{4,6}', '\\d{5,7}'],
//             [, , '(?:[2-5]\\d|6[1-9]|84\\d{2})\\d{3}', '\\d{5,7}', , , '22123'],
//             [, , '(?:60|7[25-7]\\d)\\d{4}', '\\d{6,7}', , , '601234'],
//             [, , '800\\d{3}', '\\d{6}', , , '800123'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'WS',
//             685,
//             '0', , , , , , , ,
//             [
//                 [, '(8\\d{2})(\\d{3,4})', '$1 $2', ['8']],
//                 [, '(7\\d)(\\d{5})', '$1 $2', ['7']],
//                 [, '(\\d{5})', '$1', ['[2-6]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         YE: [
//             ,
//             [, , '[1-7]\\d{6,8}', '\\d{6,9}'],
//             [
//                 , ,
//                 '(?:1(?:7\\d|[2-68])|2[2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}',
//                 '\\d{6,8}', , ,
//                 '1234567'],
//             [, , '7[0137]\\d{7}', '\\d{9}', , , '712345678'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'YE',
//             967,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [
//                     ,
//                     '([1-7])(\\d{3})(\\d{3,4})',
//                     '$1 $2 $3',
//                     ['[1-6]|7[24-68]'],
//                     '0$1'],
//                 [
//                     ,
//                     '(7\\d{2})(\\d{3})(\\d{3})',
//                     '$1 $2 $3',
//                     ['7[0137]'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         YT: [
//             ,
//             [, , '[268]\\d{8}', '\\d{9}'],
//             [, , '269(?:6[0-4]|50)\\d{4}', '\\d{9}', , , '269601234'],
//             [, , '639\\d{6}', '\\d{9}', , , '639123456'],
//             [, , '80\\d{7}', '\\d{9}', , , '801234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'YT',
//             262,
//             '00',
//             '0', , ,
//             '0', , , , , ,
//             [, , 'NA', 'NA'], ,
//             '269|63',
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         ZA: [
//             ,
//             [, , '[1-79]\\d{8}|8(?:[067]\\d{7}|[1-4]\\d{3,7})', '\\d{5,9}'],
//             [
//                 , ,
//                 '(?:1[0-8]|2[0-378]|3[1-69]|4\\d|5[1346-8])\\d{7}',
//                 '\\d{9}', , ,
//                 '101234567'],
//             [
//                 , ,
//                 '(?:6[0-5]|7[0-46-9])\\d{7}|8[1-4]\\d{3,7}',
//                 '\\d{5,9}', , ,
//                 '711234567'],
//             [, , '80\\d{7}', '\\d{9}', , , '801234567'],
//             [, , '86[2-9]\\d{6}|90\\d{7}', '\\d{9}', , , '862345678'],
//             [, , '860\\d{6}', '\\d{9}', , , '860123456'],
//             [, , 'NA', 'NA'],
//             [, , '87\\d{7}', '\\d{9}', , , '871234567'],
//             'ZA',
//             27,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '(860)(\\d{3})(\\d{3})', '$1 $2 $3', ['860'], '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{4})',
//                     '$1 $2 $3',
//                     ['[1-79]|8(?:[0-47]|6[1-9])'],
//                     '0$1'],
//                 [, '(\\d{2})(\\d{3,4})', '$1 $2', ['8[1-4]'], '0$1'],
//                 [
//                     ,
//                     '(\\d{2})(\\d{3})(\\d{2,3})',
//                     '$1 $2 $3',
//                     ['8[1-4]'],
//                     '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '861\\d{6}', '\\d{9}', , , '861123456'], , ,
//             [, , 'NA', 'NA']],
//         ZM: [
//             ,
//             [, , '[289]\\d{8}', '\\d{9}'],
//             [, , '21[1-8]\\d{6}', '\\d{9}', , , '211234567'],
//             [, , '9(?:5[05]|6\\d|7[1-9])\\d{6}', '\\d{9}', , , '955123456'],
//             [, , '800\\d{6}', '\\d{9}', , , '800123456'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             'ZM',
//             260,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '([29]\\d)(\\d{7})', '$1 $2', ['[29]'], '0$1'],
//                 [, '(800)(\\d{3})(\\d{3})', '$1 $2 $3', ['8'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         ZW: [
//             ,
//             [
//                 , ,
//                 '2(?:[012457-9]\\d{3,8}|6(?:[14]\\d{7}|\\d{4}))|[13-79]\\d{4,9}|8[06]\\d{8}',
//                 '\\d{3,10}'],
//             [
//                 , ,
//                 '(?:2(?:0(?:4\\d|5\\d{2})|2[278]\\d|48\\d|7(?:[1-7]\\d|[089]\\d{2})|8(?:[2-57-9]|[146]\\d{2})|98)|3(?:08|17|3[78]|7(?:[19]|[56]\\d)|8[37]|98)|5[15][78]|6(?:28\\d{2}|[36]7|75\\d|[69]8|8(?:7\\d|8)))\\d{3}|(?:2(?:1[39]|2[0157]|6[14]|7[35]|84)|329)\\d{7}|(?:1(?:3\\d{2}|9\\d|[4-8])|2(?:0\\d{2}|[569]\\d)|3(?:[26]|[013459]\\d)|5(?:0|5\\d{2}|[689]\\d)|6(?:[39]|[01246]\\d|[78]\\d{2}))\\d{3}|(?:29\\d|39|54)\\d{6}|(?:(?:25|54)83|2582\\d)\\d{3}|(?:4\\d{6,7}|9[2-9]\\d{4,5})',
//                 '\\d{3,10}', , ,
//                 '1312345'],
//             [, , '7[1378]\\d{7}', '\\d{9}', , , '711234567'],
//             [, , '800\\d{7}', '\\d{10}', , , '8001234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '86(?:1[12]|30|44|55|77|8[367]|99)\\d{6}',
//                 '\\d{10}', , ,
//                 '8686123456'],
//             'ZW',
//             263,
//             '00',
//             '0', , ,
//             '0', , , ,
//             [
//                 [, '([49])(\\d{3})(\\d{2,4})', '$1 $2 $3', ['4|9[2-9]'], '0$1'],
//                 [, '(7\\d)(\\d{3})(\\d{3,4})', '$1 $2 $3', ['7'], '0$1'],
//                 [, '(86\\d{2})(\\d{3})(\\d{3})', '$1 $2 $3', ['86[24]'], '0$1'],
//                 [
//                     ,
//                     '([2356]\\d{2})(\\d{3,5})',
//                     '$1 $2',
//                     ['2(?:0[45]|2[278]|[49]8|[78])|3(?:08|17|3[78]|7[1569]|8[37]|98)|5[15][78]|6(?:[29]8|[38]7|6[78]|75|[89]8)'],
//                     '0$1'],
//                 [
//                     ,
//                     '(\\d{3})(\\d{3})(\\d{3,4})',
//                     '$1 $2 $3',
//                     ['2(?:1[39]|2[0157]|6[14]|7[35]|84)|329'],
//                     '0$1'],
//                 [
//                     ,
//                     '([1-356]\\d)(\\d{3,5})',
//                     '$1 $2',
//                     ['1[3-9]|2[0569]|3[0-69]|5[05689]|6[0-46-9]'],
//                     '0$1'],
//                 [
//                     ,
//                     '([235]\\d)(\\d{3})(\\d{3,4})',
//                     '$1 $2 $3',
//                     ['[23]9|54'],
//                     '0$1'],
//                 [
//                     ,
//                     '([25]\\d{3})(\\d{3,5})',
//                     '$1 $2',
//                     ['(?:25|54)8', '258[23]|5483'],
//                     '0$1'],
//                 [, '(8\\d{3})(\\d{6})', '$1 $2', ['86'], '0$1'],
//                 [, '(80\\d)(\\d{3})(\\d{4})', '$1 $2 $3', ['80'], '0$1']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         800: [
//             ,
//             [, , '\\d{8}', '\\d{8}', , , '12345678'],
//             [, , 'NA', 'NA', , , '12345678'],
//             [, , 'NA', 'NA', , , '12345678'],
//             [, , '\\d{8}', '\\d{8}', , , '12345678'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             '001',
//             800, , , , , , , ,
//             1,
//             [[, '(\\d{4})(\\d{4})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA']],
//         808: [
//             ,
//             [, , '\\d{8}', '\\d{8}', , , '12345678'],
//             [, , 'NA', 'NA', , , '12345678'],
//             [, , 'NA', 'NA', , , '12345678'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '\\d{8}', '\\d{8}', , , '12345678'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             '001',
//             808, , , , , , , ,
//             1,
//             [[, '(\\d{4})(\\d{4})', '$1 $2']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA']],
//         870: [
//             ,
//             [, , '[35-7]\\d{8}', '\\d{9}', , , '301234567'],
//             [, , 'NA', 'NA', , , '301234567'],
//             [, , '(?:[356]\\d|7[6-8])\\d{7}', '\\d{9}', , , '301234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             '001',
//             870, , , , , , , , ,
//             [[, '(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         878: [
//             ,
//             [, , '1\\d{11}', '\\d{12}', , , '101234567890'],
//             [, , 'NA', 'NA', , , '101234567890'],
//             [, , 'NA', 'NA', , , '101234567890'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , '10\\d{10}', '\\d{12}', , , '101234567890'],
//             '001',
//             878, , , , , , , ,
//             1,
//             [[, '(\\d{2})(\\d{5})(\\d{5})', '$1 $2 $3']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         881: [
//             ,
//             [, , '[67]\\d{8}', '\\d{9}', , , '612345678'],
//             [, , 'NA', 'NA', , , '612345678'],
//             [, , '[67]\\d{8}', '\\d{9}', , , '612345678'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             '001',
//             881, , , , , , , , ,
//             [[, '(\\d)(\\d{3})(\\d{5})', '$1 $2 $3', ['[67]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         882: [
//             ,
//             [, , '[13]\\d{6,11}', '\\d{7,12}', , , '3451234567'],
//             [, , 'NA', 'NA', , , '3451234567'],
//             [
//                 , ,
//                 '3(?:2\\d{3}|37\\d{2}|4(?:2|7\\d{3}))\\d{4}',
//                 '\\d{7,10}', , ,
//                 '3451234567'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15678]|9[0689])\\d{4}|6\\d{5,10})|345\\d{7}',
//                 '\\d{7,12}', , ,
//                 '3451234567'],
//             '001',
//             882, , , , , , , , ,
//             [
//                 [, '(\\d{2})(\\d{4})(\\d{3})', '$1 $2 $3', ['3[23]']],
//                 [, '(\\d{2})(\\d{5})', '$1 $2', ['16|342']],
//                 [, '(\\d{2})(\\d{4})(\\d{4})', '$1 $2 $3', ['34[57]']],
//                 [, '(\\d{3})(\\d{4})(\\d{4})', '$1 $2 $3', ['348']],
//                 [, '(\\d{2})(\\d{2})(\\d{4})', '$1 $2 $3', ['1']],
//                 [, '(\\d{2})(\\d{3,4})(\\d{4})', '$1 $2 $3', ['16']],
//                 [, '(\\d{2})(\\d{4,5})(\\d{5})', '$1 $2 $3', ['16']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , '348[57]\\d{7}', '\\d{11}', , , '3451234567']],
//         883: [
//             ,
//             [, , '51\\d{7}(?:\\d{3})?', '\\d{9}(?:\\d{3})?', , , '510012345'],
//             [, , 'NA', 'NA', , , '510012345'],
//             [, , 'NA', 'NA', , , '510012345'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [
//                 , ,
//                 '51(?:00\\d{5}(?:\\d{3})?|[13]0\\d{8})',
//                 '\\d{9}(?:\\d{3})?', , ,
//                 '510012345'],
//             '001',
//             883, , , , , , , ,
//             1,
//             [
//                 [, '(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3', ['510']],
//                 [, '(\\d{3})(\\d{3})(\\d{3})(\\d{3})', '$1 $2 $3 $4', ['510']],
//                 [, '(\\d{4})(\\d{4})(\\d{4})', '$1 $2 $3', ['51[13]']]], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA']],
//         888: [
//             ,
//             [, , '\\d{11}', '\\d{11}', , , '12345678901'],
//             [, , 'NA', 'NA', , , '12345678901'],
//             [, , 'NA', 'NA', , , '12345678901'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             '001',
//             888, , , , , , , ,
//             1,
//             [[, '(\\d{3})(\\d{3})(\\d{5})', '$1 $2 $3']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , '\\d{11}', '\\d{11}', , , '12345678901'],
//             1, ,
//             [, , 'NA', 'NA']],
//         979: [
//             ,
//             [, , '\\d{9}', '\\d{9}', , , '123456789'],
//             [, , 'NA', 'NA', , , '123456789'],
//             [, , 'NA', 'NA', , , '123456789'],
//             [, , 'NA', 'NA'],
//             [, , '\\d{9}', '\\d{9}', , , '123456789'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             '001',
//             979, , , , , , , ,
//             1,
//             [[, '(\\d)(\\d{4})(\\d{4})', '$1 $2 $3']], ,
//             [, , 'NA', 'NA'], , ,
//             [, , 'NA', 'NA'],
//             [, , 'NA', 'NA'],
//             1, ,
//             [, , 'NA', 'NA']],
//     };
//     w.a = function () {return w.b ? w.b : w.b = new w;};
//     var zd = {
//             0: '0',
//             1: '1',
//             2: '2',
//             3: '3',
//             4: '4',
//             5: '5',
//             6: '6',
//             7: '7',
//             8: '8',
//             9: '9',
//             '０': '0',
//             '１': '1',
//             '２': '2',
//             '３': '3',
//             '４': '4',
//             '５': '5',
//             '６': '6',
//             '７': '7',
//             '８': '8',
//             '９': '9',
//             '٠': '0',
//             '١': '1',
//             '٢': '2',
//             '٣': '3',
//             '٤': '4',
//             '٥': '5',
//             '٦': '6',
//             '٧': '7',
//             '٨': '8',
//             '٩': '9',
//             '۰': '0',
//             '۱': '1',
//             '۲': '2',
//             '۳': '3',
//             '۴': '4',
//             '۵': '5',
//             '۶': '6',
//             '۷': '7',
//             '۸': '8',
//             '۹': '9',
//         }, qd = {
//             0: '0',
//             1: '1',
//             2: '2',
//             3: '3',
//             4: '4',
//             5: '5',
//             6: '6',
//             7: '7',
//             8: '8',
//             9: '9',
//             '+': '+',
//             '*': '*',
//         }, dA = {
//             0: '0',
//             1: '1',
//             2: '2',
//             3: '3',
//             4: '4',
//             5: '5',
//             6: '6',
//             7: '7',
//             8: '8',
//             9: '9',
//             '０': '0',
//             '１': '1',
//             '２': '2',
//             '３': '3',
//             '４': '4',
//             '５': '5',
//             '６': '6',
//             '７': '7',
//             '８': '8',
//             '９': '9',
//             '٠': '0',
//             '١': '1',
//             '٢': '2',
//             '٣': '3',
//             '٤': '4',
//             '٥': '5',
//             '٦': '6',
//             '٧': '7',
//             '٨': '8',
//             '٩': '9',
//             '۰': '0',
//             '۱': '1',
//             '۲': '2',
//             '۳': '3',
//             '۴': '4',
//             '۵': '5',
//             '۶': '6',
//             '۷': '7',
//             '۸': '8',
//             '۹': '9',
//             A: '2',
//             B: '2',
//             C: '2',
//             D: '3',
//             E: '3',
//             F: '3',
//             G: '4',
//             H: '4',
//             I: '4',
//             J: '5',
//             K: '5',
//             L: '5',
//             M: '6',
//             N: '6',
//             O: '6',
//             P: '7',
//             Q: '7',
//             R: '7',
//             S: '7',
//             T: '8',
//             U: '8',
//             V: '8',
//             W: '9',
//             X: '9',
//             Y: '9',
//             Z: '9',
//         }, AA = /[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?/,
//         NA = (RegExp('[+＋]+'), RegExp('^[+＋]+')),
//         $A = RegExp('([0-9０-９٠-٩۰-۹])'), eA = RegExp('[+＋0-9０-９٠-٩۰-۹]'),
//         nA = /[\\\/] *x/, tA = RegExp('[^0-9０-９٠-٩۰-۹A-Za-z#]+$'),
//         rA = /(?:.*?[A-Za-z]){3}.*/, aA = RegExp(
//         '(?:;ext=([0-9０-９٠-٩۰-۹]{1,7})|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|[,xｘ#＃~～]|int|anexo|ｉｎｔ)[:\\.．]?[  \\t,-]*([0-9０-９٠-٩۰-۹]{1,7})#?|[- ]+([0-9０-９٠-٩۰-۹]{1,5})#)$',
//         'i'), iA = RegExp(
//         '^[0-9０-９٠-٩۰-۹]{2}$|^[+＋]*(?:[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～*]*[0-9０-９٠-٩۰-۹]){3,}[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～*A-Za-z0-9０-９٠-٩۰-۹]*(?:;ext=([0-9０-９٠-٩۰-۹]{1,7})|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|[,xｘ#＃~～]|int|anexo|ｉｎｔ)[:\\.．]?[  \\t,-]*([0-9０-９٠-٩۰-۹]{1,7})#?|[- ]+([0-9０-９٠-٩۰-۹]{1,5})#)?$',
//         'i'), oA = /(\$\d)/, uA = /\$NP/, lA = /\$FG/, fA = /\$CC/, cA = new K;
//     T(cA, 11, 'NA');
//     var sA = (RegExp(
//         '^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$'), ['phoneNumberParser']),
//         pA = Sd;
//     sA[0] in pA || !pA.execScript || pA.execScript('var ' + sA[0]);
//     for (var hA; sA.length && (hA = sA.shift());) {
//         var gA;
//         (gA = !sA.length) && (gA = void 0 !== Cd), gA
//             ? pA[hA] = Cd
//             : pA = pA[hA] ? pA[hA] : pA[hA] = {};
//     }
// }();
