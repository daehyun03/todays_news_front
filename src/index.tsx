import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./components/header/Header";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TopicPage from "./pages/TopicPage";
import {QueryClient, QueryClientProvider} from "react-query";
import TopicDetailPage from "./pages/TopicDetailPage";

const queryClient = new QueryClient(
    {
        defaultOptions: {
            queries: {
                refetchOnMount: false,
                refetchOnReconnect: false,
                refetchOnWindowFocus: false,
            }
        }
    }
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              <Header/>
              <div className="background">
                  <Routes>
                      <Route path="/" element={<TopicPage/>}/>
                      <Route path="/:categoryIdx" element={<TopicPage/>}/>
                      <Route path="/topic-page/:topicId" element={<TopicDetailPage/>}/>
                  </Routes>
              </div>
          </BrowserRouter>
      </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
