// # Aba has modified this file
import { Button, Flex, CardStep, useCurrencyCode } from '@chia-network/core';
import { Trans } from '@lingui/macro';
import { Box, Typography } from '@mui/material';
import React from 'react';

import useOpenExternal from '../../../hooks/useOpenExternal';

type Props = {
  step?: number;
  onCancel?: () => void;
};

export default function PlotNFTSelectFaucet(props: Props) {
  const { step, onCancel } = props;
  const currencyCode = useCurrencyCode();
  const openExternal = useOpenExternal();

  const handleClick = React.useCallback(() => {
    if (currencyCode === 'TABA') {
      openExternal('https://testnet.abafaucet.com/');
    } else {
      openExternal('https://abafaucet.com/');
    }
  }, [currencyCode, openExternal]);

  return (
    <CardStep
      step={step}
      title={
        <Flex gap={1} alignItems="center">
          <Flex flexGrow={1}>Want to Join a Pool?</Flex>
          {onCancel && (
            <Button onClick={onCancel}>
              <Trans>Cancel</Trans>
            </Button>
          )}
        </Flex>
      }
    >
      <Typography variant="subtitle1">
        <Trans>You need {currencyCode} to join a pool.</Trans>
      </Typography>

      <Box>
        <Button onClick={handleClick} color="primary" variant="contained">
          <Trans>Add {currencyCode} from the Aba Faucet -- Not Yet Available</Trans>
        </Button>
      </Box>
    </CardStep>
  );
}
