import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./pages/login"
import User from "./pages/user"
import Layout from "./layouts/layout";
import MainPage from "./layouts/mainPage";
import Agents from "./pages/agents";
import Error from "./pages/error";
import Home from "./pages/home";
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const compSquadTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#53212B',
          solidHoverBg: '#FD4556',
          solidActiveBg: '#FD4556',
          outlinedColor: '#2C7A7B',
          outlinedBorder: '#2C7A7B',
          outlinedHoverBorder: undefined,
          outlinedHoverBg: '#E6FFFA',
          outlinedActiveBg: '#B2F5EA',
        },
        focusVisible: '#5e2831',
      },
    },
  },
  focus: {
    default: {
      outlineWidth: '2px',
    },
  },
  fontFamily: {
    body: 'Inter, var(--chakra-fontFamily-fallback)',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          '&:focus': theme.focus.default,
          fontWeight: 600,
          ...(ownerState.size === 'md' && {
            //borderRadius: '0.375rem',
            paddingInline: '1rem',
          }),
        }),
      },
    },
  },
});

function App() {
  return (
    <CssVarsProvider theme={compSquadTheme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />} >
              <Route path="/" element={<Login />} />
            </Route>
            <Route element={<MainPage />} >
              <Route path="/user/:id" element={<User />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </CssVarsProvider>
  )
}

export default App