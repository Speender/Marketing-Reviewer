/* Johnston and Marshall, Sales Force Management: Subject 5 (Sales and Sales Management), Topics 1-5 */
(function(){
var CH = window.CH = window.CH || [];
window.BANK = window.BANK || {};
function add(course, bank){ var B = window.BANK[course] = window.BANK[course] || {}; Object.keys(bank).forEach(function(k){ B[k] = (B[k]||[]).concat(bank[k]); }); }
window.FORMULAS = (window.FORMULAS||[]).concat([
 {subj:5, name:"Sales force size: workload method", f:"Salespeople = &Sigma;(accounts in class &times; call frequency) &divide; calls one rep can make a year", ex:"1,000 A accounts &times; 36 calls + 2,000 B accounts &times; 12 calls = 60,000 calls. Each rep makes 1,000 calls a year: 60,000 &divide; 1,000 = 60 reps."},
 {subj:5, name:"Workload method (time version)", f:"Salespeople = (customers &times; call frequency &times; hours per call) &divide; selling hours available per rep", ex:"500 customers &times; 24 calls &times; 1.5 hours = 18,000 hours &divide; 900 selling hours per rep = 20 reps."},
 {subj:5, name:"Sales force size: breakdown method", f:"N = forecasted sales &divide; average sales per salesperson", ex:"P120M &divide; P8M per rep = 15 reps (adjust upward for expected turnover)."},
 {subj:5, name:"Company reps vs agents: break-even", f:"Fixed cost of company force + c<sub>1</sub>S = c<sub>2</sub>S &rarr; S = fixed cost &divide; (c<sub>2</sub> &minus; c<sub>1</sub>)", ex:"Company: P3M fixed + 3% commission. Agents: 8%. S = 3,000,000 &divide; 0.05 = P60M. Below P60M agents are cheaper; above it the company force is."},
 {subj:5, name:"Moving average forecast", f:"Average of the last n periods", ex:"Sales of 100, 110, 120: 3-period forecast = 330 &divide; 3 = 110."},
 {subj:5, name:"Exponential smoothing", f:"F<sub>t+1</sub> = &alpha;A<sub>t</sub> + (1 &minus; &alpha;)F<sub>t</sub>", ex:"&alpha; = 0.3, actual 120, prior forecast 100: 0.3(120) + 0.7(100) = 106."},
 {subj:5, name:"Quota attainment", f:"Actual performance &divide; quota &times; 100", ex:"P4.5M &divide; P5M = 90% of quota."},
 {subj:5, name:"Sales expense ratio", f:"Selling expenses &divide; sales", ex:"P300,000 &divide; P6,000,000 = 5%."},
 {subj:5, name:"Orders per call (batting average)", f:"Number of orders &divide; number of calls", ex:"45 orders &divide; 300 calls = 0.15 (15%)."},
 {subj:5, name:"Account penetration ratio", f:"Accounts sold &divide; total accounts in territory", ex:"120 &divide; 400 = 30%."},
 {subj:5, name:"Contribution margin (segment)", f:"Sales &minus; variable costs &minus; direct (traceable) costs", ex:"P10M &minus; P6M &minus; P1.5M = P2.5M. Contribution-margin analysis does not allocate indirect costs."},
 {subj:5, name:"Return on assets managed (ROAM)", f:"ROAM = (contribution &divide; sales) &times; (sales &divide; assets managed)", ex:"(P2.5M &divide; P10M) &times; (P10M &divide; P5M) = 0.25 &times; 2 = 50%."}
]);

CH.push({
 course:"sf", n:1, short:"Selling and the sales management process", title:"Relationship Selling, the Selling Process and Sales Management", priority:"High-yield",
 overview:"How selling has moved from transactions to relationships, the types of sales jobs, the steps of the selling process and presentation approaches, and the overall sales management process.",
 why:"Why it ranks high: selling-process steps, presentation approaches and closing techniques are the most direct 'sales' questions in Subject 5.",
 objectives:["Contrast transactional and relationship selling.","Identify types of sales jobs.","Order the steps of the selling process.","Compare presentation approaches and closing techniques.","Outline the sales management process."],
 know:[
  "Relationship selling = securing, developing and maintaining <mark>long-term relationships with profitable customers</mark>; focus on <mark>customer lifetime value and trust</mark>, not single transactions.",
  "Selling process: <mark>prospecting &rarr; preapproach &rarr; approach &rarr; presentation &rarr; handling objections &rarr; closing &rarr; follow-up</mark>.",
  "Prospecting turns <mark>leads</mark> into <mark>qualified prospects</mark>: need, ability to pay, authority to buy (and accessibility).",
  "Presentation approaches: <mark>stimulus-response (canned), formula (AIDA), need-satisfaction, problem-solving (consultative)</mark>.",
  "Types of sales jobs: <mark>trade servicer, missionary seller, technical seller, new business seller</mark> (plus key account and inside sales roles).",
  "Missionary sellers do not take orders directly; they build goodwill and educate those who influence purchase (e.g., pharma reps calling on doctors).",
  "Sales management process: <mark>formulate the sales program &rarr; implement it (recruit, select, train, motivate, compensate) &rarr; evaluate and control performance</mark>, all within the external and internal environment.",
  "Adaptive selling = altering sales behavior during or across encounters based on the buyer and situation."
 ],
 terms:[
  ["Transactional selling","Focus on closing individual sales, often through persuasion and price, with little attention to the long-term relationship."],
  ["Relationship selling","Selling oriented to securing, building and keeping long-term relationships with profitable customers."],
  ["Lead","A potential customer who has not yet been qualified."],
  ["Qualified prospect","A lead confirmed to have a need, the ability to pay, the authority to buy and accessibility."],
  ["Preapproach","Planning before the sales call: learning about the prospect and setting call objectives."],
  ["Approach","The first minutes of the meeting: greeting, building rapport and getting attention."],
  ["Stimulus-response (canned) presentation","A memorized, standardized presentation; assumes the right stimulus produces the desired response."],
  ["Formula presentation","Structured presentation that leads the buyer through mental states, typically AIDA (attention, interest, desire, action)."],
  ["Need-satisfaction approach","The salesperson asks questions to discover needs, then presents how the product satisfies them."],
  ["Problem-solving (consultative) approach","Salesperson analyzes the customer's problem in depth, often with a team, and proposes a tailored solution."],
  ["Trial close","A question that checks the buyer's readiness to buy before the final close."],
  ["Assumptive close","Acting as if the buyer has already decided (asking about delivery date)."],
  ["Alternative-choice close","Offering a choice between two options, both of which mean buying."],
  ["Summary-of-benefits close","Recapping key benefits the buyer accepted, then asking for the order."],
  ["Trade servicer","Salesperson whose main task is serving existing retail or wholesale accounts (restocking, merchandising)."],
  ["Missionary seller","Builds goodwill and educates influencers rather than taking orders."],
  ["Technical seller","Sells to industrial or professional buyers using technical expertise (sales engineers)."],
  ["New business seller","Focuses on finding and converting new customers (hunters)."],
  ["Adaptive selling","Altering sales behaviors during an interaction or across interactions based on perceived information about the selling situation."]
 ],
 notes:[
  {h:"1. The selling process", html:"", v:[
   {t:"flow", title:"Seven steps", steps:[["Prospecting","Find and qualify prospects"],["Preapproach","Research the account; set call objectives"],["Approach","Open, build rapport, get attention"],["Presentation","Show how the offer solves needs"],["Handling objections","Clarify and resolve concerns"],["Closing","Ask for the order"],["Follow-up","Delivery, installation, service; build the relationship"]]}]},
  {h:"2. Presentation approaches", html:"", tbl:{title:"From most scripted to most tailored", cols:["Approach","How it works","Best for"],rows:[["Stimulus-response (canned)","Memorized script","Simple products, inexperienced reps, telemarketing"],["Formula (AIDA)","Moves buyer through attention, interest, desire, action","Products with known buyer concerns"],["Need-satisfaction","Discover needs through questions, then present","Most consultative B2B and B2C sales"],["Problem-solving / consultative","Deep analysis, often by a team, custom solution","Complex, high-value sales"]]}},
  {h:"3. Objection handling", html:"<p>Common techniques: <b>direct denial</b> (when the buyer is factually wrong), <b>indirect denial</b> ('yes, but'), <b>compensation</b> (admit the drawback and offset it with a benefit), <b>feel-felt-found</b>, <b>questioning</b> to clarify, and <b>boomerang</b> (turn the objection into a reason to buy).</p>"}
 ],
 ph:[
  ["Missionary selling","Medical representatives who visit doctors to explain new drugs do not take orders from the doctors; prescriptions then drive pharmacy sales."],
  ["Trade servicer","A beverage company's route salesperson who restocks and arranges displays in groceries and sari-sari stores is a trade servicer."]
 ],
 confused:[
  ["Lead versus qualified prospect","A lead is only a name. A prospect has been checked for need, ability to pay, authority and access."],
  ["Preapproach versus approach","Preapproach is homework before the call. Approach is the opening of the actual meeting."],
  ["Need-satisfaction versus problem-solving","Both are customer-focused. Problem-solving goes deeper, often with technical teams and formal analysis."],
  ["Trial close versus close","A trial close tests readiness; the close asks for the commitment."]
 ],
 mnemonics:[
  ["Selling process","Pretty People Always Present Our Clever Follow-up","Prospecting, Preapproach, Approach, Presentation, Objections, Closing, Follow-up."],
  ["Qualifying","MAN: Money, Authority, Need","Plus accessibility."],
  ["Sales jobs","TMTN: Trade, Missionary, Technical, New business","Who you serve and how."]
 ],
 takeaways:["Relationship selling focuses on lifetime value and trust.","Seven selling steps from prospecting to follow-up.","Presentations range from canned to consultative.","Sales management = formulate, implement, evaluate."]
});

CH.push({
 course:"sf", n:2, short:"Sales organization, size and territories", title:"Organizing the Sales Force, Sizing It and Designing Territories", priority:"High-yield",
 overview:"Company sales force versus independent agents, ways to specialize the sales organization, key account management, sales force size methods with computations, and territory design.",
 why:"Why it ranks high: the workload and breakdown methods and the reps-versus-agents break-even are the main computation items for Subject 5.",
 objectives:["Decide between company salespeople and independent agents.","Compare geographic, product, customer and functional specialization.","Explain key account management.","Compute sales force size using breakdown, workload and incremental methods.","Outline territory design steps."],
 know:[
  "Agents (manufacturers' representatives) are paid <mark>commission only</mark>, so they are cheaper at <mark>low sales volumes</mark>; a company force has fixed costs that become cheaper at <mark>high volumes</mark>. Company force gives <mark>more control</mark>.",
  "Specialization: <mark>geographic</mark> (simplest, lowest cost, no specialization), <mark>product</mark>, <mark>customer/market</mark>, <mark>functional</mark> (e.g., hunters vs farmers).",
  "Key (major/national) account management gives the largest, most complex accounts a dedicated rep or team.",
  "Sizing methods: <mark>breakdown</mark> (forecast &divide; productivity per rep), <mark>workload</mark> (calls or hours needed &divide; capacity per rep), <mark>incremental</mark> (add reps until marginal profit = marginal cost).",
  "Territory design: <mark>select a control unit &rarr; estimate market potential &rarr; form tentative territories &rarr; analyze workload &rarr; adjust &rarr; assign salespeople</mark>.",
  "Good territories have roughly <mark>equal potential and equal workload</mark>.",
  "Span of control = number of salespeople a manager supervises."
 ],
 terms:[
  ["Manufacturers' representative (agent)","Independent salesperson or firm that sells non-competing lines for several manufacturers, paid by commission."],
  ["Geographic organization","Each salesperson sells all products to all customers in a defined area. Low cost, clear responsibility, but no specialization."],
  ["Product organization","Salespeople specialize by product line; useful for technical or very different products. Risk: duplication of calls on the same customer."],
  ["Customer (market) organization","Salespeople specialize by customer type or industry; deep customer knowledge."],
  ["Functional organization","Salespeople specialize by selling activity, such as new account development vs maintenance."],
  ["Key account management","Dedicated attention, often by teams, to the largest and most strategic customers."],
  ["Team selling","A group of people from sales, engineering, service and finance serving a complex account."],
  ["Telemarketing / inside sales","Selling by phone and online, cheaper per contact than field selling."],
  ["Breakdown method","Number of salespeople = forecasted sales divided by expected sales per salesperson."],
  ["Workload method","Number of salespeople = total calls (or hours) needed divided by what one salesperson can handle."],
  ["Incremental method","Add salespeople as long as the incremental profit from one more rep exceeds its incremental cost."],
  ["Control unit","The geographic building block of territories (province, city, ZIP code, trading area)."],
  ["Span of control","Number of people a sales manager directly supervises."]
 ],
 notes:[
  {h:"1. Company sales force or agents?", html:"<p>Economic test: agents cost a higher commission but no fixed cost; company reps cost fixed salary and expenses plus a lower commission. Set the two cost lines equal to find the break-even sales level. Control test: company reps can be directed, trained and asked to do nonselling work. Strategic/transaction-cost test: when selling requires specialized knowledge or long relationships, a company force is safer.</p>"},
  {h:"2. Sizing worked examples", html:"<p><b>Workload</b>: 1,000 A accounts need 36 calls a year and 2,000 B accounts need 12. Total = 36,000 + 24,000 = 60,000 calls. A rep makes 1,000 calls a year, so the firm needs <b>60 reps</b>.</p><p><b>Breakdown</b>: forecast P120M, average rep sells P8M &rarr; <b>15 reps</b>.</p><p><b>Agents vs company</b>: company force P3M fixed + 3%; agents 8%. Break-even S = 3,000,000 &divide; (0.08 &minus; 0.03) = <b>P60M</b>.</p>"},
  {h:"3. Territory design", html:"", v:[
   {t:"flow", title:"Territory design steps", steps:[["Select a control unit"],["Estimate market potential","By control unit"],["Form tentative territories","Combine units of similar potential"],["Perform workload analysis","Calls needed, travel time"],["Adjust territories","Balance potential and workload"],["Assign salespeople","Match ability to territory"]]}]}
 ],
 ph:[
  ["Geographic organization","A consumer goods firm with reps for Metro Cebu, Bohol and Negros is geographically organized."],
  ["Agents","A small Cebu furniture exporter that uses commissioned agents in the US instead of hiring its own sales staff keeps costs variable."]
 ],
 confused:[
  ["Breakdown versus workload method","Breakdown starts from the sales forecast (and is circular: sales depend on how many reps you have). Workload starts from the calls customers need."],
  ["Product versus customer specialization","Product: experts in a product line, may duplicate calls on customers. Customer: experts in a customer group, may need broad product knowledge."],
  ["Market potential versus workload in territories","Potential = how much could be sold. Workload = how much effort serving it takes. Balance both."]
 ],
 mnemonics:[
  ["Sizing methods","BWI: Breakdown, Workload, Incremental","Sales-based, effort-based, profit-based."],
  ["Territory steps","Cats Eat Fish, Wait, Adjust, Assign","Control unit, Estimate potential, Form territories, Workload, Adjust, Assign."]
 ],
 takeaways:["Agents are cheaper at low volume; company reps give control and win at high volume.","Specialize by geography, product, customer or function.","Workload method: total calls &divide; calls per rep.","Balance territories on potential and workload."]
});

CH.push({
 course:"sf", n:3, short:"Forecasting and quotas", title:"Estimating Potential, Forecasting Sales and Setting Quotas", priority:"High-yield",
 overview:"Market potential, sales potential and the sales forecast; subjective and objective forecasting methods with worked computations; and types and qualities of sales quotas.",
 why:"Why it ranks high: the three demand definitions, forecasting method classification, and moving-average and exponential-smoothing computations are frequent items.",
 objectives:["Define market potential, sales potential and sales forecast.","Contrast top-down and bottom-up forecasting.","Classify subjective and objective forecasting methods.","Compute moving averages and exponential smoothing.","Choose and evaluate sales quotas."],
 know:[
  "<mark>Market potential</mark> = maximum possible sales of a product by all sellers in a market. <mark>Sales potential</mark> = maximum share of market potential one firm can reasonably expect. <mark>Sales forecast</mark> = expected sales for a specified period under a proposed marketing plan.",
  "Top-down (breakdown) starts from the economy and industry; bottom-up (buildup) adds customer- or territory-level estimates.",
  "Subjective methods: <mark>user expectations (buyers' intentions), sales force composite, jury of executive opinion, Delphi technique</mark>.",
  "Objective methods: <mark>market test, time-series analysis (moving averages, exponential smoothing, decomposition), statistical demand analysis (regression)</mark>.",
  "Exponential smoothing: <mark>F<sub>t+1</sub> = &alpha;A<sub>t</sub> + (1 &minus; &alpha;)F<sub>t</sub></mark>. Higher &alpha; reacts faster to recent changes.",
  "Quota types: <mark>sales volume, financial (gross margin, profit, expense), activity, combination</mark>.",
  "Good quotas are <mark>attainable, easy to understand, complete and timely</mark> (and fair)."
 ],
 terms:[
  ["Market potential","An estimate of the maximum possible sales of a product or service by all sellers in a market over a period."],
  ["Sales potential","The maximum share of market potential an individual firm can expect to obtain."],
  ["Sales forecast","An estimate of sales in units or pesos for a specified future period under a proposed marketing plan and assumed environment."],
  ["User expectations (survey of buyers' intentions)","Asking customers how much they plan to buy."],
  ["Sales force composite","Each salesperson forecasts sales in their territory; estimates are combined. Close to customers but may be biased (low if forecasts set quotas)."],
  ["Jury of executive opinion","Top executives combine their judgments; quick, but may lack detail and can be swayed by dominant personalities."],
  ["Delphi technique","Experts give anonymous forecasts in rounds with feedback until they converge."],
  ["Market test","Introducing the product in a limited area to measure response before full launch; costly and visible to competitors."],
  ["Time-series analysis","Forecasting from patterns in past sales: trend, cycle, seasonal and irregular components."],
  ["Moving average","Forecast equal to the average of a fixed number of recent periods."],
  ["Exponential smoothing","Weighted moving average that gives more weight to recent observations through the smoothing constant &alpha;."],
  ["Statistical demand analysis (regression)","Relating sales to factors such as income, price or advertising to predict sales."],
  ["Sales quota","A performance goal assigned to a sales unit (rep, territory, branch) for a period."],
  ["Activity quota","Goal for activities such as calls, demonstrations, new accounts or displays."],
  ["Financial quota","Goal for gross margin, net profit or expense control, to steer reps toward profitable sales."]
 ],
 notes:[
  {h:"1. Forecasting methods", html:"", tbl:{title:"Subjective vs objective", cols:["Method","Type","Main strength","Main weakness"],rows:[["User expectations","Subjective","Direct from buyers","Intentions may not equal behavior"],["Sales force composite","Subjective","Close to the market","Bias, especially if tied to quotas"],["Jury of executive opinion","Subjective","Fast, uses broad experience","Opinion-based, may lack detail"],["Delphi","Subjective","Reduces groupthink","Slow"],["Market test","Objective","Real buyer response","Costly, alerts competitors"],["Time series","Objective","Uses history, cheap","Assumes the past repeats"],["Regression","Objective","Explains drivers of sales","Needs good data and stable relationships"]]}},
  {h:"2. Worked computations", html:"<p><b>Three-period moving average</b>: sales for Jan&ndash;Mar = 200, 240, 220. April forecast = 660 &divide; 3 = <b>220</b>.</p><p><b>Exponential smoothing</b>: &alpha; = 0.2, March forecast 210, March actual 220. April forecast = 0.2(220) + 0.8(210) = 44 + 168 = <b>212</b>.</p>"},
  {h:"3. Quotas", html:"<p>Quotas direct effort, give standards for evaluation, and are often tied to compensation. Volume quotas are simple but may encourage selling easy, low-margin items. Financial quotas push profitability. Activity quotas suit missionary roles or long selling cycles. Combination quotas weight several measures.</p>"}
 ],
 ph:[
  ["Sales force composite","A pharma company asks each district rep for next year's estimate per hospital, then rolls them up: a bottom-up sales force composite."],
  ["Activity quota","New reps in a long B2B cycle might get quotas of 40 calls and 5 demonstrations a month rather than a peso target."]
 ],
 confused:[
  ["Market potential versus sales potential versus forecast","Market potential: all sellers' maximum. Sales potential: your maximum share. Forecast: what you actually expect with your plan."],
  ["Moving average versus exponential smoothing","A moving average weights the last n periods equally. Exponential smoothing weights recent periods more, via &alpha;."],
  ["Jury of executive opinion versus Delphi","Jury: executives discuss together. Delphi: experts answer anonymously in rounds."]
 ],
 mnemonics:[
  ["Subjective methods","U-S-J-D","User expectations, Sales force composite, Jury, Delphi."],
  ["Good quotas","ACET: Attainable, Complete, Easy, Timely","Plus fair."]
 ],
 takeaways:["Market potential &ge; sales potential &ge; forecast.","Subjective vs objective methods; know one strength and weakness of each.","Moving average and exponential smoothing computations.","Quotas: volume, financial, activity, combination."]
});

CH.push({
 course:"sf", n:4, short:"Salesperson performance, recruiting and training", title:"Salesperson Performance: Role Perceptions, Motivation, Recruiting, Selection and Training", priority:"High-yield",
 overview:"The determinants of salesperson performance, role perceptions, motivation through expectancy theory, how to recruit and select salespeople, and how to design and evaluate sales training.",
 why:"Why it ranks high: the performance model, role ambiguity versus role conflict, expectancy-instrumentality-valence and Kirkpatrick's training levels are classic sales management items.",
 objectives:["Name the determinants of salesperson performance.","Distinguish role accuracy, ambiguity and conflict.","Apply expectancy theory to sales motivation.","Describe the recruiting and selection process.","Plan and evaluate sales training."],
 know:[
  "Performance determinants: <mark>role perceptions, aptitude, skill level, motivation</mark>, plus <mark>personal, organizational and environmental factors</mark>.",
  "Role perceptions: <mark>role accuracy</mark>, <mark>role ambiguity</mark> (uncertain about what is expected), <mark>role conflict</mark> (incompatible demands from different role partners).",
  "Salespeople sit in a <mark>boundary position</mark>, which breeds role conflict between company and customer demands.",
  "Expectancy theory: <mark>expectancy</mark> (effort &rarr; performance), <mark>instrumentality</mark> (performance &rarr; reward), <mark>valence</mark> (value of the reward).",
  "Rewards: <mark>extrinsic</mark> (pay, promotion, recognition) and <mark>intrinsic</mark> (accomplishment, growth, self-worth).",
  "Recruiting and selection: <mark>job analysis &rarr; job description &rarr; job qualifications &rarr; recruit applicants &rarr; select (applications, interviews, tests, references, background checks)</mark>.",
  "Training: <mark>assess needs &rarr; set objectives &rarr; design and deliver &rarr; evaluate</mark>.",
  "Kirkpatrick's training evaluation levels: <mark>reaction, learning, behavior, results</mark>."
 ],
 terms:[
  ["Aptitude","Personal traits and abilities that relate to sales success, such as verbal ability, empathy and drive."],
  ["Skill level","Learned proficiency at the sales job: product knowledge, presentation, negotiation, interpersonal skills."],
  ["Motivation","The amount of effort a salesperson chooses to spend on each activity associated with the job."],
  ["Role accuracy","Degree to which the salesperson's perceptions of role demands match what role partners actually expect."],
  ["Role ambiguity","Salesperson is uncertain about what is expected or lacks information to perform the role."],
  ["Role conflict","Salesperson believes the demands of two or more role partners are incompatible."],
  ["Expectancy","Perceived link between effort and performance."],
  ["Instrumentality","Perceived link between performance and rewards."],
  ["Valence","Perceived attractiveness of a reward."],
  ["Job analysis","Determining the activities, tasks and responsibilities of the sales job."],
  ["Job description","Written statement of the job's duties, reporting relationships and requirements."],
  ["Structured interview","All applicants are asked the same set of questions, improving comparability."],
  ["Kirkpatrick model","Four levels of training evaluation: reaction, learning, behavior, results."],
  ["Sales training methods","On-the-job training, classroom, role playing, e-learning and online modules, coaching and mentoring."]
 ],
 notes:[
  {h:"1. The salesperson performance model", html:"", v:[
   {t:"mind", title:"What drives salesperson performance", center:"Performance", branches:[
    ["Role perceptions",["Accuracy","Ambiguity","Conflict"]],
    ["Aptitude",["Abilities and traits"]],
    ["Skill level",["Product, customer, selling skills"]],
    ["Motivation",["Effort allocated to tasks","Expectancy, instrumentality, valence"]],
    ["Personal, organizational, environmental",["Territory potential","Company policies and support","Economy, competition"]]]}],
   html:""},
  {h:"2. Motivation", html:"<p>Under expectancy theory, motivation = expectancy &times; instrumentality &times; valence. Managers raise motivation by improving training (raising expectancy), linking rewards clearly to performance (instrumentality), and offering rewards salespeople value (valence). Satisfaction with job dimensions (pay, supervisors, coworkers, the job itself, promotion, customers) affects turnover.</p>"},
  {h:"3. Recruiting, selection and training", html:"", v:[
   {t:"flow", title:"Recruiting and selection", steps:[["Job analysis"],["Job description"],["Job qualifications"],["Recruit applicants","Internal, referrals, schools, ads, online, agencies"],["Select","Application, interviews, tests, references, background checks"]]},
   {t:"stack", title:"Kirkpatrick: four levels of training evaluation", items:[["Results","Business outcomes: sales, retention"],["Behavior","Do trainees apply it on the job?"],["Learning","Did knowledge and skills increase?"],["Reaction","Did trainees like it?"]], invert:false}]}
 ],
 ph:[
  ["Role conflict","A distributor's sales rep is asked by the company to push a new product hard while key retailers ask for fewer SKUs: classic boundary-position conflict."],
  ["Expectancy","A rep who thinks no amount of effort can win a big hospital account (low expectancy) will not try, even if the bonus is attractive."]
 ],
 confused:[
  ["Role ambiguity versus role conflict","Ambiguity = unclear what is expected. Conflict = clear demands that clash."],
  ["Expectancy versus instrumentality","Expectancy: will effort lead to performance? Instrumentality: will performance lead to the reward?"],
  ["Aptitude versus skill","Aptitude is natural ability and traits. Skill is learned and can be trained."],
  ["Reaction versus results","Reaction is how trainees felt. Results are the business outcomes (the hardest to measure)."]
 ],
 mnemonics:[
  ["Performance determinants","RASM + POE","Role perceptions, Aptitude, Skill, Motivation, plus Personal, Organizational, Environmental factors."],
  ["Expectancy theory","E &rarr; P &rarr; R &rarr; V","Effort to performance (expectancy), performance to reward (instrumentality), value of reward (valence)."],
  ["Kirkpatrick","Real Learners Become Results","Reaction, Learning, Behavior, Results."]
 ],
 takeaways:["Performance depends on role perceptions, aptitude, skill and motivation.","Ambiguity is unclear; conflict is clashing.","Expectancy &times; instrumentality &times; valence.","Recruit from a job analysis; evaluate training at four levels."]
});

CH.push({
 course:"sf", n:5, short:"Compensation, evaluation and ethics", title:"Compensation, Sales and Cost Analysis, Performance Evaluation and Ethics", priority:"High-yield",
 overview:"Compensation plans and incentives, expense accounts, sales analysis (iceberg and 80:20), cost and profitability analysis (full-cost vs contribution margin, ROAM), salesperson evaluation measures, and ethical and legal issues in selling.",
 why:"Why it ranks high: pros and cons of compensation plans, ratio computations, ROAM and contribution-margin logic are common problem-solving items.",
 objectives:["Compare straight salary, straight commission and combination plans.","Explain draws, bonuses and contests.","Use sales analysis (iceberg principle, 80:20).","Compute contribution margin and ROAM.","Evaluate salespeople with outcome and behavior measures and ratios.","Identify ethical issues in selling."],
 know:[
  "Straight salary: <mark>maximum control and security</mark>, little incentive. Good for <mark>new reps, missionary and team selling</mark>, lots of nonselling work.",
  "Straight commission: <mark>maximum incentive</mark>, costs vary with sales, but <mark>low control</mark> and unstable income.",
  "Combination (salary + incentive) is the most common plan.",
  "<mark>Draw</mark> = advance against future commissions; <mark>recoverable</mark> (must be repaid) or <mark>nonrecoverable</mark>.",
  "Sales contests are <mark>short-term</mark> incentives for specific objectives.",
  "<mark>Iceberg principle</mark>: aggregate figures can hide problems in parts of the business. <mark>80:20 principle</mark>: a small share of customers or products produces most of the sales.",
  "<mark>Contribution margin</mark> approach assigns only direct costs; <mark>full-cost</mark> approach also allocates indirect costs.",
  "ROAM = <mark>(contribution &divide; sales) &times; (sales &divide; assets managed)</mark>.",
  "Evaluate with <mark>outcome-based</mark> (sales, quota attainment, margin, new accounts) and <mark>behavior-based</mark> measures (calls, presentations, knowledge); BARS links ratings to observable behaviors."
 ],
 terms:[
  ["Straight salary","Fixed pay regardless of sales results."],
  ["Straight commission","Pay based entirely on results (sales or margin)."],
  ["Combination plan","Base salary plus commission and/or bonus."],
  ["Draw","Money advanced to a salesperson against future commissions."],
  ["Bonus","Lump-sum payment for meeting or exceeding a goal, often a quota."],
  ["Sales contest","Short-term incentive program to motivate specific sales activities or results."],
  ["Expense account types","Unlimited (reimburse all reasonable expenses), per diem (fixed daily amount), limited (caps by category)."],
  ["Sales analysis","Breaking down sales by territory, product, customer and order size to find strengths and weaknesses."],
  ["Iceberg principle","Total figures hide problems that only show when data are broken down."],
  ["80:20 principle","About 80% of sales come from about 20% of customers or products."],
  ["Full-cost approach","Allocates all costs, including indirect (shared) costs, to segments."],
  ["Contribution margin approach","Assigns only direct (traceable) costs; shows what a segment contributes to covering indirect costs and profit."],
  ["Return on assets managed (ROAM)","Contribution margin as a percent of sales times asset turnover; links profitability to assets used (receivables, inventory)."],
  ["Outcome-based measures","Results: sales volume, quota attainment, gross margin, new accounts."],
  ["Behavior-based measures","Activities and qualities: calls made, presentations, product knowledge, customer relations."],
  ["Behaviorally anchored rating scale (BARS)","Rating scale where each level is described by specific, observable job behaviors."],
  ["Orders per call (batting average)","Number of orders divided by number of calls."],
  ["Bribery / kickbacks","Giving something of value to influence a buyer's decision; unethical and often illegal."]
 ],
 notes:[
  {h:"1. Compensation plans", html:"", tbl:{title:"Comparing plans", cols:["Plan","Advantages","Disadvantages","Best when"],rows:[["Straight salary","Security; control over nonselling tasks; simple; stable costs","Little incentive; fixed cost even when sales fall","New reps, missionary or team selling, long cycles"],["Straight commission","Strong incentive; costs vary with sales; rewards top performers","Little control; unstable income; neglect of nonselling tasks","Selling is the main task; little need for control"],["Combination","Balances security, incentive and control","More complex; can be costly","Most firms"]]}},
  {h:"2. Profitability analysis worked example", html:"<p>Territory sales P10M; variable costs (cost of goods) P6M; direct selling costs P1.5M; assets managed (receivables + inventory) P5M.</p><ul class=\"tight\"><li>Contribution margin = 10 &minus; 6 &minus; 1.5 = <b>P2.5M</b> (25% of sales)</li><li>Asset turnover = 10 &divide; 5 = <b>2</b></li><li>ROAM = 25% &times; 2 = <b>50%</b></li></ul><p>Under the full-cost approach, the territory would also be charged a share of indirect costs (e.g., headquarters overhead), which can make a segment look unprofitable even when it contributes to covering fixed costs.</p>"},
  {h:"3. Performance ratios", html:"", tbl:{title:"Common ratios", cols:["Group","Ratio"],rows:[["Expense","Sales expense ratio = expenses &divide; sales; cost per call = expenses &divide; calls"],["Account development","Account penetration = accounts sold &divide; total accounts; new account conversion = new accounts &divide; total accounts; lost account ratio; sales per account; average order size"],["Call activity","Calls per day; calls per account; planned call ratio; orders per call (batting average)"]]}},
  {h:"4. Ethics and the law", html:"<p>Ethical issues include misrepresentation, bribery and kickbacks, excessive gifts and entertainment, conflicts of interest, unfair treatment of customers, expense-account padding, and misuse of company resources. Firms manage them with codes of conduct, training, clear gift policies and enforcement.</p>"}
 ],
 ph:[
  ["Combination pay","Many Philippine distributors pay reps a base salary plus commissions on collections, balancing security with incentive."],
  ["Iceberg principle","A region hitting its total quota may hide that one province fell 30% short while another overachieved."]
 ],
 confused:[
  ["Contribution margin versus full cost","Contribution margin ignores allocated indirect costs; full cost includes them. Use contribution margin to decide whether to keep a segment."],
  ["Recoverable versus nonrecoverable draw","Recoverable must be paid back from future commissions; nonrecoverable is kept even if commissions fall short."],
  ["Outcome versus behavior measures","Outcomes are results (often outside the rep's control). Behaviors are what the rep does (more controllable)."],
  ["Bonus versus commission","Commission is paid per sale; a bonus is a lump sum for reaching a goal."]
 ],
 mnemonics:[
  ["Pay plans","Salary = Security, Commission = Cash incentive, Combination = Compromise","Control falls as incentive rises."],
  ["ROAM","Margin &times; Turnover","(Contribution &divide; sales) &times; (sales &divide; assets)."]
 ],
 takeaways:["Salary for control; commission for incentive; combination for balance.","Iceberg and 80:20 justify detailed sales analysis.","Contribution margin and ROAM measure segment profitability.","Evaluate with outcomes, behaviors and ratios; manage ethics with clear policies."]
});

add("sf", {
mcq:[
 {ch:[1], q:"Which is the correct order of the selling process?", ok:"Prospecting, preapproach, approach, presentation, handling objections, closing, follow-up", no:["Approach, prospecting, presentation, closing, follow-up, objections, preapproach","Preapproach, prospecting, approach, closing, presentation, objections, follow-up","Prospecting, approach, preapproach, presentation, closing, objections, follow-up"], why:"Prospecting finds buyers, preapproach plans, approach opens, presentation shows value, objections are handled, the close asks for the order, and follow-up builds the relationship."},
 {ch:[1], q:"A memorized, standardized sales talk is a:", ok:"Stimulus-response (canned) presentation", no:["Need-satisfaction presentation","Problem-solving presentation","Consultative presentation"], why:"Canned presentations assume the right stimulus produces the desired response. They suit simple products and new reps."},
 {ch:[1], q:"A presentation that moves the buyer through attention, interest, desire and action is a:", ok:"Formula presentation", no:["Canned presentation","Need-satisfaction presentation","Team presentation"], why:"Formula (mental states) presentations follow AIDA."},
 {ch:[1], q:"A pharmaceutical rep visits doctors to explain a drug but does not take orders from them. This is a:", ok:"Missionary seller", no:["Trade servicer","Technical seller","New business seller"], why:"Missionary sellers build goodwill and educate influencers."},
 {ch:[1], q:"Planning a call by researching the prospect's needs and setting call objectives is the:", ok:"Preapproach", no:["Approach","Prospecting","Follow-up"], why:"The preapproach is homework before the meeting."},
 {ch:[1], q:"'Would you prefer delivery on Monday or Wednesday?' is an example of a(n):", ok:"Alternative-choice close", no:["Assumptive close","Summary-of-benefits close","Trial close"], why:"Both options mean buying. An assumptive close acts as if the decision is made."},
 {ch:[1], q:"Relationship selling focuses mainly on:", ok:"Building long-term, trust-based relationships with profitable customers", no:["Maximizing the size of each single transaction","Using memorized pitches for all buyers","Avoiding follow-up after the sale"], why:"It emphasizes customer lifetime value, trust and mutual benefit."},
 {ch:[1], q:"Admitting a product's drawback and offsetting it with a stronger benefit is the:", ok:"Compensation method", no:["Direct denial method","Boomerang method","Trial close"], why:"Compensation concedes the point and balances it. Boomerang turns the objection into a reason to buy."},
 {ch:[2], q:"Independent manufacturers' representatives are usually more economical than a company sales force when:", ok:"Sales volume is low", no:["Sales volume is very high","The firm needs tight control over nonselling tasks","Long, specialized relationships are critical"], why:"Agents have no fixed cost but higher commission rates, so they cost less at low volume."},
 {ch:[2], q:"The simplest and least costly way to organize a sales force, in which each rep sells everything in an area, is:", ok:"Geographic organization", no:["Product organization","Customer organization","Functional organization"], why:"Geographic organization avoids overlap but gives no specialization."},
 {ch:[2], q:"A disadvantage of product specialization is that:", ok:"Several reps may call on the same customer", no:["Reps lack product knowledge","It ignores technical products","It always costs less than geographic"], why:"Duplication of effort and customer confusion are common with product specialization."},
 {ch:[2], q:"Sizing the sales force by dividing forecasted sales by average sales per salesperson is the:", ok:"Breakdown method", no:["Workload method","Incremental method","Buildup method"], why:"It is simple but circular, because sales depend on the number of reps."},
 {ch:[2], q:"Adding salespeople as long as each additional rep's incremental profit exceeds its incremental cost is the:", ok:"Incremental method", no:["Breakdown method","Workload method","Percentage-of-sales method"], why:"Conceptually best, but hard to apply because the needed data are difficult to estimate."},
 {ch:[2], q:"What is the first step in designing sales territories?", ok:"Select a control unit", no:["Assign salespeople","Perform workload analysis","Adjust territories"], why:"Control unit, potential, tentative territories, workload, adjust, assign."},
 {ch:[3], q:"The maximum share of market potential that a single firm can reasonably expect is:", ok:"Sales potential", no:["Market potential","Sales forecast","Sales quota"], why:"Market potential covers all sellers. The forecast is what the firm expects under its plan."},
 {ch:[3], q:"Having each salesperson estimate sales in their territory and combining the estimates is the:", ok:"Sales force composite", no:["Jury of executive opinion","Delphi technique","User expectations method"], why:"It is close to the market but can be biased, especially if forecasts drive quotas."},
 {ch:[3], q:"Experts give anonymous forecasts in several rounds, with feedback, until they converge. This is the:", ok:"Delphi technique", no:["Jury of executive opinion","Market test","Sales force composite"], why:"Anonymity reduces the influence of dominant personalities."},
 {ch:[3], q:"Which is an OBJECTIVE forecasting method?", ok:"Exponential smoothing", no:["Jury of executive opinion","Sales force composite","Delphi technique"], why:"Time-series methods (moving average, exponential smoothing), market tests and regression are objective."},
 {ch:[3], q:"In exponential smoothing, a higher smoothing constant (&alpha;):", ok:"Gives more weight to the most recent actual sales", no:["Gives more weight to older data","Makes the forecast ignore recent sales","Has no effect on the forecast"], why:"F = &alpha;A + (1 &minus; &alpha;)F. Higher &alpha; reacts faster to recent changes."},
 {ch:[3], q:"Quotas on number of calls, demonstrations and new accounts opened are:", ok:"Activity quotas", no:["Sales volume quotas","Financial quotas","Expense quotas"], why:"Activity quotas suit roles where results take long to show."},
 {ch:[4], q:"A salesperson is unsure what management expects or how performance is judged. This is:", ok:"Role ambiguity", no:["Role conflict","Role accuracy","Low valence"], why:"Ambiguity = uncertainty. Conflict = incompatible demands."},
 {ch:[4], q:"In expectancy theory, the perceived link between performance and rewards is:", ok:"Instrumentality", no:["Expectancy","Valence","Aptitude"], why:"Expectancy: effort to performance. Instrumentality: performance to reward. Valence: how much the reward is valued."},
 {ch:[4], q:"Which is an intrinsic reward?", ok:"A sense of accomplishment", no:["A pay raise","A promotion","A trip won in a sales contest"], why:"Intrinsic rewards come from the work itself; extrinsic rewards are given by others."},
 {ch:[4], q:"The first step in recruiting and selecting salespeople is:", ok:"Job analysis", no:["Interviewing applicants","Placing job ads","Reference checks"], why:"Job analysis defines the tasks; the job description and qualifications follow."},
 {ch:[4], q:"Measuring whether trainees actually use new skills on the job is which Kirkpatrick level?", ok:"Behavior", no:["Reaction","Learning","Results"], why:"Reaction = feelings, learning = knowledge gained, behavior = on-the-job use, results = business outcomes."},
 {ch:[5], q:"Which compensation plan gives management the most control over salespeople's activities?", ok:"Straight salary", no:["Straight commission","Draw against commission","Sales contest"], why:"Salary pays regardless of sales, so reps can be directed to nonselling tasks."},
 {ch:[5], q:"A main disadvantage of straight commission is:", ok:"Little control over nonselling activities", no:["No incentive to sell","High fixed costs when sales fall","Rewards poor performers"], why:"Commission reps focus on what pays. Costs fall with sales, which is an advantage."},
 {ch:[5], q:"Money advanced to a rep against future commissions is a:", ok:"Draw", no:["Bonus","Per diem","Contest prize"], why:"Recoverable draws must be repaid from future commissions; nonrecoverable draws need not be."},
 {ch:[5], q:"Totals look fine, but a breakdown by territory reveals serious problems. This illustrates the:", ok:"Iceberg principle", no:["80:20 principle","Peter principle","Halo effect"], why:"Summary figures can hide problems below the surface."},
 {ch:[5], q:"Which approach assigns only direct, traceable costs to a segment?", ok:"Contribution margin approach", no:["Full-cost approach","Activity quota approach","Breakdown approach"], why:"The full-cost approach also allocates indirect costs."},
 {ch:[5], q:"Number of orders divided by number of calls is the:", ok:"Orders per call ratio (batting average)", no:["Sales expense ratio","Account penetration ratio","Quota attainment"], why:"It shows how often calls turn into orders."},
 {ch:[5], q:"A rating scale where each level is described by specific observable behaviors is a:", ok:"Behaviorally anchored rating scale (BARS)", no:["Graphic rating scale","Ranking method","Sales force composite"], why:"BARS reduces vagueness and bias in evaluation."}
],
tf:[
 {ch:[1], q:"A lead becomes a qualified prospect once the seller confirms need, ability to pay and authority to buy.", a:true, why:"Accessibility is also checked."},
 {ch:[1], q:"A trial close is the final request for the order.", a:false, why:"A trial close checks readiness; the final close asks for the order."},
 {ch:[2], q:"Company salespeople usually give the firm more control than independent agents.", a:true, why:"Company reps can be directed, trained and assigned nonselling work."},
 {ch:[2], q:"Territories should ideally have roughly equal potential and workload.", a:true, why:"This supports fair evaluation and efficient coverage."},
 {ch:[3], q:"Sales potential is always larger than market potential.", a:false, why:"Sales potential is one firm's share of market potential, so it is smaller."},
 {ch:[3], q:"The jury of executive opinion is an objective forecasting method.", a:false, why:"It is subjective, based on executives' judgment."},
 {ch:[4], q:"Role conflict occurs when a salesperson faces incompatible demands from two or more role partners.", a:true, why:"Common because salespeople sit at the boundary between company and customer."},
 {ch:[4], q:"In Kirkpatrick's model, 'results' measures how much trainees enjoyed the program.", a:false, why:"That is reaction. Results measures business outcomes."},
 {ch:[5], q:"Straight commission makes selling costs vary directly with sales.", a:true, why:"That is one of its main advantages for the firm."},
 {ch:[5], q:"Under the full-cost approach, a territory can look unprofitable even though it covers its direct costs and contributes to overhead.", a:true, why:"Allocated indirect costs can hide a positive contribution margin."}
],
id:[
 {ch:[1], q:"Altering sales behavior during or across customer interactions based on the situation.", a:["Adaptive selling"], why:"Adaptive sellers read the buyer and adjust style and content."},
 {ch:[2], q:"Independent salespeople who sell non-competing lines for several manufacturers on commission.", a:["Manufacturers' representatives","Manufacturers representatives","Manufacturers' reps","Agents","Independent agents","Sales agents"], why:"They are cost-effective at low volumes but give less control."},
 {ch:[3], q:"An estimate of sales for a specified future period under a proposed marketing plan.", a:["Sales forecast","Forecast"], why:"It sits below sales potential and market potential."},
 {ch:[4], q:"In expectancy theory, the perceived attractiveness of a reward.", a:["Valence"], why:"A reward with low valence does not motivate even if it is attainable."},
 {ch:[5], q:"About 80% of sales come from about 20% of customers or products.", a:["80:20 principle","80-20 rule","Pareto principle","80/20 rule"], why:"It argues for focusing effort and analyzing sales in detail."},
 {ch:[5], q:"Fixed daily allowance for a salesperson's travel and meal expenses.", a:["Per diem","Per diem expense account"], why:"Other plans: unlimited and limited expense accounts."}
],
match:[
 {ch:[3], q:"Match each forecasting method to its description.", pairs:[["User expectations","Asking customers about planned purchases"],["Sales force composite","Combining salespeople's territory estimates"],["Jury of executive opinion","Top managers pool their judgments"],["Delphi technique","Anonymous expert rounds until consensus"],["Market test","Launching in a limited area to measure response"]], why:"The first four are subjective; the market test is objective."}
],
app:[
 {ch:[2], q:"A firm has 400 A accounts needing 24 calls a year and 1,200 B accounts needing 6 calls a year. Each rep can make 800 calls a year. How many reps are needed (workload method)?", ok:"21", no:["18","24","12"], why:"Calls = 400 &times; 24 + 1,200 &times; 6 = 9,600 + 7,200 = 16,800. Reps = 16,800 &divide; 800 = 21."},
 {ch:[2], q:"Forecasted sales are P90 million and the average salesperson sells P6 million. How many salespeople does the breakdown method suggest?", ok:"15", no:["6","540","9"], why:"N = 90 &divide; 6 = 15. In practice, add an allowance for expected turnover."},
 {ch:[2], q:"A company sales force costs P2.4M in fixed costs plus 4% commission. Agents charge 10%. At what sales level are the two equal?", ok:"P40 million", no:["P24 million","P60 million","P17.1 million"], why:"2,400,000 + 0.04S = 0.10S &rarr; 0.06S = 2,400,000 &rarr; S = P40M. Below it agents are cheaper; above it the company force is."},
 {ch:[2], q:"There are 300 customers, each needing 20 calls a year of 2 hours each (including travel). A rep has 1,200 selling hours a year. How many reps are needed?", ok:"10", no:["5","12","20"], why:"300 &times; 20 &times; 2 = 12,000 hours &divide; 1,200 = 10 reps."},
 {ch:[3], q:"Sales for the last four months were 150, 170, 160 and 190. What is the three-month moving-average forecast for next month?", ok:"173.3", no:["167.5","160","190"], why:"Use the last three months: (170 + 160 + 190) &divide; 3 = 520 &divide; 3 = 173.3."},
 {ch:[3], q:"With &alpha; = 0.4, last month's forecast was 500 and actual sales were 560. What is this month's forecast?", ok:"524", no:["536","560","530"], why:"F = 0.4(560) + 0.6(500) = 224 + 300 = 524."},
 {ch:[5], q:"A rep sold P3.6M against a P4M quota. What is the quota attainment?", ok:"90%", no:["111%","10%","40%"], why:"3.6 &divide; 4 = 0.90 = 90%."},
 {ch:[5], q:"A territory has sales of P8M, variable costs of P5M, direct selling costs of P1M and assets managed of P4M. What is its ROAM?", ok:"50%", no:["25%","37.5%","200%"], why:"Contribution = 8 &minus; 5 &minus; 1 = P2M; margin = 2/8 = 25%; turnover = 8/4 = 2; ROAM = 25% &times; 2 = 50%."},
 {ch:[5], q:"A rep made 400 calls and got 60 orders. What is the orders-per-call ratio?", ok:"15%", no:["6.7%","40%","60%"], why:"60 &divide; 400 = 0.15."},
 {ch:[5], q:"A company wants new reps to do a lot of customer training and service, with little pressure to close quickly. Which plan fits best?", ok:"Straight salary or salary-heavy combination", no:["Straight commission","Commission with no base and no draw","Sales contests only"], why:"Salary gives control over nonselling tasks and security for new reps."},
 {ch:[4], q:"Reps believe hitting quota is impossible in their territories, so a large bonus fails to motivate them. Which expectancy-theory element is weak?", ok:"Expectancy", no:["Valence","Instrumentality","Aptitude"], why:"They doubt effort can produce the performance, so expectancy is low. The bonus is valued (valence is fine)."}
],
"case":[
 {ch:[2,3,5], title:"Bisaya Bev Distribution plans next year", "case":"<p>Bisaya Bev distributes beverages in the Visayas. It has 600 large accounts that need 26 calls a year and 2,400 small accounts that need 12 calls a year. A rep can make 1,200 calls a year. Last year's sales by quarter were P40M, P44M, P48M and P52M. Reps are paid straight commission, and managers complain that reps ignore merchandising and new-product introductions. In one territory, sales were P12M, variable costs P8M, direct selling costs P1.2M and assets managed P2M.</p>", qs:[
   {q:"How many reps does the workload method suggest?", ok:"37", no:["24","30","50"], why:"600 &times; 26 + 2,400 &times; 12 = 15,600 + 28,800 = 44,400 calls &divide; 1,200 = 37 reps."},
   {q:"What is the three-quarter moving-average forecast for next quarter?", ok:"P48M", no:["P46M","P52M","P56M"], why:"(44 + 48 + 52) &divide; 3 = 144 &divide; 3 = P48M. Note that a moving average lags behind a rising trend."},
   {q:"Why are reps ignoring merchandising?", ok:"Straight commission gives little reward or control for nonselling tasks", no:["Salary plans reduce incentive","Their role is ambiguous because of salary","The territory has too much potential"], why:"Commission pays only for sales. Adding a base salary or activity-based incentives would help."},
   {q:"What is the contribution margin for the territory?", ok:"P2.8M", no:["P4M","P3.2M","P1.2M"], why:"12 &minus; 8 &minus; 1.2 = P2.8M."},
   {q:"What is the territory's ROAM?", ok:"140%", no:["23.3%","70%","600%"], why:"Margin = 2.8/12 = 23.3%; turnover = 12/2 = 6; ROAM = 23.3% &times; 6 = 140% (equivalently 2.8/2)."}
 ]}
],
essay:[
 {ch:[5], q:"Compare straight salary, straight commission and combination plans. When would you use each?", model:"<p><b>Straight salary</b> gives security, simplicity and control over nonselling tasks, but little incentive and fixed costs even when sales fall. Use it for new reps, missionary and team selling, and long cycles. <b>Straight commission</b> gives strong incentive and makes costs vary with sales, but offers little control and unstable income. Use it when selling is the main task and control matters less. <b>Combination</b> plans (salary plus commission and/or bonus) balance security, incentive and control and are the most common. Draws and contests can be added to smooth income or push short-term goals.</p>", rubric:["Pros and cons of each plan","When to use each","Mentioned control versus incentive trade-off","Mentioned draws, bonuses or contests"]},
 {ch:[4], q:"Explain the determinants of salesperson performance and how a manager can influence each.", model:"<p>Performance depends on <b>role perceptions</b> (accuracy, ambiguity, conflict), <b>aptitude</b>, <b>skill level</b>, and <b>motivation</b>, plus <b>personal, organizational and environmental</b> factors. Managers improve role perceptions with clear job descriptions and feedback; aptitude through careful recruiting and selection; skills through training; and motivation through rewards linked to performance (expectancy, instrumentality, valence). They can also design fair territories and provide support systems.</p>", rubric:["Listed role perceptions, aptitude, skill, motivation","Explained ambiguity vs conflict","Linked selection to aptitude and training to skill","Applied expectancy theory"]}
]
});
})();
