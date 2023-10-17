import type { Meta, StoryObj } from '@storybook/react';
import * as https from 'https';

import TourFirstPart from './TourFirstPart'

const meta: Meta<typeof TourFirstPart> = {
    component: TourFirstPart,
    title: 'TourFirstPart',
    tags: []
};

export default meta;
type Story = StoryObj<typeof TourFirstPart>;

export const Linked: Story = {
    args: {
        // 👇 The args you need here will depend on your component
    }
};
