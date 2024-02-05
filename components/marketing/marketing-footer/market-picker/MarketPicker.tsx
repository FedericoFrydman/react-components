import { FC, useState } from 'react';

import { Button } from '../../../../components/molecules/button/Button';
import { Market } from '../../../../components/controls/types';
import { Modal, ModalProps } from '../../../../components/molecules/modal/Modal';
import { Title } from '../../../../components/atoms/title/Title';
import { Container } from '../../../../components/atoms/container/Container';

import './market-picker.scss';

export interface MarketPickerProps extends Omit<ModalProps, 'onClick' | 'css'> {
  /**
   * List of available markets for the modal.
   * @description Use lowercase market codes.
   */
  availableMarkets?: string[];
  /**
   * Determines if the component uses dark mode.
   */
  dark?: boolean;
  /**
   * Title for the modal.
   * @default 'Select Market'
   */
  modalTitle?: string;
  /**
   * Callback function when a market is selected.
   * @returns {string} market (lowercase)
   */
  onClick: (market: string) => void;
  /**
   * Market for the modal
   * @default 'en-us'
   */
  market?: Market;
}

const default_markets: Market[] = ['en-us', 'es-us', 'en-ca', 'fr-ca'];

export const market_picker_string_map: Record<Market, string> = {
  'en-ca': 'Canada - English',
  'en-us': 'United States - English',
  'es-us': 'Estados Unidos - Español',
  'fr-ca': 'Canada - Français',
};

export const MarketPicker: FC<MarketPickerProps> = ({
  dark = false,
  availableMarkets = default_markets,
  market = 'en-us',
  modalTitle = 'Select Market',
  onClick,
  ...props
}: MarketPickerProps) => {
  const [showModal, setShowModal] = useState(false);

  const marketButtonLabel = market_picker_string_map[market.toLowerCase() as Market] as string;

  const classMarketPicker = 'lsux-marketpicker--' + (dark ? 'dark' : 'light');

  function handleButtonClick() {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <Modal closeButton closeFunction={closeModal} {...props}>
          <Container flexbox flexDirection="column" alignItems="center">
            <>
              <Title text={modalTitle} textSize="large" textWeight="semibold" classNames={['pb-5']} />
              {availableMarkets.map((mkt) => {
                const mktValue = mkt.toLowerCase();
                const market: string = market_picker_string_map[mktValue as Market];
                return (
                  <>
                    <Button
                      key={mktValue}
                      variant="tertiary"
                      label={market}
                      onClick={() => onClick(mktValue)}
                      iconSize="medium"
                      stretch
                      classNames={['mb-4']}
                    />
                  </>
                );
              })}
            </>
          </Container>
        </Modal>
      ) : (
        <></>
      )}
      <div className={classMarketPicker}>
        <Button
          iconColor={dark ? 'N00' : 'N800'}
          iconLeft="nav_globe"
          iconSize="medium"
          label={marketButtonLabel}
          onClick={handleButtonClick}
          pplsiEventId="market-button"
          variant="tertiary"
        />
      </div>
    </>
  );
};
