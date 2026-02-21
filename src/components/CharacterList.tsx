import styled from 'styled-components';
import type { Character, PsiPower } from '../interfaces/Characters.ts'

interface CharacterListProps {
  data: Character[];
}

interface CardProps { $index: number; $accent: string; }
interface GenderProps { $gender: string; }
//interface ColorProps { $color?: string; }

const MenuBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--mac-light);
  border-bottom: 2px solid var(--mac-black);
  height: 22px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 20px;
  user-select: none;
`;

const MenuItem = styled.span`
  font-family: var(--font-ui);
  font-size: 0.72rem;
  color: var(--mac-black);
  cursor: default;
  padding: 2px 6px;
`;

const Desktop = styled.div`
  min-height: calc(100vh - 22px);
  padding: 24px 20px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Window = styled.div`
  width: 100%;
  max-width: 1320px;
  background: var(--mac-white);
  border: 2px solid var(--mac-black);
  box-shadow: 4px 4px 0 var(--mac-black);
`;

const TitleBar = styled.div`
  background: var(--mac-light);
  height: 22px;
  border-bottom: 2px solid var(--mac-black);
  display: flex;
  align-items: center;
  padding: 0 6px;
  gap: 6px;
  background-image: repeating-linear-gradient(
    90deg,
    transparent 0px, transparent 1px,
    rgba(0,0,0,0.07) 1px, rgba(0,0,0,0.07) 2px
  );
  user-select: none;
`;

const CloseBox = styled.div`
  width: 12px;
  height: 12px;
  border: 2px solid var(--mac-black);
  background: var(--mac-light);
  flex-shrink: 0;
`;

const TitleBarText = styled.span`
  flex: 1;
  text-align: center;
  font-family: var(--font-ui);
  font-size: 0.72rem;
  font-weight: bold;
  color: var(--mac-black);
  letter-spacing: 0.05em;
`;

const RainbowStripe = styled.div`
  height: 4px;
  display: flex;
  border-bottom: 1px solid var(--mac-black);
  span { flex: 1; }
`;

const Toolbar = styled.div`
  background: var(--mac-light);
  border-bottom: 2px solid var(--mac-black);
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const ToolbarLabel = styled.span`
  font-family: var(--font-ui);
  font-size: 0.7rem;
  color: var(--mac-dark);
`;

const WindowContent = styled.div`
  padding: 16px;
  background: var(--mac-white);
`;

const AppHeader = styled.div`
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px dashed var(--mac-mid);
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
  min-width:400px;
`;

const AppTitle = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(1rem, 3.5vw, 1.6rem);
  color: var(--mac-black);
  letter-spacing: 0.05em;
  line-height: 1.2;
  
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
`;

const Card = styled.div<CardProps>`
  background: var(--mac-white);
  border: 2px solid var(--mac-black);
  box-shadow: 3px 3px 0 var(--mac-black);
  
  position: relative;

  /* Left accent tab */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: 6px;
    bottom: -2px;
    background: ${({ $accent }) => $accent};
    border-right: 2px solid var(--mac-black);
  }
`;

const CardTitleBar = styled.div`
  background: var(--mac-light);
  height: 20px;
  border-bottom: 2px solid var(--mac-black);
  display: flex;
  align-items: center;
  padding: 0 6px 0 14px;
  background-image: repeating-linear-gradient(
    90deg,
    transparent 0px, transparent 1px,
    rgba(0,0,0,0.06) 1px, rgba(0,0,0,0.06) 2px
  );
`;

const CardTitleText = styled.span`
  font-family: var(--font-ui);
  font-size: 0.65rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--mac-dark);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PortraitArea = styled.div`
  position: relative;
  height: 360px;
  background: var(--mac-mid);
  border-bottom: 2px solid var(--mac-black);
  overflow: hidden;
  background-image: radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px);
  background-size: 3px 3px;
`;

const CharImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  filter: contrast(1.05) saturate(0.9);
`;

const GenderLabel = styled.div<GenderProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: var(--font-ui);
  font-size: 0.6rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 3px 8px;
  background: ${({ $gender }) =>
    $gender === 'male' ? 'var(--pop-blue)' :
      $gender === 'female' ? 'var(--pop-red)' :
        'var(--mac-dark)'};
  color: #fff;
  border-top: 2px solid var(--mac-black);
  border-left: 2px solid var(--mac-black);
`;

const CardBody = styled.div`
  padding: 10px 12px 12px 18px;
