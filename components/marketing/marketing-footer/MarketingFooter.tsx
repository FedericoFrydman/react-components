import { forwardRef } from 'react';
import cn from 'classnames';

import { Disclaimer } from './disclaimer/Disclaimer';
import { DownloadApp } from './download-app/DownloadApp';
import { Footer } from '../../../components/molecules/footer/Footer';
import { FooterBreak } from './footer-break/FooterBreak';
import { Market } from '../../../components/controls/types';
import { MarketPicker } from './market-picker/MarketPicker';
import { SocialBar } from './social-bar/SocialBar';

import './marketing-footer.scss';

export interface MarketingFooterProps {
  /**
   * Social bar is present
   */
  social?: boolean;
  /**
   * Callback when market is selected
   */
  onMarketClicked?: (market: string) => void;
  /**
   * Available Markets for picking (null means all)
   */
  availableMarkets?: string[];
  /**
   * Footer HTML content
   */
  footerContent?: string;
  /**
   * Disclaimer HTML content
   */
  disclaimerContent?: string;
  /**
   * Should the app have download app section
   */
  download?: 'Legal' | 'IDS' | null;
  /**
   * Dark mode
   */
  dark?: boolean;
  /**
   * Market for the modal
   * @default 'en-us'
   */
  market?: Market;
  /**
   * Title for the modal
   * @default 'Select Market'
   */
  marketPickerModalTitle?: Market;
  /**
   * Additional class names
   */
  classNames?: string[];
  /**
   * Ref to the component.
   */
  ref?: React.Ref<HTMLDivElement>;
}

const MarketingFooterComponent = (
  {
    social = false,
    footerContent,
    disclaimerContent,
    onMarketClicked,
    availableMarkets,
    market,
    marketPickerModalTitle,
    download,
    dark = false,
    classNames = [],
  }: MarketingFooterProps,
  ref: MarketingFooterProps['ref'],
) => {
  const classFooter = 'lsux-marketing-footer--' + (dark ? 'dark' : 'light');

  const justify = social && onMarketClicked ? 'space-between' : 'center';

  return (
    <div className={cn(classFooter, classNames)} ref={ref}>
      {(social || onMarketClicked) && (
        <>
          <div style={{ display: 'flex', justifyContent: justify }}>
            {onMarketClicked && availableMarkets.length ? (
              <MarketPicker
                availableMarkets={availableMarkets}
                dark={dark}
                onClick={onMarketClicked}
                market={market}
                modalTitle={marketPickerModalTitle}
              />
            ) : (
              <div />
            )}
            {social ? <SocialBar dark={dark} /> : <div />}
          </div>
          <FooterBreak dark={dark} />
        </>
      )}
      {download && (
        <>
          <DownloadApp dark={dark} app={download} />
          <FooterBreak dark={dark} />
        </>
      )}
      {disclaimerContent && (
        <>
          <Disclaimer dark={dark} disclaimerHtml={disclaimerContent} />
          <FooterBreak dark={dark} />
        </>
      )}
      {footerContent && <Footer htmlContent={footerContent} align="left" />}
    </div>
  );
};

/**
 * The MarketingFooter component is used to display footer content on marketing sites.
 */
export const MarketingFooter = forwardRef<HTMLDivElement, MarketingFooterProps>(MarketingFooterComponent);
