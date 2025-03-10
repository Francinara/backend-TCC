-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registration_requests" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "requestDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "registration_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beneficiarios" (
    "id" SERIAL NOT NULL,
    "apelido" TEXT,
    "cpf" CHAR(11),
    "sexo" TEXT,
    "estado_civil" TEXT,
    "nome_mae" TEXT,
    "nome_conjugue" TEXT,
    "naturalidade" TEXT,
    "n_membro_familia" INTEGER,
    "renda_familiar" DOUBLE PRECISION,
    "data_nascimento" TIMESTAMP(3),
    "dap" TEXT,
    "data_dap" TIMESTAMP(3),
    "tipo_dap" TEXT,
    "programa_governamental" TEXT,
    "outro_programa_governamental" TEXT,
    "nis" TEXT,
    "contato" TEXT,
    "categoria_beneficiario" TEXT,
    "associado" BOOLEAN,
    "associacao" TEXT,
    "nome_completo" TEXT,
    "credito_rural" BOOLEAN,
    "tipo_credito_rural" TEXT,

    CONSTRAINT "beneficiarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "propriedades" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "car" BOOLEAN,
    "n_recibo_car" TEXT,
    "nome_propriedade" TEXT,
    "area" DOUBLE PRECISION,
    "comunidade" TEXT,
    "distrito" TEXT,
    "situacao_fundiaria" TEXT,
    "tipo_documento" TEXT,
    "beneficiario_id" INTEGER NOT NULL,

    CONSTRAINT "propriedades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cisternas" (
    "id" SERIAL NOT NULL,
    "tipo_cisterna" TEXT,
    "capacidade_armazenamento" DOUBLE PRECISION,

    CONSTRAINT "cisternas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carros_pipa" (
    "id" SERIAL NOT NULL,
    "fornecedor_carro_pipa" TEXT,
    "quantidade_mes_litro" DOUBLE PRECISION,

    CONSTRAINT "carros_pipa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pocos" (
    "id" SERIAL NOT NULL,
    "propriedade_poco" TEXT,
    "qualidade" TEXT,
    "bomba" BOOLEAN,
    "vazao" DOUBLE PRECISION,

    CONSTRAINT "pocos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acudes" (
    "id" SERIAL NOT NULL,
    "propriedade" TEXT,
    "capacidade_armazenamento" DOUBLE PRECISION,

    CONSTRAINT "acudes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "banheiros" (
    "id" SERIAL NOT NULL,
    "n_banheiros" INTEGER,
    "fossa" BOOLEAN,
    "outros" TEXT,

    CONSTRAINT "banheiros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agriculturas" (
    "id" SERIAL NOT NULL,
    "data_colheita" TIMESTAMP(3),
    "producao_ano" INTEGER,
    "irrigacao" BOOLEAN,
    "destinacao_venda" INTEGER,
    "area_cultivo" DOUBLE PRECISION,
    "data_plantio" TIMESTAMP(3),
    "destinacao_casa" INTEGER,
    "valor_comercializado" DOUBLE PRECISION,
    "cultura" TEXT,
    "propriedade_id" INTEGER NOT NULL,
    "visita_id" INTEGER,

    CONSTRAINT "agriculturas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pecuarias" (
    "id" SERIAL NOT NULL,
    "especie" TEXT,
    "quantidade" INTEGER,
    "aptidao_corte" BOOLEAN,
    "aptidao_leite" BOOLEAN,
    "aptidao_postura" BOOLEAN,
    "tipo_cricao_intensivo" BOOLEAN,
    "tipo_cricao_semi_intensivo" BOOLEAN,
    "tipo_cricao_extensivo" BOOLEAN,
    "destinacao_casa" DOUBLE PRECISION,
    "raca_predominante" TEXT,
    "valor_comercializacao" DOUBLE PRECISION,
    "destinacao_venda" DOUBLE PRECISION,
    "propriedade_id" INTEGER NOT NULL,
    "visita_id" INTEGER,

    CONSTRAINT "pecuarias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aquiculturas" (
    "id" SERIAL NOT NULL,
    "aptidao_corte" BOOLEAN,
    "aptidao_reproducao" BOOLEAN,
    "lamina_agua" TEXT,
    "quantidade" INTEGER,
    "cultura" TEXT,
    "especie" TEXT,
    "valor_comercializacao" DOUBLE PRECISION,
    "tipo_cricao_super_intensivo" BOOLEAN,
    "tipo_cricao_intensivo" BOOLEAN,
    "tipo_cricao_semi_intensivo" BOOLEAN,
    "tipo_cricao_extensivo" BOOLEAN,
    "destinacao_casa" INTEGER,
    "destinacao_verda" INTEGER,
    "propriedade_id" INTEGER NOT NULL,
    "visita_id" INTEGER,

    CONSTRAINT "aquiculturas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artesanatos" (
    "id" SERIAL NOT NULL,
    "produto" TEXT,
    "destinacao_valor" TEXT,
    "propriedade_id" INTEGER NOT NULL,
    "visita_id" INTEGER,

    CONSTRAINT "artesanatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "apiculturas" (
    "id" SERIAL NOT NULL,
    "com_ferrao" BOOLEAN NOT NULL,
    "sem_ferrao" BOOLEAN NOT NULL,
    "n_colmeias" INTEGER,
    "destinacao_mel" TEXT,
    "tipo_criacao" BOOLEAN,
    "tipo_extrativismo" BOOLEAN,
    "propriedade_id" INTEGER NOT NULL,
    "visita_id" INTEGER,

    CONSTRAINT "apiculturas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visitas" (
    "numero" SERIAL NOT NULL,
    "data" TIMESTAMP(3),
    "tecnico_responsavel" TEXT,
    "data_ultima_visita" TIMESTAMP(3),
    "diagnostico" TEXT,
    "recomendacoes" TEXT,
    "finalidade_visita" TEXT,
    "propriedade_id" INTEGER NOT NULL,

    CONSTRAINT "visitas_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "outras_atividades" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT,
    "descricao" TEXT,
    "propriedade_id" INTEGER NOT NULL,
    "visita_id" INTEGER,

    CONSTRAINT "outras_atividades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pocos_amazonas" (
    "id" SERIAL NOT NULL,
    "qualidade" TEXT,
    "propriedade" TEXT,
    "bomba" BOOLEAN,
    "vazao" DOUBLE PRECISION,

    CONSTRAINT "pocos_amazonas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "barragens" (
    "id" SERIAL NOT NULL,
    "capacidade_armazenamento" DOUBLE PRECISION,
    "propriedade" TEXT,

    CONSTRAINT "barragens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recursos_hidricos" (
    "id" SERIAL NOT NULL,
    "propriedade_id" INTEGER NOT NULL,
    "carro_pipa_id" INTEGER,
    "poco_id" INTEGER,
    "poco_amazonas_id" INTEGER,
    "acude_id" INTEGER,
    "barragem_id" INTEGER,
    "banheiro_id" INTEGER,
    "cisternas_id" INTEGER,

    CONSTRAINT "recursos_hidricos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cisterna_calcadao" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "numero" BIGINT,
    "nome" VARCHAR(254),
    "local" VARCHAR(254),
    "tipo" VARCHAR(254),
    "latitude" VARCHAR(254),
    "longitude" VARCHAR(254),
    "layer" TEXT,

    CONSTRAINT "cisterna_calcadao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cisterna_programa_1mcr" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "numero" BIGINT,
    "nome" VARCHAR(254),
    "local" VARCHAR(254),
    "tipo" VARCHAR(254),
    "latitude" VARCHAR(254),
    "longitude" VARCHAR(254),
    "ano" BIGINT,
    "layer" TEXT,

    CONSTRAINT "cisterna_programa_1mcr_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cisterna_programa_1mcr_2011_escolas" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "numero" BIGINT,
    "nome" VARCHAR(254),
    "local" VARCHAR(254),
    "tipo" VARCHAR(254),
    "latitude" VARCHAR(254),
    "longitude" VARCHAR(254),
    "nome_escol" VARCHAR(254),

    CONSTRAINT "cisterna_programa_1mcr_2011_escolas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comunidade" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "nome" VARCHAR(11),
    "distritos" VARCHAR(25),

    CONSTRAINT "comunidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drenagem_st" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "segment_id" BIGINT,
    "node_a" BIGINT,
    "node_b" BIGINT,
    "basin" BIGINT,
    "order" BIGINT,
    "order_cell" BIGINT,
    "length" DOUBLE PRECISION,

    CONSTRAINT "drenagem_st_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estrada_br_232" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "identifier" BIGINT,
    "comp_km" DOUBLE PRECISION,

    CONSTRAINT "estrada_br_232_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estrada_com_pavimentacao" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "identifier" BIGINT,

    CONSTRAINT "estrada_com_pavimentacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estrada_pe_320" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "identifier" BIGINT,

    CONSTRAINT "estrada_pe_320_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estrada_pe_365" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "identifier" BIGINT,

    CONSTRAINT "estrada_pe_365_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estrada_pe_390" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "identifier" BIGINT,

    CONSTRAINT "estrada_pe_390_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estrada_pe_418" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "identifier" BIGINT,

    CONSTRAINT "estrada_pe_418_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estrada_sem_pavimentacao" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "identifier" BIGINT,
    "id_2" BIGINT,
    "id_2_2" BIGINT,
    "id_2_2_2" BIGINT,
    "id_3" BIGINT,

    CONSTRAINT "estrada_sem_pavimentacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "limites_st" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "cd_mun" VARCHAR(7),
    "nm_mun" VARCHAR(60),
    "sigla" VARCHAR(2),
    "area_km2" DOUBLE PRECISION,

    CONSTRAINT "limites_st_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nascente_st" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "node_id" BIGINT,
    "type" VARCHAR(8),

    CONSTRAINT "nascente_st_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "poco_st" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "nome" VARCHAR(254),
    "local" VARCHAR(254),
    "latitude" VARCHAR(254),
    "longitude" VARCHAR(254),

    CONSTRAINT "poco_st_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservatorio_poco_st" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "numero" BIGINT,
    "proprietario" VARCHAR(254),
    "local" VARCHAR(254),
    "empresa_va" VARCHAR(254),
    "captacao" VARCHAR(254),
    "latitude" VARCHAR(254),
    "longitude" VARCHAR(254),

    CONSTRAINT "reservatorio_poco_st_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sub_bacia_st" (
    "id" BIGSERIAL NOT NULL,
    "geom" BYTEA,
    "value" BIGINT,
    "name" VARCHAR(2),

    CONSTRAINT "sub_bacia_st_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "distritos" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA,
    "CD_REGIAO" VARCHAR(1),
    "NM_REGIAO" VARCHAR(20),
    "CD_UF" VARCHAR(2),
    "NM_UF" VARCHAR(50),
    "CD_MUN" VARCHAR(7),
    "NM_MUN" VARCHAR(100),
    "CD_DIST" VARCHAR(9),
    "NM_DIST" VARCHAR(100),

    CONSTRAINT "distritos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "massa_dagua_st" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA NOT NULL,
    "nome" VARCHAR(150),
    "geometriaa" VARCHAR(80),
    "tipomassad" VARCHAR(80),
    "regime" VARCHAR(80),
    "salgada" VARCHAR(80),
    "dominialid" VARCHAR(80),
    "artificial" VARCHAR(80),
    "possuitrec" VARCHAR(80),

    CONSTRAINT "massa_dagua_st_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "areas_urbanizadas_st" (
    "id" SERIAL NOT NULL,
    "geom" BYTEA NOT NULL,
    "densidade" VARCHAR(50),
    "tipo" VARCHAR(100),
    "comparacao" VARCHAR(150),

    CONSTRAINT "areas_urbanizadas_st_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "registration_requests_name_key" ON "registration_requests"("name");

-- CreateIndex
CREATE UNIQUE INDEX "registration_requests_email_key" ON "registration_requests"("email");

-- CreateIndex
CREATE UNIQUE INDEX "beneficiarios_cpf_key" ON "beneficiarios"("cpf");

-- AddForeignKey
ALTER TABLE "propriedades" ADD CONSTRAINT "propriedades_beneficiario_id_fkey" FOREIGN KEY ("beneficiario_id") REFERENCES "beneficiarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agriculturas" ADD CONSTRAINT "agriculturas_propriedade_id_fkey" FOREIGN KEY ("propriedade_id") REFERENCES "propriedades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pecuarias" ADD CONSTRAINT "pecuarias_propriedade_id_fkey" FOREIGN KEY ("propriedade_id") REFERENCES "propriedades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aquiculturas" ADD CONSTRAINT "aquiculturas_propriedade_id_fkey" FOREIGN KEY ("propriedade_id") REFERENCES "propriedades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "artesanatos" ADD CONSTRAINT "artesanatos_propriedade_id_fkey" FOREIGN KEY ("propriedade_id") REFERENCES "propriedades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "apiculturas" ADD CONSTRAINT "apiculturas_propriedade_id_fkey" FOREIGN KEY ("propriedade_id") REFERENCES "propriedades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visitas" ADD CONSTRAINT "visitas_propriedade_id_fkey" FOREIGN KEY ("propriedade_id") REFERENCES "propriedades"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "outras_atividades" ADD CONSTRAINT "outras_atividades_propriedade_id_fkey" FOREIGN KEY ("propriedade_id") REFERENCES "propriedades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recursos_hidricos" ADD CONSTRAINT "recursos_hidricos_propriedade_id_fkey" FOREIGN KEY ("propriedade_id") REFERENCES "propriedades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recursos_hidricos" ADD CONSTRAINT "recursos_hidricos_carro_pipa_id_fkey" FOREIGN KEY ("carro_pipa_id") REFERENCES "carros_pipa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recursos_hidricos" ADD CONSTRAINT "recursos_hidricos_poco_id_fkey" FOREIGN KEY ("poco_id") REFERENCES "pocos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recursos_hidricos" ADD CONSTRAINT "recursos_hidricos_poco_amazonas_id_fkey" FOREIGN KEY ("poco_amazonas_id") REFERENCES "pocos_amazonas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recursos_hidricos" ADD CONSTRAINT "recursos_hidricos_acude_id_fkey" FOREIGN KEY ("acude_id") REFERENCES "acudes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recursos_hidricos" ADD CONSTRAINT "recursos_hidricos_barragem_id_fkey" FOREIGN KEY ("barragem_id") REFERENCES "barragens"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recursos_hidricos" ADD CONSTRAINT "recursos_hidricos_banheiro_id_fkey" FOREIGN KEY ("banheiro_id") REFERENCES "banheiros"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recursos_hidricos" ADD CONSTRAINT "recursos_hidricos_cisternas_id_fkey" FOREIGN KEY ("cisternas_id") REFERENCES "cisternas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
