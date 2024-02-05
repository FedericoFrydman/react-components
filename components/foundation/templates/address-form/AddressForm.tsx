import React, { useEffect, useState } from 'react';
import { Container, Form, FormField, Input, Grid, GridCol, GridRow, Select, SelectItem } from '../../../../';
import './address-form.scss';

export interface AddressModel {
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  stateOrProvince?: string | null;
  postalCode?: string | null;
  country?: string | null;
}

export interface AddressFormProps {
  address?: AddressModel;
  showCountry?: boolean;
  onChange?: (address: AddressModel) => void;
}

export const AddressForm: React.FC<AddressFormProps> = ({ address, onChange, showCountry = true }) => {
  const [formAddress, setFormAddress] = useState<AddressModel>({
    address1: '',
    address2: '',
    city: 'Chattanooga',
    country: 'US',
    postalCode: '37410',
    stateOrProvince: 'TN',
  });

  useEffect(() => {
    setFormAddress(address);
  }, []);

  useEffect(() => {
    if (onChange) {
      onChange(formAddress);
    }
  }, [formAddress, onChange]);

  const handleFormChange = (e: React.FormEvent<HTMLInputElement | HTMLButtonElement>) => {
    const { id, value } = e.currentTarget;
    setFormAddress({ ...formAddress, [id]: value });
  };

  const handleCountryChange = (value: string) => {
    setFormAddress({ ...formAddress, country: value });
  };

  const stateProvinceLabel = formAddress?.country === 'US' ? 'State' : 'Province';

  return (
    <Container classNames={['address-form', 'py-4']}>
      <Form>
        <Grid>
          {showCountry ? (
            <GridRow>
              <GridCol>
                <FormField id="country" label="Country">
                  <Select
                    value={formAddress?.country}
                    onValueChange={(value) => {
                      handleCountryChange(value);
                    }}
                  >
                    <SelectItem value="US">United States</SelectItem>
                    <SelectItem value="CA">Canada</SelectItem>
                  </Select>
                </FormField>
              </GridCol>
            </GridRow>
          ) : null}
          <GridRow>
            <GridCol>
              <FormField id="street1" label="Street 1">
                <Input id="street1" name="Street" value={formAddress?.address1} onChange={handleFormChange} />
              </FormField>
            </GridCol>
          </GridRow>
          <GridRow variant="plain">
            <GridCol>
              <FormField id="street2" label="Street 2" classNames={['m-0']}>
                <Input id="street2" name="Street" value={formAddress?.address2} onChange={handleFormChange} />
              </FormField>
            </GridCol>
          </GridRow>
          <GridRow>
            <GridCol>
              <FormField id="city" label="City" classNames={['m-0']}>
                <Input name="City" value={formAddress?.city} />
              </FormField>
            </GridCol>
          </GridRow>
          <GridRow variant="half">
            <GridCol>
              <FormField id="state" label={stateProvinceLabel} classNames={['m-0']}>
                <Input name="State" value={formAddress?.stateOrProvince} />
              </FormField>
            </GridCol>
            <GridCol>
              <FormField id="postalCode" label="Postal Code">
                <Input name="Postal Code" value={formAddress?.postalCode} />
              </FormField>
            </GridCol>
          </GridRow>
        </Grid>
      </Form>
    </Container>
  );
};
