/* Lovelock and Wirtz, Services Marketing: Subject 4 (Customer Experiences and Retail Operations), Topics 1-5 */
(function(){
var CH = window.CH = window.CH || [];
window.BANK = window.BANK || {};
function add(course, bank){ var B = window.BANK[course] = window.BANK[course] || {}; Object.keys(bank).forEach(function(k){ B[k] = (B[k]||[]).concat(bank[k]); }); }
window.FORMULAS = (window.FORMULAS||[]).concat([
 {subj:4, name:"Service quality gap (SERVQUAL logic)", f:"Gap score = perception &minus; expectation", ex:"Expect 6.5, perceive 5.0 on reliability: gap = &minus;1.5 (service falls short). A positive score means expectations were exceeded."},
 {subj:4, name:"Capacity utilization", f:"Actual output (or demand served) &divide; maximum capacity", ex:"A 120-seat restaurant serving 90 diners at a sitting: 90 &divide; 120 = 75%."},
 {subj:4, name:"Revenue per available unit (yield)", f:"Total revenue &divide; available units (e.g., RevPAR = room revenue &divide; rooms available)", ex:"P1,200,000 &divide; 400 room-nights available = P3,000 per available room."}
]);

CH.push({
 course:"sv", n:1, short:"Services and the 7Ps", title:"Understanding Services and the Services Marketing Mix", priority:"High-yield",
 overview:"What a service is, why services differ from goods, the four categories of service processes, the expanded 7Ps, and the flower of service (core product plus supplementary services).",
 why:"Why it ranks high: the service definition, the IHIP characteristics, the four processing categories, the 7Ps and the eight petals of the flower of service are very common identification items.",
 objectives:["Define services using Lovelock and Wirtz's non-ownership view.","Explain the distinctive characteristics of services.","Classify services into the four processing categories.","Describe the 7Ps.","Identify facilitating and enhancing supplementary services."],
 know:[
  "Services = economic activities offered by one party to another, often <mark>time-based performances</mark>, that bring about desired results; customers expect value from access to labor, skills, expertise, goods, facilities, networks and systems, but <mark>do not normally take ownership</mark> of the physical elements.",
  "Classic characteristics (IHIP): <mark>intangibility, heterogeneity (variability), inseparability, perishability</mark>.",
  "Four processing categories: <mark>people processing, possession processing, mental stimulus processing, information processing</mark>.",
  "7Ps: <mark>product, place and time, price and other user outlays, promotion and education, process, physical environment, people</mark>.",
  "Flower of service: <mark>core product</mark> plus 8 petals: facilitating = <mark>information, order taking, billing, payment</mark>; enhancing = <mark>consultation, hospitality, safekeeping, exceptions</mark>.",
  "Service product = <mark>core product + supplementary services + delivery processes</mark>."
 ],
 terms:[
  ["Service","An economic activity offered by one party to another, often time-based, that brings about desired results for recipients or their objects or assets; customers gain access rather than ownership."],
  ["Intangibility","Services cannot be seen, felt, tasted or touched like goods; customers rely on cues and evidence."],
  ["Heterogeneity / variability","Service quality varies from provider to provider, customer to customer and time to time because people are involved."],
  ["Inseparability","Production and consumption often occur at the same time, with the customer present."],
  ["Perishability","Service capacity cannot be stored for later; an empty seat or idle hour is lost."],
  ["People processing","Tangible actions directed at people's bodies (passenger transport, hair care, health care, lodging). Customer must be physically present."],
  ["Possession processing","Tangible actions directed at goods and other physical possessions (repair, laundry, freight, landscaping)."],
  ["Mental stimulus processing","Intangible actions directed at people's minds (education, entertainment, advertising, counseling)."],
  ["Information processing","Intangible actions directed at intangible assets (accounting, banking, insurance, legal services)."],
  ["Core product","The central component that supplies the principal benefit the customer seeks."],
  ["Supplementary services","Services that facilitate use of the core product (facilitating) or enhance its value and appeal (enhancing)."],
  ["Facilitating services","Information, order taking, billing and payment: required for delivery or help use of the core."],
  ["Enhancing services","Consultation, hospitality, safekeeping and exceptions: add extra value."],
  ["Exceptions","Supplementary services outside routine delivery: special requests, problem solving, handling complaints and restitution."],
  ["Physical environment (servicescape)","The building, landscape, vehicles, furnishings, equipment, signage and other tangible cues where the service is delivered."],
  ["Price and other user outlays","Money plus the time, physical and mental effort, and negative sensory experiences customers bear to obtain service."]
 ],
 notes:[
  {h:"1. Four broad categories of services", html:"", v:[
   {t:"matrix", title:"Who or what is the direct recipient, and what kind of act is it?", cols:["People","Possessions"], rows:["Tangible actions","Intangible actions"], cells:[["People processing","Haircut, airline, hospital, hotel"],["Possession processing","Repair, laundry, freight, vet care"],["Mental stimulus processing","Education, concerts, counseling"],["Information processing","Banking, accounting, insurance, legal"]], axisNote:"People-processing services require the customer to be physically present in the service factory."}]},
  {h:"2. The 7Ps of services marketing", html:"", tbl:{title:"Expanded marketing mix", cols:["P","What it covers"],rows:[["Product elements","Core product plus supplementary services"],["Place and time","Physical and electronic delivery channels, speed, convenience"],["Price and other user outlays","Money, time, effort, sensory burdens; revenue management"],["Promotion and education","Informing, persuading, teaching customers how to use the service"],["Process","How the service is created and delivered; blueprinting"],["Physical environment","Servicescape and other tangible evidence"],["People","Front-line employees and other customers"]]}},
  {h:"3. The flower of service", html:"", v:[
   {t:"mind", title:"Core product surrounded by eight petals", center:"Core product", branches:[
    ["Facilitating",["Information","Order taking","Billing","Payment"]],
    ["Enhancing",["Consultation","Hospitality","Safekeeping","Exceptions"]]]}], tbl:null}
 ],
 ph:[
  ["Four categories","A jeepney ride is people processing; a laundry shop is possession processing; a review center is mental stimulus processing; a remittance company is information processing."],
  ["Perishability","An unsold seat on a Cebu&ndash;Manila flight or an unbooked resort room on a weekday is revenue lost forever, which is why airlines run seat sales."]
 ],
 confused:[
  ["Facilitating versus enhancing petals","Facilitating petals are needed to get the service at all (information, order taking, billing, payment). Enhancing petals add appeal (consultation, hospitality, safekeeping, exceptions)."],
  ["Possession processing versus information processing","Possession processing acts tangibly on physical objects. Information processing acts intangibly on data and intangible assets."],
  ["Price versus other user outlays","Price is only the money. Other outlays include time, physical effort, mental effort and unpleasant sensory experiences."]
 ],
 mnemonics:[
  ["IHIP","I Hate Instant Pancit","Intangibility, Heterogeneity, Inseparability, Perishability."],
  ["Facilitating petals","I Order Bills Paid","Information, Order taking, Billing, Payment."],
  ["Enhancing petals","Can Help Save Exceptions","Consultation, Hospitality, Safekeeping, Exceptions."],
  ["7Ps","Products Prefer Pricey Promo; People Process Physically","Product, Place, Price, Promotion, People, Process, Physical environment."]
 ],
 takeaways:["Services give access, not ownership.","IHIP explains most services marketing challenges.","Four processing categories by recipient and tangibility of the act.","7Ps and the eight-petal flower."]
});

CH.push({
 course:"sv", n:2, short:"Consumer behavior in services", title:"Consumer Behavior in a Services Context", priority:"High-yield",
 overview:"The three-stage model of service consumption, search/experience/credence attributes, perceived risk, service expectations and the zone of tolerance, moments of truth, high- and low-contact services, the servuction system and theater metaphor, and the expectancy-disconfirmation model.",
 why:"Why it ranks high: 'customer experiences' in the subject title points straight here. Zone of tolerance, credence attributes and moments of truth are favorite questions.",
 objectives:["Describe the three-stage model of service consumption.","Distinguish search, experience and credence attributes.","Explain perceived risk and how firms reduce it.","Define desired, adequate and predicted service and the zone of tolerance.","Use the servuction system and theater metaphor."],
 know:[
  "Three stages: <mark>pre-purchase &rarr; service encounter &rarr; post-encounter</mark>.",
  "Pre-purchase: <mark>need awareness, information search, evaluation of alternatives, purchase decision</mark>.",
  "Attributes: <mark>search</mark> (evaluate before buying), <mark>experience</mark> (only during or after), <mark>credence</mark> (hard to evaluate even after consumption, e.g., surgery, auto repair).",
  "Expectations: <mark>desired service</mark> (what customers hope for) and <mark>adequate service</mark> (minimum acceptable). <mark>Zone of tolerance</mark> lies between them.",
  "<mark>Predicted service</mark> = level customers believe they will actually get; it affects the adequate level.",
  "<mark>Moment of truth</mark> = the point of contact where the customer interacts with the firm (Normann; Carlzon at SAS).",
  "Servuction system = <mark>service operations (front and back stage) + service delivery</mark> (the visible part).",
  "Post-encounter: <mark>expectancy-disconfirmation</mark>: positive disconfirmation (better than expected), confirmation, negative disconfirmation."
 ],
 terms:[
  ["Search attributes","Tangible characteristics customers can evaluate before purchase (style, color, price, location)."],
  ["Experience attributes","Attributes that can be evaluated only during or after delivery (a meal's taste, a show's entertainment value)."],
  ["Credence attributes","Attributes customers find hard to evaluate even after consumption because they lack expertise (surgery, legal advice, auto repair)."],
  ["Perceived risk in services","Functional, financial, temporal, physical, psychological, social and sensory risks."],
  ["Desired service","The type and level of service customers hope to receive: a blend of what customers believe can and should be delivered."],
  ["Adequate service","The minimum level of service customers will accept without being dissatisfied."],
  ["Predicted service","The level of service customers believe the firm will actually deliver."],
  ["Zone of tolerance","The range between desired and adequate service within which customers are willing to accept variation."],
  ["Moment of truth","A point in service delivery where customers interact with employees or self-service equipment and the outcome can affect perceptions of quality."],
  ["High-contact service","Customers visit the facility and interact closely with personnel and facilities throughout delivery (hotels, hospitals)."],
  ["Low-contact service","Little or no physical contact; delivery is at arm's length through electronic or physical channels (online banking)."],
  ["Servuction system","Combines technical core and service delivery: the visible front stage (servicescape, employees, other customers) and invisible back stage."],
  ["Theater metaphor","Service as drama: the servicescape is the stage, employees are cast members, customers are the audience, and scripts guide roles."],
  ["Role and script theories","Role theory: customers and employees act out roles. Script theory: learned sequences of behavior that guide expectations of an encounter."],
  ["Expectancy-disconfirmation model","Satisfaction results from comparing perceived performance with expectations: exceeding them is positive disconfirmation, falling short is negative disconfirmation."],
  ["Customer delight","A combination of pleasure and surprise from positive disconfirmation, usually from unexpectedly high performance."]
 ],
 notes:[
  {h:"1. The three-stage model", html:"", v:[
   {t:"flow", title:"Three-stage model of service consumption", steps:[["Pre-purchase stage","Need awareness, information search, evaluation of alternatives (attributes, perceived risk, expectations), purchase decision"],["Service encounter stage","Service request and delivery; moments of truth; high- vs low-contact; servuction system; theater metaphor"],["Post-encounter stage","Evaluation of performance (expectancy-disconfirmation), future intentions: repurchase, word of mouth"]]}]},
  {h:"2. Expectations and the zone of tolerance", html:"<p>Desired service is the upper boundary; adequate service is the lower. Performance within the zone produces satisfaction without much notice; above it delights; below it frustrates. The adequate level is more flexible and rises when predicted service is high or when alternatives are better. Expectations are shaped by explicit and implicit service promises, word of mouth, past experience and personal needs.</p>", v:[
   {t:"stack", title:"Levels of expectation", items:[["Desired service","What customers hope for"],["Zone of tolerance","Acceptable variation"],["Adequate service","Minimum acceptable"]], invert:true}]},
  {h:"3. Reducing perceived risk", html:"<p>Firms reduce perceived risk by offering free trials, advertising and websites that show the service, encouraging visits to the facility, using evidence management (uniforms, certificates, testimonials), offering guarantees, and keeping customers informed during delivery.</p>"}
 ],
 ph:[
  ["Credence attributes","Most Filipinos cannot judge whether a mechanic really needed to replace a part, so reputation, referrals and transparent explanations matter most."],
  ["Zone of tolerance","Waiting 15 minutes at a busy mall fast-food counter may be inside the zone at lunchtime but outside it at 3 p.m. when the store is empty."]
 ],
 confused:[
  ["Experience versus credence attributes","Experience attributes can be judged after consuming. Credence attributes are hard to judge even then."],
  ["Desired versus predicted service","Desired is what customers hope for. Predicted is what they think they will actually get."],
  ["Adequate service versus zone of tolerance","Adequate is the lower boundary. The zone is the whole band between adequate and desired."]
 ],
 mnemonics:[
  ["Three stages","Before, During, After","Pre-purchase, service encounter, post-encounter."],
  ["Attribute ladder","See it, Try it, Trust it","Search, experience, credence: from easiest to hardest to evaluate."]
 ],
 takeaways:["Three stages: pre-purchase, encounter, post-encounter.","Credence attributes make reputation crucial.","Zone of tolerance sits between adequate and desired service.","Satisfaction comes from expectancy-disconfirmation."]
});

CH.push({
 course:"sv", n:3, short:"Service quality and the gaps model", title:"Improving Service Quality and Productivity", priority:"High-yield",
 overview:"What service quality means, the five SERVQUAL dimensions, the gaps model (Lovelock and Wirtz's six gaps and the original five), how to close gaps, measuring quality, and service productivity.",
 why:"Why it ranks high: RATER dimensions and the gaps model are the most frequently tested service-quality frameworks.",
 objectives:["Define service quality from the customer's view.","Name and define the five SERVQUAL dimensions.","Identify the service quality gaps.","Suggest ways to close each gap.","Distinguish quality from productivity."],
 know:[
  "SERVQUAL dimensions: <mark>tangibles, reliability, responsiveness, assurance, empathy</mark> (RATER).",
  "<mark>Reliability</mark> (performing the promised service dependably and accurately) is usually the most important dimension.",
  "Lovelock and Wirtz's six gaps: <mark>knowledge, policy (standards), delivery, communications, perceptions, service quality</mark>.",
  "The <mark>service quality gap</mark> (gap 6) = difference between what customers expected and what they perceived they received. It is the most critical gap.",
  "The original Parasuraman, Zeithaml and Berry model has five gaps; its gap 5 (customer gap) is the expectation&ndash;perception gap.",
  "SERVQUAL measures quality as <mark>perception minus expectation</mark>.",
  "Productivity = how efficiently service inputs are turned into outputs that add value for customers; it must not be raised at the cost of quality."
 ],
 terms:[
  ["Service quality","Customers' long-term, cognitive evaluation of a firm's service delivery."],
  ["Tangibles","Appearance of physical elements: facilities, equipment, personnel, communication materials."],
  ["Reliability","Dependable, accurate performance of the promised service."],
  ["Responsiveness","Willingness to help customers and provide prompt service."],
  ["Assurance","Knowledge and courtesy of employees and their ability to convey trust and confidence (competence, courtesy, credibility, security)."],
  ["Empathy","Caring, individualized attention (access, communication, understanding the customer)."],
  ["Knowledge gap","Difference between what senior managers believe customers expect and what customers actually need and expect."],
  ["Policy gap","Difference between management's understanding of expectations and the quality standards set for delivery."],
  ["Delivery gap","Difference between specified standards and the actual performance of service teams."],
  ["Communications gap","Difference between what the company communicates (internally and externally) and what customers receive; overpromising."],
  ["Perceptions gap","Difference between what is actually delivered and what customers perceive they received (they cannot judge quality accurately)."],
  ["Service quality gap","Difference between what customers expect and what they perceive they received."],
  ["SERVQUAL","Parasuraman, Zeithaml and Berry's scale measuring expectations and perceptions across the five dimensions."],
  ["Mystery shopping","Researchers pose as customers to evaluate service delivery against standards."],
  ["Service productivity","Efficiency in converting inputs into outputs that add value for customers. Includes efficiency, productivity and effectiveness."]
 ],
 notes:[
  {h:"1. Five dimensions of service quality", html:"", tbl:{title:"SERVQUAL (RATER)", cols:["Dimension","Definition","Sample question"],rows:[["Reliability","Dependable, accurate performance","Does the bank post my deposit correctly?"],["Assurance","Knowledge, courtesy, trust","Do staff seem competent? Do I feel safe?"],["Tangibles","Physical facilities, equipment, people, materials","Is the branch clean and modern?"],["Empathy","Individualized attention","Does the teller understand my needs?"],["Responsiveness","Willingness to help, promptness","Is my problem fixed quickly?"]]}},
  {h:"2. The six gaps (Lovelock and Wirtz)", html:"", v:[
   {t:"flow", title:"Gaps from management to the customer", steps:[["1. Knowledge gap","Management misunderstands expectations"],["2. Policy gap","Standards do not reflect expectations"],["3. Delivery gap","Performance falls short of standards"],["4. Communications gap","Promises exceed delivery (internal and external)"],["5. Perceptions gap","Customers misperceive what was delivered"],["6. Service quality gap","Expected vs perceived service"]]}],
   tbl:{title:"Closing the gaps", cols:["Gap","Typical remedies"],rows:[["Knowledge","Research, complaint analysis, more contact between managers and customers"],["Policy","Set customer-driven standards; redesign processes"],["Delivery","Hire, train and empower staff; technology; manage customers' roles"],["Communications","Promise realistically; coordinate marketing and operations"],["Perceptions","Make service tangible; explain what was done; physical evidence"],["Service quality","Close gaps 1&ndash;5"]]}}
 ],
 ph:[
  ["RATER in a bank","A long queue fixed by opening more tellers improves responsiveness; posting deposits correctly every time is reliability; a guard and CCTV support assurance."],
  ["Communications gap","A resort that advertises a 'private beach' that turns out to be crowded creates a communications gap."]
 ],
 confused:[
  ["Reliability versus responsiveness","Reliability = doing it right as promised. Responsiveness = willingness and speed in helping."],
  ["Assurance versus empathy","Assurance = competence, courtesy, trustworthiness. Empathy = individual care and understanding."],
  ["Policy gap versus delivery gap","Policy gap: the standards are wrong. Delivery gap: the standards are right but staff do not meet them."],
  ["Six-gap versus five-gap model","Lovelock and Wirtz split the original model's customer gap side into perceptions and service quality gaps. Check which model the question uses."]
 ],
 mnemonics:[
  ["SERVQUAL","RATER","Reliability, Assurance, Tangibles, Empathy, Responsiveness."],
  ["Six gaps","Kind People Deliver Clear Perfect Service","Knowledge, Policy, Delivery, Communications, Perceptions, Service quality."]
 ],
 takeaways:["Quality is judged by customers, against expectations.","RATER: reliability matters most.","Six gaps; the service quality gap is the one customers feel.","Productivity gains must not erode quality."]
});

CH.push({
 course:"sv", n:4, short:"Processes, servicescape, people and capacity", title:"Managing the Customer Interface: Process, Servicescape, People, Demand and Capacity", priority:"High-yield",
 overview:"Service blueprinting, the servicescape and its effects, front-line people and the cycles of failure and success, the service-profit chain, and balancing demand and capacity, including queues and the psychology of waiting.",
 why:"Why it ranks high: blueprint lines, servicescape dimensions, the service-profit chain and waiting-line principles are classic items for retail and service operations.",
 objectives:["Read a service blueprint and identify its lines.","Explain how the servicescape shapes responses.","Describe the cycles of failure, mediocrity and success and the service-profit chain.","Match demand and capacity strategies.","Apply the psychology of waiting."],
 know:[
  "Blueprint layers: <mark>physical evidence, customer actions, front-stage contact employee actions, backstage actions, support processes</mark>.",
  "Blueprint lines: <mark>line of interaction, line of visibility, line of internal interaction</mark>. Mark <mark>fail points</mark> and <mark>waiting points</mark>.",
  "Mehrabian&ndash;Russell model: environment &rarr; feelings (<mark>pleasure and arousal</mark>) &rarr; <mark>approach or avoidance</mark>.",
  "Servicescape dimensions (Bitner): <mark>ambient conditions; spatial layout and functionality; signs, symbols and artifacts</mark>.",
  "Service-profit chain: <mark>internal service quality &rarr; employee satisfaction &rarr; retention and productivity &rarr; external service value &rarr; customer satisfaction &rarr; loyalty &rarr; revenue growth and profitability</mark>.",
  "Boundary spanners link inside and outside; their work involves <mark>emotional labor</mark>.",
  "Capacity strategies: <mark>level capacity</mark> (fixed) vs <mark>chase demand</mark> (adjust capacity to demand).",
  "Demand strategies: <mark>take no action, reduce demand, increase demand, inventory demand</mark> (queues and reservations).",
  "Waiting: <mark>unoccupied time feels longer</mark>; pre-process waits feel longer than in-process; anxiety, uncertainty, unexplained and unfair waits feel longer; solo waits feel longer."
 ],
 terms:[
  ["Service blueprint","A visual map of the service process showing customer actions, front-stage and backstage activities, support processes and physical evidence."],
  ["Line of interaction","Separates customer actions from front-stage employee actions; each crossing is a moment of truth."],
  ["Line of visibility","Separates what customers can see (front stage) from what they cannot (backstage)."],
  ["Fail point","A step where there is a significant risk of things going wrong that would affect quality."],
  ["Servicescape","The style and appearance of the physical surroundings and other experiential elements customers encounter at service delivery sites."],
  ["Ambient conditions","Background characteristics such as temperature, lighting, noise, music and scent."],
  ["Approach vs avoidance behavior","Approach: desire to stay, explore, spend and return. Avoidance: desire to leave."],
  ["Boundary spanners","Front-line employees who link the inside of the organization to the outside world; prone to role conflict."],
  ["Emotional labor","Displaying socially desired emotions during service encounters even when they differ from what the employee feels."],
  ["Cycle of failure","Low pay, minimal training and high turnover lead to poor service, dissatisfied customers and more turnover."],
  ["Cycle of success","Investment in people (selection, training, pay, empowerment) leads to satisfied staff, better service and loyal customers."],
  ["Service-profit chain","Heskett et al.'s links from internal service quality to employee satisfaction to customer value, satisfaction, loyalty and profit."],
  ["Empowerment","Giving front-line staff the authority and resources to solve customer problems."],
  ["Chase demand strategy","Adjusting capacity (part-time staff, shifts, rented equipment) to match fluctuating demand."],
  ["Level capacity strategy","Keeping capacity fixed regardless of demand fluctuations."],
  ["Revenue (yield) management","Pricing strategy that allocates capacity to the right customers at the right price to maximize revenue from fixed, perishable capacity."],
  ["Queue configurations","Single line with sequential stages, parallel lines to multiple servers, designated lines, single line to multiple servers (snake), take-a-number, wait list."]
 ],
 notes:[
  {h:"1. Blueprinting", html:"", v:[
   {t:"stack", title:"Blueprint layers (top to bottom)", items:[["Physical evidence","What customers see and touch"],["Customer actions","Line of interaction below"],["Front-stage contact employee actions","Line of visibility below"],["Backstage contact employee actions","Line of internal interaction below"],["Support processes","IT, kitchen, accounting"]]}]},
  {h:"2. The servicescape", html:"<p>The servicescape shapes the customer experience, conveys image and positioning, facilitates the service encounter, and affects productivity. Through the Mehrabian&ndash;Russell model, cues create feelings of pleasure and arousal that drive approach or avoidance. Russell's model of affect shows that high pleasure with high arousal feels exciting, high pleasure with low arousal feels relaxing, low pleasure with high arousal feels distressing, and low pleasure with low arousal feels gloomy.</p>"},
  {h:"3. Managing demand and capacity", html:"", tbl:{title:"Demand strategies (Lovelock and Wirtz)", cols:["Strategy","Insufficient capacity (demand &gt; capacity)","Excess capacity (demand &lt; capacity)"],rows:[["Take no action","Unorganized queuing; customers may leave","Capacity is wasted"],["Reduce demand","Raise prices; communicate peak periods","(not applicable)"],["Increase demand","(not applicable)","Lower prices; promote; new uses"],["Inventory demand","Reservations and formalized queuing","(not applicable)"]]}},
  {h:"4. Psychology of waiting (Maister and others)", html:"<ul class=\"tight\"><li>Unoccupied time feels longer than occupied time.</li><li>Pre- and post-process waits feel longer than in-process waits.</li><li>Anxiety makes waits seem longer.</li><li>Uncertain waits feel longer than known, finite waits.</li><li>Unexplained waits feel longer than explained waits.</li><li>Unfair waits feel longer than equitable waits.</li><li>The more valuable the service, the longer people will wait.</li><li>Solo waits feel longer than group waits.</li><li>Physically uncomfortable and unfamiliar waits feel longer.</li></ul>"}
 ],
 ph:[
  ["Psychology of waiting","Banks that show a queue number and expected wait on a screen reduce uncertainty; clinics with TV and magazines keep waiting time occupied."],
  ["Chase demand","Mall food stalls hire extra part-time crew for December and payday weekends: a chase-demand strategy."]
 ],
 confused:[
  ["Line of interaction versus line of visibility","Interaction: where customer and employee meet. Visibility: what the customer can or cannot see."],
  ["Level capacity versus chase demand","Level keeps capacity fixed and manages demand. Chase changes capacity to follow demand."],
  ["Cycle of failure versus cycle of mediocrity","Failure: cheap labor and high turnover (common in low-wage services). Mediocrity: rigid rules and bureaucracy in large organizations with job security but little incentive to serve well."]
 ],
 mnemonics:[
  ["Servicescape dimensions","ASS: Ambient, Space, Signs","Ambient conditions; spatial layout and functionality; signs, symbols and artifacts."],
  ["Service-profit chain","Happy staff, happy customers, healthy profits","Internal quality &rarr; employee satisfaction &rarr; value &rarr; customer satisfaction &rarr; loyalty &rarr; profit."]
 ],
 takeaways:["Blueprints show three lines and fail points.","Servicescape drives approach or avoidance through pleasure and arousal.","Invest in people: cycle of success and the service-profit chain.","Match demand and capacity; manage the perception of waits."]
});

CH.push({
 course:"sv", n:5, short:"Loyalty, complaints and service recovery", title:"Managing Relationships, Complaint Handling and Service Recovery", priority:"High-yield",
 overview:"The wheel of loyalty, customer tiering, loyalty bonds, how customers respond to service failure, the service recovery paradox, perceived justice, principles of recovery, service guarantees, and jaycustomers.",
 why:"Why it ranks high: complaint behavior, the three types of justice, the recovery paradox and the wheel of loyalty are standard scenario questions.",
 objectives:["Explain the wheel of loyalty.","Describe customer tiering and loyalty bonds.","Identify customer responses to service failure.","Apply the three dimensions of perceived fairness.","Design guarantees and handle jaycustomers."],
 know:[
  "Wheel of loyalty: <mark>build a foundation for loyalty &rarr; create loyalty bonds &rarr; reduce churn drivers</mark>.",
  "Foundation: <mark>segment and target the right customers, tier customers by value, deliver quality to build satisfaction</mark>.",
  "Loyalty bonds: deepen the relationship (cross-selling, bundling), <mark>reward-based bonds</mark> (financial and nonfinancial), and <mark>higher-level bonds</mark> (social, customization, structural).",
  "Customer pyramid tiers: <mark>platinum, gold, iron, lead</mark>.",
  "Responses to failure: <mark>take public action, take private action, take no action</mark>. Most dissatisfied customers do not complain to the firm.",
  "Three dimensions of perceived fairness: <mark>procedural, interactional, outcome justice</mark>.",
  "<mark>Service recovery paradox</mark>: customers who experience a failure that is fixed well may end up more satisfied than if nothing had gone wrong (not guaranteed, and not for repeated failures).",
  "Effective service guarantees are <mark>unconditional, easy to understand, meaningful, easy to invoke, easy to collect, credible</mark>."
 ],
 terms:[
  ["Wheel of loyalty","Lovelock and Wirtz framework: build a foundation for loyalty, create loyalty bonds, and reduce churn drivers."],
  ["Customer tiering","Grouping customers by value (platinum, gold, iron, lead) and tailoring service and benefits to each tier."],
  ["Platinum tier","Heavy users, not overly price sensitive, willing to try new offerings; very profitable."],
  ["Lead tier","Customers who cost more to serve than they bring in; may need repricing or other action."],
  ["Social bonds","Personal relationships between providers and customers."],
  ["Customization bonds","Bonds formed when the provider delivers tailored service that is hard to get elsewhere."],
  ["Structural bonds","Bonds from joint investments, integrated systems or shared processes that make switching costly."],
  ["Churn drivers","Factors that cause customers to defect, such as core service failure, dissatisfaction and inconvenience."],
  ["Service recovery","Systematic efforts by a firm after a service failure to correct the problem and retain goodwill."],
  ["Procedural justice","Fairness of policies and rules, including convenience, speed and flexibility of the complaint process."],
  ["Interactional justice","Fairness of interpersonal treatment: politeness, care, honesty, an explanation and an apology."],
  ["Outcome justice","Fairness of the restitution or compensation for the loss and inconvenience."],
  ["Service recovery paradox","Customers whose problems are resolved well may report higher satisfaction than those who never had a problem."],
  ["Service guarantee","A promise that if delivery fails, the customer receives compensation; it also sets standards and generates feedback."],
  ["Jaycustomer","A customer who acts in a thoughtless or abusive way, causing problems for the firm, employees and other customers: thief, rule breaker, belligerent, family feuders, vandal, deadbeat."]
 ],
 notes:[
  {h:"1. The wheel of loyalty", html:"", v:[
   {t:"flow", title:"Wheel of loyalty", steps:[["Build a foundation for loyalty","Target the right customers; tier by value; deliver quality and satisfaction"],["Create loyalty bonds","Deepen the relationship; reward-based bonds; social, customization and structural bonds"],["Reduce churn drivers","Analyze churn; address core failures; handle complaints and recovery; raise switching costs"]]}]},
  {h:"2. How customers respond to failure", html:"<p>After a failure, customers may take <b>public action</b> (complain to the firm, a third party or take legal action), <b>private action</b> (defect, warn family and friends) or <b>no action</b>. Customers are more likely to complain when they understand their rights, expect the complaint to work, and see the firm as easy to approach. TARP-style research shows most unhappy customers never complain to the firm, so a complaint is a gift: an opportunity to recover and learn.</p>"},
  {h:"3. Principles of effective recovery", html:"<ul class=\"tight\"><li>Make it easy for customers to give feedback.</li><li>Enable effective recovery: proactive, planned, trained and empowered staff.</li><li>Establish appropriate compensation levels.</li><li>Handle complaints with the three justices in mind: fair process, fair treatment, fair outcome.</li><li>Act fast, acknowledge feelings, avoid arguing, show understanding, clarify steps, keep the customer informed, and follow up.</li></ul>", tbl:{title:"Three dimensions of perceived fairness", cols:["Justice","Customers ask","Example remedy"],rows:[["Procedural","Was the process easy, fast and flexible?","One-call resolution, no runaround"],["Interactional","Was I treated politely and honestly?","Sincere apology and explanation"],["Outcome","Was I compensated fairly?","Refund, replacement, voucher"]]}}
 ],
 ph:[
  ["Customer tiering","Airline elite tiers and bank priority lanes serve platinum and gold customers differently from occasional customers."],
  ["Interactional justice","A restaurant that gives a free dessert but whose manager argues with the guest fixes the outcome but fails interactional justice."]
 ],
 confused:[
  ["Procedural versus interactional justice","Procedural is about the system (speed, ease, policies). Interactional is about how people treated the customer."],
  ["Recovery paradox versus excuse for failure","The paradox applies only to excellent recovery, usually after a first failure. Repeated failures destroy loyalty."],
  ["Reward bonds versus structural bonds","Rewards (points, discounts) are easy to copy. Structural bonds (integrated systems, shared processes) create real switching costs."]
 ],
 mnemonics:[
  ["Fairness","PIO: Process, Interaction, Outcome","Procedural, interactional, outcome justice."],
  ["Customer tiers","Platinum, Gold, Iron, Lead","Most to least profitable."],
  ["Wheel of loyalty","Foundation, Bonds, Churn","Build it, tie it, protect it."]
 ],
 takeaways:["Wheel of loyalty: foundation, bonds, churn reduction.","Most unhappy customers do not complain; make it easy.","Recovery must satisfy procedural, interactional and outcome justice.","Guarantees set standards and reduce risk."]
});

add("sv", {
mcq:[
 {ch:[1], q:"According to Lovelock and Wirtz, a key difference of services from goods is that customers:", ok:"Gain access to labor, skills, facilities or systems but do not normally take ownership", no:["Always receive a physical product","Can store the service for later use","Never participate in production"], why:"Lovelock and Wirtz build their service definition around non-ownership and time-based performances."},
 {ch:[1], q:"An empty seat on a flight that leaves today cannot be sold tomorrow. This illustrates:", ok:"Perishability", no:["Intangibility","Heterogeneity","Inseparability"], why:"Service capacity cannot be inventoried. Unused capacity is lost."},
 {ch:[1], q:"A hair salon is which category of service process?", ok:"People processing", no:["Possession processing","Mental stimulus processing","Information processing"], why:"Tangible actions directed at the customer's body. The customer must be present."},
 {ch:[1], q:"Accounting and insurance services fall under:", ok:"Information processing", no:["Mental stimulus processing","Possession processing","People processing"], why:"Intangible actions directed at intangible assets."},
 {ch:[1], q:"Which is NOT one of the 7Ps of services marketing?", ok:"Positioning", no:["Process","Physical environment","People"], why:"The 7Ps are product, place and time, price and other user outlays, promotion and education, process, physical environment, and people."},
 {ch:[1], q:"In the flower of service, which petal is a FACILITATING supplementary service?", ok:"Billing", no:["Hospitality","Safekeeping","Consultation"], why:"Facilitating: information, order taking, billing, payment. Enhancing: consultation, hospitality, safekeeping, exceptions."},
 {ch:[1], q:"Handling a special request or a complaint falls under which petal?", ok:"Exceptions", no:["Hospitality","Order taking","Information"], why:"Exceptions cover special requests, problem solving, complaints and restitution."},
 {ch:[2], q:"What are the three stages of the service consumption model?", ok:"Pre-purchase, service encounter, post-encounter", no:["Awareness, interest, action","Search, experience, credence","Introduction, growth, maturity"], why:"Lovelock and Wirtz's three-stage model."},
 {ch:[2], q:"The quality of a surgeon's work is hard for patients to judge even after the operation. This is a:", ok:"Credence attribute", no:["Search attribute","Experience attribute","Tangible attribute"], why:"Credence attributes are hard to evaluate even after consumption."},
 {ch:[2], q:"The range between desired service and adequate service is the:", ok:"Zone of tolerance", no:["Service quality gap","Line of visibility","Moment of truth"], why:"Customers accept variation within this zone."},
 {ch:[2], q:"The minimum level of service a customer will accept without being dissatisfied is:", ok:"Adequate service", no:["Desired service","Predicted service","Delight"], why:"Adequate service is the lower boundary of the zone of tolerance."},
 {ch:[2], q:"Points of contact where customers interact with the firm and form impressions are called:", ok:"Moments of truth", no:["Fail points","Lines of interaction","Service guarantees"], why:"Coined by Normann and popularized by Jan Carlzon of SAS."},
 {ch:[2], q:"Customers find a service much better than expected. In the expectancy-disconfirmation model, this is:", ok:"Positive disconfirmation", no:["Negative disconfirmation","Confirmation","Cognitive dissonance"], why:"Exceeding expectations is positive disconfirmation and can lead to delight."},
 {ch:[2], q:"In the theater metaphor, front-line employees are the:", ok:"Cast (actors)", no:["Audience","Stage","Script"], why:"The servicescape is the stage, employees are the cast, customers are the audience, and scripts guide behavior."},
 {ch:[3], q:"Which SERVQUAL dimension is usually the most important to customers?", ok:"Reliability", no:["Tangibles","Empathy","Assurance"], why:"Reliability, doing what was promised dependably and accurately, consistently ranks first."},
 {ch:[3], q:"Employees' knowledge and courtesy and their ability to convey trust and confidence describe:", ok:"Assurance", no:["Responsiveness","Empathy","Reliability"], why:"Assurance includes competence, courtesy, credibility and security."},
 {ch:[3], q:"Willingness to help customers and provide prompt service is:", ok:"Responsiveness", no:["Reliability","Tangibles","Assurance"], why:"Responsiveness is about willingness and speed."},
 {ch:[3], q:"Managers set service standards that do not reflect what customers actually expect. Which gap is this?", ok:"Policy gap", no:["Knowledge gap","Delivery gap","Perceptions gap"], why:"The policy (standards) gap lies between management's understanding and the standards set."},
 {ch:[3], q:"A hotel advertises luxury but delivers ordinary rooms. Which gap is this?", ok:"Communications gap", no:["Knowledge gap","Policy gap","Perceptions gap"], why:"Overpromising in communications creates the communications gap."},
 {ch:[3], q:"In Lovelock and Wirtz's model, the most critical gap, between what customers expect and what they perceive they received, is the:", ok:"Service quality gap", no:["Delivery gap","Knowledge gap","Policy gap"], why:"The service quality gap (gap 6) is the one customers experience; closing gaps 1 to 5 closes it."},
 {ch:[4], q:"In a service blueprint, the line that separates what customers can see from what they cannot is the:", ok:"Line of visibility", no:["Line of interaction","Line of internal interaction","Fail line"], why:"Front stage is above the line of visibility; backstage is below it."},
 {ch:[4], q:"Temperature, lighting, music and scent are part of the servicescape's:", ok:"Ambient conditions", no:["Spatial layout and functionality","Signs, symbols and artifacts","Support processes"], why:"Bitner's three dimensions: ambient conditions; spatial layout and functionality; signs, symbols and artifacts."},
 {ch:[4], q:"In the Mehrabian&ndash;Russell model, the environment affects behavior through which two feelings?", ok:"Pleasure and arousal", no:["Trust and commitment","Satisfaction and loyalty","Fear and anger"], why:"Pleasure and arousal drive approach or avoidance behavior."},
 {ch:[4], q:"The service-profit chain begins with:", ok:"Internal service quality", no:["Customer loyalty","Revenue growth","Advertising spending"], why:"Internal service quality drives employee satisfaction, which drives retention and productivity, then customer value, satisfaction, loyalty and profit."},
 {ch:[4], q:"Adjusting staffing with part-timers and shifts to match demand is a:", ok:"Chase demand strategy", no:["Level capacity strategy","Reduce demand strategy","Inventory demand strategy"], why:"Chase demand changes capacity to follow demand."},
 {ch:[4], q:"Using reservations to manage excess demand is:", ok:"Inventorying demand", no:["Reducing demand","Increasing demand","Taking no action"], why:"Reservations and formal queues 'store' demand until capacity is available."},
 {ch:[4], q:"According to the psychology of waiting, which wait feels LONGER?", ok:"An unexplained wait", no:["An explained wait","An in-process wait","A group wait"], why:"Unexplained, uncertain, unfair, unoccupied, anxious, pre-process and solo waits feel longer."},
 {ch:[4], q:"Front-line employees who must display cheerful emotions they may not feel perform:", ok:"Emotional labor", no:["Role ambiguity","Service blueprinting","Revenue management"], why:"Emotional labor is a key source of stress for boundary spanners."},
 {ch:[5], q:"What are the three elements of the wheel of loyalty?", ok:"Build a foundation, create loyalty bonds, reduce churn drivers", no:["Attract, convert, retain","Search, experience, credence","Reliability, assurance, empathy"], why:"Lovelock and Wirtz's wheel of loyalty."},
 {ch:[5], q:"Integrated ordering systems that make it costly for a business customer to switch providers create:", ok:"Structural bonds", no:["Social bonds","Financial rewards","Customization bonds"], why:"Structural bonds come from shared systems, joint investments and integrated processes."},
 {ch:[5], q:"A customer feels the complaint process was quick and easy. Which fairness dimension is satisfied?", ok:"Procedural justice", no:["Interactional justice","Outcome justice","Distributive equity"], why:"Procedural justice concerns policies and the process of handling the complaint."},
 {ch:[5], q:"A customer receives a full refund but the manager was rude. Which dimension of fairness was violated?", ok:"Interactional justice", no:["Outcome justice","Procedural justice","None, the refund resolved it"], why:"Interactional justice is about polite, honest, caring treatment. The refund satisfies outcome justice only."},
 {ch:[5], q:"Customers who had a problem that was resolved excellently sometimes become more loyal than those with no problem. This is the:", ok:"Service recovery paradox", no:["Zone of tolerance","Cycle of success","Expectancy-disconfirmation gap"], why:"It does not hold for repeated failures or very serious ones."},
 {ch:[5], q:"A customer who regularly abuses staff and disrupts other guests is called a:", ok:"Jaycustomer", no:["Lead-tier customer","Detractor","Gatekeeper"], why:"Jaycustomer types include thief, rule breaker, belligerent, family feuders, vandal and deadbeat."}
],
tf:[
 {ch:[1], q:"Heterogeneity means service quality can vary from employee to employee and day to day.", a:true, why:"Because people are part of the product, variability is hard to eliminate. Standardization and training reduce it."},
 {ch:[1], q:"Mental stimulus processing involves tangible actions directed at customers' bodies.", a:false, why:"That is people processing. Mental stimulus processing involves intangible actions directed at minds."},
 {ch:[2], q:"Desired service is the lower boundary of the zone of tolerance.", a:false, why:"Desired is the upper boundary; adequate service is the lower boundary."},
 {ch:[2], q:"Services high in credence attributes are hardest for customers to evaluate.", a:true, why:"Customers cannot judge them well even after consumption, which raises perceived risk."},
 {ch:[3], q:"SERVQUAL measures service quality as perceptions minus expectations.", a:true, why:"Negative scores mean service fell short of expectations."},
 {ch:[3], q:"Tangibles is usually the most important SERVQUAL dimension.", a:false, why:"Reliability is usually most important."},
 {ch:[4], q:"Pre-process waits feel shorter than in-process waits.", a:false, why:"Pre-process waits feel longer; once service starts, people feel they are being looked after."},
 {ch:[4], q:"A level capacity strategy keeps capacity constant regardless of demand.", a:true, why:"It then relies on demand management (pricing, reservations, promotions)."},
 {ch:[5], q:"Most dissatisfied customers complain directly to the company.", a:false, why:"Most do not complain to the firm. They defect or tell others, which is why easy feedback channels matter."},
 {ch:[5], q:"A good service guarantee is unconditional, easy to understand, meaningful and easy to invoke.", a:true, why:"Also easy to collect and credible."}
],
id:[
 {ch:[1], q:"The central component of a service that supplies the principal benefit the customer seeks.", a:["Core product","Core service"], why:"Supplementary services surround it in the flower of service."},
 {ch:[2], q:"The level of service customers believe they will actually receive.", a:["Predicted service"], why:"High predicted service raises the adequate service level."},
 {ch:[3], q:"The SERVQUAL dimension covering caring, individualized attention.", a:["Empathy"], why:"Includes access, communication and understanding the customer."},
 {ch:[3], q:"The gap between what management believes customers expect and what customers actually expect.", a:["Knowledge gap","Gap 1","Listening gap"], why:"Closed through research, complaint analysis and managers' contact with customers."},
 {ch:[4], q:"A visual map of the service process showing customer actions, front-stage and backstage activities and support processes.", a:["Service blueprint","Blueprint","Service blueprinting"], why:"Blueprints identify fail points and waiting points."},
 {ch:[4], q:"Pricing approach that allocates fixed, perishable capacity to the right customers at the right price to maximize revenue.", a:["Revenue management","Yield management"], why:"Common in airlines, hotels and car rentals."},
 {ch:[5], q:"Fairness dimension concerned with the compensation the customer receives.", a:["Outcome justice","Distributive justice","Outcome fairness"], why:"The other two are procedural and interactional justice."}
],
match:[
 {ch:[3], q:"Match each SERVQUAL dimension to its example.", pairs:[["Reliability","The bill is always correct"],["Responsiveness","Staff answer questions immediately"],["Assurance","The doctor seems competent and trustworthy"],["Empathy","The agent remembers the customer's preferences"],["Tangibles","The clinic is clean and modern"]], why:"RATER: reliability, assurance, tangibles, empathy, responsiveness."},
 {ch:[1], q:"Match each service to its processing category.", pairs:[["Airline travel","People processing"],["Car repair","Possession processing"],["Online course","Mental stimulus processing"],["Banking","Information processing"]], why:"Classify by the direct recipient (people or possessions) and the nature of the act (tangible or intangible)."}
],
app:[
 {ch:[3], q:"Customers rate expected reliability 6.6 and perceived reliability 5.4 on a 7-point scale. What is the SERVQUAL gap score?", ok:"&minus;1.2, service falls short", no:["+1.2, service exceeds expectations","12.0","0.82"], why:"Gap = perception &minus; expectation = 5.4 &minus; 6.6 = &minus;1.2. Negative means a shortfall."},
 {ch:[4], q:"A 200-room hotel sells 150 rooms tonight. What is its occupancy (capacity utilization)?", ok:"75%", no:["25%","133%","50%"], why:"150 &divide; 200 = 75%. The 50 unsold room-nights perish."},
 {ch:[4], q:"A 300-room hotel earned P900,000 in room revenue over 3 nights (900 room-nights available). What is the revenue per available room (RevPAR)?", ok:"P1,000", no:["P3,000","P300","P900"], why:"RevPAR = room revenue &divide; available room-nights = 900,000 &divide; 900 = P1,000."},
 {ch:[4], q:"A clinic shows patients a live queue number, the expected wait, and plays educational videos. Which waiting principles is it using?", ok:"Known waits feel shorter and occupied time feels shorter", no:["Solo waits feel shorter","Unfair waits feel shorter","Pre-process waits feel shorter"], why:"Reducing uncertainty and filling unoccupied time both shorten perceived waits."},
 {ch:[2], q:"A first-time buyer chooses a law firm mainly by its reputation, referrals and the look of its office because she cannot judge legal work. Why?", ok:"Legal services are high in credence attributes, so she uses cues to reduce perceived risk", no:["Legal services are high in search attributes","Legal services have no perceived risk","She is in the post-encounter stage"], why:"When quality is hard to judge, customers rely on tangible cues, reputation and word of mouth."},
 {ch:[5], q:"A courier loses a package. The company apologizes sincerely, explains what happened, refunds the fee within a day, and gives a voucher. Which statement is best?", ok:"It addressed procedural, interactional and outcome justice", no:["It addressed only outcome justice","It created a communications gap","It is an example of a jaycustomer"], why:"Fast refund (procedural), sincere apology and explanation (interactional), refund plus voucher (outcome)."},
 {ch:[4], q:"Waiters smile and chat while the kitchen prepares food out of sight. Where does food preparation sit on the blueprint?", ok:"Below the line of visibility (backstage)", no:["Above the line of interaction","In the physical evidence row","On the line of interaction"], why:"Customers cannot see the kitchen, so it is backstage, below the line of visibility."}
],
"case":[
 {ch:[2,3,4,5], title:"Isla Resort's weekend complaints", "case":"<p>Isla Resort in Mactan advertises 'instant check-in and a private beach.' On weekends, guests wait 45 minutes at check-in with no explanation, the beach is crowded with day-trippers, and front-desk staff (mostly new hires on short contracts) do not know the policies. Managers set a check-in standard of 'under 20 minutes' but never surveyed guests. Online reviews mention rude responses when guests complain. Weekday occupancy is only 40%.</p>", qs:[
   {q:"The 'instant check-in and private beach' promise that is not delivered creates which gap?", ok:"Communications gap", no:["Knowledge gap","Policy gap","Perceptions gap"], why:"External communications promise more than the resort delivers."},
   {q:"Setting the 20-minute standard without asking guests risks which gap?", ok:"Knowledge gap (and possibly policy gap)", no:["Communications gap","Delivery gap only","Perceptions gap"], why:"Managers do not know what guests expect (knowledge gap), and standards may not reflect expectations (policy gap)."},
   {q:"Untrained, short-contract staff who do not know policies suggest which pattern?", ok:"Cycle of failure", no:["Cycle of success","Service recovery paradox","Structural bonding"], why:"Low investment in people leads to poor service and turnover: the cycle of failure."},
   {q:"The 45-minute unexplained wait feels longer because:", ok:"Unexplained and pre-process waits feel longer than explained, in-process waits", no:["Group waits feel longer than solo waits","Valuable services always feel slow","Occupied time feels longer"], why:"Maister: unexplained, uncertain and pre-process waits feel longer."},
   {q:"Rude replies to complaints violate which fairness dimension?", ok:"Interactional justice", no:["Outcome justice","Procedural justice","None"], why:"Interactional justice covers courtesy, honesty and care."},
   {q:"Which strategy best addresses the 40% weekday occupancy?", ok:"Increase demand with weekday packages and lower prices (revenue management)", no:["Reduce demand with higher weekday prices","Take no action","Add more weekday staff (chase demand)"], why:"Excess capacity calls for stimulating demand. Revenue management prices perishable capacity to fill it."}
 ]}
],
essay:[
 {ch:[3], q:"Explain the gaps model of service quality (Lovelock and Wirtz) and suggest how a firm can close two of the gaps.", model:"<p>Six gaps: <b>knowledge</b> (management misunderstands expectations), <b>policy</b> (standards do not match expectations), <b>delivery</b> (staff do not meet standards), <b>communications</b> (promises exceed delivery), <b>perceptions</b> (customers misperceive what was delivered), and the <b>service quality gap</b> (expected vs perceived service). Remedies: close the knowledge gap through research and complaint analysis; close the delivery gap by hiring, training and empowering staff and using technology; close the communications gap by promising realistically and coordinating marketing with operations.</p>", rubric:["Named all six gaps in order","Defined the service quality gap as expected vs perceived","Gave a fitting remedy for two gaps","Mentioned the five-gap original model (bonus)"]},
 {ch:[5], q:"Discuss the wheel of loyalty and how service recovery supports it.", model:"<p>The <b>wheel of loyalty</b> has three parts. First, <b>build a foundation</b>: target the right customers, tier them by value, and deliver quality that creates satisfaction. Second, <b>create loyalty bonds</b>: deepen relationships through cross-selling and bundling, reward-based bonds, and higher-level social, customization and structural bonds. Third, <b>reduce churn drivers</b>: analyze why customers leave, fix core failures, and handle complaints well. Service recovery is central to churn reduction: by making complaints easy and satisfying procedural, interactional and outcome justice, firms can keep customers and sometimes increase loyalty (the recovery paradox).</p>", rubric:["Three parts of the wheel","Tiering and loyalty bonds","Churn drivers","Three justices","Recovery paradox"]}
]
});
})();
