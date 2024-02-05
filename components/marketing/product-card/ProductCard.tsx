import { forwardRef, ReactNode, Ref } from 'react';
import cn from 'classnames';

import { Button } from '../../../components/molecules/button/Button';
import { Icon } from '../../../components/atoms/icon/Icon';
import { Label } from '../../../components/atoms/label/Label';
import { Link } from '../../../components/atoms/link/Link';
import { Market } from '../../../components/controls/types';
import { Text } from '../../../components/atoms/text/Text';
import { Title } from '../../../components/atoms/title/Title';

import './product-card.scss';

export type ProductCardIconType = 'legalshield' | 'idshield' | 'none';

export interface ProductCardProps {
  /**
   * The type of icon displayed on the card.
   * @default 'none'
   */
  iconType?: ProductCardIconType;
  /**
   * The title of the card.
   */
  title?: string;
  /**
   * The subtitle of the card.
   */
  subtitle?: string;
  /**
   * Children props to add extra section
   */
  children?: ReactNode;
  /**
   * The label of the details link.
   */
  detailsLabel?: string;
  /**
   * The URL of the details link.
   */
  detailsUrl?: string;
  /*
   ** The price of the product.
   */
  price?: string;
  /*
   ** Text displayed below the price.
   */
  subprice?: string;
  /**
   * The label for the CTA button.
   */
  buttonLabel?: string;
  /**
   * Event for clicking the ProductCard Button
   * @default undefined
   */
  onClick: (id?: string) => void;
  /**
   * Specifies the language using the market variable.
   * @default 'en-us'
   */
  market?: Market;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
}

const buy_now_strings: Record<Market, string> = {
  'en-ca': 'Buy Now',
  'en-us': 'Buy Now',
  'es-us': 'Comprar Ahora',
  'fr-ca': 'Acheter Maintenant',
};

const ProductCardComponent = (
  {
    iconType = 'none',
    title,
    subtitle,
    children,
    detailsLabel,
    detailsUrl,
    price,
    subprice,
    market = 'en-us',
    buttonLabel = buy_now_strings[market],
    onClick = undefined,
    classNames = [],
    ...props
  }: ProductCardProps,
  ref: ProductCardProps['ref'],
) => {
  const classProductCard = 'lsux-product-card';

  const icon_name = iconType === 'none' ? null : iconType === 'legalshield' ? 'apps_legal_shield' : 'apps_id_shield';

  return (
    <div {...props} className={cn(classProductCard, classNames)} ref={ref}>
      <div className={`${classProductCard}__info-section`}>
        <div className={`${classProductCard}__info-section__title-section`}>
          {icon_name && <Icon name={icon_name} />}
          <div className={`${classProductCard}__info-section__subtitle-section`}>
            {title && <Title text={title} textSize="large" />}
            {subtitle && <Label text={subtitle} labelSize="small" />}
          </div>
        </div>
        {children && <div>{children}</div>}
        {detailsUrl && detailsLabel && (
          <div>
            <Link text={detailsLabel} href={detailsUrl} target="_blank" />
          </div>
        )}
      </div>
      <div className={`${classProductCard}__purchase-section`}>
        {price && <Title text={price} textSize="large" />}
        {subprice && <Text text={subprice} />}
        <div>
          <Button
            label={buttonLabel}
            variant="primary"
            stretch={true}
            onClick={() => onClick !== undefined && onClick()}
          />
        </div>
      </div>
    </div>
  );
};

/**
 * ProductCard displays information about a specific PPLSI plan for purchase.
 */
export const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(ProductCardComponent);
