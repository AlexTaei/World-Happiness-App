import React from "react";
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import SearchBar from "./Components/SearchBar";
import { Bar } from 'react-chartjs-2';


//Factors Page
export default function factors() {
  //Get token value for authenticated endpoints
  const token = localStorage.getItem("token")
  //For Ag Grid
  const columns = [
    { headerName: "Rank", field: "rank", sortable: true, width: 80 },
    { headerName: "Country", field: "country", width: 140 },
    { headerName: "Score", field: "score", sortable: true, width: 100 },
    { headerName: "Economy", field: "economy", sortable: true, width: 100 },
    { headerName: "Family", field: "family", sortable: true, width: 100 },
    { headerName: "Health", field: "health", sortable: true, width: 100 },
    { headerName: "Freedom", field: "freedom", sortable: true, width: 100 },
    { headerName: "Generosity", field: "generosity", sortable: true, width: 100 },
    { headerName: "Trust", field: "trust", sortable: true, width: 100 },
  ];
  //For year filtering, it is set to 2020 as default
  const [year, setYear] = useState("2020");
  const y2020 = () => { setYear("2020") }
  const y2019 = () => { setYear("2019") }
  const y2018 = () => { setYear("2018") }
  const y2017 = () => { setYear("2017") }
  const y2016 = () => { setYear("2016") }
  const y2015 = () => { setYear("2015") }

  //Result limit filtering, it is set to essentially unlimited as default
  const [number, setNumber] = useState("10000");
  const nclear = () => { setNumber("10000") }
  const n5 = () => { setNumber("5") }
  const n10 = () => { setNumber("10") }
  const n20 = () => { setNumber("20") }


  //Same hardcoded country list as in Rankings
  const [country, setCountry] = useState("");
  const cclear = () => { setCountry("") }
  const Afghanistan = () => { setCountry("Afghanistan") }
  const Albania = () => { setCountry("Albania") }
  const Algeria = () => { setCountry("Algeria") }
  const Angola = () => { setCountry("Angola") }
  const Argentina = () => { setCountry("Argentina") }
  const Armenia = () => { setCountry("Armenia") }
  const Australia = () => { setCountry("Australia") }
  const Austria = () => { setCountry("Austria") }
  const Azerbaijan = () => { setCountry("Azerbaijan") }
  const Bahrain = () => { setCountry("Bahrain") }
  const Bangladesh = () => { setCountry("Bangladesh") }
  const Belarus = () => { setCountry("Belarus") }
  const Belgium = () => { setCountry("Belgium") }
  const Belize = () => { setCountry("Belize") }
  const Benin = () => { setCountry("Benin") }
  const Bhutan = () => { setCountry("Bhutan") }
  const Bolivia = () => { setCountry("Bolivia") }
  const BosniaandHerzegovina = () => { setCountry("Bosnia and Herzegovina") }
  const Botswana = () => { setCountry("Botswana") }
  const Brazil = () => { setCountry("Brazil") }
  const Bulgaria = () => { setCountry("Bulgaria") }
  const BurkinaFaso = () => { setCountry("Burkina Faso") }
  const Burundi = () => { setCountry("Burundi") }
  const Cambodia = () => { setCountry("Cambodia") }
  const Cameroon = () => { setCountry("Cameroon") }
  const Canada = () => { setCountry("Canada") }
  const CentralAfricanRepublic = () => { setCountry("Central African Republic") }
  const Chad = () => { setCountry("Chad") }
  const Chile = () => { setCountry("Chile") }
  const China = () => { setCountry("China") }
  const Colombia = () => { setCountry("Colombia") }
  const Comoros = () => { setCountry("Comoros") }
  const CongoBrazzaville = () => { setCountry("Congo (Brazzaville)") }
  const CongoKinshasa = () => { setCountry("Congo (Kinshasa)") }
  const CostaRica = () => { setCountry("Costa Rica") }
  const Croatia = () => { setCountry("Croatia") }
  const Cyprus = () => { setCountry("Cyprus") }
  const CzechRepublic = () => { setCountry("Czech Republic") }
  const Denmark = () => { setCountry("Denmark") }
  const Djibouti = () => { setCountry("Djibouti") }
  const DominicanRepublic = () => { setCountry("Dominican Republic") }
  const Ecuador = () => { setCountry("Ecuador") }
  const Egypt = () => { setCountry("Egypt") }
  const ElSalvador = () => { setCountry("El Salvador") }
  const Estonia = () => { setCountry("Estonia") }
  const Ethiopia = () => { setCountry("Ethiopia") }
  const Finland = () => { setCountry("Finland") }
  const France = () => { setCountry("France") }
  const Gabon = () => { setCountry("Gabon") }
  const Gambia = () => { setCountry("Gambia") }
  const Georgia = () => { setCountry("Georgia") }
  const Germany = () => { setCountry("Germany") }
  const Ghana = () => { setCountry("Ghana") }
  const Greece = () => { setCountry("Greece") }
  const Guatemala = () => { setCountry("Guatemala") }
  const Guinea = () => { setCountry("Guinea") }
  const Haiti = () => { setCountry("Haiti") }
  const Honduras = () => { setCountry("Honduras") }
  const HongKong = () => { setCountry("Hong Kong") }
  const Hungary = () => { setCountry("Hungary") }
  const Iceland = () => { setCountry("Iceland") }
  const India = () => { setCountry("India") }
  const Indonesia = () => { setCountry("Indonesia") }
  const Iran = () => { setCountry("Iran") }
  const Iraq = () => { setCountry("Iraq") }
  const Ireland = () => { setCountry("Ireland") }
  const Israel = () => { setCountry("Israel") }
  const Italy = () => { setCountry("Italy") }
  const IvoryCoast = () => { setCountry("Ivory Coast") }
  const Jamaica = () => { setCountry("Jamaica") }
  const Japan = () => { setCountry("Japan") }
  const Jordan = () => { setCountry("Jordan") }
  const Kazakhstan = () => { setCountry("Kazakhstan") }
  const Kenya = () => { setCountry("Kenya") }
  const Kosovo = () => { setCountry("Kosovo") }
  const Kuwait = () => { setCountry("Kuwait") }
  const Kyrgyzstan = () => { setCountry("Kyrgyzstan") }
  const Laos = () => { setCountry("Laos") }
  const Latvia = () => { setCountry("Latvia") }
  const Lebanon = () => { setCountry("Lebanon") }
  const Lesotho = () => { setCountry("Lesotho") }
  const Liberia = () => { setCountry("Liberia") }
  const Libya = () => { setCountry("Libya") }
  const Lithuania = () => { setCountry("Lithuania") }
  const Luxembourg = () => { setCountry("Luxembourg") }
  const Macedonia = () => { setCountry("Macedonia") }
  const Madagascar = () => { setCountry("Madagascar") }
  const Malawi = () => { setCountry("Malawi") }
  const Malaysia = () => { setCountry("Malaysia") }
  const Maldives = () => { setCountry("Maldives") }
  const Mali = () => { setCountry("Mali") }
  const Malta = () => { setCountry("Malta") }
  const Mauritania = () => { setCountry("Mauritania") }
  const Mauritius = () => { setCountry("Mauritius") }
  const Mexico = () => { setCountry("Mexico") }
  const Moldova = () => { setCountry("Moldova") }
  const Mongolia = () => { setCountry("Mongolia") }
  const Montenegro = () => { setCountry("Montenegro") }
  const Morocco = () => { setCountry("Morocco") }
  const Mozambique = () => { setCountry("Mozambique") }
  const Myanmar = () => { setCountry("Myanmar") }
  const Namibia = () => { setCountry("Namibia") }
  const Nepal = () => { setCountry("Nepal") }
  const Netherlands = () => { setCountry("Netherlands") }
  const NewZealand = () => { setCountry("New Zealand") }
  const Nicaragua = () => { setCountry("Nicaragua") }
  const Niger = () => { setCountry("Niger") }
  const Nigeria = () => { setCountry("Nigeria") }
  const NorthCyprus = () => { setCountry("North Cyprus") }
  const NorthMacedonia = () => { setCountry("North Macedonia") }
  const NorthernCyprus = () => { setCountry("Northern Cyprus") }
  const Norway = () => { setCountry("Norway") }
  const Oman = () => { setCountry("Oman") }
  const Pakistan = () => { setCountry("Pakistan") }
  const PalestinianTerritories = () => { setCountry("Palestinian Territories") }
  const Panama = () => { setCountry("Panama") }
  const Paraguay = () => { setCountry("Paraguay") }
  const Peru = () => { setCountry("Peru") }
  const Philippines = () => { setCountry("Philippines") }
  const Poland = () => { setCountry("Poland") }
  const Portugal = () => { setCountry("Portugal") }
  const PuertoRico = () => { setCountry("Puerto Rico") }
  const Qatar = () => { setCountry("Qatar") }
  const Romania = () => { setCountry("Romania") }
  const Russia = () => { setCountry("Russia") }
  const Rwanda = () => { setCountry("Rwanda") }
  const SaudiArabia = () => { setCountry("Saudi Arabia") }
  const Senegal = () => { setCountry("Senegal") }
  const Serbia = () => { setCountry("Serbia") }
  const SierraLeone = () => { setCountry("Sierra Leone") }
  const Singapore = () => { setCountry("Singapore") }
  const Slovakia = () => { setCountry("Slovakia") }
  const Slovenia = () => { setCountry("Slovenia") }
  const Somalia = () => { setCountry("Somalia") }
  const SomalilandRegion = () => { setCountry("Somaliland Region") }
  const SouthAfrica = () => { setCountry("South Africa") }
  const SouthKorea = () => { setCountry("South Korea") }
  const SouthSudan = () => { setCountry("South Sudan") }
  const Spain = () => { setCountry("Spain") }
  const SriLanka = () => { setCountry("Sri Lanka") }
  const Sudan = () => { setCountry("Sudan") }
  const Suriname = () => { setCountry("Suriname") }
  const Swaziland = () => { setCountry("Swaziland") }
  const Sweden = () => { setCountry("Sweden") }
  const Switzerland = () => { setCountry("Switzerland") }
  const Syria = () => { setCountry("Syria") }
  const Taiwan = () => { setCountry("Taiwan") }
  const Tajikistan = () => { setCountry("Tajikistan") }
  const Tanzania = () => { setCountry("Tanzania") }
  const Thailand = () => { setCountry("Thailand") }
  const Togo = () => { setCountry("Togo") }
  const TrinidadandTobago = () => { setCountry("Trinidad and Tobago") }
  const Tunisia = () => { setCountry("Tunisia") }
  const Turkey = () => { setCountry("Turkey") }
  const Turkmenistan = () => { setCountry("Turkmenistan") }
  const Uganda = () => { setCountry("Uganda") }
  const Ukraine = () => { setCountry("Ukraine") }
  const UnitedArabEmirates = () => { setCountry("United Arab Emirates") }
  const UnitedKingdom = () => { setCountry("United Kingdom") }
  const UnitedStates = () => { setCountry("United States") }
  const Uruguay = () => { setCountry("Uruguay") }
  const Uzbekistan = () => { setCountry("Uzbekistan") }
  const Venezuela = () => { setCountry("Venezuela") }
  const Vietnam = () => { setCountry("Vietnam") }
  const Yemen = () => { setCountry("Yemen") }
  const Zambia = () => { setCountry("Zambia") }
  const Zimbabwe = () => { setCountry("Zimbabwe") }

  //Query the API and do it again if any one of year, number or country changes
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    const url = `http://localhost:3000/factors/${year}?limit=${number}&country=${country}`
    const headers = {
      accept: "application/json", "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
    fetch(url, { headers })
      .then(res => res.json())
      .then(data => parseFloat(setRowData(data)))
  }, [year, number, country]);

  //For the different factor's data
  let chartdataeco = rowData.map(a => a.economy).slice(0, 10);
  let chartdatafam = rowData.map(a => a.family).slice(0, 10);
  let chartdataheal = rowData.map(a => a.health).slice(0, 10);
  let chartdatafree = rowData.map(a => a.freedom).slice(0, 10);
  let chartdatagen = rowData.map(a => a.generosity).slice(0, 10);
  let chartdatatrus = rowData.map(a => a.trust).slice(0, 10);
  let chartlabelcountry = rowData.map(a => a.country).slice(0, 10);

  //For economy chart
  const dataeco = {
    labels: chartlabelcountry,
    datasets: [
      {
        label: 'Economy',
        data: chartdataeco,
        fill: false,
        backgroundColor: [
          '	rgb(34, 148, 177)',
          'rgb(11, 158, 67)',
          'rgb(233, 66, 86)',
          'rgb(98, 42, 255)',
          'rgb(226, 98, 12)',
        ],
      },
    ],
  };
  //For Family chart
  const datafam = {
    labels: chartlabelcountry,
    datasets: [
      {
        label: 'Family',
        data: chartdatafam,
        fill: false,
        backgroundColor: [
          '	rgb(34, 148, 177)',
          'rgb(11, 158, 67)',
          'rgb(233, 66, 86)',
          'rgb(98, 42, 255)',
          'rgb(226, 98, 12)',
        ],
      },
    ],
  };
  //For Health chart
  const dataheal = {
    labels: chartlabelcountry,
    datasets: [
      {
        label: 'Health',
        data: chartdataheal,
        fill: false,
        backgroundColor: [
          '	rgb(34, 148, 177)',
          'rgb(11, 158, 67)',
          'rgb(233, 66, 86)',
          'rgb(98, 42, 255)',
          'rgb(226, 98, 12)',
        ],
      },
    ],
  };
  //For Freedom chart
  const datafree = {
    labels: chartlabelcountry,
    datasets: [
      {
        label: 'Freedom',
        data: chartdatafree,
        fill: false,
        backgroundColor: [
          '	rgb(34, 148, 177)',
          'rgb(11, 158, 67)',
          'rgb(233, 66, 86)',
          'rgb(98, 42, 255)',
          'rgb(226, 98, 12)',
        ],
      },
    ],
  };
  //For Generosity chart
  const datagen = {
    labels: chartlabelcountry,
    datasets: [
      {
        label: 'Generosity',
        data: chartdatagen,
        fill: false,
        backgroundColor: [
          '	rgb(34, 148, 177)',
          'rgb(11, 158, 67)',
          'rgb(233, 66, 86)',
          'rgb(98, 42, 255)',
          'rgb(226, 98, 12)',
        ],
      },
    ],
  };
  //For Trust chart
  const datatrus = {
    labels: chartlabelcountry,
    datasets: [
      {
        label: 'Trust',
        data: chartdatatrus,
        fill: false,
        backgroundColor: [
          '	rgb(34, 148, 177)',
          'rgb(11, 158, 67)',
          'rgb(233, 66, 86)',
          'rgb(98, 42, 255)',
          'rgb(226, 98, 12)',
        ],
      },
    ],
  };
  //For data when a single country has been selected
  const datacountry = {
    labels: chartlabelcountry,
    datasets: [
      {
        label: 'Economy',
        data: chartdataeco,
        backgroundColor: 'rgb(34, 148, 177)',
      },
      {
        label: 'Family',
        data: chartdatafam,
        backgroundColor: 'rgb(11, 158, 67)',
      },
      {
        label: 'Health',
        data: chartdataheal,
        backgroundColor: 'rgb(233, 66, 86)',
      },
      {
        label: 'Freedom',
        data: chartdatafree,
        backgroundColor: 'rgb(98, 42, 255)',
      },
      {
        label: 'Generosity',
        data: chartdatagen,
        backgroundColor: 'rgb(226, 98, 12)',
      },
      {
        label: 'Trust',
        data: chartdatatrus,
        backgroundColor: 'rgb(2, 127, 255)',
      },
    ],
  };

  const options = {
    indexAxis: 'y',

    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  //Graphs for when all countries are selected
  const Graphsall = () => (
    <>
      <div className='graph'>
        <h2 className='graphtitle'>{year} Factors for Top {number == 10000 || number == 20 ? 10 : number} Countries</h2>
        <div><h4>Economy (Higher is better)</h4><Bar data={dataeco} options={options} /></div>
        <div><h4>Family (Higher is better)</h4><Bar data={datafam} options={options} /></div>
        <div><h4>Health (Higher is better)</h4><Bar data={dataheal} options={options} /></div>
        <div><h4>Freedom (Higher is better)</h4><Bar data={datafree} options={options} /></div>
        <div><h4>Generosity (Higher is better)</h4><Bar data={datagen} options={options} /></div>
        <div><h4>Trust (Higher is better)</h4><Bar data={datatrus} options={options} /></div>
      </div>
    </>
  );
  //Graphs for when a single country has been selected
  const Graphscountry = () => (
    <>
      <div className='Factorsgraph'>
        <h2 className='graphtitle'>{year} Factors for {country}</h2>
        <p>Higher is better</p>
        <div><Bar data={datacountry} options={options} /></div>
      </div>
    </>
  );


  return (
    <div className="rankings">
      <div className="Leftcolumn">
        <div className="searchcountry">
          <h3>Search</h3>
          <SearchBar onSubmit={setCountry} />
        </div>
        <div className="categorieslist">
          <h3>Regions</h3>
          <button>All</button><br />
          <button>North America</button><br />
          <button>South America</button><br />
          <button>Europe</button><br />
          <button>Africa</button><br />
          <button>Asia</button><br />
          <button>Oceania</button><br />
        </div>
        <div className="countrieslist" >
          <h3>Countries</h3>
          <button onClick={cclear}> All</button><br />
          <button onClick={Afghanistan}>Afghanistan</button><br />
          <button onClick={Albania}>Albania</button><br />
          <button onClick={Angola}>Angola</button><br />
          <button onClick={Algeria}>Algeria</button><br />
          <button onClick={Argentina}>Argentina</button><br />
          <button onClick={Armenia}>Armenia</button><br />
          <button onClick={Australia}>Australia</button><br />
          <button onClick={Austria}>Austria </button><br />
          <button onClick={Azerbaijan}>Azerbaijan </button><br />
          <button onClick={Bahrain}>Bahrain </button><br />
          <button onClick={Bangladesh}>Bangladesh </button><br />
          <button onClick={Belarus}>Belarus </button><br />
          <button onClick={Belgium}>Belgium </button><br />
          <button onClick={Belize}>Belize </button><br />
          <button onClick={Benin}>Benin </button><br />
          <button onClick={Bhutan}>Bhutan </button><br />
          <button onClick={Bolivia}>Bolivia </button><br />
          <button onClick={BosniaandHerzegovina}>Bosnia and Herzegovina </button><br />
          <button onClick={Botswana}>Botswana </button><br />
          <button onClick={Brazil}>Brazil </button><br />
          <button onClick={Bulgaria}>Bulgaria </button><br />
          <button onClick={BurkinaFaso}>Burkina Faso </button><br />
          <button onClick={Burundi}>Burundi </button><br />
          <button onClick={Cambodia}>Cambodia </button><br />
          <button onClick={Cameroon}>Cameroon </button><br />
          <button onClick={Canada}>Canada </button><br />
          <button onClick={CentralAfricanRepublic}>Central African Republic </button><br />
          <button onClick={Chad}>Chad </button><br />
          <button onClick={Chile}>Chile </button><br />
          <button onClick={China}>China </button><br />
          <button onClick={Colombia}>Colombia </button><br />
          <button onClick={Comoros}>Comoros </button><br />
          <button onClick={CongoBrazzaville}>Congo (Brazzaville) </button><br />
          <button onClick={CongoKinshasa}>Congo (Kinshasa) </button><br />
          <button onClick={CostaRica}>Costa Rica </button><br />
          <button onClick={Croatia}>Croatia </button><br />
          <button onClick={Cyprus}>Cyprus </button><br />
          <button onClick={CzechRepublic}>Czech Republic </button><br />
          <button onClick={Denmark}>Denmark </button><br />
          <button onClick={Djibouti}>Djibouti </button><br />
          <button onClick={DominicanRepublic}>Dominican Republic </button><br />
          <button onClick={Ecuador}>Ecuador </button><br />
          <button onClick={Egypt}>Egypt </button><br />
          <button onClick={ElSalvador}>El Salvador </button><br />
          <button onClick={Estonia}>Estonia</button><br />
          <button onClick={Ethiopia}>Ethiopia</button><br />
          <button onClick={Finland}>Finland</button><br />
          <button onClick={France}>France</button><br />
          <button onClick={Gabon}>Gabon</button><br />
          <button onClick={Gambia}>Gambia</button><br />
          <button onClick={Georgia}>Georgia</button><br />
          <button onClick={Germany}>Germany</button><br />
          <button onClick={Ghana}>Ghana</button><br />
          <button onClick={Greece}>Greece</button><br />
          <button onClick={Guatemala}>Guatemala</button><br />
          <button onClick={Guinea}>Guinea</button><br />
          <button onClick={Haiti}>Haiti</button><br />
          <button onClick={Honduras}>Honduras</button><br />
          <button onClick={HongKong}>Hong Kong</button><br />
          <button onClick={Hungary}>Hungary</button><br />
          <button onClick={Iceland}>Iceland</button><br />
          <button onClick={India}>India</button><br />
          <button onClick={Indonesia}>Indonesia</button><br />
          <button onClick={Iran}>Iran</button><br />
          <button onClick={Iraq}>Iraq</button><br />
          <button onClick={Ireland}>Ireland</button><br />
          <button onClick={Israel}>Israel</button><br />
          <button onClick={Italy}>Italy</button><br />
          <button onClick={IvoryCoast}>Ivory Coast</button><br />
          <button onClick={Jamaica}>Jamaica</button><br />
          <button onClick={Japan}>Japan</button><br />
          <button onClick={Jordan}>Jordan</button><br />
          <button onClick={Kazakhstan}>Kazakhstan</button><br />
          <button onClick={Kenya}>Kenya</button><br />
          <button onClick={Kosovo}>Kosovo</button><br />
          <button onClick={Kuwait}>Kuwait</button><br />
          <button onClick={Kyrgyzstan}>Kyrgyzstan</button><br />
          <button onClick={Laos}>Laos</button><br />
          <button onClick={Latvia}>Latvia</button><br />
          <button onClick={Lebanon}>Lebanon</button><br />
          <button onClick={Lesotho}>Lesotho</button><br />
          <button onClick={Liberia}>Liberia</button><br />
          <button onClick={Libya}>Libya</button><br />
          <button onClick={Lithuania}>Lithuania</button><br />
          <button onClick={Luxembourg}>Luxembourg</button><br />
          <button onClick={Macedonia}>Macedonia</button><br />
          <button onClick={Madagascar}>Madagascar</button><br />
          <button onClick={Malawi}>Malawi</button><br />
          <button onClick={Malaysia}>Malaysia</button><br />
          <button onClick={Maldives}>Maldives</button><br />
          <button onClick={Mali}>Mali</button><br />
          <button onClick={Malta}>Malta</button><br />
          <button onClick={Mauritania}>Mauritania</button><br />
          <button onClick={Mauritius}>Mauritius</button><br />
          <button onClick={Mexico}>Mexico</button><br />
          <button onClick={Moldova}>Moldova</button><br />
          <button onClick={Mongolia}>Mongolia</button><br />
          <button onClick={Montenegro}>Montenegro</button><br />
          <button onClick={Morocco}>Morocco</button><br />
          <button onClick={Mozambique}>Mozambique</button><br />
          <button onClick={Myanmar}>Myanmar</button><br />
          <button onClick={Namibia}>Namibia</button><br />
          <button onClick={Nepal}>Nepal</button><br />
          <button onClick={Netherlands}>Netherlands</button><br />
          <button onClick={NewZealand}>New Zealand</button><br />
          <button onClick={Nicaragua}>Nicaragua</button><br />
          <button onClick={Niger}>Niger</button><br />
          <button onClick={Nigeria}>Nigeria</button><br />
          <button onClick={NorthCyprus}>North Cyprus</button><br />
          <button onClick={NorthMacedonia}>North Macedonia</button><br />
          <button onClick={NorthernCyprus}>Northern Cyprus</button><br />
          <button onClick={Norway}>Norway</button><br />
          <button onClick={Oman}>Oman</button><br />
          <button onClick={Pakistan}>Pakistan</button><br />
          <button onClick={PalestinianTerritories}>Palestinian Territories</button><br />
          <button onClick={Panama}>Panama</button><br />
          <button onClick={Paraguay}>Paraguay</button><br />
          <button onClick={Peru}>Peru</button><br />
          <button onClick={Philippines}>Philippines</button><br />
          <button onClick={Poland}>Poland</button><br />
          <button onClick={Portugal}>Portugal</button><br />
          <button onClick={PuertoRico}>Puerto Rico</button><br />
          <button onClick={Qatar}>Qatar</button><br />
          <button onClick={Romania}>Romania</button><br />
          <button onClick={Russia}>Russia</button><br />
          <button onClick={Rwanda}>Rwanda</button><br />
          <button onClick={SaudiArabia}>Saudi Arabia</button><br />
          <button onClick={Senegal}>Senegal</button><br />
          <button onClick={Serbia}>Serbia</button><br />
          <button onClick={SierraLeone}>Sierra Leone</button><br />
          <button onClick={Singapore}>Singapore</button><br />
          <button onClick={Slovakia}>Slovakia</button><br />
          <button onClick={Slovenia}>Slovenia</button><br />
          <button onClick={Somalia}>Somalia</button><br />
          <button onClick={SomalilandRegion}>Somaliland Region</button><br />
          <button onClick={SouthAfrica}>South Africa</button><br />
          <button onClick={SouthKorea}>South Korea</button><br />
          <button onClick={SouthSudan}>South Sudan</button><br />
          <button onClick={Spain}>Spain</button><br />
          <button onClick={SriLanka}>Sri Lanka</button><br />
          <button onClick={Sudan}>Sudan</button><br />
          <button onClick={Suriname}>Suriname</button><br />
          <button onClick={Swaziland}>Swaziland</button><br />
          <button onClick={Sweden}>Sweden</button><br />
          <button onClick={Switzerland}>Switzerland</button><br />
          <button onClick={Syria}>Syria</button><br />
          <button onClick={Taiwan}>Taiwan</button><br />
          <button onClick={Tajikistan}>Tajikistan</button><br />
          <button onClick={Tanzania}>Tanzania</button><br />
          <button onClick={Thailand}>Thailand</button><br />
          <button onClick={Togo}>Togo</button><br />
          <button onClick={TrinidadandTobago}>Trinidad and Tobago</button><br />
          <button onClick={Tunisia}>Tunisia</button><br />
          <button onClick={Turkey}>Turkey</button><br />
          <button onClick={Turkmenistan}>Turkmenistan</button><br />
          <button onClick={Uganda}>Uganda</button><br />
          <button onClick={Ukraine}>Ukraine</button><br />
          <button onClick={UnitedArabEmirates}>United Arab Emirates</button><br />
          <button onClick={UnitedKingdom}>United Kingdom</button><br />
          <button onClick={UnitedStates}>United States</button><br />
          <button onClick={Uruguay}>Uruguay</button><br />
          <button onClick={Uzbekistan}>Uzbekistan</button><br />
          <button onClick={Venezuela}>Venezuela</button><br />
          <button onClick={Vietnam}>Vietnam</button><br />
          <button onClick={Yemen}>Yemen</button><br />
          <button onClick={Zambia}>Zambia</button><br />
          <button onClick={Zimbabwe}>Zimbabwe</button><br />
        </div>
      </div>

      <div className="Data">
        <div className="text">
          <h3>Factors</h3>
          <p>View the factors of World Happiness Index from 2015-2020. Search or individually click on the countries you want
            to see. Otherwise, leave it to default settings where it will show all the factors. Click on the year on the right menu
            to set a particular year. To a view break down of a country's factors, simply search or click a country then select the year.
          </p>
        </div>
        <div
          className="ag-theme-balham"
          style={{
            height: "348px",
            width: "925px"
          }}
        >
          <AgGridReact columnDefs={columns} rowData={rowData} pagination={true} paginationPageSize={10} />
        </div>
        <div className="Graphs">{country == "" ? <Graphsall /> : <Graphscountry />}</div>
      </div>

      <div className="Rightcolumn">
        <div>
          <h3>Sort Rank</h3>
          <p>Lowest to highest</p>
          <p>Highest to lowest</p>
        </div>
        <div className="temporarylimit" >
          <h3>Result Limit</h3>
          <button onClick={nclear}> All</button><br />
          <button onClick={n5}> 5</button><br />
          <button onClick={n10}> 10</button><br />
          <button onClick={n20}> 20</button><br />
        </div>
        <div>
          <h3>Year</h3>
          <button onClick={y2020}>2020</button><br />
          <button onClick={y2019}>2019</button><br />
          <button onClick={y2018}>2018</button><br />
          <button onClick={y2017}>2017</button><br />
          <button onClick={y2016}>2016</button><br />
          <button onClick={y2015}>2015</button><br />
        </div>
      </div>

    </div>
  );
}