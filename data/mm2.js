/* Kotler and Keller, Marketing Management: Topics 6-8 (Subject 2) and 9-10 (Subject 4) */
(function(){
var CH = window.CH = window.CH || [];
window.BANK = window.BANK || {};
function add(course, bank){ var B = window.BANK[course] = window.BANK[course] || {}; Object.keys(bank).forEach(function(k){ B[k] = (B[k]||[]).concat(bank[k]); }); }
window.FORMULAS = (window.FORMULAS||[]).concat([
 {subj:2, name:"Unit cost", f:"Variable cost + (fixed cost &divide; unit sales)", ex:"P10 + (P300,000 &divide; 50,000) = P16."},
 {subj:2, name:"Markup price", f:"Unit cost &divide; (1 &minus; desired return on sales)", ex:"P16 &divide; (1 &minus; 0.20) = P20. A 20% markup on price."},
 {subj:2, name:"Target-return price", f:"Unit cost + (desired return &times; invested capital) &divide; unit sales", ex:"P16 + (0.20 &times; P1,000,000) &divide; 50,000 = P16 + P4 = P20."},
 {subj:2, name:"Break-even volume", f:"Fixed cost &divide; (price &minus; variable cost)", ex:"P300,000 &divide; (P20 &minus; P10) = 30,000 units."},
 {subj:2, name:"Break-even in pesos", f:"Break-even units &times; price, or fixed cost &divide; contribution margin ratio", ex:"30,000 &times; P20 = P600,000; or P300,000 &divide; 0.50 = P600,000."},
 {subj:2, name:"Price elasticity of demand", f:"% change in quantity demanded &divide; % change in price", ex:"Price up 5%, quantity down 10%: elasticity = &minus;2 (elastic, |E| &gt; 1). Raising price lowers revenue."},
 {subj:2, name:"Markup on cost vs on selling price", f:"Markup &divide; cost; markup &divide; selling price", ex:"Cost P16, price P20, markup P4: 25% on cost, 20% on price. Price from cost markup: cost &times; (1 + m). Convert: m<sub>price</sub> = m<sub>cost</sub> &divide; (1 + m<sub>cost</sub>)."},
 {subj:4, name:"Customer lifetime value (simple)", f:"Annual profit per customer &times; expected years retained", ex:"P2,000 profit a year &times; 5 years = P10,000 (undiscounted). The textbook version discounts each year's profit to present value."},
 {subj:4, name:"Net Promoter Score", f:"% promoters (9&ndash;10) &minus; % detractors (0&ndash;6)", ex:"60% promoters, 15% detractors, 25% passives: NPS = 60 &minus; 15 = 45."},
 {subj:4, name:"Customer retention / churn", f:"Retention = 1 &minus; churn rate", ex:"Start with 1,000 customers, lose 150 in a year: churn 15%, retention 85%."},
 {subj:4, name:"Retail price from markup on retail", f:"Cost &divide; (1 &minus; markup % on retail)", ex:"Cost P75, 25% markup on retail: P75 &divide; 0.75 = P100."}
]);

CH.push({
 course:"mm", n:6, short:"Product, services and new products", title:"Setting Product Strategy, Designing Services and Introducing New Offerings", priority:"High-yield",
 overview:"Product levels and classifications, product mix and line decisions, packaging and warranties, the new-product development process, the diffusion of innovations, and the product life cycle.",
 why:"Why it ranks high: product levels, product mix dimensions, NPD steps, adopter categories and PLC stages are standard identification and sequencing items for the product side of Subject 2.",
 objectives:["Identify the five product levels and product classifications.","Describe product mix width, length, depth and consistency.","Explain line stretching, filling and pruning.","Order the stages of new-product development.","Use adopter categories and the product life cycle."],
 know:[
  "Product levels (customer-value hierarchy): <mark>core benefit &rarr; basic product &rarr; expected product &rarr; augmented product &rarr; potential product</mark>.",
  "Consumer goods: <mark>convenience</mark> (staples, impulse, emergency), <mark>shopping</mark> (homogeneous, heterogeneous), <mark>specialty</mark>, <mark>unsought</mark>.",
  "Product mix: <mark>width</mark> (number of lines), <mark>length</mark> (total items), <mark>depth</mark> (variants per item), <mark>consistency</mark> (how closely related).",
  "Line stretching: <mark>down-market, up-market, two-way</mark>. Line filling adds items within the current range.",
  "NPD: <mark>idea generation &rarr; screening &rarr; concept development and testing &rarr; marketing strategy &rarr; business analysis &rarr; product development &rarr; market testing &rarr; commercialization</mark>.",
  "Screening errors: <mark>drop-error</mark> (dismiss a good idea) and <mark>go-error</mark> (let a poor idea through).",
  "Adopters: <mark>innovators 2.5%, early adopters 13.5%, early majority 34%, late majority 34%, laggards 16%</mark>.",
  "Adoption speed rises with <mark>relative advantage, compatibility, divisibility (trialability), communicability</mark> and falls with <mark>complexity</mark>.",
  "PLC: <mark>introduction, growth, maturity, decline</mark>."
 ],
 terms:[
  ["Product","Anything that can be offered to a market to satisfy a want or need: physical goods, services, experiences, events, persons, places, properties, organizations, information and ideas."],
  ["Core benefit","The fundamental service or benefit the customer is really buying (a hotel guest buys rest and sleep)."],
  ["Basic product","The core benefit turned into a basic product (bed, bathroom, towels)."],
  ["Expected product","Attributes and conditions buyers normally expect (clean bed, fresh towels)."],
  ["Augmented product","Exceeds customer expectations; where most competition takes place in developed markets."],
  ["Potential product","All possible augmentations and transformations the product might undergo in the future."],
  ["Convenience goods","Bought frequently, immediately and with minimal effort: staples, impulse goods, emergency goods."],
  ["Shopping goods","Compared on suitability, quality, price and style. Homogeneous (similar quality, compare on price) or heterogeneous (features and service matter more)."],
  ["Specialty goods","Unique characteristics or brand identification for which enough buyers will make a special purchasing effort."],
  ["Unsought goods","Goods the consumer does not know about or normally think of buying (life insurance, cemetery plots)."],
  ["Product mix (assortment)","The set of all products and items a seller offers."],
  ["Line filling","Lengthening a product line by adding more items within the present range."],
  ["Line pruning","Removing products that are unprofitable or no longer fit."],
  ["Co-branding / ingredient branding","Combining two or more well-known brands in one offer; ingredient branding builds equity for materials or parts inside other branded products."],
  ["Warranty vs guarantee","Warranties are formal statements of expected product performance by the manufacturer. Guarantees reduce perceived risk by promising a remedy if the product fails."],
  ["Concept test","Presenting the product concept to target consumers to get their reactions."],
  ["Business analysis","Reviewing projected sales, costs and profits to see whether they meet company objectives."],
  ["Market testing","Testing the product and marketing program in realistic market settings before full launch."],
  ["Diffusion of innovation","How a new idea spreads from its source to its ultimate users or adopters."]
 ],
 notes:[
  {h:"1. The five product levels", html:"<p>Each level adds more customer value. Note that Kotler's second level is the <b>basic</b> product; Keller's version of the same idea calls it the <b>generic</b> product.</p>", v:[
   {t:"nest", title:"Customer-value hierarchy (outer = more value)", layers:[["Potential product","Future augmentations and transformations"],["Augmented product","Exceeds expectations"],["Expected product","What buyers normally expect"],["Basic product","Core benefit made tangible"],["Core benefit","What the customer is really buying"]]}]},
  {h:"2. Product mix and line decisions", html:"<p>A firm can increase business by adding new lines (widening the mix), lengthening existing lines, adding variants (deepening), or pursuing more or less consistency. Line decisions include <b>line stretching</b>, <b>line filling</b>, <b>line modernization</b>, <b>line featuring</b> and <b>line pruning</b>. Packaging must protect, identify, describe and promote; it is sometimes called the fifth P.</p>"},
  {h:"3. New-product development", html:"", v:[
   {t:"flow", title:"Eight stages", steps:[["Idea generation"],["Idea screening","Avoid drop-errors and go-errors"],["Concept development and testing"],["Marketing strategy development","Target, positioning, price, distribution, budget"],["Business analysis","Sales, costs, profit, break-even"],["Product development","Prototype, physical testing"],["Market testing"],["Commercialization","When, where, to whom, how"]]}]},
  {h:"4. Diffusion and the product life cycle", html:"", v:[
   {t:"bars", title:"Adopter categories (percent of adopters)", series:["Share of adopters"], rows:[["Innovators",2.5],["Early adopters",13.5],["Early majority",34],["Late majority",34],["Laggards",16]]}],
   tbl:{title:"Product life cycle summary", cols:["Stage","Sales and profits","Typical marketing objective"],rows:[["Introduction","Low sales; negative or low profit","Create awareness and trial"],["Growth","Rapidly rising sales and profits","Maximize market share"],["Maturity","Peak sales; profits level or decline","Maximize profit while defending share; modify market, product or program"],["Decline","Falling sales and profits","Reduce spending, milk the brand, or drop it"]]}}
 ],
 ph:[
  ["Product levels in a hotel","For a Mactan resort: core = rest; basic = room and bed; expected = clean room, working aircon; augmented = free airport transfer and welcome mango shake; potential = app-based room customization."],
  ["Line stretching","An instant-noodle maker launching a premium ramen line is stretching up-market; launching a P8 mini pack is stretching down-market."]
 ],
 confused:[
  ["Kotler's basic product versus Keller's generic product","Same idea, different label. Watch which book the question uses."],
  ["Product line length versus depth","Length = total number of items across lines. Depth = number of variants (sizes, flavors) of each item."],
  ["Concept testing versus market testing","Concept testing shows an idea to consumers before the product exists. Market testing tries the actual product and program in a realistic market."],
  ["Early adopters versus innovators","Innovators (2.5%) are venturesome risk takers. Early adopters (13.5%) are opinion leaders who adopt early but carefully."]
 ],
 mnemonics:[
  ["Product levels","Can Bread Ever Allow Possibility?","Core, Basic, Expected, Augmented, Potential."],
  ["NPD stages","I Saw Cats Make Big Purple Mice Cry","Idea generation, Screening, Concept testing, Marketing strategy, Business analysis, Product development, Market testing, Commercialization."],
  ["Adopter split","2.5 / 13.5 / 34 / 34 / 16","Innovators, early adopters, early majority, late majority, laggards. They add up to 100."]
 ],
 takeaways:["Five product levels; competition happens mostly at the augmented level.","Mix = width, length, depth, consistency.","NPD has eight stages; screening risks drop-errors and go-errors.","Adopters 2.5/13.5/34/34/16; PLC introduction, growth, maturity, decline."]
});

CH.push({
 course:"mm", n:7, short:"Pricing", title:"Developing Pricing Strategies and Programs", priority:"High-yield",
 overview:"The six-step price-setting procedure, pricing objectives, demand and cost analysis, the main pricing methods with formulas, price adaptation and initiating price changes.",
 why:"Why it ranks high: this is where computation questions come from (markup, target return, break-even, elasticity), and the pricing objectives and methods are classic identification items.",
 objectives:["Follow the six steps in setting price.","Identify the five pricing objectives.","Compute markup, target-return and break-even.","Contrast perceived-value, value, going-rate and auction pricing.","Apply price adaptation strategies."],
 know:[
  "Six steps: <mark>select pricing objective &rarr; determine demand &rarr; estimate costs &rarr; analyze competitors' costs, prices and offers &rarr; select pricing method &rarr; select final price</mark>.",
  "Objectives: <mark>survival, maximum current profit, maximum market share, maximum market skimming, product-quality leadership</mark>.",
  "Markup price = <mark>unit cost &divide; (1 &minus; desired return on sales)</mark>.",
  "Target-return price = <mark>unit cost + (desired return &times; invested capital) &divide; unit sales</mark>.",
  "Break-even volume = <mark>fixed cost &divide; (price &minus; variable cost)</mark>.",
  "The 3 Cs of price setting: <mark>costs set the floor, customers' perceived value sets the ceiling, competitors' prices are the orienting point</mark>.",
  "Value pricing includes <mark>EDLP</mark> (everyday low pricing) and contrasts with <mark>high-low</mark> pricing.",
  "Auctions: <mark>English (ascending), Dutch (descending), sealed-bid</mark>.",
  "Elastic demand (|E| &gt; 1): price cuts raise total revenue. Inelastic (|E| &lt; 1): price increases raise revenue."
 ],
 terms:[
  ["Market-skimming pricing","Start high to skim the market layer by layer. Works when there is high current demand, low small-volume costs, little threat of competitors, and the high price signals superior quality."],
  ["Market-penetration pricing","Start low to maximize unit sales and share. Works when the market is highly price sensitive, costs fall with volume, and low price discourages competition."],
  ["Product-quality leadership","Pricing objective of being the quality leader, often with an affordable luxury premium."],
  ["Price elasticity of demand","Percentage change in quantity demanded divided by percentage change in price."],
  ["Experience curve (learning curve)","Decline in average cost as production experience accumulates."],
  ["Target costing","Determining the cost that must be achieved to sell at the price the market will accept, then working backward."],
  ["Perceived-value pricing","Pricing based on buyers' perceptions of value built from image, channel performance, warranty, service, reputation and so on."],
  ["Value pricing","Winning loyal customers by charging a fairly low price for a high-quality offering."],
  ["Everyday low pricing (EDLP)","A constant low price with few or no temporary discounts."],
  ["High-low pricing","Higher everyday prices with frequent promotions that temporarily drop prices below EDLP level."],
  ["Going-rate pricing","Setting price largely on competitors' prices."],
  ["Reference prices","Prices consumers compare against when viewing a price (fair price, typical price, last price paid, competitor price)."],
  ["Loss-leader pricing","Pricing well-known brands very low to stimulate store traffic."],
  ["Functional (trade) discount","Discount to trade-channel members for performing functions such as selling, storing and record-keeping."],
  ["Countertrade","Payment in goods rather than cash: barter, compensation deal, buyback arrangement, offset."],
  ["Price discrimination","Selling at two or more prices that do not reflect a proportional difference in cost (customer-segment, product-form, image, channel, location and time pricing)."],
  ["Predatory pricing","Selling below cost to destroy competition; generally illegal."]
 ],
 notes:[
  {h:"1. Setting the price", html:"", v:[
   {t:"flow", title:"Six-step price-setting procedure", steps:[["Select the pricing objective"],["Determine demand","Price sensitivity, elasticity"],["Estimate costs","Fixed, variable, experience curve, target costing"],["Analyze competitors","Costs, prices and offers"],["Select a pricing method"],["Select the final price","Impact of other marketing activities, company policies, gain-and-risk sharing, impact on others"]]}]},
  {h:"2. Worked example (classic textbook numbers)", html:"<p>Toaster maker: variable cost P10, fixed cost P300,000, expected unit sales 50,000, invested capital P1,000,000.</p><ul class=\"tight\"><li>Unit cost = 10 + 300,000/50,000 = <b>P16</b>.</li><li>Markup price for 20% return on sales = 16/(1 &minus; 0.2) = <b>P20</b>.</li><li>Target-return price for 20% ROI = 16 + (0.2 &times; 1,000,000)/50,000 = <b>P20</b>.</li><li>Break-even volume at P20 = 300,000/(20 &minus; 10) = <b>30,000 units</b>.</li></ul><p>Markup pricing ignores current demand, perceived value and competition, which is why it rarely gives the best price, but it remains popular because sellers are more certain about costs than demand.</p>"},
  {h:"3. Pricing methods", html:"", tbl:{title:"Six methods", cols:["Method","Basis"],rows:[["Markup","Cost plus a standard markup"],["Target-return","Price that yields a target rate of return on investment"],["Perceived-value (economic value to customer)","Buyers' perceived value"],["Value","Low price for high quality (EDLP)"],["Going-rate","Competitors' prices"],["Auction","English (ascending), Dutch (descending), sealed-bid"]]}},
  {h:"4. Adapting the price", html:"<p><b>Geographical pricing</b> (including countertrade), <b>price discounts and allowances</b> (cash, quantity, functional, seasonal, allowance), <b>promotional pricing</b> (loss-leader, special event, rebates, low-interest financing, longer payment terms, warranties, psychological discounting), and <b>differentiated pricing</b> (customer-segment, product-form, image, channel, location, time). Price cuts risk the low-quality trap, the fragile-market-share trap and the shallow-pockets trap. Price increases are often triggered by cost inflation or overdemand.</p>"}
 ],
 ph:[
  ["EDLP versus high-low","A warehouse-style supermarket promising consistently low prices uses EDLP. A mall department store with big payday and holiday sales uses high-low pricing."],
  ["Time pricing","Lower movie ticket prices on weekday mornings and surge pricing for ride-hailing at rush hour are differentiated (time) pricing."]
 ],
 confused:[
  ["Markup on cost versus markup on price","Kotler's markup formula uses return on <b>sales</b> (price). A 20% markup on price equals a 25% markup on cost."],
  ["Value pricing versus perceived-value pricing","Perceived-value: charge what buyers think it is worth (can be high). Value pricing: charge a fairly low price for high quality."],
  ["Skimming versus penetration","Skimming starts high and lowers over time; penetration starts low to build volume and share."],
  ["English versus Dutch auction","English: one seller, many buyers, price goes up. Dutch: price goes down (one seller and many buyers, or one buyer and many sellers bidding lower)."]
 ],
 mnemonics:[
  ["Pricing objectives","Some Managers Make Silly Pricing","Survival, Max current profit, Max market share, Max skimming, Product-quality leadership."],
  ["3 Cs","Cost is the floor, Customer is the ceiling, Competitor is the compass","The pricing range sits between costs and perceived value."]
 ],
 takeaways:["Six steps, five objectives, six methods.","Know the three formulas cold: markup, target return, break-even.","Elasticity decides whether a price cut helps revenue.","Adapt price by geography, discounts, promotions and segments."]
});

CH.push({
 course:"mm", n:8, short:"Channels and partnerships", title:"Designing and Managing Integrated Marketing Channels and Partnerships", priority:"High-yield",
 overview:"What channels do, channel levels and flows, channel design (intensity of distribution), managing channel members and power, vertical, horizontal and multichannel systems, channel conflict, and partner relationships.",
 why:"Why it ranks high: 'partnership management' in the Subject 2 title points here. Distribution intensity, VMS types, channel conflict and power bases are common questions.",
 objectives:["Explain channel functions and flows.","Identify channel levels.","Choose exclusive, selective or intensive distribution.","Describe corporate, contractual and administered VMSs and horizontal systems.","Diagnose channel conflict and use power bases."],
 know:[
  "Marketing channels = sets of <mark>interdependent organizations</mark> in the process of making a product or service available for use or consumption.",
  "Channel levels: <mark>zero-level (direct marketing)</mark>, one-level (retailer), two-level (wholesaler + retailer), three-level (adds a jobber or other intermediary).",
  "Distribution intensity: <mark>exclusive</mark> (very few outlets), <mark>selective</mark> (more than a few but not all), <mark>intensive</mark> (as many outlets as possible).",
  "VMS types: <mark>corporate</mark> (common ownership), <mark>administered</mark> (size and power of one member), <mark>contractual</mark> (wholesaler-sponsored voluntary chains, retailer cooperatives, franchises).",
  "Horizontal marketing system: <mark>two or more unrelated firms</mark> pool resources to exploit a market opportunity.",
  "Conflict types: <mark>vertical</mark> (different levels), <mark>horizontal</mark> (same level), <mark>multichannel</mark>.",
  "Causes of conflict: <mark>goal incompatibility, unclear roles and rights, differences in perception, dependence</mark>.",
  "Power bases: <mark>coercive, reward, legitimate, expert, referent</mark>.",
  "Push strategy uses the sales force and trade promotion; pull strategy uses advertising and consumer promotion."
 ],
 terms:[
  ["Marketing channel","Set of interdependent organizations participating in making a product or service available for use or consumption."],
  ["Push strategy","Manufacturer uses its sales force, trade promotion money and other means to induce intermediaries to carry, promote and sell the product."],
  ["Pull strategy","Manufacturer uses advertising, promotion and other communication to persuade consumers to demand the product from intermediaries."],
  ["Multichannel / omnichannel marketing","Using two or more channels to reach segments; omnichannel integrates them so customers move seamlessly between channels."],
  ["Forward / backward flows","Physical, title and promotion flow forward; ordering and payment flow backward; information, negotiation, finance and risk flow both ways."],
  ["Exclusive distribution","Severely limiting the number of intermediaries; often with exclusive dealing arrangements. Used for luxury cars and premium apparel."],
  ["Selective distribution","Using more than a few but fewer than all intermediaries willing to carry the product."],
  ["Intensive distribution","Placing the product in as many outlets as possible. Used for snacks, soft drinks, newspapers, gum."],
  ["Vertical marketing system (VMS)","Producer, wholesaler(s) and retailer(s) acting as a unified system, with one member (the channel captain) owning, franchising or having enough power to secure cooperation."],
  ["Corporate VMS","Combines successive stages of production and distribution under single ownership."],
  ["Administered VMS","Coordinates successive stages through the size and power of one member."],
  ["Contractual VMS","Independent firms at different levels integrate through contracts: wholesaler-sponsored voluntary chains, retailer cooperatives, franchise organizations."],
  ["Channel conflict","When one channel member's actions prevent another from achieving its goal."],
  ["Channel coordination","Bringing channel members together to advance channel goals: superordinate goals, exchanging employees, joint memberships, co-optation, diplomacy, mediation, arbitration."],
  ["Partner relationship management (PRM)","Managing long-term relationships with channel partners and other marketing partners."],
  ["Expert power","Influence because the manufacturer has special knowledge the intermediary values."],
  ["Referent power","Influence because the manufacturer is so highly respected that intermediaries are proud to be associated with it."]
 ],
 notes:[
  {h:"1. Channel functions and levels", html:"<p>Channels gather information, develop and spread persuasive communications, reach agreements on price and terms, place orders, acquire funds, assume risks, provide storage and movement, provide payment, and oversee transfer of ownership. Every channel member performs some of these functions; they can be shifted but not eliminated.</p>", v:[
   {t:"flow", title:"Consumer channel levels", numbered:false, steps:[["Zero-level","Manufacturer &rarr; consumer (direct marketing)"],["One-level","Manufacturer &rarr; retailer &rarr; consumer"],["Two-level","Manufacturer &rarr; wholesaler &rarr; retailer &rarr; consumer"],["Three-level","Manufacturer &rarr; wholesaler &rarr; jobber &rarr; retailer &rarr; consumer"]]}]},
  {h:"2. Channel design decisions", html:"<p>Analyze customer needs and wants (lot size, waiting and delivery time, spatial convenience, product variety, service backup), establish objectives and constraints, identify major channel alternatives (types and number of intermediaries, terms and responsibilities), and evaluate alternatives on <b>economic, control and adaptive</b> criteria.</p>"},
  {h:"3. Channel integration and systems", html:"", v:[
   {t:"tree", title:"Types of channel systems", root:{t:"Channel systems", k:[{t:"Conventional channel", s:"independent members, each maximizing own profit"},{t:"Vertical marketing system", k:[{t:"Corporate", s:"single ownership"},{t:"Administered", s:"power of one member"},{t:"Contractual", k:[{t:"Wholesaler-sponsored voluntary chain"},{t:"Retailer cooperative"},{t:"Franchise organization"}]}]},{t:"Horizontal marketing system", s:"unrelated firms pool resources"},{t:"Multichannel / omnichannel system"}]}}]},
  {h:"4. Conflict and power", html:"", tbl:{title:"Five power bases", cols:["Power","How it works"],rows:[["Coercive","Threat to withdraw a resource or end the relationship"],["Reward","Extra benefit for performing specific acts"],["Legitimate","Behavior warranted under the contract"],["Expert","Special knowledge the intermediary values"],["Referent","Intermediary is proud to be associated with the manufacturer"]]}}
 ],
 ph:[
  ["Distribution intensity","Soft drinks and 3-in-1 coffee sachets are in every sari-sari store (intensive). Premium appliances sell through chosen dealers (selective). A luxury watch brand sells only in a few boutiques (exclusive)."],
  ["Contractual VMS","Local fast-food franchises are contractual VMSs: franchisees are independent owners bound by a franchise contract."]
 ],
 confused:[
  ["Vertical versus horizontal conflict","Vertical: between levels (manufacturer vs its retailers). Horizontal: within one level (two franchisees in the same city)."],
  ["Vertical versus horizontal marketing system","A VMS unifies different levels of one channel. A horizontal system joins unrelated firms at the same level to pursue an opportunity."],
  ["Administered versus contractual VMS","Administered relies on the power of a dominant member, with no ownership or formal contract. Contractual relies on legal agreements."],
  ["Push versus pull","Push goes through the trade; pull goes to the consumer, who then asks the trade for the brand."]
 ],
 mnemonics:[
  ["Power bases","CRLER: Can Roosters Lay Eggs Regularly?","Coercive, Reward, Legitimate, Expert, Referent."],
  ["Distribution intensity","Exclusive few, Selective some, Intensive all","Match intensity to how hard customers will look for the product."]
 ],
 takeaways:["Channel functions can be shifted, not eliminated.","Exclusive, selective, intensive distribution.","VMS: corporate, administered, contractual.","Conflict is vertical, horizontal or multichannel; power is coercive, reward, legitimate, expert or referent."]
});

CH.push({
 course:"mm", n:9, short:"Customer value, satisfaction and loyalty", title:"Creating Long-Term Loyalty Relationships", priority:"High-yield",
 overview:"Customer-perceived value, satisfaction and quality, customer lifetime value and customer equity, customer relationship management, and attracting and retaining customers.",
 why:"Why it ranks high: the 'customer experiences' half of Subject 4 rests on these definitions and the CLV and retention ideas.",
 objectives:["Compute customer-perceived value.","Define satisfaction and the link to quality.","Explain customer lifetime value and customer equity.","Describe CRM and ways to build loyalty.","Measure satisfaction and reduce defection."],
 know:[
  "Customer-perceived value = <mark>total customer benefit &minus; total customer cost</mark>.",
  "Total benefit: <mark>product, service, personnel, image</mark>. Total cost: <mark>monetary, time, energy, psychological</mark>.",
  "Satisfaction = judgment of <mark>perceived performance relative to expectations</mark>: below = dissatisfied, equal = satisfied, above = highly satisfied or delighted.",
  "Quality = the totality of features and characteristics that bear on the ability to satisfy stated or implied needs.",
  "Customer lifetime value (CLV) = the <mark>net present value of the stream of future profits</mark> expected over the customer's lifetime purchases.",
  "Acquiring a new customer can cost <mark>five times</mark> as much as keeping a current one.",
  "Reducing defections by 5% can increase profits by <mark>25% to 85%</mark> (Reichheld).",
  "Loyalty-building activities: <mark>interact closely with customers, develop loyalty programs, personalize marketing, create institutional ties</mark>.",
  "Net Promoter Score = <mark>% promoters &minus; % detractors</mark>."
 ],
 terms:[
  ["Customer-perceived value (CPV)","The difference between the prospective customer's evaluation of all the benefits and costs of an offering and the perceived alternatives."],
  ["Value proposition","The whole cluster of benefits the company promises to deliver; more than the core positioning."],
  ["Value delivery system","All the experiences the customer will have on the way to obtaining and using the offering."],
  ["Loyalty","A deeply held commitment to rebuy or repatronize a preferred product or service in the future despite situational influences and marketing efforts that could cause switching (Oliver)."],
  ["Total quality management (TQM)","Organization-wide approach to continuously improving the quality of all processes, products and services."],
  ["Conformance quality","When all units produced are identical and meet the promised specifications."],
  ["Customer profitability analysis","Assessing the profitability of individual customers; a profitable customer yields revenue over time that exceeds the costs of attracting, selling and serving them."],
  ["Customer equity","The total of the discounted lifetime values of all the firm's customers."],
  ["Customer relationship management (CRM)","Managing detailed information about individual customers and all customer touch points to maximize loyalty."],
  ["Customer touch point","Any occasion when a customer encounters the brand or product."],
  ["Personalization / one-to-one marketing","Tailoring offerings and communication to individual customers based on their data."],
  ["Permission marketing","Marketing to consumers only after gaining their express permission (Godin)."],
  ["Customer churn (defection)","Customers who stop buying. Firms define and measure the retention rate, identify causes, estimate lost profit, and compare it to the cost of reducing defection."],
  ["Net Promoter Score (NPS)","Percentage of promoters (scoring 9 to 10) minus percentage of detractors (0 to 6) on likelihood to recommend."],
  ["Database marketing","Building, maintaining and using customer databases to contact, transact and build relationships."],
  ["Institutional ties","Structural ties that make switching costly, such as integrated software or long-term contracts."]
 ],
 notes:[
  {h:"1. Customer-perceived value", html:"", v:[
   {t:"mind", title:"Determinants of customer-perceived value", center:"CPV = total benefit &minus; total cost", branches:[
    ["Total customer benefit",["Product benefit","Services benefit","Personnel benefit","Image benefit"]],
    ["Total customer cost",["Monetary cost","Time cost","Energy cost","Psychological cost"]]]}]},
  {h:"2. Satisfaction, quality and measurement", html:"<p>High satisfaction drives loyalty, but firms must avoid overpromising. Methods to monitor satisfaction include periodic surveys, tracking the customer loss rate, mystery shoppers, and the Net Promoter Score. Quality, satisfaction and profitability are closely linked: higher quality supports higher prices and lower costs.</p>"},
  {h:"3. From acquisition to loyalty", html:"", v:[
   {t:"flow", title:"Customer development process", numbered:false, steps:[["Suspects"],["Prospects"],["First-time customers"],["Repeat customers"],["Clients","Treated very specially"],["Members","Through a membership program"],["Advocates","Recommend the company"],["Partners","Work actively with the company"]], cap:"Some customers become inactive or drop out, and must be reactivated through win-back strategies."}]},
  {h:"4. Building loyalty", html:"<p>Kotler and Keller name four activities: <b>interact closely with customers</b> (listen; be their advocate), <b>develop loyalty programs</b> (frequency programs and club membership programs), <b>personalize marketing</b>, and <b>create institutional ties</b>. Win-back strategies re-engage lapsed customers, which is often easier than finding new ones.</p>"}
 ],
 ph:[
  ["Total customer cost","A cheaper government-office queue still has high time, energy and psychological costs, which is why many pay a fixer or use online appointments even at higher monetary cost."],
  ["Loyalty programs","Supermarket and coffee-chain points cards are frequency programs; airline elite tiers are club membership programs."]
 ],
 confused:[
  ["Satisfaction versus loyalty","Satisfaction is a judgment after an experience. Loyalty is a deeply held commitment to rebuy despite reasons to switch."],
  ["Customer lifetime value versus customer equity","CLV is for one customer. Customer equity is the sum of the lifetime values of all customers."],
  ["Customer value versus price","Value is benefits minus costs as the customer sees them. Price is only the monetary part of total cost."]
 ],
 mnemonics:[
  ["Total customer benefit","PSPI: Product, Service, Personnel, Image","What the customer gets."],
  ["Total customer cost","Money, Time, Energy, Mind","Monetary, time, energy, psychological."],
  ["Loyalty building","I Love People Intensely","Interact, Loyalty programs, Personalize, Institutional ties."]
 ],
 takeaways:["Value = benefits minus costs, as the customer perceives them.","Satisfaction compares performance with expectations.","Keeping customers is far cheaper than finding new ones.","CLV is per customer; customer equity is the total."]
});

CH.push({
 course:"mm", n:10, short:"Retailing, wholesaling and logistics", title:"Managing Retailing, Wholesaling and Logistics", priority:"High-yield",
 overview:"Types of store and nonstore retailers, levels of service, corporate retailing, retail marketing decisions, private labels, wholesaler functions, and market logistics.",
 why:"Why it ranks high: this is the 'retail operations' half of Subject 4. Retailer types and retail marketing decisions are classic identification questions.",
 objectives:["Classify store retailers and levels of service.","Identify nonstore and corporate retailing forms.","List the retail marketing decisions.","Explain private labels.","Describe wholesaler functions and logistics decisions."],
 know:[
  "Retailing = all activities in selling goods or services <mark>directly to final consumers</mark> for personal, nonbusiness use.",
  "Store types: <mark>specialty, department, supermarket, convenience, drugstore, discount, extreme value/hard discount, off-price, superstore, catalog showroom</mark>.",
  "Levels of service: <mark>self-service, self-selection, limited service, full service</mark>.",
  "Nonstore retailing: <mark>direct selling, direct marketing, automatic vending, buying service</mark>.",
  "Corporate retailing: <mark>corporate chain store, voluntary chain, retailer cooperative, consumer cooperative, franchise organization, merchandising conglomerate</mark>.",
  "Retail marketing decisions: <mark>target market, channels, product assortment, procurement, prices, services, store atmosphere, store activities and experiences, communications, location</mark>.",
  "Private label (store brand) = brand developed by retailers and wholesalers. Generics are unbranded, plainly packaged, cheaper versions.",
  "Wholesaling = all activities in selling to those who buy for <mark>resale or business use</mark>.",
  "Market logistics decisions: <mark>order processing, warehousing, inventory, transportation</mark>."
 ],
 terms:[
  ["Retailer","Any business enterprise whose sales volume comes primarily from retailing."],
  ["Specialty store","Narrow product line (apparel, sporting goods, books)."],
  ["Department store","Several product lines, typically clothing, home furnishings and household goods, each run as a separate department."],
  ["Supermarket","Relatively large, low-cost, low-margin, high-volume, self-service store meeting needs for food and household products."],
  ["Convenience store","Small store in a residential area, often open long hours, carrying a limited line of high-turnover convenience products at slightly higher prices."],
  ["Discount store","Standard or specialty merchandise; low-price, low-margin, high-volume."],
  ["Off-price retailer","Merchandise bought at less than regular wholesale prices and sold below retail: factory outlets, independent off-price retailers, warehouse clubs."],
  ["Superstore","Huge selling space with routinely purchased food and household items plus services. Includes category killers, combination stores and hypermarkets."],
  ["Category killer","A superstore carrying a deep assortment in one category."],
  ["Hypermarket","Combines supermarket, discount and warehouse retailing under one very large roof."],
  ["Franchise organization","Contractual association between a franchisor and franchisees: independent businesspeople who buy the right to own and operate units in the system."],
  ["Retailer cooperative","Independent retailers set up a central buying organization and conduct joint promotion."],
  ["Voluntary chain","Wholesaler-sponsored group of independent retailers engaged in bulk buying and common merchandising."],
  ["Store atmosphere","The physical layout and sensory design (lighting, music, scent, displays) that shape how shoppers feel and move."],
  ["Shopper marketing","Using in-store promotions and displays to build brand equity and win at the point of purchase."],
  ["Private label","A brand that retailers and wholesalers develop and own (store brand)."],
  ["Bulk breaking","Wholesaler function of buying in carload lots and breaking them into smaller units."],
  ["Market logistics","Planning the infrastructure to meet demand, then implementing and controlling the physical flows of materials and final goods from origin to use, to meet requirements at a profit."],
  ["Wheel of retailing","Hypothesis that new retail types begin as low-status, low-margin, low-price operations, then trade up their facilities and services, which opens room for new low-cost entrants."]
 ],
 notes:[
  {h:"1. Store retailers and service levels", html:"", tbl:{title:"Four levels of service", cols:["Level","Description","Example"],rows:[["Self-service","Customers locate, compare and select themselves","Supermarkets, discount stores"],["Self-selection","Customers can ask for help","Many apparel stores"],["Limited service","More sales assistance; credit and returns","Department stores"],["Full service","Salespeople assist in every phase","Luxury and high-end specialty stores"]]}},
  {h:"2. Retail marketing decisions", html:"", v:[
   {t:"mind", title:"Ten retail marketing decisions", center:"Retail decisions", branches:[
    ["Who and where",["Target market","Channels","Location"]],
    ["What",["Product assortment","Procurement","Prices"]],
    ["How it feels",["Services","Store atmosphere","Store activities and experiences"]],
    ["How it talks",["Communications"]]]}]},
  {h:"3. Wholesaler functions", html:"<p>Wholesalers add value through <b>selling and promoting</b>, <b>buying and assortment building</b>, <b>bulk breaking</b>, <b>warehousing</b>, <b>transportation</b>, <b>financing</b>, <b>risk bearing</b>, <b>market information</b>, and <b>management services and counseling</b>. Retailers rely on them because small manufacturers lack resources for direct marketing and wholesalers reach more customers more efficiently.</p>"},
  {h:"4. Market logistics", html:"<p>Logistics decisions cover <b>order processing</b> (order-to-payment cycle), <b>warehousing</b> (storage vs distribution warehouses), <b>inventory</b> (when to reorder, how much; the order point balances stockout risk against carrying costs) and <b>transportation</b> (rail, air, truck, waterway, pipeline; containerization).</p>"}
 ],
 ph:[
  ["Sari-sari stores","The sari-sari store is the Philippines' most widespread small convenience retailer: limited line, high-turnover sachets, close to homes."],
  ["Store types","SM Hypermarket-type formats combine grocery and general merchandise (hypermarket); local hardware chains with deep tool assortments act like category killers."]
 ],
 confused:[
  ["Voluntary chain versus retailer cooperative","Voluntary chain: sponsored by a wholesaler. Retailer cooperative: independent retailers set up their own central buying organization."],
  ["Discount store versus off-price retailer","Discount stores buy at regular wholesale prices and sell with low margins. Off-price retailers buy below regular wholesale prices."],
  ["Private label versus generic","Private labels carry the retailer's brand. Generics are unbranded, plainly packaged versions."],
  ["Retailing versus wholesaling","Retailing sells to final consumers for personal use. Wholesaling sells for resale or business use."]
 ],
 mnemonics:[
  ["Service levels","SS-LF","Self-service, Self-selection, Limited, Full."],
  ["Logistics decisions","Our Wonderful Inventory Travels","Order processing, Warehousing, Inventory, Transportation."]
 ],
 takeaways:["Know store types, service levels and corporate retailing forms.","Ten retail marketing decisions from target market to location.","Wholesalers add value through nine functions.","Logistics: order processing, warehousing, inventory, transportation."]
});

add("mm", {
mcq:[
 {ch:[6], q:"In the customer-value hierarchy, the level at which most competition takes place in developed markets is the:", ok:"Augmented product", no:["Core benefit","Basic product","Potential product"], why:"Augmented products exceed expectations, and that is where firms differentiate most today."},
 {ch:[6], q:"Life insurance and cemetery plots are examples of:", ok:"Unsought goods", no:["Specialty goods","Shopping goods","Convenience goods"], why:"Unsought goods are things consumers do not know about or do not normally think of buying, so they need heavy selling and advertising."},
 {ch:[6], q:"The number of different product lines a company carries is the product mix's:", ok:"Width", no:["Length","Depth","Consistency"], why:"Width = number of lines. Length = total items. Depth = variants of each product. Consistency = how closely the lines are related."},
 {ch:[6], q:"Which stage of new-product development estimates sales, costs and profits to see if they meet objectives?", ok:"Business analysis", no:["Concept testing","Idea screening","Commercialization"], why:"Business analysis comes after marketing strategy development and before product development."},
 {ch:[6], q:"Dismissing a good idea during screening is called a:", ok:"Drop-error", no:["Go-error","Type I launch","Line pruning"], why:"A drop-error rejects a good idea; a go-error lets a poor idea move into development and commercialization."},
 {ch:[6], q:"What percentage of adopters are early adopters?", ok:"13.5%", no:["2.5%","34%","16%"], why:"Innovators 2.5%, early adopters 13.5%, early majority 34%, late majority 34%, laggards 16%."},
 {ch:[6], q:"Which characteristic SLOWS the rate of adoption of an innovation?", ok:"Complexity", no:["Relative advantage","Compatibility","Communicability"], why:"The more difficult an innovation is to understand or use, the slower it spreads. The other characteristics speed adoption."},
 {ch:[6], q:"In which PLC stage are sales at their peak and profits leveling off as competition intensifies?", ok:"Maturity", no:["Introduction","Growth","Decline"], why:"Maturity is usually the longest stage. Marketers try market, product and marketing-program modification."},
 {ch:[7], q:"Which is the first step in setting a price?", ok:"Selecting the pricing objective", no:["Estimating costs","Determining demand","Selecting a pricing method"], why:"Objective, demand, costs, competitors, method, final price."},
 {ch:[7], q:"Setting a high price to skim maximum revenue layer by layer from the market is:", ok:"Market-skimming pricing", no:["Market-penetration pricing","Going-rate pricing","Value pricing"], why:"Skimming works when demand is high, competitors are few and high price signals quality."},
 {ch:[7], q:"Which pricing method bases price largely on competitors' prices?", ok:"Going-rate pricing", no:["Perceived-value pricing","Target-return pricing","Markup pricing"], why:"Common in oligopolies selling commodities, where firms charge the same or similar prices."},
 {ch:[7], q:"An auction where the price starts high and drops until a bidder accepts is a(n):", ok:"Dutch auction", no:["English auction","Sealed-bid auction","Reverse markup"], why:"English auctions ascend; Dutch auctions descend; sealed bids are submitted once without seeing others."},
 {ch:[7], q:"A supermarket that keeps constant low prices with few temporary discounts uses:", ok:"Everyday low pricing", no:["High-low pricing","Loss-leader pricing","Market skimming"], why:"EDLP is a form of value pricing. High-low uses higher everyday prices with frequent deep promotions."},
 {ch:[7], q:"Demand is elastic when:", ok:"A small price change causes a larger percentage change in quantity demanded", no:["Quantity barely changes when price changes","Price and quantity move in the same direction","Total revenue rises after a price increase"], why:"|E| &gt; 1 means elastic. With elastic demand, a price increase lowers total revenue."},
 {ch:[7], q:"A discount to trade members for performing functions such as selling and storing is a:", ok:"Functional discount", no:["Cash discount","Quantity discount","Seasonal discount"], why:"Also called a trade discount. Cash discounts reward prompt payment; quantity discounts reward large purchases."},
 {ch:[8], q:"A manufacturer that sells directly to final customers uses a:", ok:"Zero-level channel", no:["One-level channel","Two-level channel","Three-level channel"], why:"Zero-level channels (direct marketing) have no intermediaries."},
 {ch:[8], q:"Placing a product in as many outlets as possible is:", ok:"Intensive distribution", no:["Selective distribution","Exclusive distribution","Administered distribution"], why:"Used for convenience goods like snacks and soft drinks."},
 {ch:[8], q:"A franchise system is an example of a:", ok:"Contractual VMS", no:["Corporate VMS","Administered VMS","Horizontal marketing system"], why:"Contractual VMSs include wholesaler-sponsored voluntary chains, retailer cooperatives and franchises."},
 {ch:[8], q:"A dominant manufacturer coordinates channel members through its size and power, without ownership or contracts. This is a(n):", ok:"Administered VMS", no:["Corporate VMS","Contractual VMS","Conventional channel"], why:"Administered VMSs rely on the power of one member to secure cooperation."},
 {ch:[8], q:"Conflict between two franchisees of the same chain in one city is:", ok:"Horizontal channel conflict", no:["Vertical channel conflict","Multichannel conflict","Functional conflict"], why:"Horizontal conflict happens at the same level of the channel."},
 {ch:[8], q:"A retailer cooperates because it values the manufacturer's special knowledge. This is:", ok:"Expert power", no:["Referent power","Legitimate power","Reward power"], why:"Expert power rests on knowledge. Referent power rests on respect and pride of association."},
 {ch:[8], q:"A manufacturer that relies mainly on advertising and consumer promotion so consumers ask retailers for the brand uses a:", ok:"Pull strategy", no:["Push strategy","Exclusive distribution strategy","Horizontal strategy"], why:"Pull targets end consumers. Push targets intermediaries with sales force and trade promotion."},
 {ch:[9], q:"Customer-perceived value is the difference between:", ok:"Total customer benefit and total customer cost", no:["Price and cost of goods sold","Expectations and satisfaction","Revenue and acquisition cost"], why:"CPV compares all benefits (product, service, personnel, image) with all costs (monetary, time, energy, psychological)."},
 {ch:[9], q:"Which is NOT part of total customer cost?", ok:"Image cost", no:["Time cost","Energy cost","Psychological cost"], why:"Image is a benefit. Costs are monetary, time, energy and psychological."},
 {ch:[9], q:"Satisfaction is best defined as:", ok:"A judgment of a product's perceived performance in relation to expectations", no:["A deeply held commitment to rebuy","The number of repeat purchases","The total value of all customers"], why:"The commitment to rebuy describes loyalty. Total value of all customers describes customer equity."},
 {ch:[9], q:"The sum of the discounted lifetime values of all the firm's customers is:", ok:"Customer equity", no:["Customer lifetime value","Brand equity","Net Promoter Score"], why:"CLV is per customer; customer equity is the total across customers."},
 {ch:[9], q:"In the Net Promoter Score, detractors are customers who rate their likelihood to recommend at:", ok:"0 to 6", no:["0 to 4","7 to 8","9 to 10"], why:"Promoters 9 to 10, passives 7 to 8, detractors 0 to 6."},
 {ch:[10], q:"A small store in a residential area, open long hours, selling a limited line of high-turnover items at slightly higher prices is a:", ok:"Convenience store", no:["Specialty store","Supermarket","Off-price retailer"], why:"Convenience stores trade price for location and hours."},
 {ch:[10], q:"Retailers that buy at less than regular wholesale prices and sell below retail, such as factory outlets, are:", ok:"Off-price retailers", no:["Discount stores","Department stores","Category killers"], why:"Discount stores buy at regular wholesale prices but take lower margins; off-price retailers buy below regular wholesale prices."},
 {ch:[10], q:"A group of independent retailers sponsored by a wholesaler for bulk buying and common merchandising is a:", ok:"Voluntary chain", no:["Retailer cooperative","Consumer cooperative","Corporate chain"], why:"If the retailers set up their own central buying organization, it is a retailer cooperative."},
 {ch:[10], q:"Which is a wholesaler function?", ok:"Bulk breaking", no:["Selling directly to final consumers for personal use","Setting consumer advertising strategy for manufacturers","Owning the manufacturing plant"], why:"Wholesalers buy in large lots and break them into smaller units, among other functions."},
 {ch:[10], q:"Which level of service lets customers locate, compare and select products themselves to save money?", ok:"Self-service", no:["Self-selection","Limited service","Full service"], why:"Self-service is the cornerstone of discount operations. Self-selection lets customers ask for help."}
],
tf:[
 {ch:[6], q:"Kotler's five product levels are core benefit, basic product, expected product, augmented product and potential product.", a:true, why:"Keller's version uses 'generic product' in place of 'basic product'."},
 {ch:[6], q:"Laggards make up 2.5% of adopters.", a:false, why:"Innovators are 2.5%; laggards are 16%."},
 {ch:[7], q:"In price setting, costs set the ceiling and customer perceived value sets the floor.", a:false, why:"It is the reverse: costs set the floor and perceived value sets the ceiling."},
 {ch:[7], q:"Markup pricing is popular partly because sellers are more certain about costs than about demand.", a:true, why:"It also simplifies pricing and reduces price competition when all firms use it."},
 {ch:[8], q:"Channel functions can be eliminated by cutting out intermediaries.", a:false, why:"Functions can be shifted to other members (or the customer) but not eliminated."},
 {ch:[8], q:"A horizontal marketing system involves two or more unrelated companies pooling resources to exploit a market opportunity.", a:true, why:"Example: a bank placing ATMs inside supermarkets."},
 {ch:[9], q:"Customer lifetime value is the net present value of the stream of future profits expected from a customer.", a:true, why:"CLV discounts future profits and subtracts acquisition and retention costs."},
 {ch:[10], q:"Private labels are unbranded, plainly packaged versions of common products.", a:false, why:"That describes generics. Private labels are the retailer's own brands."},
 {ch:[10], q:"The wheel-of-retailing hypothesis says new retail forms start as low-margin, low-price operations and trade up over time.", a:true, why:"As they trade up, they open space for new low-cost competitors."}
],
id:[
 {ch:[6], q:"The level of the product that includes all possible augmentations and transformations it may undergo in the future.", a:["Potential product","Potential"], why:"Firms search here for new ways to satisfy customers and differentiate."},
 {ch:[6], q:"Adding more items within the present range of a product line.", a:["Line filling","Product line filling"], why:"Done to reach for extra profits, satisfy dealers, use excess capacity or plug holes against competitors."},
 {ch:[7], q:"Selling at two or more prices that do not reflect a proportional difference in costs.", a:["Price discrimination","Differentiated pricing"], why:"Forms: customer-segment, product-form, image, channel, location and time pricing."},
 {ch:[7], q:"Payment in goods instead of cash, such as barter or buyback arrangements.", a:["Countertrade"], why:"Forms: barter, compensation deal, buyback arrangement, offset."},
 {ch:[8], q:"The type of distribution that severely limits the number of intermediaries, often for luxury goods.", a:["Exclusive distribution","Exclusive"], why:"It supports image and dealer effort and allows more control over service."},
 {ch:[9], q:"Customers who stop buying from the company.", a:["Churn","Customer churn","Defection","Customer defection"], why:"Firms should measure the retention rate, find causes of churn and estimate the lost profit."},
 {ch:[10], q:"A superstore carrying a deep assortment of one product category.", a:["Category killer"], why:"Category killers are a type of superstore; others are combination stores and hypermarkets."}
],
app:[
 {ch:[7], q:"A product has variable cost P25, fixed costs P500,000, and expected sales of 25,000 units. What is the unit cost?", ok:"P45", no:["P25","P20","P50"], why:"Unit cost = variable cost + fixed cost &divide; units = 25 + 500,000/25,000 = 25 + 20 = P45."},
 {ch:[7], q:"Using a unit cost of P45 and a desired 25% markup on sales, what is the markup price?", ok:"P60", no:["P56.25","P70","P50"], why:"Markup price = unit cost &divide; (1 &minus; return on sales) = 45 &divide; 0.75 = P60. P56.25 is what you get with a 25% markup on cost, which is a common trap."},
 {ch:[7], q:"Invested capital is P2,000,000 and the firm wants a 15% ROI. Unit cost is P45 and expected sales are 25,000 units. What is the target-return price?", ok:"P57", no:["P52","P60","P75"], why:"Target-return price = 45 + (0.15 &times; 2,000,000) &divide; 25,000 = 45 + 300,000/25,000 = 45 + 12 = P57."},
 {ch:[7], q:"Fixed costs are P500,000, price is P60 and variable cost is P25. How many units must be sold to break even?", ok:"14,286 units (about 14,286)", no:["8,334 units","20,000 units","11,112 units"], why:"Break-even = FC &divide; (P &minus; VC) = 500,000 &divide; 35 = 14,285.7, so 14,286 units."},
 {ch:[7], q:"A cafe raises its price by 10% and unit sales fall by 4%. Demand is:", ok:"Inelastic, so revenue rises", no:["Elastic, so revenue falls","Unit elastic, so revenue is unchanged","Elastic, so revenue rises"], why:"Elasticity = &minus;4% &divide; 10% = &minus;0.4. Because |E| &lt; 1, demand is inelastic and the price increase raises total revenue."},
 {ch:[7], q:"A retailer sells an item for P200 that costs P150. What is the markup on selling price?", ok:"25%", no:["33.3%","50%","20%"], why:"Markup = P50. On selling price: 50 &divide; 200 = 25%. On cost it would be 50 &divide; 150 = 33.3%."},
 {ch:[8], q:"A luxury watch brand wants strong dealer support and tight control over its image. Which distribution intensity fits best?", ok:"Exclusive distribution", no:["Intensive distribution","Selective distribution","Zero-level distribution only"], why:"Exclusive distribution gives the most control and dealer commitment for high-image products."},
 {ch:[8], q:"A manufacturer threatens to cut a distributor's allocation unless it meets display standards. Which power is used?", ok:"Coercive power", no:["Reward power","Legitimate power","Referent power"], why:"Coercive power threatens to withdraw a resource or end the relationship. It works but breeds resentment."},
 {ch:[9], q:"In a survey of 500 customers, 280 are promoters, 120 are passives and 100 are detractors. What is the NPS?", ok:"36", no:["56","80","16"], why:"Promoters 280/500 = 56%; detractors 100/500 = 20%. NPS = 56 &minus; 20 = 36."},
 {ch:[9], q:"A gym member pays P1,500 a month, the gym earns a 40% margin, and members stay 2 years on average. What is the simple (undiscounted) customer lifetime value?", ok:"P14,400", no:["P36,000","P18,000","P7,200"], why:"Monthly profit = 1,500 &times; 0.40 = P600. Over 24 months: 600 &times; 24 = P14,400. A discounted CLV would be slightly lower."},
 {ch:[10], q:"A store sells cost-P75 items using a 40% markup on retail. What is the retail price?", ok:"P125", no:["P105","P115","P187.50"], why:"Retail price = cost &divide; (1 &minus; markup on retail) = 75 &divide; 0.60 = P125. P105 comes from adding 40% to cost, which is a markup on cost."}
],
"case":[
 {ch:[7,8], title:"Bida Bites enters the frozen-snack market", "case":"<p>Bida Bites makes frozen lumpia. Variable cost is P40 per pack, fixed costs are P1,200,000 a year, and invested capital is P3,000,000. It expects to sell 60,000 packs. Supermarkets ask for trade allowances, and a large convenience-store chain wants exclusivity in Metro Cebu. The owner also wants the product in as many sari-sari stores with freezers as possible.</p>", qs:[
   {q:"What is Bida Bites' unit cost?", ok:"P60", no:["P40","P20","P50"], why:"40 + 1,200,000/60,000 = 40 + 20 = P60."},
   {q:"What is the target-return price for a 20% ROI?", ok:"P70", no:["P72","P75","P66"], why:"60 + (0.20 &times; 3,000,000) &divide; 60,000 = 60 + 10 = P70."},
   {q:"At a price of P70, what is the break-even volume?", ok:"40,000 packs", no:["17,143 packs","60,000 packs","30,000 packs"], why:"FC &divide; (P &minus; VC) = 1,200,000 &divide; (70 &minus; 40) = 40,000 packs."},
   {q:"Selling in as many sari-sari stores as possible is which distribution strategy?", ok:"Intensive distribution", no:["Exclusive distribution","Selective distribution","Corporate VMS"], why:"As many outlets as possible = intensive."},
   {q:"Giving the convenience-store chain exclusivity while pursuing intensive sari-sari distribution could most directly cause:", ok:"Multichannel conflict", no:["Horizontal conflict between sari-sari stores only","Backward integration","Line pruning"], why:"Different channels serving the same market are likely to clash: multichannel conflict."}
 ]},
 {ch:[9,10], title:"Tindahan Plus loyalty review", "case":"<p>Tindahan Plus, a chain of 40 neighborhood mini-marts, found that 30% of members stopped shopping within a year. Exit surveys mention long checkout lines and out-of-stock items. Management is debating spending more on ads for new members or improving checkout speed and stock levels.</p>", qs:[
   {q:"Long checkout lines mainly increase which part of total customer cost?", ok:"Time and energy costs", no:["Monetary cost","Image cost","Product benefit"], why:"Waiting adds time and energy costs (and some psychological cost) without changing price."},
   {q:"Based on Kotler and Keller, why should management focus first on reducing defections?", ok:"Keeping customers is much cheaper than acquiring new ones, and small cuts in defection can raise profits sharply", no:["New customers are always more profitable","Advertising has no effect on acquisition","Retention has no effect on profit"], why:"Acquiring a customer can cost five times as much as keeping one, and a 5% cut in defections can raise profits 25% to 85%."},
   {q:"Out-of-stocks point to a problem in which logistics decision?", ok:"Inventory", no:["Transportation mode","Store atmosphere","Pricing"], why:"Inventory decisions set when and how much to reorder, balancing stockouts against carrying costs."}
 ]}
],
essay:[
 {ch:[8], q:"Explain the three types of vertical marketing systems and give a Philippine example of each.", model:"<p>A <b>VMS</b> makes producer, wholesaler and retailer act as one unified system. A <b>corporate VMS</b> combines stages under single ownership (a manufacturer that owns its retail stores). A <b>contractual VMS</b> links independent firms through contracts: wholesaler-sponsored voluntary chains, retailer cooperatives and franchises (local fast-food franchises). An <b>administered VMS</b> coordinates through the size and power of one member (a dominant consumer-goods maker that sets display and promotion terms that retailers follow).</p>", rubric:["Defined a VMS","Corporate: single ownership","Contractual: three forms","Administered: power of one member","Gave a plausible example for each"]},
 {ch:[6], q:"Describe the product life cycle and the main marketing objective in each stage.", model:"<p><b>Introduction</b>: slow sales growth and low or negative profit; build awareness and trial. <b>Growth</b>: rapid sales and profit growth; maximize share by improving quality, adding features, entering new segments and channels. <b>Maturity</b>: sales peak and profits flatten or fall; defend share and maximize profit through market, product and marketing-program modification. <b>Decline</b>: sales and profits fall; cut costs, harvest, or divest.</p>", rubric:["Four stages in order","Sales and profit pattern in each","Objective for each stage","Maturity modifications: market, product, program"]}
]
});
})();
