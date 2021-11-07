// DoLikeThis.stories.ts | DoLikeThis.stories.tsx

import React from 'react'

import { Meta, Story } from '@storybook/react';

import DoLikeThis from './DoLikeThis';

export default {
    component: DoLikeThis,
    title: 'Components/DoLikeThis/DoLikeThis',
} as Meta;


//👇 We create a “template” of how args map to rendering
const Template = (args) => <DoLikeThis {...args} />;

const text = "<p><strong>Dumlegrädde</strong></p>\n<p>1. Dela alla olika dumlekolor i mindre bitar(råka inte blanda ihop dom). Lägg kolorna i varsin kastrullen tillsammans med 1 dl vispgrädde.</p>\n<p>2. Smält samman dumlen och grädden på låg värme under konstant omrörning. Koka ej!</p>\n<p>3. När kolorna smält samman häller du över dem i fyra olika i en värmetåliga skålar som du kan vispa i sen. Låt dom stå i kylskåpet minst 4 h tills de svalnat helt. Den grädden utan dumle kan du vänta med och vispa vid montering.</p>\n<p>Under tiden kan du göra kladdkakan. Även den får bäst resultat om du kör den dagen innan servering alt. Att det hinner så minst fyra timmar så att den hinner sätta sig.</p>\n<p><strong>Fudgekladdkaka</strong></p>\n<p><em>Sätt ugnen på 175 grader.</em></p>\n<p>1. Jag använde en avlång pajform dom jag klädde in i bakplåtspapper. En rund springform kommer gå lika bra om det är det du har hemma.</p>\n<p>2. Smält smöret i en kastrull och lägg hackade dumlekolor jag använde de som blev över från dumlegrädde. Smaken på dumlen spelar ingen roll ta det du tycker är gott. Rör tills dumlen smält samman med smöret. Ställ kastrullen åt sidan.</p>\n<p>3. Vispa försiktig ihop ägg med strösocker och farinsocker, blanda kastrullen med smör och dumle ch sist vänder du i dom torra ingredienserna, blanda med en slickepott till en slät och fin smet.</p>\n<p>4. Häll i smeten i formen och grädda mitt i ugnen på 175 grader i cirka 20 minuter. Kladdkakan kommer bubbla upp lite och den är klar när den fortfarande är lite vobblig i mitten men har ändå en kompakt grund.</p>\n<p>5. Ta ut kladdkakan, låt svalna i rumsvärme. Ställ sedan in i kylskåpet helst över natten.</p>\n<p><strong>Montering</strong></p>\n<p>1. När det är dags för montering vispar du upp de fem olika gräddsorterna.</p>\n<p>2. Lägg alla i varsin spritspåse.</p>\n<p>3. Spritsa valfritt mönster över kakan. Jag använde Wilton 1M.</p>\n<p>4. När du är nöjd förvara kladdkakan i kylskåp tills att det är dags för servering!</p>\n"
   
export const Default = Template.bind({});

Default.args = {
    saHarGorDu: text,
};

