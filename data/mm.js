/* Kotler and Keller, Marketing Management: Subject 1 (Marketing Insights and Strategy), Topics 1-5 */
(function(){
var CH = window.CH = window.CH || [];
window.BANK = window.BANK || {};
function add(course, bank){ var B = window.BANK[course] = window.BANK[course] || {}; Object.keys(bank).forEach(function(k){ B[k] = (B[k]||[]).concat(bank[k]); }); }
window.FORMULAS = (window.FORMULAS||[]).concat([
 {subj:1, name:"Total market potential", f:"Q = n &times; q &times; p", ex:"2,000,000 buyers &times; 4 units a year &times; P50 = P400,000,000 a year. n = number of buyers, q = average quantity bought per buyer, p = average price per unit."},
 {subj:1, name:"Chain-ratio method", f:"Market potential = base number &times; ratio 1 &times; ratio 2 &times; &hellip;", ex:"1,000,000 adults &times; 40% drink coffee &times; 25% buy premium = 100,000 potential premium buyers."},
 {subj:1, name:"Market share", f:"Company sales &divide; total market sales", ex:"P30M &divide; P200M = 15% share."},
 {subj:1, name:"Relative market share (BCG axis)", f:"Company share &divide; share of the largest competitor", ex:"20% &divide; 40% = 0.5 (below 1.0 means you are not the leader)."},
 {subj:1, name:"Buying power index (multiple-factor index)", f:"B<sub>i</sub> = 0.5 y<sub>i</sub> + 0.3 r<sub>i</sub> + 0.2 p<sub>i</sub>", ex:"Area with 4% of national income, 5% of retail sales, 3% of population: 0.5(4) + 0.3(5) + 0.2(3) = 4.1% of national buying power."},
 {subj:1, name:"Customer-perceived value", f:"CPV = total customer benefit &minus; total customer cost", ex:"Benefits (product, service, personnel, image) worth P10,000 minus costs (monetary, time, energy, psychological) of P7,000 = P3,000 perceived value."}
]);

CH.push({
 course:"mm", n:1, short:"Marketing and its core concepts", title:"Defining Marketing for the New Realities", priority:"High-yield",
 overview:"What marketing is, what gets marketed, the core concepts every later topic builds on, and how company orientations evolved from production to holistic marketing.",
 why:"Why it ranks high: definitions, the core concepts and the five company orientations are classic definition and identification items.",
 objectives:["Define marketing and marketing management.","List the ten types of entities that are marketed.","Explain the core marketing concepts.","Distinguish the production, product, selling, marketing and holistic marketing orientations.","Describe the components of holistic marketing and the updated 4Ps."],
 know:[
  "Marketing (AMA) = the activity, set of institutions and processes for <mark>creating, communicating, delivering and exchanging offerings</mark> that have value for customers, clients, partners and society at large.",
  "Shortest definition: <mark>meeting needs profitably</mark>.",
  "Marketing management = the art and science of <mark>choosing target markets</mark> and getting, keeping and growing customers through creating, delivering and communicating superior customer value.",
  "Ten things marketed: <mark>goods, services, events, experiences, persons, places, properties, organizations, information, ideas</mark>.",
  "Needs (basic requirements) &rarr; wants (needs directed to specific objects shaped by culture) &rarr; demands (wants for specific products backed by <mark>ability to pay</mark>).",
  "Five orientations: <mark>production &rarr; product &rarr; selling &rarr; marketing &rarr; holistic marketing</mark>.",
  "Holistic marketing = <mark>relationship, integrated, internal and performance</mark> marketing.",
  "Modern 4Ps (holistic view): <mark>people, processes, programs, performance</mark>."
 ],
 terms:[
  ["Marketing","The activity, set of institutions and processes for creating, communicating, delivering and exchanging offerings that have value for customers, clients, partners and society at large (AMA)."],
  ["Marketing management","The art and science of choosing target markets and getting, keeping and growing customers through creating, delivering and communicating superior customer value."],
  ["Needs","Basic human requirements such as food, air, water, clothing and shelter, plus recreation, education and entertainment."],
  ["Wants","Needs directed to specific objects that might satisfy them, shaped by society and culture."],
  ["Demands","Wants for specific products backed by an ability to pay."],
  ["Five types of needs","Stated needs, real needs, unstated needs, delight needs and secret needs."],
  ["Offering","A set of benefits (a value proposition) made physical through products, services, information and experiences."],
  ["Value","A combination of quality, service and price (the customer value triad). Value rises with quality and service and falls with price."],
  ["Satisfaction","A person's judgment of a product's perceived performance in relation to expectations."],
  ["Marketing channels","Communication channels (deliver and receive messages), distribution channels (display, sell or deliver), and service channels (carry out transactions with buyers)."],
  ["Paid, owned and earned media","Paid: TV, print, display ads. Owned: the company's own website, blog, social pages. Earned: coverage and word of mouth created by others."],
  ["Supply chain","The longer channel stretching from raw materials to components to finished products carried to final buyers."],
  ["Production concept","Consumers prefer products that are widely available and inexpensive, so managers focus on production efficiency, low cost and mass distribution."],
  ["Product concept","Consumers favor products offering the most quality, performance or innovative features, so the focus is on making superior products."],
  ["Selling concept","Consumers and businesses will not buy enough unless the firm undertakes aggressive selling and promotion. It sells what it makes."],
  ["Marketing concept","Instead of finding the right customers for your products, find the right products for your customers. The firm is customer-centered: sense and respond."],
  ["Holistic marketing concept","Development, design and implementation of marketing programs, processes and activities that recognize their breadth and interdependencies. Everything matters."],
  ["Societal marketing / social responsibility","Part of performance marketing: considering the ethical, environmental, legal and social context of marketing."],
  ["Marketing myopia","Levitt's term for focusing on the product instead of the customer need it serves."]
 ],
 notes:[
  {h:"1. Exchange and the scope of marketing", html:"<p>Exchange is the core concept: obtaining a desired product from someone by offering something in return. Marketers market ten types of entities. Demand states matter too: marketers may face <b>negative, nonexistent, latent, declining, irregular, unwholesome, full or overfull</b> demand, and each calls for a different task (for example, latent demand calls for developing a product that meets an unmet need; declining demand calls for remarketing).</p>"},
  {h:"2. Core marketing concepts", html:"", v:[
   {t:"mind", title:"Kotler and Keller core concepts", center:"Core concepts", branches:[
    ["Needs, wants, demands",["Five needs: stated, real, unstated, delight, secret","Example: a buyer stating a need for an inexpensive car"]],
    ["Target markets",["Segmentation","Targeting","Positioning"]],
    ["Offerings and brands",["Value proposition","Brand = an offering from a known source"]],
    ["Marketing channels",["Communication","Distribution","Service"]],
    ["Paid, owned, earned media",["Impressions (reach)","Engagement (attention, involvement)"]],
    ["Value and satisfaction",["Quality, service, price triad","Satisfaction vs expectations"]],
    ["Supply chain, competition, environment",["Task environment: actors in producing, distributing, promoting","Broad environment: six forces"]]]}]},
  {h:"3. Company orientations toward the marketplace", html:"", tbl:{title:"Five orientations", cols:["Orientation","Core belief","Focus"],rows:[
   ["Production","Customers want cheap, available products","Efficiency, low cost, mass distribution"],
   ["Product","Customers want the best quality and features","Product improvement (risk: marketing myopia)"],
   ["Selling","Customers will not buy enough unless pushed","Aggressive selling of what the firm makes"],
   ["Marketing","Find the right products for your customers","Customer needs, sense and respond"],
   ["Holistic","Everything matters; broad, integrated view","Relationship, integrated, internal, performance marketing"]]}},
  {h:"4. Holistic marketing", html:"<p><b>Relationship marketing</b> builds mutually satisfying long-term relationships with key constituents (customers, employees, marketing partners, financial community) to earn and keep business; its outcome is a <b>marketing network</b>. <b>Integrated marketing</b> means activities and programs that create, communicate and deliver value are coordinated (the 4Ps, plus integrated communications and channels). <b>Internal marketing</b> is hiring, training and motivating able employees who want to serve customers well; marketing must be embraced by the whole firm. <b>Performance marketing</b> covers financial accountability (sales revenue, brand and customer equity) and social responsibility (ethics, environment, legal, community).</p>", v:[
   {t:"flow", title:"From the classic 4Ps (McCarthy) to the modern marketing management 4Ps", numbered:false, arrows:false, steps:[["People","Employees (internal marketing) and consumers as people, not just shoppers"],["Processes","Creativity, discipline and structure in management; avoid ad hoc planning"],["Programs","All consumer-directed activities, including the old 4Ps, online and offline"],["Performance","Financial and nonfinancial outcomes (brand equity, customer equity, social responsibility)"]]}]}
 ],
 ph:[
  ["Orientations","A local cement maker that only talks about plant capacity and lowest cost per bag shows a production orientation. A fast-food chain that keeps testing new local flavors after listening to customers shows a marketing orientation."],
  ["Places and ideas are marketed too","Department of Tourism campaigns market a place. A DOH anti-smoking campaign markets an idea."]
 ],
 confused:[
  ["Selling concept versus marketing concept","Selling starts with the factory and existing products and pushes sales volume. Marketing starts with a defined market and customer needs and profits through satisfaction."],
  ["Wants versus demands","A want becomes a demand only when it is backed by the ability (and willingness) to pay."],
  ["Classic 4Ps versus modern 4Ps","Classic: product, price, place, promotion. Modern (holistic): people, processes, programs, performance. The classic 4Ps sit inside 'programs'."]
 ],
 mnemonics:[
  ["Ten entities marketed","Good Service Even Excites People; Places, Properties, Organizations Inform Ideas","Goods, services, events, experiences, persons, places, properties, organizations, information, ideas."],
  ["Five orientations in order","Pretty People Sell More Happily","Production, product, selling, marketing, holistic."],
  ["Holistic marketing","RIIP","Relationship, Integrated, Internal, Performance."]
 ],
 takeaways:["Marketing is meeting needs profitably.","Needs become wants, and wants become demands when backed by buying power.","Orientations moved from inside-out (production, product, selling) to outside-in (marketing, holistic).","Holistic marketing: relationship, integrated, internal, performance."]
});

CH.push({
 course:"mm", n:2, short:"Strategic planning and the marketing plan", title:"Developing Marketing Strategies and Plans", priority:"High-yield",
 overview:"How value is delivered, how corporate and business-unit strategy is set (mission, SBUs, growth strategies, portfolio tools, SWOT, Porter), and what a marketing plan contains.",
 why:"Why it ranks high: Ansoff, BCG, SWOT, Porter's generic strategies and the value chain are among the most tested frameworks in any marketing exam.",
 objectives:["Explain the value delivery process and the value chain.","Describe the four levels of strategic planning and a good mission statement.","Apply Ansoff, integrative and diversification growth strategies.","Use the BCG matrix and SWOT analysis.","Identify Porter's generic strategies and the contents of a marketing plan."],
 know:[
  "Value delivery sequence: <mark>choose the value &rarr; provide the value &rarr; communicate the value</mark>.",
  "Porter's value chain: 5 primary activities (<mark>inbound logistics, operations, outbound logistics, marketing and sales, service</mark>) and 4 support activities (<mark>firm infrastructure, HRM, technology development, procurement</mark>).",
  "Core competency: a source of competitive advantage, with breadth of application, that is <mark>difficult for competitors to imitate</mark>.",
  "Ansoff grid: <mark>market penetration</mark> (existing product, existing market), <mark>product development</mark> (new product, existing market), <mark>market development</mark> (existing product, new market), <mark>diversification</mark> (new product, new market).",
  "Integrative growth: <mark>backward</mark> (acquire suppliers), <mark>forward</mark> (acquire distributors), <mark>horizontal</mark> (acquire competitors).",
  "BCG: axes = <mark>market growth rate</mark> and <mark>relative market share</mark>. Stars, cash cows, question marks, dogs. Strategies: build, hold, harvest, divest.",
  "Porter's generic strategies: <mark>overall cost leadership, differentiation, focus</mark>. Firms stuck in the middle do worst.",
  "SWOT: strengths/weaknesses are <mark>internal</mark>; opportunities/threats are <mark>external</mark>.",
  "Planning levels: <mark>corporate, division, business unit, product</mark>."
 ],
 terms:[
  ["Strategic planning","Managerial process of developing and maintaining a viable fit between the organization's objectives, skills and resources and its changing market opportunities."],
  ["Mission statement","Statement of the organization's purpose. Good ones focus on a limited number of goals, stress major policies and values, and define the major competitive spheres."],
  ["Strategic business unit (SBU)","A single business or collection of related businesses planned separately, with its own competitors and a manager responsible for strategic planning and profit."],
  ["Value chain","Porter's tool for identifying ways to create more customer value: five primary and four support activities."],
  ["Core business processes","Market sensing, new-offering realization, customer acquisition, customer relationship management, fulfillment management."],
  ["Core competency","A source of competitive advantage that makes a significant contribution to perceived customer benefits, has applications in many markets, and is difficult to imitate."],
  ["Market penetration","Gaining more share with current products in current markets."],
  ["Market development","Taking current products into new markets."],
  ["Product development","Developing new products for current markets."],
  ["Diversification","New products for new markets. Concentric (related technology), horizontal (new products for current customers), conglomerate (unrelated)."],
  ["Star","High growth, high relative share. Needs heavy investment to keep up with growth."],
  ["Cash cow","Low growth, high relative share. Generates cash to fund other units."],
  ["Question mark (problem child)","High growth, low relative share. Build it into a star or divest."],
  ["Dog","Low growth, low relative share. Harvest or divest."],
  ["SWOT analysis","Overall evaluation of strengths, weaknesses, opportunities and threats."],
  ["Strategic group","Firms pursuing the same strategy directed to the same target market."],
  ["Strategic alliance","Partnership between firms, such as product or service alliances, promotional alliances, logistics alliances and pricing collaborations."],
  ["Marketing plan","Written document summarizing what the marketer has learned about the marketplace and how the firm plans to reach its marketing objectives."]
 ],
 notes:[
  {h:"1. The four planning levels", html:"<p>Corporate headquarters defines the mission, establishes SBUs, assigns resources to each and assesses growth opportunities. Each division and SBU then sets its own plan, and each product level (line, brand) develops a marketing plan. The <b>strategic marketing plan</b> sets target markets and value proposition; the <b>tactical marketing plan</b> sets the specific tactics (features, promotion, merchandising, pricing, channels, service).</p>"},
  {h:"2. Growth strategies", html:"", v:[
   {t:"matrix", title:"Ansoff product-market expansion grid", cols:["Current products","New products"], rows:["Current markets","New markets"], cells:[["Market penetration","Sell more to current customers"],["Product development","New products for current market"],["Market development","Current products to new markets"],["Diversification","Riskiest: new product, new market"]], on:[0]}]},
  {h:"3. The BCG growth-share matrix", html:"<p>Plots each SBU by <b>market growth rate</b> (vertical) and <b>relative market share</b> (horizontal). Circle size usually shows the SBU's sales.</p>", v:[
   {t:"matrix", title:"BCG matrix", cols:["High relative share","Low relative share"], rows:["High growth","Low growth"], cells:[["Star","Build or hold; uses lots of cash"],["Question mark","Build selectively or divest"],["Cash cow","Hold or harvest; funds others"],["Dog","Harvest or divest"]], axisNote:"Typical successful sequence: question mark &rarr; star &rarr; cash cow."}]},
  {h:"4. Business unit strategy", html:"<p>The business unit plan follows: mission &rarr; SWOT (external then internal) &rarr; goal formulation (objectives must be <b>hierarchical, quantitative, realistic and consistent</b>) &rarr; strategy formulation &rarr; program formulation &rarr; implementation &rarr; feedback and control.</p>", tbl:{title:"Porter's generic strategies", cols:["Strategy","How it wins","Risk"],rows:[["Overall cost leadership","Lowest production and distribution costs, so it can price lower","A rival finds an even lower cost"],["Differentiation","Superior performance on an important customer benefit","Customers stop valuing the difference"],["Focus","Serves one or more narrow segments with cost or differentiation","Segment shrinks or is invaded"]]}},
  {h:"5. Contents of a marketing plan", html:"", v:[
   {t:"flow", title:"Marketing plan contents", steps:[["Executive summary and table of contents"],["Situation analysis","Background on sales, costs, market, competitors, macroenvironment; SWOT"],["Marketing strategy","Mission, marketing and financial objectives, target segments, positioning"],["Financial projections","Sales forecast, expense forecast, break-even analysis"],["Implementation controls","Monitoring and adjustment; contingency plans"]]}]}
 ],
 ph:[
  ["Ansoff in practice","A Cebu dried-mango brand selling more to existing pasalubong buyers through bundles is market penetration. Exporting the same product to Korea is market development. Launching dried-mango ice cream for the same buyers is product development."],
  ["Integrative growth","A beverage company buying its bottle supplier is backward integration. Buying a chain of convenience stores is forward integration."]
 ],
 confused:[
  ["Market development versus product development","Ask what is new. New market (same product) = market development. New product (same market) = product development."],
  ["Cash cow versus star","Both have high relative share. Stars are in high-growth markets and consume cash; cash cows are in low-growth markets and generate it."],
  ["SWOT internal versus external","Strengths and weaknesses are inside the firm. Opportunities and threats come from the environment, even if they feel close to home."],
  ["Mission versus objectives","Mission states purpose and spheres of competition. Objectives are specific, quantified and time-bound goals."]
 ],
 mnemonics:[
  ["Value chain primary","I Order Our Market Service","Inbound logistics, Operations, Outbound logistics, Marketing and sales, Service."],
  ["Value chain support","Fix Hiring, Tech, Purchasing","Firm infrastructure, Human resources, Technology development, Procurement."],
  ["Objectives must be","HQRC","Hierarchical, Quantitative, Realistic, Consistent."]
 ],
 takeaways:["Choose, provide and communicate value.","Ansoff and integrative growth for opportunities; BCG for portfolio decisions.","SWOT separates internal from external factors.","Porter: cost leadership, differentiation, focus.","A marketing plan runs from summary to situation analysis to strategy, financials and controls."]
});

CH.push({
 course:"mm", n:3, short:"Environment, research and demand", title:"Scanning the Environment, Conducting Research and Forecasting Demand", priority:"High-yield",
 overview:"The marketing information system, the six macroenvironment forces, the marketing research process and its choices, and how to measure and forecast demand.",
 why:"Why it ranks high: the research process, research approaches, types of research and the demand formulas are frequent identification and computation items.",
 objectives:["Describe the components of a modern marketing information system.","Identify the six macroenvironment forces.","Follow the six-step marketing research process.","Choose research approaches, instruments, sampling plans and contact methods.","Measure market demand and potential."],
 know:[
  "Marketing information system (MIS) = <mark>internal records + marketing intelligence + marketing research</mark>.",
  "Internal records include the <mark>order-to-payment cycle</mark>; marketing intelligence = everyday information about developments in the environment.",
  "Six macroenvironment forces: <mark>demographic, economic, sociocultural, natural, technological, political-legal</mark>.",
  "Research process: <mark>define the problem &rarr; develop the research plan &rarr; collect information &rarr; analyze &rarr; present findings &rarr; make the decision</mark>.",
  "Types of research: <mark>exploratory</mark> (shed light on the problem), <mark>descriptive</mark> (quantify), <mark>causal</mark> (test cause and effect).",
  "Secondary data = already exists for another purpose (cheaper, start here). Primary data = freshly gathered for this purpose.",
  "Research approaches: observational, ethnographic, focus group, survey, behavioral data, <mark>experimental (most scientifically valid)</mark>.",
  "Sampling plan decides: <mark>sampling unit (who), sample size (how many), sampling procedure (how chosen)</mark>.",
  "Market potential Q = <mark>n &times; q &times; p</mark>."
 ],
 terms:[
  ["Marketing intelligence system","Set of procedures and sources managers use to obtain everyday information about developments in the marketing environment."],
  ["Marketing research","Systematic design, collection, analysis and reporting of data and findings relevant to a specific marketing situation facing the company."],
  ["Fad / trend / megatrend","Fad: unpredictable, short-lived, without social, economic or political significance. Trend: a direction with momentum and durability. Megatrend: large social, economic, political and technological change that is slow to form but lasts 7 to 10 years or more."],
  ["Exploratory research","Gathers preliminary data to shed light on the real nature of the problem and suggest hypotheses."],
  ["Descriptive research","Seeks to quantify demand, such as how many people buy at a given price."],
  ["Causal research","Tests a cause-and-effect relationship."],
  ["Secondary data","Data collected for another purpose that already exist somewhere."],
  ["Primary data","Freshly gathered data for a specific purpose or project."],
  ["Focus group","Gathering of 6 to 10 people carefully selected on demographic, psychographic or other criteria, who discuss topics at length with a professional moderator."],
  ["Ethnographic research","Observational research using concepts and tools from anthropology to gain deep understanding of how people live and work."],
  ["Probability sample","Every member of the population has a known chance of being selected; allows calculation of confidence limits for sampling error. Types: simple random, stratified random, cluster."],
  ["Nonprobability sample","Convenience, judgment and quota samples. Cheaper and faster, but sampling error cannot be measured."],
  ["Closed-end vs open-end questions","Closed-end questions specify all possible answers and are easy to tabulate. Open-end questions let respondents answer in their own words and reveal more."],
  ["Market demand","Total volume that would be bought by a defined customer group in a defined area, time period and marketing environment under a defined marketing program."],
  ["Market potential","The limit approached by market demand as industry marketing expenditures approach infinity in a given environment."],
  ["Company sales potential","The sales limit approached by company demand as company marketing effort increases relative to competitors."],
  ["Potential / available / target / penetrated market","Potential: consumers with sufficient interest. Available: those with interest, income and access. Target (served): the part the firm decides to pursue. Penetrated: those already buying."],
  ["Chain-ratio method","Estimating market potential by multiplying a base number by several adjusting percentages."],
  ["Market-buildup method","Identifying all potential buyers in each market and estimating their potential purchases, then summing."]
 ],
 notes:[
  {h:"1. The six macroenvironment forces", html:"", tbl:{title:"Macroenvironment (Kotler and Keller)", cols:["Force","What to watch"],rows:[["Demographic","Population growth, age mix, ethnic and educational markets, household patterns"],["Economic","Income distribution, savings, debt, credit availability, consumer psychology"],["Sociocultural","Views of self, others, organizations, society, nature, universe; core values persist, secondary values change; subcultures"],["Natural","Raw material shortages, energy costs, pollution, government role, green marketing"],["Technological","Pace of change, opportunities for innovation, R&D budgets, regulation of change"],["Political-legal","Laws, agencies and pressure groups; business legislation; special-interest groups"]]}},
  {h:"2. The marketing research process", html:"", v:[
   {t:"flow", title:"Six steps", steps:[["Define the problem","Also decision alternatives and research objectives. Not too broad, not too narrow."],["Develop the research plan","Data sources, approaches, instruments, sampling plan, contact methods"],["Collect the information","Often the most expensive and error-prone step"],["Analyze the information","Tabulate, compute averages and dispersion, apply statistics"],["Present the findings","Relevant to the major decisions"],["Make the decision"]]}],
   tbl:{title:"Research plan choices", cols:["Decision","Options"],rows:[["Data sources","Secondary, primary"],["Approaches","Observational, ethnographic, focus group, survey, behavioral, experimental"],["Instruments","Questionnaires, qualitative measures (projective techniques, word association, laddering), technological devices"],["Sampling plan","Sampling unit, sample size, sampling procedure"],["Contact methods","Mail, telephone, personal, online"]]}},
  {h:"3. Measuring demand", html:"<p>Companies estimate <b>total market potential</b> (Q = n &times; q &times; p), <b>area market potential</b> (market-buildup method for business markets; multiple-factor index such as the buying power index for consumer markets), and industry sales and market shares. To forecast, they can use surveys of buyers' intentions, composites of sales force opinions, expert opinion (including the Delphi method), past-sales analysis (time series, statistical demand analysis) and market tests.</p>"}
 ],
 ph:[
  ["Macroenvironment","A growing senior population in the Philippines is a demographic opportunity for maintenance medicine and assisted-living services. Rising electricity costs are a natural-environment threat for energy-heavy manufacturers."],
  ["Computing potential","If 5 million Metro Manila households each buy 12 packs of instant noodles a month at P15, monthly potential = 5,000,000 &times; 12 &times; P15 = P900 million."]
 ],
 confused:[
  ["Market potential versus sales forecast","Potential is the upper limit for the whole market. A forecast is the expected level of sales under a chosen plan and environment."],
  ["Exploratory versus descriptive versus causal","Exploratory clarifies the problem; descriptive measures what is happening; causal tests whether X causes Y (usually by experiment)."],
  ["Probability versus nonprobability samples","Only probability samples let you measure sampling error. Convenience, judgment and quota samples are nonprobability."],
  ["Fad versus trend","A fad is short-lived and lacks significance; a trend has momentum and durability."]
 ],
 mnemonics:[
  ["Macroenvironment","DESNTP: Do Eat Some Nice Thai Pancit","Demographic, Economic, Sociocultural, Natural, Technological, Political-legal."],
  ["Research process","Do Dogs Catch Any Pink Mice?","Define, Develop plan, Collect, Analyze, Present, Make decision."],
  ["Sampling plan","Who, how many, how","Unit, size, procedure."]
 ],
 takeaways:["MIS = internal records, intelligence, research.","Six macro forces, read through the PH context.","Research: six steps; experiments are the most valid way to show cause and effect.","Q = n &times; q &times; p for market potential."]
});

CH.push({
 course:"mm", n:4, short:"Consumer and business buying behavior", title:"Analyzing Consumer and Business Markets", priority:"High-yield",
 overview:"Factors that influence consumers, the five-stage buying process and decision heuristics, plus how organizations buy: buying situations, the buying center and business buying stages.",
 why:"Why it ranks high: the factor categories, five-stage model, perceived risks and buying-center roles produce many scenario questions.",
 objectives:["Identify cultural, social, personal and psychological influences on consumers.","Trace the five-stage buying decision process.","Explain heuristics and perceived risk.","Contrast business and consumer markets.","Name the buying situations, buying-center roles and procurement stages."],
 know:[
  "Consumer influences: <mark>cultural</mark> (culture, subculture, social class), <mark>social</mark> (reference groups, family, roles and status), <mark>personal</mark> (age, life-cycle stage, occupation, economic circumstances, personality, self-concept, lifestyle, values), <mark>psychological</mark> (motivation, perception, learning, emotions, memory).",
  "Five stages: <mark>problem recognition &rarr; information search &rarr; evaluation of alternatives &rarr; purchase decision &rarr; postpurchase behavior</mark>.",
  "Brand sets narrow: <mark>total &rarr; awareness &rarr; consideration &rarr; choice &rarr; decision</mark>.",
  "Between intention and decision: <mark>attitudes of others</mark> and <mark>unanticipated situational factors</mark>.",
  "Perceived risks: <mark>functional, physical, financial, social, psychological, time</mark>.",
  "Business buying situations: <mark>straight rebuy, modified rebuy, new task</mark> (new task has the most buying-center participants).",
  "Buying center roles: <mark>initiators, users, influencers, deciders, approvers, buyers, gatekeepers</mark>.",
  "Business demand is <mark>derived demand</mark> (from consumer demand) and often <mark>inelastic</mark> and fluctuating."
 ],
 terms:[
  ["Culture","The fundamental determinant of a person's wants and behavior."],
  ["Subculture","Groups that provide more specific identification and socialization: nationalities, religions, racial groups, geographic regions."],
  ["Reference groups","All groups that have direct (membership) or indirect influence on attitudes or behavior. Primary groups (family, friends) interact continuously and informally."],
  ["Aspirational vs dissociative groups","Aspirational: groups a person hopes to join. Dissociative: groups whose values or behavior the person rejects."],
  ["Opinion leader","Person who offers informal advice or information about a product or category."],
  ["Family of orientation vs procreation","Orientation: parents and siblings. Procreation: spouse and children (the more direct influence on everyday buying)."],
  ["Lifestyle","A person's pattern of living as expressed in activities, interests and opinions."],
  ["Selective attention, distortion, retention","Perception filters: we notice few stimuli, interpret them to fit beliefs, and remember information that supports attitudes."],
  ["Subliminal perception","Belief that messages below conscious awareness affect behavior; no strong evidence it drives purchase."],
  ["Expectancy-value model","Consumers evaluate brands by combining their brand beliefs with the importance of each attribute (a compensatory model)."],
  ["Noncompensatory heuristics","Conjunctive (minimum cutoff on each attribute), lexicographic (choose best on the most important attribute), elimination-by-aspects (compare on attributes ranked by importance, eliminating brands below cutoffs)."],
  ["Cognitive dissonance","Postpurchase discomfort from noticing worrying features or hearing good things about other brands."],
  ["Mental accounting","Thaler: consumers code, categorize and evaluate financial outcomes of choices in separate mental accounts."],
  ["Derived demand","Demand for business goods is ultimately derived from demand for consumer goods."],
  ["Buying center (decision-making unit)","All individuals and groups who participate in the buying decision process and share goals and risks."],
  ["Straight rebuy","Routine reordering of supplies from approved vendors."],
  ["Modified rebuy","Buyer wants to modify specifications, prices, delivery or other terms."],
  ["New task","Buying a product or service for the first time; greater cost or risk means more participants and more information gathering."],
  ["Systems buying / selling","Buying a total solution from one seller; turnkey solution."]
 ],
 notes:[
  {h:"1. Influences on consumer behavior", html:"", v:[
   {t:"mind", title:"Four groups of factors", center:"Consumer behavior", branches:[
    ["Cultural",["Culture","Subculture","Social class"]],
    ["Social",["Reference groups","Family","Roles and status"]],
    ["Personal",["Age and life-cycle stage","Occupation and economic circumstances","Personality and self-concept","Lifestyle and values"]],
    ["Psychological",["Motivation (Freud, Maslow, Herzberg)","Perception","Learning","Emotions","Memory"]]]}]},
  {h:"2. Motivation theories", html:"<p><b>Freud</b>: psychological forces shaping behavior are largely unconscious (laddering digs from instrumental to terminal motivations). <b>Maslow</b>: physiological, safety, social, esteem, self-actualization; people satisfy the most important needs first. <b>Herzberg</b>: dissatisfiers (cause dissatisfaction) and satisfiers (cause satisfaction); the absence of dissatisfiers is not enough, satisfiers must be present.</p>"},
  {h:"3. The five-stage model", html:"<p>Consumers do not always pass through all stages; they may skip or reverse some, especially in low-involvement purchases. <b>Postpurchase behavior</b> includes satisfaction, actions (repeat, word of mouth, complaints) and use and disposal.</p>", v:[
   {t:"flow", title:"Consumer buying process", steps:[["Problem recognition","Internal or external stimuli"],["Information search","Personal, commercial, public, experiential sources"],["Evaluation of alternatives","Beliefs and attitudes, expectancy-value"],["Purchase decision","Brand, dealer, quantity, timing, payment"],["Postpurchase behavior","Satisfaction, actions, use and disposal"]]}]},
  {h:"4. Organizational buying", html:"", tbl:{title:"Stages of business buying (buyphases)", cols:["Stage","Note"],rows:[["1. Problem recognition","Internal or external stimuli"],["2. General need description","Characteristics and quantity of the item"],["3. Product specification","Value analysis to reduce cost"],["4. Supplier search","Online catalogs, trade shows, referrals"],["5. Proposal solicitation","Written or formal presentations"],["6. Supplier selection","Rate suppliers on attributes; negotiate"],["7. Order-routine specification","Final order, quantity, delivery, warranties"],["8. Performance review","Continue, modify or drop the supplier"]]}}
 ],
 ph:[
  ["Reference groups","A student buys the same sneakers worn by a popular varsity player: an aspirational group at work."],
  ["Buying center","When a Cebu hotel buys a new property-management system, front-desk staff (users), the IT head (influencer and gatekeeper), the general manager (decider), the owner (approver) and purchasing (buyer) all play roles."]
 ],
 confused:[
  ["Decider versus approver versus buyer","Deciders choose the product or supplier; approvers authorize the proposed action; buyers have formal authority to select suppliers and arrange terms."],
  ["Gatekeeper versus influencer","Gatekeepers control the flow of information (receptionists, technical staff). Influencers help define specifications and evaluate alternatives."],
  ["Compensatory versus noncompensatory","Expectancy-value is compensatory (a strength offsets a weakness). Conjunctive, lexicographic and elimination-by-aspects are not."],
  ["Cognitive dissonance versus dissatisfaction","Dissonance is doubt about whether you chose well, often after a big purchase. Dissatisfaction is when performance fell short of expectations."]
 ],
 mnemonics:[
  ["Buying center roles","I Use Influence; Deciders Approve Buyers' Gates","Initiators, Users, Influencers, Deciders, Approvers, Buyers, Gatekeepers."],
  ["Five-stage model","PIE-PP","Problem recognition, Information search, Evaluation, Purchase, Postpurchase."],
  ["Perceived risks","Fun Phil Finds Snacks Pretty Tasty","Functional, Physical, Financial, Social, Psychological, Time."]
 ],
 takeaways:["Cultural, social, personal and psychological factors shape consumers.","Five stages, with two interruptions between intention and purchase.","Seven buying-center roles; three buying situations.","Business demand is derived and often inelastic."]
});

CH.push({
 course:"mm", n:5, short:"Segmentation, targeting, positioning and competition", title:"Identifying Segments, Targeting, Positioning and Competing", priority:"High-yield",
 overview:"Bases for segmenting consumer and business markets, criteria for useful segments, target-market patterns, positioning with POPs and PODs, and strategies for leaders, challengers, followers and nichers.",
 why:"Why it ranks high: STP is the backbone of marketing strategy and cuts across every subject on the exam.",
 objectives:["Segment consumer markets on geographic, demographic, psychographic and behavioral bases.","Apply the five criteria for effective segmentation.","Choose among target-market patterns.","Write a positioning with frame of reference, POPs and PODs.","Match competitive strategies to market roles."],
 know:[
  "Consumer segmentation bases: <mark>geographic, demographic, psychographic, behavioral</mark>.",
  "Behavioral variables: needs and benefits, decision roles, user status, usage rate, buyer-readiness stage, loyalty status, attitude, occasions.",
  "Effective segments are <mark>measurable, substantial, accessible, differentiable, actionable</mark>.",
  "Target patterns: <mark>single-segment concentration, selective specialization, product specialization, market specialization, full market coverage</mark> (undifferentiated or differentiated).",
  "Positioning = designing the offer and image to occupy a <mark>distinctive place in the minds</mark> of the target market.",
  "Positioning requires a <mark>competitive frame of reference</mark>, <mark>points of parity</mark> and <mark>points of difference</mark>.",
  "Leader: <mark>expand total demand, protect share, increase share</mark>. Defenses: position, flank, preemptive, counteroffensive, mobile, contraction.",
  "Challenger attacks: <mark>frontal, flank, encirclement, bypass, guerrilla</mark>.",
  "Followers: <mark>counterfeiter, cloner, imitator, adapter</mark>. Nichers specialize."
 ],
 terms:[
  ["Market segmentation","Dividing a market into well-defined slices: groups of customers who share a similar set of needs and wants."],
  ["Psychographics","Using psychology and demographics to understand consumers by psychological/personality traits, lifestyle or values (e.g., VALS)."],
  ["Benefit segmentation","Grouping buyers by the benefits they seek from the product."],
  ["Usage rate","Light, medium and heavy users. Heavy users are often a small share of buyers but a large share of consumption."],
  ["Buyer-readiness stages","Unaware, aware, informed, interested, desire, intention to buy."],
  ["Undifferentiated marketing","Ignore segment differences and go after the whole market with one offer."],
  ["Differentiated marketing","Operate in several segments with different offers for each."],
  ["Niche","A more narrowly defined customer group seeking a distinctive mix of benefits within a segment."],
  ["Individual (customerized) marketing","Mass customization; segments of one."],
  ["Points of difference (PODs)","Attributes or benefits consumers strongly associate with a brand, positively evaluate, and believe they could not find to the same extent with a competitor."],
  ["Points of parity (POPs)","Associations that are not unique to the brand but may be shared: category POPs and competitive POPs."],
  ["Market leader","Firm with the largest market share in the relevant product market."],
  ["Market challenger","Runner-up firm that attacks the leader and other competitors to gain share."],
  ["Market follower","Runner-up that prefers to follow rather than attack the leader."],
  ["Market nicher","Firm that serves small segments others overlook or ignore."],
  ["Bypass attack","Bypassing the enemy and attacking easier markets: diversifying into unrelated products, new geographic markets, or leapfrogging with new technology."],
  ["Guerrilla warfare","Small, intermittent attacks to harass and demoralize the opponent and eventually secure footholds."]
 ],
 notes:[
  {h:"1. Segmentation bases", html:"", tbl:{title:"Consumer segmentation", cols:["Base","Examples"],rows:[["Geographic","Nations, regions, cities, neighborhoods; climate, density"],["Demographic","Age, life-cycle stage, gender, income, generation, social class, race and culture"],["Psychographic","Lifestyle, personality, values (VALS)"],["Behavioral","Needs and benefits, decision roles, user status, usage rate, buyer-readiness stage, loyalty status, attitude, occasions"]]}},
  {h:"2. Target-market patterns", html:"", v:[
   {t:"flow", title:"Five patterns (Abell)", numbered:false, steps:[["Single-segment concentration","One product, one market"],["Selective specialization","Several unrelated attractive segments"],["Product specialization","One product sold to several segments"],["Market specialization","Many products for one customer group"],["Full market coverage","All groups with all products (undifferentiated or differentiated)"]]}]},
  {h:"3. Competitive strategies", html:"", tbl:{title:"Roles and moves", cols:["Role","Typical strategies"],rows:[["Leader","Expand total demand (new customers, more usage), protect share (position, flank, preemptive, counteroffensive, mobile, contraction defense), increase share"],["Challenger","Define the objective and opponent, then attack: frontal, flank, encirclement, bypass, guerrilla"],["Follower","Counterfeiter (duplicates and sells illegally), cloner (copies product, name, packaging with slight variations), imitator (copies some things, differentiates others), adapter (adapts or improves, may sell in other markets)"],["Nicher","Specialize by end use, vertical level, customer size, specific customers, geography, product, service, quality-price, channel"]]}}
 ],
 ph:[
  ["Behavioral segmentation","A telco offering unlimited-data promos for heavy social media users and cheap load cards for light users is segmenting by usage rate."],
  ["Nicher","A Cebu artisanal chocolate maker sells single-origin tablea to specialty cafes: a nicher on quality and channel."]
 ],
 confused:[
  ["Segmentation versus targeting versus positioning","Segmentation divides the market; targeting chooses which segments to serve; positioning decides how to be seen by the chosen target."],
  ["Product specialization versus market specialization","Product specialization: one product for many segments. Market specialization: many products for one customer group."],
  ["Flank attack versus bypass attack","Flank: attack where the enemy is weak (an underserved segment or region). Bypass: avoid the enemy entirely and go after easier markets."],
  ["Cloner versus imitator","Cloners copy closely with slight variations; imitators copy some things but keep differentiation in packaging, advertising, pricing or location."]
 ],
 mnemonics:[
  ["Useful segments","MSADA: My Sister Always Dances Alone","Measurable, Substantial, Accessible, Differentiable, Actionable."],
  ["Challenger attacks","Fast Fighters Encircle By Guerrilla","Frontal, Flank, Encirclement, Bypass, Guerrilla."],
  ["Follower types","CCIA","Counterfeiter, Cloner, Imitator, Adapter (from most to least copying)."]
 ],
 takeaways:["Segment on geographic, demographic, psychographic and behavioral bases.","Five tests for useful segments.","Positioning = frame of reference + POPs + PODs.","Strategy depends on market role: leader, challenger, follower, nicher."]
});

add("mm", {
mcq:[
 {ch:[1], q:"Which is the shortest good definition of marketing according to Kotler and Keller?", ok:"Meeting needs profitably", no:["Selling what the company makes","Advertising products to mass markets","Producing goods at the lowest cost"], why:"Kotler and Keller define marketing in short as meeting needs profitably. The other choices describe the selling, advertising and production views, which are narrower."},
 {ch:[1], q:"Wants for specific products that are backed by an ability to pay are called:", ok:"Demands", no:["Needs","Wants","Offerings"], why:"Needs are basic requirements, wants are needs directed to specific objects, and demands are wants backed by the ability to pay."},
 {ch:[1], q:"A company that believes customers will not buy enough unless it sells aggressively follows the:", ok:"Selling concept", no:["Production concept","Product concept","Marketing concept"], why:"The selling concept pushes what the firm makes. The marketing concept starts with customer needs instead."},
 {ch:[1], q:"A firm that focuses on achieving high production efficiency, low costs and mass distribution follows the:", ok:"Production concept", no:["Product concept","Selling concept","Holistic marketing concept"], why:"The production concept assumes buyers want cheap, widely available products, so it focuses on efficiency and distribution."},
 {ch:[1], q:"Which set lists the four components of holistic marketing?", ok:"Relationship, integrated, internal and performance marketing", no:["Product, price, place and promotion","People, processes, programs and performance","Segmentation, targeting, positioning and differentiation"], why:"Holistic marketing = relationship + integrated + internal + performance marketing. People, processes, programs and performance are the modern 4Ps, a different list."},
 {ch:[1], q:"Hiring, training and motivating able employees who want to serve customers well is:", ok:"Internal marketing", no:["Relationship marketing","Integrated marketing","Performance marketing"], why:"Internal marketing ensures everyone in the organization embraces marketing principles, especially senior management."},
 {ch:[1], q:"A brand's own website, blog and official social media pages are examples of:", ok:"Owned media", no:["Paid media","Earned media","Shared channels"], why:"Owned media are channels the company controls. Paid media are bought (ads); earned media come from others (press coverage, word of mouth)."},
 {ch:[1], q:"A customer says she wants an inexpensive car, but what she really wants is a car with low operating cost. This hidden need is a:", ok:"Real need", no:["Stated need","Delight need","Secret need"], why:"Stated: what the customer says. Real: what she means (low operating cost). Unstated: expects good service. Delight: would like extras. Secret: wants to be seen by friends as savvy."},
 {ch:[2], q:"In the Ansoff grid, selling existing products to new geographic markets is:", ok:"Market development", no:["Market penetration","Product development","Diversification"], why:"The product is the same; only the market is new. That is market development."},
 {ch:[2], q:"A milk company acquires its packaging supplier. This is:", ok:"Backward integration", no:["Forward integration","Horizontal integration","Concentric diversification"], why:"Acquiring a supplier moves the firm backward in the supply chain. Acquiring distributors is forward; acquiring competitors is horizontal."},
 {ch:[2], q:"In the BCG matrix, a business with low market growth and high relative market share is a:", ok:"Cash cow", no:["Star","Question mark","Dog"], why:"Cash cows lead slow-growing markets and generate cash that funds stars and question marks."},
 {ch:[2], q:"The two axes of the BCG growth-share matrix are:", ok:"Market growth rate and relative market share", no:["Market attractiveness and business strength","Sales and profit","Product newness and market newness"], why:"Market attractiveness and business strength are the GE/McKinsey matrix axes. Product and market newness are Ansoff."},
 {ch:[2], q:"Which is NOT a primary activity in Porter's value chain?", ok:"Procurement", no:["Inbound logistics","Operations","Service"], why:"Procurement is a support activity, along with firm infrastructure, HRM and technology development."},
 {ch:[2], q:"Porter's three generic strategies are:", ok:"Overall cost leadership, differentiation and focus", no:["Penetration, development and diversification","Build, hold and harvest","Leader, challenger and follower"], why:"Penetration/development/diversification is Ansoff; build/hold/harvest are BCG strategies; leader/challenger/follower are competitive roles."},
 {ch:[2], q:"Competition from a new entrant and changing government regulation should be listed in a SWOT under:", ok:"Threats", no:["Weaknesses","Strengths","Opportunities"], why:"They are external and unfavorable, so they are threats. Weaknesses are internal."},
 {ch:[2], q:"Which section of a marketing plan includes the sales forecast, expense forecast and break-even analysis?", ok:"Financial projections", no:["Situation analysis","Executive summary","Implementation controls"], why:"Financial projections hold the numbers. The situation analysis holds background and SWOT; controls cover monitoring and contingency plans."},
 {ch:[2], q:"A core competency is best described as:", ok:"A source of competitive advantage that is difficult for competitors to imitate and can be applied across many markets", no:["Any activity the company performs","The company's largest business unit","A temporary price advantage"], why:"Core competencies contribute to customer benefits, apply widely, and are hard to imitate."},
 {ch:[3], q:"Which research approach is the most scientifically valid for showing cause and effect?", ok:"Experimental research", no:["Focus group research","Observational research","Survey research"], why:"Experiments control for competing explanations, so they can capture cause-and-effect relationships."},
 {ch:[3], q:"Research that seeks to quantify demand, such as how many people would buy at a certain price, is:", ok:"Descriptive research", no:["Exploratory research","Causal research","Ethnographic research"], why:"Descriptive research measures. Exploratory clarifies the problem; causal tests cause and effect."},
 {ch:[3], q:"Data that already exist because they were collected for another purpose are:", ok:"Secondary data", no:["Primary data","Panel data","Experimental data"], why:"Researchers usually start with secondary data because they are cheaper and faster, then gather primary data if needed."},
 {ch:[3], q:"The sampling plan requires three decisions. Which set is correct?", ok:"Sampling unit, sample size and sampling procedure", no:["Questionnaire, interview and observation","Mail, phone and online","Population, census and parameter"], why:"Who is surveyed, how many, and how they are chosen. Mail, phone and online are contact methods."},
 {ch:[3], q:"A convenience sample is a type of:", ok:"Nonprobability sample", no:["Simple random sample","Stratified random sample","Cluster sample"], why:"Convenience, judgment and quota samples are nonprobability samples, so sampling error cannot be measured."},
 {ch:[3], q:"A set of procedures and sources managers use to get everyday information about developments in the environment is the:", ok:"Marketing intelligence system", no:["Internal records system","Marketing research system","Marketing decision support system"], why:"Internal records give results data; intelligence gives happenings data; research addresses a specific problem."},
 {ch:[3], q:"Which of the following is a megatrend rather than a fad?", ok:"A large social and technological change that is slow to form and lasts many years", no:["A dance craze that peaks for a few months","A one-season fashion color","A viral meme that fades in weeks"], why:"Megatrends are large changes that form slowly and last 7 to 10 years or more. Fads are short-lived and lack significance."},
 {ch:[4], q:"Which group of factors includes culture, subculture and social class?", ok:"Cultural factors", no:["Social factors","Personal factors","Psychological factors"], why:"Social factors are reference groups, family, roles and status. Personal factors include age and lifestyle. Psychological factors include motivation and perception."},
 {ch:[4], q:"In the consumer buying process, what comes right after information search?", ok:"Evaluation of alternatives", no:["Problem recognition","Purchase decision","Postpurchase behavior"], why:"Problem recognition, information search, evaluation of alternatives, purchase decision, postpurchase behavior."},
 {ch:[4], q:"A consumer chooses the brand that performs best on the single most important attribute. This heuristic is:", ok:"Lexicographic", no:["Conjunctive","Elimination-by-aspects","Expectancy-value"], why:"Lexicographic: best on the most important attribute. Conjunctive: minimum cutoff on each attribute. Elimination-by-aspects: drop brands that fail cutoffs on attributes ranked by importance."},
 {ch:[4], q:"Fear that friends will laugh at a purchase is which type of perceived risk?", ok:"Social risk", no:["Functional risk","Psychological risk","Financial risk"], why:"Social risk is embarrassment in front of others. Psychological risk affects the buyer's own mental well-being or self-image."},
 {ch:[4], q:"In a buying center, the person who controls the flow of information to others is the:", ok:"Gatekeeper", no:["Influencer","Decider","Approver"], why:"Gatekeepers, such as purchasing agents, receptionists or technical staff, can stop salespeople from reaching users or deciders."},
 {ch:[4], q:"A buyer reorders office supplies from an approved vendor without changes. This is a:", ok:"Straight rebuy", no:["Modified rebuy","New task","Systems buying"], why:"Straight rebuy is routine reordering. Modified rebuy changes terms; new task is a first-time purchase."},
 {ch:[4], q:"Demand for steel rises because consumers are buying more cars. This illustrates:", ok:"Derived demand", no:["Inelastic demand","Primary demand","Latent demand"], why:"Business demand is derived from consumer demand for the final products."},
 {ch:[5], q:"Which is NOT one of the five criteria for useful market segments?", ok:"Profitable in the first year", no:["Measurable","Substantial","Actionable"], why:"The criteria are measurable, substantial, accessible, differentiable and actionable."},
 {ch:[5], q:"Dividing a market by usage rate, loyalty status and benefits sought is:", ok:"Behavioral segmentation", no:["Psychographic segmentation","Demographic segmentation","Geographic segmentation"], why:"Behavioral variables relate to knowledge of, attitude toward, use of, or response to a product."},
 {ch:[5], q:"A firm that makes one type of microscope and sells it to university, government and commercial labs follows which target pattern?", ok:"Product specialization", no:["Market specialization","Selective specialization","Single-segment concentration"], why:"One product, many segments = product specialization. Many products for one group (e.g., only university labs) = market specialization."},
 {ch:[5], q:"A market challenger attacks the leader where it is weak, such as an underserved region. This is a:", ok:"Flank attack", no:["Frontal attack","Bypass attack","Encirclement attack"], why:"A flank attack hits a weak spot. A frontal attack matches the opponent's strengths; bypass avoids the opponent; encirclement attacks on several fronts at once."},
 {ch:[5], q:"A market follower that takes the leader's products and improves or adapts them is a(n):", ok:"Adapter", no:["Cloner","Counterfeiter","Imitator"], why:"Adapters improve or adapt the leader's products and often sell them in different markets. They may grow into challengers."},
 {ch:[5], q:"Associations that a brand shares with other brands in its category are:", ok:"Points of parity", no:["Points of difference","Brand mantras","Core competencies"], why:"POPs are not unique to the brand and include category and competitive POPs. PODs are unique and strongly held."}
],
tf:[
 {ch:[1], q:"The marketing concept says the firm should find the right customers for its products.", a:false, why:"It is the reverse: find the right products for your customers."},
 {ch:[1], q:"Performance marketing includes both financial accountability and social responsibility.", a:true, why:"Performance marketing covers financial and nonfinancial returns to business and society."},
 {ch:[2], q:"In the BCG matrix, question marks have high market growth but low relative market share.", a:true, why:"They need cash to build share; managers must decide whether to build or divest."},
 {ch:[2], q:"Firm infrastructure is a primary activity in Porter's value chain.", a:false, why:"It is a support activity. The five primary activities are inbound logistics, operations, outbound logistics, marketing and sales, and service."},
 {ch:[3], q:"Focus groups produce results that can be generalized to the whole market.", a:false, why:"Focus groups are small, non-random and qualitative. They are good for exploration, not for generalizing."},
 {ch:[3], q:"Market potential is the upper limit approached by market demand as industry marketing spending increases.", a:true, why:"Spending more cannot push demand beyond this limit in a given environment."},
 {ch:[4], q:"The new-task buying situation usually involves the fewest participants.", a:false, why:"New tasks carry the most cost and risk, so they draw the most participants and the most information gathering."},
 {ch:[4], q:"Consumers always go through all five stages of the buying process in order.", a:false, why:"In routine, low-involvement purchases, consumers often skip or reverse stages."},
 {ch:[5], q:"Undifferentiated marketing ignores segment differences and goes after the whole market with one offer.", a:true, why:"It is one form of full market coverage; the other is differentiated marketing."},
 {ch:[5], q:"A guerrilla attack is a large, continuous assault on all of the leader's markets.", a:false, why:"Guerrilla warfare uses small, intermittent attacks. Large attacks on many fronts describe encirclement."}
],
id:[
 {ch:[1], q:"Levitt's term for a firm so focused on its product that it forgets the customer need behind it.", a:["Marketing myopia","Myopia"], why:"Example: a railroad that sees itself in the railroad business instead of the transportation business."},
 {ch:[2], q:"The growth strategy of offering new products in new markets.", a:["Diversification"], why:"It is the riskiest Ansoff cell because both product and market are new."},
 {ch:[2], q:"A single business or group of related businesses that can be planned separately, with its own competitors and manager.", a:["Strategic business unit","SBU"], why:"SBUs are the unit of analysis in portfolio tools like BCG."},
 {ch:[3], q:"Research that tests a cause-and-effect relationship.", a:["Causal research","Causal"], why:"Usually done through experiments."},
 {ch:[4], q:"Postpurchase discomfort from doubts about whether one made the right choice.", a:["Cognitive dissonance","Postpurchase dissonance","Dissonance"], why:"Marketers reduce it with reassuring communications and good service after the sale."},
 {ch:[4], q:"All individuals and groups who participate in an organization's buying decision.", a:["Buying center","Decision-making unit","DMU"], why:"Roles: initiators, users, influencers, deciders, approvers, buyers, gatekeepers."},
 {ch:[5], q:"A more narrowly defined group of customers seeking a distinctive mix of benefits within a segment.", a:["Niche","Market niche"], why:"Niches are smaller and usually attract only one or two competitors."}
],
match:[
 {ch:[2], q:"Match each BCG category to its usual strategy.", pairs:[["Star","Build or hold to keep share in a fast-growing market"],["Cash cow","Hold or harvest to generate cash"],["Question mark","Build selectively or divest"],["Dog","Harvest or divest"]], why:"BCG strategies are build, hold, harvest and divest, chosen by each unit's growth and share."},
 {ch:[4], q:"Match each buying-center role to its description.", pairs:[["Initiator","Requests that something be bought"],["Influencer","Helps define specifications and evaluate alternatives"],["Decider","Decides on product requirements or suppliers"],["Approver","Authorizes the proposed actions"],["Gatekeeper","Controls the flow of information"]], why:"Users actually use the product; buyers handle supplier selection and terms."}
],
app:[
 {ch:[3], q:"A city has 400,000 households. Each buys an average of 10 bottles of fish sauce a year at P40 per bottle. What is the total market potential?", ok:"P160,000,000", no:["P16,000,000","P4,000,000","P1,600,000,000"], why:"Q = n &times; q &times; p = 400,000 &times; 10 &times; P40 = P160,000,000."},
 {ch:[3], q:"Your brand sold P45 million in a P300 million market. The leader sold P90 million. What is your relative market share?", ok:"0.5", no:["15%","2.0","30%"], why:"Relative share = your share &divide; leader's share = (45/300) &divide; (90/300) = 15% &divide; 30% = 0.5. Your market share is 15%, but the question asks for relative share."},
 {ch:[3], q:"A region has 3% of national disposable income, 2% of retail sales and 5% of the population. Using the buying power index (0.5, 0.3, 0.2), what share of buying power does it have?", ok:"3.1%", no:["3.3%","10%","2.6%"], why:"0.5(3) + 0.3(2) + 0.2(5) = 1.5 + 0.6 + 1.0 = 3.1%."},
 {ch:[3], q:"There are 2,000,000 young adults in a target area; 30% drink coffee daily; 20% of those prefer ready-to-drink coffee. How many potential RTD coffee buyers are there (chain-ratio method)?", ok:"120,000", no:["600,000","400,000","1,200,000"], why:"2,000,000 &times; 0.30 = 600,000; &times; 0.20 = 120,000."},
 {ch:[2], q:"A bakery known for pandesal starts selling the same pandesal in a new province. Which growth strategy is this?", ok:"Market development", no:["Market penetration","Product development","Diversification"], why:"Same product, new market."},
 {ch:[2], q:"A bank opens a coffee shop business unrelated to banking. This is best described as:", ok:"Conglomerate diversification", no:["Concentric diversification","Horizontal integration","Market penetration"], why:"Unrelated products for new markets = conglomerate diversification. Concentric diversification uses related technology or marketing synergies."},
 {ch:[4], q:"Maria wants a new laptop but delays buying after her brother criticizes the brand she chose. What interrupted her purchase decision?", ok:"Attitudes of others", no:["Unanticipated situational factors","Cognitive dissonance","Selective retention"], why:"Between purchase intention and decision, attitudes of others and unanticipated situational factors can intervene. Dissonance happens after the purchase."},
 {ch:[5], q:"A shampoo brand targets people who want dandruff control rather than people who want fragrance. Which segmentation variable is used?", ok:"Benefits sought", no:["Usage rate","Social class","Geographic region"], why:"Benefit segmentation groups buyers by what they want the product to do for them."},
 {ch:[5], q:"A small local airline launches cheap flights on routes the national leader does not serve. Which competitive move is this?", ok:"Bypass attack", no:["Frontal attack","Flank attack","Encirclement attack"], why:"Going after markets the opponent does not serve avoids the enemy entirely: a bypass. If it targeted the leader's weakly served routes, it would be a flank attack."}
],
"case":[
 {ch:[2,5], title:"Kape Sugbo plans its next move", "case":"<p>Kape Sugbo is a Cebu-based coffee roaster with 18 cafes. It leads the local specialty coffee market (growing 15% a year) with twice the share of its nearest rival. It also owns a small bottled-water unit with 3% share in a flat market dominated by national brands. Management wants to grow. Options: (a) open cafes in Davao, (b) sell bottled cold brew in its existing cafes, (c) buy the farm cooperative that supplies its beans. A national chain recently started offering cheaper specialty drinks in Cebu.</p>", qs:[
   {q:"In BCG terms, the specialty coffee business is a:", ok:"Star", no:["Cash cow","Question mark","Dog"], why:"High market growth (15%) and relative share above 1.0 (twice the nearest rival) = star."},
   {q:"The bottled-water unit is a:", ok:"Dog", no:["Question mark","Cash cow","Star"], why:"Low growth (flat market) and low relative share (3% against national leaders) = dog. Harvest or divest."},
   {q:"Option (a), opening cafes in Davao, is:", ok:"Market development", no:["Product development","Market penetration","Backward integration"], why:"Same product, new geographic market."},
   {q:"Option (c), buying the supplier cooperative, is:", ok:"Backward integration", no:["Forward integration","Horizontal integration","Diversification"], why:"Acquiring a supplier is backward integration."},
   {q:"The national chain's cheaper specialty drinks should be listed in Kape Sugbo's SWOT as a(n):", ok:"Threat", no:["Weakness","Opportunity","Strength"], why:"It is an external, unfavorable development."}
 ]}
],
essay:[
 {ch:[1], q:"Compare the five company orientations toward the marketplace. Which one best fits today's environment, and why?", model:"<p>The <b>production</b> concept assumes customers want cheap, available products and focuses on efficiency. The <b>product</b> concept assumes customers want the best quality and features, which risks marketing myopia. The <b>selling</b> concept pushes what the firm makes through aggressive selling. The <b>marketing</b> concept finds the right products for customers, putting needs first. The <b>holistic marketing</b> concept recognizes that everything matters and combines relationship, integrated, internal and performance marketing.</p><p>Holistic marketing fits today best because customers have many channels and information sources, employees shape the experience, and firms are held accountable for financial and social results.</p>", rubric:["Defined all five orientations","Mentioned marketing myopia under the product concept","Listed the four components of holistic marketing","Justified the choice with today's conditions"]},
 {ch:[3], q:"Describe the six steps of the marketing research process and the decisions in the research plan.", model:"<p>(1) <b>Define the problem</b>, decision alternatives and research objectives. (2) <b>Develop the research plan</b>: data sources (secondary, primary), research approaches (observational, ethnographic, focus group, survey, behavioral data, experimental), research instruments (questionnaires, qualitative measures, technological devices), sampling plan (unit, size, procedure) and contact methods (mail, phone, personal, online). (3) <b>Collect the information</b>, the costliest and most error-prone stage. (4) <b>Analyze the information</b>. (5) <b>Present the findings</b>. (6) <b>Make the decision</b>.</p>", rubric:["Six steps in the right order","Data sources","At least four approaches, with experiments as most valid","Sampling plan: unit, size, procedure","Contact methods"]}
]
});
})();
