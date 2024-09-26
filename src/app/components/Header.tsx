// components/Header.tsx
"use client";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface HeaderProps {
  onSearch?: (searchTerm: string) => void; // Propriedade para passar o valor da busca
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // Função para detectar cliques fora do campo de busca
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false); // Fecha o campo de busca se o clique for fora do campo
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  // Função para lidar com a busca
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch!(value); // Envia o valor da busca para o componente pai
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#4A0072" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Avatar e Nome */}
            <Avatar alt="User Avatar" sx={{ bgcolor: "#fff", mr: 1 }} />
            <Typography variant="h6" noWrap>
              Nicollas Davi 
            </Typography>

            {/* Divider */}
            <Divider orientation="vertical" flexItem sx={{ mx: 2, bgcolor: "#fff" }} />

            {/* Opções de Menu */}
            <Link color="inherit" href={"/"}>HOME</Link>

            {/* Search Icon & Search Box */}
            <Box sx={{ display: "flex", alignItems: "center", ml: 4 }} ref={searchRef}>
                {onSearch && <>
                    <IconButton color="inherit" onClick={toggleSearch}>
                <SearchIcon />
              </IconButton>
              {showSearch && (
                <InputBase
                  placeholder="Buscar…"
                  sx={{
                    ml: 1,
                    flex: 1,
                    bgcolor: "white",
                    borderRadius: 4,
                    padding: "2px 10px",
                    width: "200px",
                  }}
                  value={searchTerm}
                  onChange={handleSearchChange}
                  autoFocus
                />
              )}
                </>}
              
            </Box>
          </Box>

          {/* Logo e Nome do Site */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" sx={{ ml: 1 }}>
              CURSOFLIX
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
