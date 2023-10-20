import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import NextLink from "next/link";
import {
  Link,
  Navbar,
  Fab,
  Page,
  Icon,
  Popup,
  Panel,
  BlockTitle,
  List,
  ListItem,
  Toggle,
  ListButton,
  Card,
  Block,
  Popover
} from "konsta/react";
import {
  Bars,
  PersonAltCircle,
  Xmark,
  ChatBubble,
  Bell,
  Search,
  Gift
} from "framework7-icons/react";
const Navigation = (nav) => {
  const [menu, setmenu] = useState(false);
  const [messages, setmessages] = useState(false);
  const [search, setsearch] = useState(false);
  const [rewards, setrewards] = useState(false);
  return (
    <>
      <Navbar
        title={
          <NextLink href="/">
            <a>Michat</a>
          </NextLink>
        }
        right={
          <Link navbar className={nav.profile ? "hidden" : ""}>
            <NextLink href={!nav.profile ? "profile/profile" : "#"}>
              <Icon badge="5" badgeColors={{ bg: "bg-red-500" }}>
                <PersonAltCircle className="h-7 w-7"></PersonAltCircle>
              </Icon>
            </NextLink>
          </Link>
        }
      >
        <Link navbar onClick={() => setmessages(true)}>
          <Icon badgeColors={{ bg: "bg-red-500" }}>
            <ChatBubble className="h-7 w-7"></ChatBubble>
          </Icon>
        </Link>
        <Link navbar>
          <Icon badgeColors={{ bg: "bg-red-500" }}>
            <Bell className="h-7 w-7"></Bell>
          </Icon>
        </Link>
        <Link navbar onClick={() => setrewards(true)}>
          <Icon badgeColors={{ bg: "bg-red-500" }}>
            <Gift className="h-7 w-7"></Gift>
          </Icon>
        </Link>
        <Link navbar onClick={() => setmenu(true)}>
          <Icon badgeColors={{ bg: "bg-red-500" }}>
            <Bars className="h-7 w-7"></Bars>
          </Icon>
        </Link>
      </Navbar>

      {/* menu */}
      <Panel
        opened={menu}
        onBackdropClick={() => setmenu(false)}
        side="right"
        size="w-[400px] h-screen"
        className="transition-all"
      >
        <Page className="bg-gray-200">
          <Navbar
            title="Menu"
            right={
              <Link navbar onClick={() => setmenu(false)}>
                <Icon>
                  <Xmark className="h-7 w-7 text-red-500 "></Xmark>
                </Icon>
              </Link>
            }
          />
          <List className="mt-2">
            <ListItem
              href="/api/auth/logout"
              chevron={false}
              title="Logout"
              link
              className="text-rose-600 font-normal"
              after={
                <i className="text-rose-700 text-xl fas fa-sign-out-alt"></i>
              }
            />
          </List>
        </Page>
      </Panel>

      {/* Messages */}
      <Popup
        opened={messages}
        onBackdropClick={() => setmessages(!messages)}
        size="w-screen h-screen md:w-screen md:h-screen"
        colors={{ bg: "bg-page-material-dark" }}
      >
        <Navbar
          title="Messages"
          right={
            <Link navbar onClick={() => setmessages(!messages)}>
              <Icon>
                <Xmark className="h-7 w-7 text-red-500 "></Xmark>
              </Icon>
            </Link>
          }
        />
      </Popup>

      {/* notifications */}

      {/* earn rewards */}
      <Popup
        opened={rewards}
        onBackdropClick={() => setrewards(!rewards)}
        size="w-screen h-screen md:w-screen md:h-screen"
        colors={{ bg: "bg-page-material-dark" }}
      >
        <Navbar
          title="Earn Rewards"
          right={
            <Link navbar onClick={() => setrewards(false)}>
              <Icon>
                <Xmark className="h-7 w-7 text-red-500 "></Xmark>
              </Icon>
            </Link>
          }
        />
        <div className="flex flex-col gap-2 overflow-auto">
          <Card className="h-96" />
          <Card className="h-96" />
        </div>
      </Popup>
    </>
  );
};
export default Navigation;
