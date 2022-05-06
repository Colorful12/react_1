
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { price, quantity, items } = req.body
            const lineItems = items ? items.map(item => ({
                price: item.id,
                quantity: item.quantity,
                adjustable_quantity: {
                    enabled: true,
                }
            })): [{
                price,
                quantity,
                adjustable_quantity: {
                    enabled: true,
                    minimum: 1,
                    maximum: 10,
                }
            }]

            const session = await stripe.checkout.sessions.create({
                line_items: lineItems,
                mode: 'payment',
                success_url: `${req.headers.origin}/?success=true`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
            });
            if (!items) return res.redirect(301, session.url)
            res.status(200).json({
                url: session.url
            })
        } catch (err) {
            res.status(500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}