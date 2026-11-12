/* Strauss and Frost, E-Marketing: Subject 3 (Integrated Marketing Communications), Topics 1-3 */
(function(){
var CH = window.CH = window.CH || [];
window.BANK = window.BANK || {};
function add(course, bank){ var B = window.BANK[course] = window.BANK[course] || {}; Object.keys(bank).forEach(function(k){ B[k] = (B[k]||[]).concat(bank[k]); }); }
window.FORMULAS = (window.FORMULAS||[]).concat([
 {subj:3, name:"Gross rating points (Belch)", f:"GRP = reach &times; average frequency", ex:"Reach 40% of households, average frequency 3 = 120 GRPs."},
 {subj:3, name:"Cost per thousand, print (Belch)", f:"CPM = (cost of ad space &times; 1,000) &divide; circulation", ex:"P150,000 &times; 1,000 &divide; 500,000 = P300 per thousand."},
 {subj:3, name:"Cost per rating point, broadcast (Belch)", f:"CPRP = cost of commercial time &divide; program rating", ex:"P300,000 &divide; 15 rating points = P20,000 per rating point."},
 {subj:3, name:"Click-through rate", f:"CTR = clicks &divide; impressions", ex:"500 clicks &divide; 100,000 impressions = 0.5%."},
 {subj:3, name:"Conversion rate", f:"Conversions &divide; visitors (or clicks)", ex:"40 purchases &divide; 2,000 visitors = 2%."},
 {subj:3, name:"Cost per click", f:"CPC = ad cost &divide; clicks", ex:"P10,000 &divide; 500 clicks = P20 per click."},
 {subj:3, name:"Cost per acquisition", f:"CPA = ad cost &divide; conversions", ex:"P10,000 &divide; 40 sales = P250 per acquisition."},
 {subj:3, name:"Return on ad spend", f:"ROAS = revenue from ads &divide; ad cost", ex:"P60,000 revenue &divide; P10,000 = 6 (P6 back per P1 spent)."},
 {subj:3, name:"Return on investment", f:"ROI = (gain &minus; cost) &divide; cost", ex:"(P60,000 gross profit gain &minus; P10,000) &divide; P10,000 = 500%. Use profit, not revenue, for ROI."}
]);

CH.push({
 course:"em", n:1, short:"E-marketing strategy and planning", title:"E-Marketing Landscape, Strategy and the E-Marketing Plan", priority:"High-yield",
 overview:"What e-marketing and e-business are, how digital technology changes marketing, e-business models, the seven-step e-marketing plan, and how performance is measured with KPIs and the balanced scorecard.",
 why:"Why it ranks high: definitions (e-marketing vs e-business vs e-commerce), the plan steps and the balanced scorecard are compact and easy to test.",
 objectives:["Define e-marketing, e-business and e-commerce.","Describe major e-business models.","Outline the seven-step e-marketing plan.","Use KPIs and the balanced scorecard for digital performance."],
 know:[
  "E-marketing = using <mark>information technology</mark> for the processes of creating, communicating and delivering value to customers and managing customer relationships.",
  "<mark>E-business</mark> = optimizing business activities through digital technology. <mark>E-commerce</mark> = the subset that involves transactions (buying and selling online).",
  "Digital technology shifts power to consumers: <mark>information access, price transparency, user-generated content</mark>.",
  "Seven-step e-marketing plan: <mark>situation analysis &rarr; strategic planning (STP) &rarr; objectives &rarr; e-marketing strategies (4Ps + CRM) &rarr; implementation &rarr; budget &rarr; evaluation</mark>.",
  "Planning ranges from a quick <mark>napkin plan</mark> to a detailed <mark>venture-capital plan</mark>.",
  "Balanced scorecard perspectives: <mark>financial, customer, internal business process, learning and growth</mark>.",
  "Online revenue models include <mark>content sponsorship, infomediary, brokerage, agent and online retailing</mark>."
 ],
 terms:[
  ["E-marketing (digital marketing)","Use of information technology for the processes of creating, communicating and delivering value to customers, and for managing customer relationships, in ways that benefit the organization and its stakeholders."],
  ["E-business","Continuous optimization of a firm's business activities through digital technology."],
  ["E-commerce","The subset of e-business focused on transactions: buying and selling online."],
  ["Business model","The method by which a firm sustains itself in the long term, including its value proposition and revenue streams."],
  ["Content sponsorship","Model where a firm creates a site with free content and sells advertising space on it."],
  ["Infomediary","An online organization that aggregates and distributes information, such as market research firms that collect consumer data and sell it."],
  ["Brokerage model","Intermediary that brings buyers and sellers together and earns a fee (online auctions, marketplaces)."],
  ["Agent model","Intermediary that represents either the buyer or the seller and earns a commission."],
  ["Online retailing (e-tailing)","Selling products directly to consumers through a website or app."],
  ["Napkin plan","A quick, informal e-marketing plan sketched by entrepreneurs before more formal planning."],
  ["Venture-capital plan","A detailed, formal plan used to attract funding."],
  ["Key performance indicator (KPI)","A specific metric that measures progress toward an objective (traffic, conversion rate, cost per acquisition)."],
  ["Balanced scorecard","Kaplan and Norton's framework that measures performance from four perspectives: financial, customer, internal business process, learning and growth."],
  ["Disintermediation","Removing traditional intermediaries so the producer sells directly to buyers online."],
  ["Reintermediation","Creating new online intermediaries that add value (comparison sites, marketplaces, aggregators)."]
 ],
 notes:[
  {h:"1. E-marketing, e-business and e-commerce", html:"<p>E-business is the broadest term (all business activity optimized through digital technology). E-commerce is the transaction part. E-marketing covers the marketing activities: research, STP, the 4Ps applied online, and relationship management. Digital media make communication two-way and measurable, and they shift power toward consumers who can compare prices, read reviews and create content.</p>"},
  {h:"2. The seven-step e-marketing plan", html:"", v:[
   {t:"flow", title:"Seven-step e-marketing plan", steps:[["Situation analysis","Review the environment and SWOT; existing marketing plan"],["E-marketing strategic planning","Segmentation, targeting, differentiation, positioning"],["Objectives","Specific, measurable, time-bound"],["E-marketing strategies","Offer, pricing, distribution, communication, relationship management"],["Implementation plan","Tactics, people, structure"],["Budget","Forecast revenues and costs"],["Evaluation plan","Metrics and KPIs, analytics"]]}]},
  {h:"3. Measuring performance", html:"", tbl:{title:"Balanced scorecard for e-marketing", cols:["Perspective","Example metrics"],rows:[["Financial","Online revenue, cost per acquisition, ROI"],["Customer","Satisfaction, retention, share of customers buying online"],["Internal business process","Order fulfillment time, site uptime, conversion rate"],["Learning and growth","Employee digital skills, new features launched"]]}}
 ],
 ph:[
  ["Disintermediation","A Cebu furniture maker selling directly through its own website and Facebook shop skips traditional dealers."],
  ["Reintermediation","Food-delivery and e-commerce marketplace apps are new intermediaries that earn commissions by bringing buyers and sellers together."]
 ],
 confused:[
  ["E-business versus e-commerce","E-business is any digital optimization of business. E-commerce is only the buying and selling part."],
  ["Brokerage versus agent","A broker brings buyers and sellers together without representing either. An agent represents one side."],
  ["Disintermediation versus reintermediation","Dis- removes intermediaries; re- creates new digital ones."]
 ],
 mnemonics:[
  ["Seven-step e-plan","Some Smart Owners Sell Inside Budget Easily","Situation, Strategic planning, Objectives, Strategies, Implementation, Budget, Evaluation."],
  ["Balanced scorecard","FCIL: Financial, Customer, Internal, Learning","Four perspectives, not just financial results."]
 ],
 takeaways:["E-business is broadest; e-commerce is transactions; e-marketing is the marketing part.","Seven-step e-marketing plan.","Measure with KPIs and the balanced scorecard."]
});

CH.push({
 course:"em", n:2, short:"Digital media and communication tools", title:"Online Marketing Communication: Owned, Paid and Earned Media", priority:"High-yield",
 overview:"How digital tools fit into IMC: owned, paid and earned media; search engine optimization versus search advertising; display, native and mobile ads; email and permission marketing; social media, influencers and viral word of mouth.",
 why:"Why it ranks high: this is where digital meets Belch's IMC. SEO vs SEM, permission marketing and the paid/owned/earned split are the most common items.",
 objectives:["Classify media as owned, paid or earned.","Contrast SEO with search engine marketing (paid search).","Describe online ad formats and pricing models.","Apply permission and email marketing principles.","Explain social media, influencer and viral marketing."],
 know:[
  "<mark>Owned</mark> media: channels the brand controls (website, app, blog, email list, social pages). <mark>Paid</mark>: bought exposure (search ads, display, sponsored posts). <mark>Earned</mark>: coverage and sharing created by others (reviews, shares, press).",
  "<mark>SEO</mark> improves organic (unpaid) ranking through keywords, quality content, links and technical structure. <mark>SEM / paid search</mark> buys sponsored results, usually pay-per-click.",
  "Online ad pricing: <mark>CPM</mark> (per thousand impressions), <mark>CPC</mark> (per click), <mark>CPA</mark> (per action or sale), flat-fee sponsorships.",
  "Permission marketing (Godin): marketing only to people who have agreed to receive messages. <mark>Opt-in</mark> (consumer agrees first) vs <mark>opt-out</mark> (included until they ask to leave).",
  "Spam = unsolicited commercial email.",
  "Viral marketing = online word of mouth: messages consumers pass along to others.",
  "Influencer marketing uses people with credible followings; sponsorship must be disclosed.",
  "Digital communication is <mark>two-way and measurable</mark>, so it supports both brand building and direct response."
 ],
 terms:[
  ["Owned media","Channels the brand owns and controls: website, app, blog, newsletter, official social media accounts."],
  ["Paid media","Exposure the brand pays for: search ads, display ads, sponsored social posts, influencer fees."],
  ["Earned media","Exposure created by others for free: shares, reviews, mentions, press coverage, word of mouth."],
  ["Search engine optimization (SEO)","Improving a site so it ranks higher in organic (unpaid) search results."],
  ["Search engine marketing (SEM) / paid search","Buying sponsored listings on search results pages, usually priced per click and triggered by keywords."],
  ["Display advertising","Graphical ads (banners, rich media, video) on websites and apps."],
  ["Rich media","Display ads with interactive or moving elements such as video, audio or expanding units."],
  ["Native advertising","Paid content designed to match the look and feel of the platform where it appears; must be labeled as sponsored."],
  ["Retargeting (remarketing)","Showing ads to people who previously visited a site or app."],
  ["Permission marketing","Gaining consumers' consent before sending them marketing messages."],
  ["Opt-in / double opt-in","Consumer actively agrees to receive messages; double opt-in confirms the subscription with a second step."],
  ["Opt-out","Consumer is included by default and must ask to be removed."],
  ["Spam","Unsolicited bulk commercial email."],
  ["Viral marketing","Online word-of-mouth: content that consumers forward and share with others."],
  ["Influencer marketing","Using individuals with an engaged following to recommend or feature a brand."],
  ["User-generated content (UGC)","Content created by consumers rather than the brand: reviews, posts, videos."],
  ["Content marketing","Creating and sharing valuable, relevant content to attract and engage a defined audience."]
 ],
 notes:[
  {h:"1. Owned, paid and earned media", html:"", tbl:{title:"Paid, owned, earned", cols:["Type","Examples","Strength","Weakness"],rows:[["Owned","Website, app, blog, email list, brand social pages","Control, low cost per contact, long life","Must build the audience; less credible"],["Paid","Search ads, display, video ads, sponsored posts","Fast, scalable, targetable","Costs rise; ad avoidance and ad blockers"],["Earned","Shares, reviews, mentions, press, word of mouth","Highest credibility","Little control; can turn negative"]]}},
  {h:"2. Search: SEO versus paid search", html:"<p>Search marketing reaches people at the moment of need. <b>SEO</b> works on keywords, content quality, links from other sites and technical structure to earn organic ranking; it is slower but has no per-click cost. <b>Paid search</b> buys sponsored placements by bidding on keywords; it is fast and measurable, and the advertiser usually pays per click.</p>"},
  {h:"3. Email and permission marketing", html:"<p>Email is cheap, targeted and measurable, but only works with permission. Good practice: opt-in lists, easy unsubscribe, relevant and personalized content, and testing of subject lines and timing. Godin's idea: turn strangers into friends and friends into customers by offering something of value in exchange for attention.</p>"},
  {h:"4. Social media", html:"<p>Social media let consumers create and share content and talk to brands and each other. Brands use them to listen (social listening), engage, support customers, and amplify earned media. Metrics range from exposure (impressions, reach) to engagement (likes, comments, shares, time spent) to action (clicks, sign-ups, sales).</p>"}
 ],
 ph:[
  ["Owned, paid, earned in a launch","A local milk tea brand posts on its own Instagram (owned), boosts posts and runs Google search ads for 'milk tea near me' (paid), and gains free buzz when food vloggers review it (earned)."],
  ["Disclosure","Influencers promoting products should disclose paid partnerships; undisclosed sponsorship misleads followers and risks breaking consumer-protection rules."],
  ["Data privacy","In the Philippines, collecting emails and personal data for marketing falls under the Data Privacy Act of 2012 (RA 10173), so consent and clear purpose matter. This is a local legal note, not textbook content."]
 ],
 confused:[
  ["SEO versus SEM","SEO earns organic ranking (no per-click cost). SEM / paid search buys sponsored ranking (pay per click)."],
  ["Opt-in versus opt-out","Opt-in requires agreement first; opt-out includes people by default until they leave."],
  ["Viral marketing versus influencer marketing","Viral spreads through ordinary consumers sharing. Influencer marketing pays or partners with specific people who have followings."],
  ["Owned versus earned","If the brand controls it, it is owned. If others create it for free, it is earned."]
 ],
 mnemonics:[
  ["POE","Pay, Own, Earn","Paid you buy, owned you build, earned you deserve."],
  ["Ad pricing","M-C-A: Million? No, Mille, Click, Action","CPM per thousand impressions, CPC per click, CPA per acquisition."]
 ],
 takeaways:["Classify every digital touch point as owned, paid or earned.","SEO earns ranking; paid search buys it.","Permission is the basis of email marketing.","Social media move consumers from exposure to engagement to action."]
});

CH.push({
 course:"em", n:3, short:"Digital metrics, CRM and ethics", title:"Digital Pricing, Distribution, Relationship Management, Metrics and Ethics", priority:"Core",
 overview:"How the Internet changes pricing and distribution, e-CRM and personalization, the core digital metrics and how to compute them, and privacy, ethical and legal issues in e-marketing.",
 why:"Why it ranks: metric computations (CTR, conversion, CPC, CPA, ROAS, ROI) are likely problem-solving items, and privacy and ethics questions are common.",
 objectives:["Explain online pricing strategies and price transparency.","Describe e-CRM and personalization.","Compute CTR, conversion rate, CPC, CPA, ROAS and ROI.","Identify privacy, intellectual property and ethical issues online."],
 know:[
  "Internet pricing: <mark>price transparency</mark> pushes prices down, but firms use <mark>dynamic pricing</mark> (prices change by demand, time or customer) and <mark>segmented pricing</mark>.",
  "Buyers' total cost online includes <mark>money, time, energy and psychic cost</mark>; convenience can justify higher prices.",
  "<mark>Freemium</mark>: basic version free, premium features paid.",
  "e-CRM uses customer data for <mark>personalization, mass customization and relationship building</mark>.",
  "CTR = <mark>clicks &divide; impressions</mark>. Conversion rate = <mark>conversions &divide; visitors</mark>.",
  "CPC = <mark>cost &divide; clicks</mark>. CPA = <mark>cost &divide; conversions</mark>. ROAS = <mark>revenue &divide; ad cost</mark>. ROI = <mark>(gain &minus; cost) &divide; cost</mark>.",
  "Key ethical and legal issues: <mark>privacy, data security, intellectual property (copyright, trademark, patent), domain names and cybersquatting, online expression</mark>."
 ],
 terms:[
  ["Price transparency","Both buyers and sellers can easily see and compare prices online."],
  ["Dynamic pricing","Changing prices continuously for different customers and situations (time, demand, inventory)."],
  ["Segmented pricing","Charging different prices to different segments for the same product."],
  ["Freemium","Offering a basic version free and charging for premium features."],
  ["e-CRM","Using digital technology and customer data to manage relationships across touch points."],
  ["Mass customization","Producing individually tailored products at near mass-production cost."],
  ["Impression","One display of an ad to a user."],
  ["Click-through rate (CTR)","Percentage of impressions that result in a click."],
  ["Conversion rate","Percentage of visitors who complete a desired action (purchase, sign-up)."],
  ["Bounce rate","Percentage of visitors who leave after viewing only one page."],
  ["Cost per acquisition (CPA)","Ad cost divided by the number of conversions."],
  ["Return on ad spend (ROAS)","Revenue generated per peso of advertising."],
  ["Cookies","Small data files a website stores on the user's device to remember visits and track behavior; a central privacy issue."],
  ["Cybersquatting","Registering a domain name that matches another party's trademark in order to profit from it."],
  ["Phishing","Fraudulent messages that pose as trusted organizations to steal personal or financial information."]
 ],
 notes:[
  {h:"1. Pricing and distribution online", html:"<p>The Internet makes prices transparent and lowers search costs, which puts downward pressure on prices. Sellers respond with dynamic and segmented pricing, bundling, freemium offers and by competing on convenience and service rather than price alone. In distribution, digital products can be delivered online, intermediaries may be removed (disintermediation) or new ones created (reintermediation), and channel conflict can arise when manufacturers sell online against their own retailers.</p>"},
  {h:"2. Digital metrics worked example", html:"<p>An ad gets 200,000 impressions, 1,000 clicks and 50 sales of P1,200 each. The campaign costs P15,000, and gross margin is 40%.</p><ul class=\"tight\"><li>CTR = 1,000 &divide; 200,000 = <b>0.5%</b></li><li>Conversion rate = 50 &divide; 1,000 = <b>5%</b></li><li>CPM = 15,000 &divide; 200 = <b>P75</b> per thousand impressions</li><li>CPC = 15,000 &divide; 1,000 = <b>P15</b></li><li>CPA = 15,000 &divide; 50 = <b>P300</b></li><li>Revenue = 50 &times; 1,200 = P60,000, so ROAS = 60,000 &divide; 15,000 = <b>4</b></li><li>Gross profit = 60,000 &times; 0.40 = P24,000, so ROI = (24,000 &minus; 15,000) &divide; 15,000 = <b>60%</b></li></ul>"},
  {h:"3. Ethics and law", html:"<p>Main issues: <b>privacy</b> (collecting, using and sharing personal data; cookies and tracking), <b>security</b> (data breaches, phishing), <b>digital property</b> (copyright, trademarks, patents, licenses), <b>domain names</b> (cybersquatting), and <b>online expression</b> (defamation, misinformation). Good practice: clear privacy policies, consent, data minimization and secure storage.</p>"}
 ],
 ph:[
  ["Local laws to know","Data Privacy Act of 2012 (RA 10173), Cybercrime Prevention Act of 2012 (RA 10175), E-Commerce Act of 2000 (RA 8792), and the Internet Transactions Act of 2023 (RA 11967). These are Philippine laws, not textbook content."],
  ["Dynamic pricing","Ride-hailing surge fares and airline seat sales are dynamic pricing."]
 ],
 confused:[
  ["ROAS versus ROI","ROAS uses revenue and ignores costs other than ads. ROI uses profit (gain minus cost). A ROAS of 4 can still be a loss if margins are thin."],
  ["CTR versus conversion rate","CTR: clicks out of impressions. Conversion rate: actions out of visitors or clicks."],
  ["CPC versus CPA","CPC divides cost by clicks; CPA divides cost by conversions (sales, sign-ups)."]
 ],
 mnemonics:[
  ["Metric funnel","Impressions &rarr; Clicks &rarr; Conversions","CTR links the first two, conversion rate links the last two."]
 ],
 takeaways:["Price transparency lowers prices; dynamic and segmented pricing respond.","Know the six metric formulas and when to use ROI instead of ROAS.","Privacy and intellectual property are the core e-marketing ethics topics."]
});

add("em", {
mcq:[
 {ch:[1], q:"Which term is the broadest?", ok:"E-business", no:["E-commerce","E-marketing","E-tailing"], why:"E-business covers optimizing all business activities through digital technology. E-commerce is the transaction subset; e-marketing is the marketing part."},
 {ch:[1], q:"A website offers free articles and earns money by selling ad space. Its business model is:", ok:"Content sponsorship", no:["Brokerage","Agent","Infomediary"], why:"Content sponsorship gives content away and sells audience attention to advertisers."},
 {ch:[1], q:"An online marketplace that brings buyers and sellers together and earns a fee per transaction uses a:", ok:"Brokerage model", no:["Agent model","Content sponsorship model","Napkin plan"], why:"Brokers create a market without representing either side. Agents represent one side."},
 {ch:[1], q:"Which is the FIRST step of the seven-step e-marketing plan?", ok:"Situation analysis", no:["Setting objectives","Budgeting","E-marketing strategic planning"], why:"Situation analysis, strategic planning, objectives, strategies, implementation, budget, evaluation."},
 {ch:[1], q:"Which is NOT a balanced scorecard perspective?", ok:"Competitor", no:["Financial","Customer","Learning and growth"], why:"The four perspectives are financial, customer, internal business process, and learning and growth."},
 {ch:[1], q:"A manufacturer stops selling through dealers and sells directly to customers online. This is:", ok:"Disintermediation", no:["Reintermediation","Infomediation","Retargeting"], why:"Removing intermediaries is disintermediation. Creating new online intermediaries is reintermediation."},
 {ch:[2], q:"Customer reviews and shares of a brand's post by ordinary users are:", ok:"Earned media", no:["Owned media","Paid media","Native advertising"], why:"Earned media is exposure created by others, not paid and not controlled by the brand."},
 {ch:[2], q:"Improving a website so that it ranks higher in unpaid search results is:", ok:"Search engine optimization", no:["Search engine advertising","Retargeting","Display advertising"], why:"SEO targets organic ranking. Paid search buys sponsored placement."},
 {ch:[2], q:"An advertiser pays only when a user clicks the ad. This pricing model is:", ok:"Cost per click", no:["Cost per thousand impressions","Flat-fee sponsorship","Cost per rating point"], why:"CPC (pay per click) is common in paid search. CPM charges per thousand impressions."},
 {ch:[2], q:"Marketing only to consumers who have given express consent is:", ok:"Permission marketing", no:["Viral marketing","Guerrilla marketing","Spam"], why:"Godin's permission marketing. Spam is unsolicited email, the opposite."},
 {ch:[2], q:"A brand's email list adds anyone who buys online unless they uncheck a box. This is an:", ok:"Opt-out approach", no:["Opt-in approach","Double opt-in approach","Permission-only approach"], why:"Opt-out includes people by default. Opt-in requires them to agree first."},
 {ch:[2], q:"Paid content designed to look like the platform's regular content, labeled as sponsored, is:", ok:"Native advertising", no:["Rich media","Earned media","Search engine optimization"], why:"Native ads match the form of the platform and must be disclosed as sponsored."},
 {ch:[2], q:"Showing ads to people who previously visited your website is:", ok:"Retargeting", no:["Content sponsorship","Search engine optimization","Disintermediation"], why:"Retargeting (remarketing) follows past visitors with ads to bring them back."},
 {ch:[2], q:"Online word of mouth in which consumers pass a brand message to others is:", ok:"Viral marketing", no:["Paid search","Permission marketing","Native advertising"], why:"Viral marketing relies on consumers forwarding and sharing content."},
 {ch:[3], q:"Charging different prices to different customers or at different times based on demand is:", ok:"Dynamic pricing", no:["Everyday low pricing","Freemium","Going-rate pricing"], why:"Dynamic pricing changes continuously with demand, time, inventory or customer."},
 {ch:[3], q:"Offering a basic app for free and charging for premium features is:", ok:"Freemium", no:["Penetration pricing","Content sponsorship","Price skimming"], why:"Freemium combines free basic use with paid upgrades."},
 {ch:[3], q:"The percentage of visitors who leave after viewing only one page is the:", ok:"Bounce rate", no:["Click-through rate","Conversion rate","Churn rate"], why:"A high bounce rate suggests the landing page does not match what visitors expected."},
 {ch:[3], q:"Registering a domain name matching another company's trademark to profit from it is:", ok:"Cybersquatting", no:["Phishing","Spamming","Retargeting"], why:"Phishing uses fake messages to steal information; cybersquatting abuses domain names."},
 {ch:[3], q:"Why can ROAS be misleading as a profit measure?", ok:"It uses revenue and ignores product costs and margins", no:["It ignores ad spending","It only counts impressions","It cannot be computed for online ads"], why:"ROAS = revenue &divide; ad cost. A campaign can have good ROAS and still lose money if margins are thin; ROI uses profit."}
],
tf:[
 {ch:[1], q:"E-commerce is broader than e-business.", a:false, why:"E-commerce (transactions) is a subset of e-business."},
 {ch:[2], q:"Earned media generally has higher credibility but lower control than paid media.", a:true, why:"Like publicity versus advertising in Belch: earned is credible, paid is controllable."},
 {ch:[2], q:"SEO results appear as sponsored listings that the advertiser pays for per click.", a:false, why:"That describes paid search. SEO targets organic, unpaid results."},
 {ch:[2], q:"Double opt-in asks subscribers to confirm their subscription in a second step.", a:true, why:"It produces cleaner lists and stronger proof of consent."},
 {ch:[3], q:"Price transparency online tends to push prices down.", a:true, why:"Buyers can compare easily, so sellers compete harder on price or add value through convenience and service."},
 {ch:[3], q:"CTR is computed as conversions divided by clicks.", a:false, why:"CTR = clicks &divide; impressions. Conversions &divide; clicks is a conversion rate."}
],
id:[
 {ch:[2], q:"Media channels a brand controls, such as its website and official social media pages.", a:["Owned media","Owned"], why:"Owned media are built, not bought."},
 {ch:[2], q:"Unsolicited bulk commercial email.", a:["Spam"], why:"Permission marketing is the remedy."},
 {ch:[3], q:"Ad cost divided by the number of conversions.", a:["Cost per acquisition","CPA","Cost per action"], why:"CPA tells you what each sale or sign-up cost."},
 {ch:[1], q:"Creating new online intermediaries such as comparison sites and marketplaces.", a:["Reintermediation"], why:"The opposite of disintermediation."}
],
app:[
 {ch:[3], q:"A banner ad gets 250,000 impressions and 1,250 clicks. What is the click-through rate?", ok:"0.5%", no:["5%","2%","0.05%"], why:"CTR = 1,250 &divide; 250,000 = 0.005 = 0.5%."},
 {ch:[3], q:"A campaign costs P24,000 and produces 800 clicks and 32 sales. What is the cost per acquisition?", ok:"P750", no:["P30","P25","P1,000"], why:"CPA = 24,000 &divide; 32 = P750. P30 is the CPC (24,000 &divide; 800)."},
 {ch:[3], q:"Using the same campaign (800 clicks, 32 sales), what is the conversion rate from clicks?", ok:"4%", no:["25%","0.4%","40%"], why:"32 &divide; 800 = 0.04 = 4%."},
 {ch:[3], q:"An ad campaign costing P50,000 generates P200,000 in sales. What is the ROAS?", ok:"4 (P4 per P1 spent)", no:["300%","0.25","P150,000"], why:"ROAS = revenue &divide; ad cost = 200,000 &divide; 50,000 = 4. 300% would be an ROI-style figure computed on revenue, which is not how ROI is defined."},
 {ch:[3], q:"The same P50,000 campaign produced P200,000 in sales at a 30% gross margin. What is the ROI?", ok:"20%", no:["300%","400%","&minus;40%"], why:"Gross profit = 200,000 &times; 0.30 = P60,000. ROI = (60,000 &minus; 50,000) &divide; 50,000 = 20%."},
 {ch:[3], q:"A magazine ad costs P120,000 and the magazine's circulation is 400,000. What is the CPM?", ok:"P300", no:["P3.33","P30","P0.30"], why:"CPM = (cost &times; 1,000) &divide; circulation = 120,000 &times; 1,000 &divide; 400,000 = P300."},
 {ch:[2], q:"A new bakery wants to appear at the top of search results for 'ensaymada Cebu' this weekend. Which tool fits best?", ok:"Paid search advertising", no:["Search engine optimization","Earned media","A venture-capital plan"], why:"SEO takes time to build. Paid search can put the bakery in sponsored results immediately."},
 {ch:[2], q:"A brand wants maximum credibility for a new product but accepts little control over the message. It should emphasize:", ok:"Earned media", no:["Paid media","Owned media","Display advertising"], why:"Earned media (reviews, shares, press) is most credible because the brand did not pay for it."}
],
"case":[
 {ch:[2,3], title:"Lami Kitchen's first digital campaign", "case":"<p>Lami Kitchen, a Cebu meal-delivery startup, ran a two-week campaign: P30,000 on sponsored social posts and search ads. The ads got 300,000 impressions and 2,400 clicks. 120 people ordered, with an average order of P800 and a 35% gross margin. A popular food vlogger also posted an unpaid review that was shared 3,000 times. Lami collects customer emails at checkout with a pre-checked newsletter box.</p>", qs:[
   {q:"What was the click-through rate?", ok:"0.8%", no:["8%","0.08%","5%"], why:"2,400 &divide; 300,000 = 0.008 = 0.8%."},
   {q:"What was the cost per acquisition?", ok:"P250", no:["P12.50","P100","P800"], why:"30,000 &divide; 120 orders = P250. P12.50 is the CPC (30,000 &divide; 2,400)."},
   {q:"What was the ROAS?", ok:"3.2", no:["0.32","2.4","1.12"], why:"Revenue = 120 &times; 800 = P96,000. ROAS = 96,000 &divide; 30,000 = 3.2."},
   {q:"Was the campaign profitable on a gross-margin basis?", ok:"Yes, slightly: gross profit P33,600 vs P30,000 cost, ROI 12%", no:["No, ROI was negative","Yes, ROI was 220%","It cannot be computed"], why:"Gross profit = 96,000 &times; 0.35 = P33,600. ROI = (33,600 &minus; 30,000) &divide; 30,000 = 12%."},
   {q:"The vlogger's unpaid review is:", ok:"Earned media", no:["Paid media","Owned media","Native advertising"], why:"Unpaid content by others is earned. If Lami had paid the vlogger, it would be paid (influencer) media and should be disclosed."},
   {q:"The pre-checked newsletter box is an example of:", ok:"Opt-out permission, which is weaker than opt-in", no:["Double opt-in","Spam filtering","Disintermediation"], why:"A pre-checked box includes people by default. Opt-in (unchecked box) gives clearer consent, which also matters under the Data Privacy Act."}
 ]}
],
essay:[
 {ch:[2], q:"Explain paid, owned and earned media and how they work together in an integrated campaign.", model:"<p><b>Owned</b> media are channels the brand controls (website, app, social pages, email list): low cost per contact and full control, but the audience must be built. <b>Paid</b> media are bought (search, display, video, sponsored posts): fast and targetable, but costly and often avoided. <b>Earned</b> media are created by others (shares, reviews, press): most credible but uncontrolled.</p><p>In an integrated campaign, paid media drive people to owned media, where good content and experiences encourage sharing and reviews, which create earned media. All three carry one consistent message, as IMC requires.</p>", rubric:["Defined all three","Strength and weakness of each","Explained how paid feeds owned feeds earned","Linked to IMC consistency"]}
]
});
})();
