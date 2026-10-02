import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../landing_page/Footer';
import SupportHero from '../landing_page/support/Hero';
import CreateTicket from '../landing_page/support/CreateTicket';
import ProductPage from '../landing_page/products/ProductPage';
import LeftSection from '../landing_page/products/LeftSection';
import RightSection from '../landing_page/products/RightSection';

describe('Landing page navigation', () => {
    test.each([
        ['footer', Footer],
        ['support hero', SupportHero],
        ['support topics', CreateTicket],
        ['products', ProductPage],
    ])('%s provides navigable destinations for every anchor', (name, Component) => {
        render(<Component/>);
        const anchors = screen.getAllByRole('link');

        expect(anchors.length).toBeGreaterThan(0);
        anchors.forEach(anchor => {
            expect(anchor).toHaveAttribute('href');
            expect(anchor.getAttribute('href')).toMatch(/^(\/[^/]|https:\/\/)/);
        });
    });

    test('footer uses existing local routes for clone pages', () => {
        render(<Footer/>);

        expect(screen.getByRole('link', {name: 'About'})).toHaveAttribute('href', '/about');
        expect(screen.getByRole('link', {name: 'Support portal'})).toHaveAttribute('href', '/support');
        expect(screen.getByRole('link', {name: 'Brokerage charges'})).toHaveAttribute('href', '/pricing');
    });

    test('products without a demo do not render a placeholder demo link', () => {
        render(<LeftSection
            imageUrl="media/images/coin.png"
            productName="Coin"
            productDescription="Mutual funds"
            learnMore="https://coin.zerodha.com/"
            googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
            appStore="https://apps.apple.com/in/app/coin-by-zerodha/id1392892554"
        />);

        expect(screen.queryByRole('link', {name: 'Try Demo'})).not.toBeInTheDocument();
        expect(screen.getByRole('link', {name: 'Learn More'})).toHaveAttribute('href', 'https://coin.zerodha.com/');
    });

    test('an empty product section does not render a destinationless link', () => {
        render(<RightSection/>);

        expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });
});