`;

const CharName = styled.h2`
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--mac-black);
  letter-spacing: 0.04em;
  margin-bottom: 6px;
  line-height: 1.1;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const FieldLabel = styled.span`
  font-family: var(--font-ui);
  font-size: 0.62rem;
  color: var(--mac-dark);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
`;

const PowersSection = styled.div`
  border-top: 1px solid var(--mac-mid);
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const PowerRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  background: var(--mac-light);
  border: 1px solid var(--mac-mid);
  padding: 5px 7px;
`;

const PowerIcon = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
  flex-shrink: 0;
  image-rendering: pixelated;
  margin-top: 1px;
`;

const PowerName = styled.p`
  font-family: var(--font-ui);
  font-size: 0.7rem;
  font-weight: bold;
  color: var(--pop-teal);
  text-transform: capitalize;
  margin-bottom: 2px;
`;

const PowerDesc = styled.p`
  font-family: var(--font-ui);
  font-size: 0.62rem;
  color: var(--mac-dark);
  line-height: 1.4;
`;

const StatusBar = styled.div`
  border-top: 2px solid var(--mac-black);
  background: var(--mac-light);
  height: 20px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 10px;
`;

const StatusText = styled.span`
  font-family: var(--font-ui);
  font-size: 0.62rem;
  color: var(--mac-dark);
`;

const StatusDivider = styled.span`
  color: var(--mac-mid);
`;


const ACCENTS = [
  'var(--pop-red)',
  'var(--pop-orange)',
  'var(--pop-yellow)',
  'var(--pop-green)',
  'var(--pop-teal)',
  'var(--pop-blue)',
];

function CharacterCard({ character, index }: { character: Character; index: number }) {
  const accent = ACCENTS[index % ACCENTS.length];

  const imgUrl = character.img.startsWith('http')
    ? character.img
    : `https://psychonauts-api.vercel.app${character.img}`;

  const fixPowerImg = (url: string) =>
    url.startsWith('http') ? url : `https://psychonauts-api.vercel.app${url}`;

  return (
    <Card $index={index} $accent={accent}>

      <CardTitleBar>
        <CardTitleText>{character.name}</CardTitleText>
      </CardTitleBar>

      <PortraitArea>
        <CharImg
          src={imgUrl}
          alt={character.name}
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <GenderLabel $gender={character.gender}>{character.gender}</GenderLabel>
      </PortraitArea>

      <CardBody>
        <CharName>{character.name}</CharName>

        <InfoRow>
          <FieldLabel>PSI Powers:</FieldLabel>
        </InfoRow>
        <PowersSection>
          {character.psiPowers.map((power: PsiPower) => (
            <PowerRow key={power._id}>
              <PowerIcon
                src={fixPowerImg(power.img)}
                alt={power.name}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div>
                <PowerName>{power.name}</PowerName>
                <PowerDesc>{power.description}</PowerDesc>
              </div>
            </PowerRow>
          ))}
        </PowersSection>
      </CardBody>
    </Card>
  );
}

function CharacterList({ data }: CharacterListProps) {
  return (
    <>
      <MenuBar>
        <MenuItem>File</MenuItem>
        <MenuItem>Edit</MenuItem>
        <MenuItem>View</MenuItem>
        <MenuItem>Special</MenuItem>
      </MenuBar>

      <Desktop>
        <Window>
          <TitleBar>
            <CloseBox />
            <TitleBarText>Browser</TitleBarText>
          </TitleBar>

          <RainbowStripe>
            <span style={{ background: 'var(--pop-red)' }} />
            <span style={{ background: 'var(--pop-orange)' }} />
            <span style={{ background: 'var(--pop-yellow)' }} />
            <span style={{ background: 'var(--pop-green)' }} />
            <span style={{ background: 'var(--pop-teal)' }} />
            <span style={{ background: 'var(--pop-blue)' }} />
          </RainbowStripe>

          <Toolbar>
            <ToolbarLabel>PSYCHONAUTS RECORDS</ToolbarLabel>
            <ToolbarLabel style={{ marginLeft: 'auto', color: 'var(--mac-black)' }}>
            </ToolbarLabel>
          </Toolbar>

          <WindowContent>
            <AppHeader>
              <AppTitle>Agent Files</AppTitle>
            </AppHeader>

            <Grid>
              {data.map((character, i) => (
                <CharacterCard key={character._id} character={character} index={i} />
              ))}
            </Grid>
          </WindowContent>

          <StatusBar>
            <StatusText>Ready</StatusText>
            <StatusDivider>|</StatusDivider>
            <StatusText>{data.length} agents loaded from Psychonauts API</StatusText>
          </StatusBar>
        </Window>
      </Desktop>
    </>
  );
}

export default CharacterList;
