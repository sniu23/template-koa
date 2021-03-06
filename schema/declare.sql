
CREATE TABLE "DecHead"
(
  "PreEntryId"     VARCHAR2(20 BYTE) NOT NULL,
  "TradeCode"      VARCHAR2(10 BYTE) NOT NULL,
  "AgentCode"      VARCHAR2(10 BYTE) NOT NULL,
  "AgentName"      VARCHAR2(60 BYTE) NOT NULL,
  "ApprNo"         VARCHAR2(30 BYTE),
  "BillNo"         VARCHAR2(32 BYTE),
  "ContrNo"        VARCHAR2(32 BYTE),
  "CopCode"        VARCHAR2(9 BYTE) NOT NULL,
  "CopName"        VARCHAR2(70 BYTE) NOT NULL,
  "CustomMaster"   VARCHAR2(4 BYTE),
  "CutMode"        VARCHAR2(3 BYTE),
  "DataSource"     VARCHAR2(5 BYTE),
  "DeclTrnRel"     VARCHAR2(1 BYTE) NOT NULL,
  "DistinatePort"  VARCHAR2(4 BYTE),
  "DistrictCode"   VARCHAR2(5 BYTE),
  "EdiId"          VARCHAR2(1 BYTE),
  "EntryId"        VARCHAR2(18 BYTE),
  "EntryType"      VARCHAR2(1 BYTE),
  "FeeCurr"        VARCHAR2(3 BYTE),
  "FeeMark"        VARCHAR2(1 BYTE),
  "FeeRate"        NUMBER(19,7),
  "GrossWet"       NUMBER(19,5),
  "IEDate"         DATE,
  "IEFlag"         VARCHAR2(1 BYTE) NOT NULL,
  "IEPort"         VARCHAR2(4 BYTE),
  "InputerName"    VARCHAR2(32 BYTE) NOT NULL,
  "InRatio"        NUMBER(19,5),
  "InsurCurr"      VARCHAR2(3 BYTE),
  "InsurMark"      VARCHAR2(1 BYTE),
  "InsurRate"      NUMBER(19,5),
  "LicenseNo"      VARCHAR2(20 BYTE),
  "ManualNo"       VARCHAR2(12 BYTE),
  "NetWt"          NUMBER(19,5),
  "NoteS"          VARCHAR2(70 BYTE),
  "OtherCurr"      VARCHAR2(3 BYTE),
  "OtherMark"      VARCHAR2(1 BYTE),
  "OtherRate"      NUMBER(19,5),
  "OwnerCode"      VARCHAR2(10 BYTE),
  "OwnerName"      VARCHAR2(60 BYTE),
  "PackNo"         INTEGER,
  "PayWay"         VARCHAR2(1 BYTE),
  "PaymentMark"    VARCHAR2(1 BYTE),
  "PartenerID"     VARCHAR2(20 BYTE),
  "PDate"          DATE,
  "Risk"           VARCHAR2(10 BYTE),
  "SeqNo"          VARCHAR2(18 BYTE),
  "TgdNo"          VARCHAR2(18 BYTE),
  "TradeCountry"   VARCHAR2(3 BYTE),
  "TradeMode"      VARCHAR2(4 BYTE),
  "TradeName"      VARCHAR2(60 BYTE) NOT NULL,
  "TrafMode"       VARCHAR2(1 BYTE),
  "TrafName"       VARCHAR2(26 BYTE),
  "TransMode"      VARCHAR2(1 BYTE),
  "Type"           VARCHAR2(2 BYTE),
  "TypistNo"       VARCHAR2(30 BYTE) NOT NULL,
  "WrapType"       VARCHAR2(1 BYTE),
  "ChkSurety"      VARCHAR2(1 BYTE),
  "BillType"       VARCHAR2(1 BYTE),
  "TradeCoScc"     VARCHAR2(18 BYTE),
  "AgentCodeScc"   VARCHAR2(18 BYTE),
  "OwnerCodeScc"   VARCHAR2(18 BYTE),
  "CopCodeScc"     VARCHAR2(18 BYTE),
  "PromiseItmes"   VARCHAR2(32 BYTE) NOT NULL,
  "TradeAreaCode"  VARCHAR2(3 BYTE) NOT NULL,
  "CreateAt"       DATE,
  "CreateBy"       VARCHAR2(20 BYTE),
  "Group"          VARCHAR2(10 BYTE)
);

COMMENT ON COLUMN "DecHead"."PreEntryId" IS '预录入编号';

COMMENT ON COLUMN "DecHead"."TradeCode" IS '经营单位编号';

COMMENT ON COLUMN "DecHead"."AgentCode" IS '申报单位代码';

COMMENT ON COLUMN "DecHead"."AgentName" IS '申报单位名称';

COMMENT ON COLUMN "DecHead"."ApprNo" IS '批准文号';

COMMENT ON COLUMN "DecHead"."BillNo" IS '提单号';

COMMENT ON COLUMN "DecHead"."ContrNo" IS '合同号';

COMMENT ON COLUMN "DecHead"."CopCode" IS '录入单位代码';

COMMENT ON COLUMN "DecHead"."CopName" IS '录入单位名称';

COMMENT ON COLUMN "DecHead"."CustomMaster" IS '主管海关';

COMMENT ON COLUMN "DecHead"."CutMode" IS '征免性质';

COMMENT ON COLUMN "DecHead"."DataSource" IS '数据来源';

COMMENT ON COLUMN "DecHead"."DeclTrnRel" IS '报关/转关关系标志';

COMMENT ON COLUMN "DecHead"."DistinatePort" IS '装货港';

COMMENT ON COLUMN "DecHead"."DistrictCode" IS '境内目的地';

COMMENT ON COLUMN "DecHead"."EdiId" IS '报关标志';

COMMENT ON COLUMN "DecHead"."EntryId" IS '海关编号';

COMMENT ON COLUMN "DecHead"."EntryType" IS '报关单类型';

COMMENT ON COLUMN "DecHead"."FeeCurr" IS '运费币制';

COMMENT ON COLUMN "DecHead"."FeeMark" IS '运费标记';

COMMENT ON COLUMN "DecHead"."FeeRate" IS '运费/率';

COMMENT ON COLUMN "DecHead"."GrossWet" IS '毛重';

COMMENT ON COLUMN "DecHead"."IEDate" IS '进出口日期';

COMMENT ON COLUMN "DecHead"."IEFlag" IS '进出口标志';

COMMENT ON COLUMN "DecHead"."IEPort" IS '进出口岸';

COMMENT ON COLUMN "DecHead"."InputerName" IS '录入员名称';

COMMENT ON COLUMN "DecHead"."InRatio" IS '进口征税比例';

COMMENT ON COLUMN "DecHead"."InsurCurr" IS '保险费币制';

COMMENT ON COLUMN "DecHead"."InsurMark" IS '保险费标记';

COMMENT ON COLUMN "DecHead"."InsurRate" IS '保险费/率';

COMMENT ON COLUMN "DecHead"."LicenseNo" IS '许可证编号';

COMMENT ON COLUMN "DecHead"."ManualNo" IS '备案号';

COMMENT ON COLUMN "DecHead"."NetWt" IS '净重';

COMMENT ON COLUMN "DecHead"."NoteS" IS '备注';

COMMENT ON COLUMN "DecHead"."OtherCurr" IS '杂费币制';

COMMENT ON COLUMN "DecHead"."OtherMark" IS '杂费标志';

COMMENT ON COLUMN "DecHead"."OtherRate" IS '杂费/率';

COMMENT ON COLUMN "DecHead"."OwnerCode" IS '货主单位代码';

COMMENT ON COLUMN "DecHead"."OwnerName" IS '货主单位名称';

COMMENT ON COLUMN "DecHead"."PackNo" IS '件数';

COMMENT ON COLUMN "DecHead"."PayWay" IS '出口结汇方式';

COMMENT ON COLUMN "DecHead"."PaymentMark" IS '纳税单位';

COMMENT ON COLUMN "DecHead"."PartenerID" IS '申报人标识';

COMMENT ON COLUMN "DecHead"."PDate" IS '预录入日期';

COMMENT ON COLUMN "DecHead"."Risk" IS '风险评估参数';

COMMENT ON COLUMN "DecHead"."SeqNo" IS '数据中心统一编号';

COMMENT ON COLUMN "DecHead"."TgdNo" IS '通关申请单号';

COMMENT ON COLUMN "DecHead"."TradeCountry" IS '贸易国别';

COMMENT ON COLUMN "DecHead"."TradeMode" IS '贸易方式';

COMMENT ON COLUMN "DecHead"."TradeName" IS '经营单位名称';

COMMENT ON COLUMN "DecHead"."TrafMode" IS '运输方式代码';

COMMENT ON COLUMN "DecHead"."TrafName" IS '运输工具名称';

COMMENT ON COLUMN "DecHead"."TransMode" IS '成交方式';

COMMENT ON COLUMN "DecHead"."Type" IS 'EDI申报备注';

COMMENT ON COLUMN "DecHead"."TypistNo" IS '录入员IC卡号';

COMMENT ON COLUMN "DecHead"."WrapType" IS '包装种类';

COMMENT ON COLUMN "DecHead"."ChkSurety" IS '担保验放标志';

COMMENT ON COLUMN "DecHead"."BillType" IS '备案清单类型';

COMMENT ON COLUMN "DecHead"."TradeCoScc" IS '经营单位统一编码';

COMMENT ON COLUMN "DecHead"."AgentCodeScc" IS '申报代码统一编码';

COMMENT ON COLUMN "DecHead"."OwnerCodeScc" IS '货主单位统一编码';

COMMENT ON COLUMN "DecHead"."CopCodeScc" IS '录入单位统一编码';

COMMENT ON COLUMN "DecHead"."PromiseItmes" IS '承诺事项';

COMMENT ON COLUMN "DecHead"."TradeAreaCode" IS '贸易国别';

CREATE UNIQUE INDEX "decHead_pk" ON "DecHead"
("PreEntryId", "TradeCode");

CREATE INDEX "dechead_idx_1" ON "DecHead"
("EntryId");

CREATE INDEX "dechead_idx_2" ON "DecHead"
("IEDate");

CREATE INDEX "dechead_idx_3" ON "DecHead"
("PDate");

CREATE INDEX "dechead_idx_4" ON "DecHead"
("SeqNo");

CREATE TABLE "DecList"
(
  "PreEntryId"          VARCHAR2(20 BYTE) NOT NULL,
  "TradeCode"           VARCHAR2(10 BYTE) NOT NULL,
  "GNo"                 INTEGER NOT NULL,
  "ClassMark"           VARCHAR2(1 BYTE),
  "CodeTS"              VARCHAR2(10 BYTE) NOT NULL,
  "ContrItem"           INTEGER,
  "DeclPrice"           NUMBER(19,4),
  "DeclTotal"           NUMBER(19,4),
  "DutyMode"            VARCHAR2(1 BYTE),
  "ExgNo"               VARCHAR2(30 BYTE),
  "ExgVersion"          VARCHAR2(8 BYTE),
  "Factor"              NUMBER(10,3),
  "FirstUnit"           VARCHAR2(3 BYTE),
  "FirstQty"            NUMBER(19,5),
  "GUnit"               VARCHAR2(3 BYTE),
  "GModel"              VARCHAR2(255 BYTE),
  "GName"               VARCHAR2(255 BYTE),
  "GQty"                NUMBER(19,5),
  "OriginCountry"       VARCHAR2(3 BYTE),
  "SecondUnit"          VARCHAR2(3 BYTE),
  "SecondQty"           NUMBER(19,5),
  "TradeCurr"           VARCHAR2(3 BYTE),
  "UseTo"               VARCHAR2(2 BYTE),
  "WorkUsd"             NUMBER(19,5),
  "DestinationCountry"  VARCHAR2(3 BYTE) NOT NULL,
  "CreateAt"            DATE,
  "CreateBy"            VARCHAR2(20 BYTE)
);

COMMENT ON COLUMN "DecList"."PreEntryId" IS '预录入编号';

COMMENT ON COLUMN "DecList"."TradeCode" IS '经营单位编号';

COMMENT ON COLUMN "DecList"."GNo" IS '商品序号';

COMMENT ON COLUMN "DecList"."ClassMark" IS '归类标志';

COMMENT ON COLUMN "DecList"."CodeTS" IS '商品编号';

COMMENT ON COLUMN "DecList"."ContrItem" IS '备案序号';

COMMENT ON COLUMN "DecList"."DeclPrice" IS '申报单价';

COMMENT ON COLUMN "DecList"."DeclTotal" IS '申报总价';

COMMENT ON COLUMN "DecList"."DutyMode" IS '征减免税方式';

COMMENT ON COLUMN "DecList"."ExgNo" IS '货号';

COMMENT ON COLUMN "DecList"."ExgVersion" IS '版本号';

COMMENT ON COLUMN "DecList"."Factor" IS '申报/法定单位比例因子';

COMMENT ON COLUMN "DecList"."FirstUnit" IS '第一计量单位';

COMMENT ON COLUMN "DecList"."FirstQty" IS '第一法定数量';

COMMENT ON COLUMN "DecList"."GUnit" IS '申报计量单位';

COMMENT ON COLUMN "DecList"."GModel" IS '商品规格、型号';

COMMENT ON COLUMN "DecList"."GName" IS '商品名称';

COMMENT ON COLUMN "DecList"."GQty" IS '申报数量';

COMMENT ON COLUMN "DecList"."OriginCountry" IS '原产地';

COMMENT ON COLUMN "DecList"."SecondUnit" IS '第二计量单位';

COMMENT ON COLUMN "DecList"."SecondQty" IS '第二法定数量';

COMMENT ON COLUMN "DecList"."TradeCurr" IS '成交币制';

COMMENT ON COLUMN "DecList"."UseTo" IS '用途/生产厂家';

COMMENT ON COLUMN "DecList"."WorkUsd" IS '工缴费';

COMMENT ON COLUMN "DecList"."DestinationCountry" IS '最终目的国（地区）';

CREATE UNIQUE INDEX "decList_pk" ON "DecList"
("PreEntryId", "TradeCode", "GNo");

CREATE INDEX "declist_idx_1" ON "DecList"
("CodeTS");

CREATE TABLE "DecContainer"
(
  "PreEntryId"   VARCHAR2(20 BYTE) NOT NULL,
  "TradeCode"    VARCHAR2(10 BYTE) NOT NULL,
  "ContainerId"  VARCHAR2(11 BYTE) NOT NULL,
  "ContainerMd"  VARCHAR2(1 BYTE),
  "ContainerWt"  NUMBER(19,5),
  "CreateAt"     DATE,
  "CreateBy"     VARCHAR2(20 BYTE)
);

COMMENT ON COLUMN "DecContainer"."PreEntryId" IS '预录入编号';

COMMENT ON COLUMN "DecContainer"."TradeCode" IS '经营单位编号';

COMMENT ON COLUMN "DecContainer"."ContainerId" IS '集装箱号';

COMMENT ON COLUMN "DecContainer"."ContainerMd" IS '集装箱规格';

COMMENT ON COLUMN "DecContainer"."ContainerWt" IS '集装箱自重';

CREATE INDEX "deccontainer_idx_1" ON "DecContainer"
("ContainerId");

CREATE INDEX "deccontainer_idx_2" ON "DecContainer"
("PreEntryId", "TradeCode");

CREATE TABLE "DecLicenseDocus"
(
  "PreEntryId"  VARCHAR2(20 BYTE) NOT NULL,
  "TradeCode"   VARCHAR2(10 BYTE) NOT NULL,
  "DocuCode"    VARCHAR2(1 BYTE) NOT NULL,
  "CertCode"    VARCHAR2(32 BYTE),
  "CreateAt"    DATE,
  "CreateBy"    VARCHAR2(20 BYTE)
);

COMMENT ON COLUMN "DecLicenseDocus"."PreEntryId" IS '预录入编号';

COMMENT ON COLUMN "DecLicenseDocus"."TradeCode" IS '经营单位编号';

COMMENT ON COLUMN "DecLicenseDocus"."DocuCode" IS '单证代码';

COMMENT ON COLUMN "DecLicenseDocus"."CertCode" IS '单证编号';

CREATE INDEX "declicensedocus_idx_1" ON "DecLicenseDocus"
("PreEntryId", "TradeCode");

CREATE TABLE "DecFreeTxt"
(
  "PreEntryId"  VARCHAR2(20 BYTE) NOT NULL,
  "TradeCode"   VARCHAR2(10 BYTE) NOT NULL,
  "BonNo"       VARCHAR2(32 BYTE),
  "CusFie"      VARCHAR2(8 BYTE),
  "DecBpNo"     VARCHAR2(32 BYTE),
  "DecNo"       VARCHAR2(13 BYTE),
  "RelId"       VARCHAR2(18 BYTE),
  "RelManNo"    VARCHAR2(12 BYTE),
  "VoyNo"       VARCHAR2(32 BYTE),
  "CreateAt"    DATE,
  "CreateBy"    VARCHAR2(20 BYTE)
);

COMMENT ON COLUMN "DecFreeTxt"."PreEntryId" IS '预录入编号';

COMMENT ON COLUMN "DecFreeTxt"."TradeCode" IS '经营单位编号';

COMMENT ON COLUMN "DecFreeTxt"."BonNo" IS '监管仓号';

COMMENT ON COLUMN "DecFreeTxt"."CusFie" IS '货场代码';

COMMENT ON COLUMN "DecFreeTxt"."DecBpNo" IS '报关员联系方式';

COMMENT ON COLUMN "DecFreeTxt"."DecNo" IS '报关员号';

COMMENT ON COLUMN "DecFreeTxt"."RelId" IS '关联报关单号';

COMMENT ON COLUMN "DecFreeTxt"."RelManNo" IS '关联备案号';

COMMENT ON COLUMN "DecFreeTxt"."VoyNo" IS '航次号';

CREATE INDEX "decfreetxt_idx_1" ON "DecFreeTxt"
("PreEntryId", "TradeCode");

CREATE TABLE "DecSign"
(
  "PreEntryId"   VARCHAR2(20 BYTE) NOT NULL,
  "TradeCode"    VARCHAR2(10 BYTE) NOT NULL,
  "OperType"     VARCHAR2(1 BYTE) NOT NULL,
  "ICCode"       VARCHAR2(13 BYTE) NOT NULL,
  "OperName"     VARCHAR2(32 BYTE) NOT NULL,
  "CopCode"      VARCHAR2(9 BYTE) NOT NULL,
  "ClientSeqNo"  VARCHAR2(18 BYTE) NOT NULL,
  "Sign"         VARCHAR2(201 BYTE) NOT NULL,
  "SignDate"     DATE NOT NULL,
  "HostId"       VARCHAR2(10 BYTE) NOT NULL,
  "Certificate"  VARCHAR2(20 BYTE) NOT NULL,
  "CreateAt"     DATE,
  "CreateBy"     VARCHAR2(20 BYTE)
);

COMMENT ON COLUMN "DecSign"."PreEntryId" IS '预录入编号';

COMMENT ON COLUMN "DecSign"."TradeCode" IS '经营单位编号';

COMMENT ON COLUMN "DecSign"."OperType" IS '操作类型';

COMMENT ON COLUMN "DecSign"."ICCode" IS '操作员IC卡号';

COMMENT ON COLUMN "DecSign"."OperName" IS '操作员姓名';

COMMENT ON COLUMN "DecSign"."CopCode" IS '操作企业组织机构代码';

COMMENT ON COLUMN "DecSign"."ClientSeqNo" IS '客户端报关单编号';

COMMENT ON COLUMN "DecSign"."Sign" IS '数字签名信息';

COMMENT ON COLUMN "DecSign"."SignDate" IS '签名日期';

COMMENT ON COLUMN "DecSign"."HostId" IS '客户端邮箱的HostId';

COMMENT ON COLUMN "DecSign"."Certificate" IS '操作员卡的证书号';

CREATE INDEX "decsign_idx_1" ON "DecSign"
("PreEntryId", "TradeCode");

CREATE TABLE "TrnHead"
(
  "PreEntryId"      VARCHAR2(20 BYTE) NOT NULL,
  "TradeCode"       VARCHAR2(10 BYTE) NOT NULL,
  "TrnPreId"        VARCHAR2(18 BYTE),
  "TransNo"         VARCHAR2(16 BYTE),
  "TurnNo"          VARCHAR2(16 BYTE),
  "NativeTrafMode"  VARCHAR2(1 BYTE),
  "TrafCustomsNo"   VARCHAR2(13 BYTE),
  "NativeShipName"  VARCHAR2(30 BYTE),
  "NativeVoyageNo"  VARCHAR2(32 BYTE),
  "ContractorName"  VARCHAR2(70 BYTE),
  "ContractorCode"  VARCHAR2(10 BYTE),
  "TransFlag"       VARCHAR2(2 BYTE),
  "ValidTime"       VARCHAR2(8 BYTE),
  "ESealFlag"       VARCHAR2(1 BYTE),
  "Notes"           VARCHAR2(200 BYTE),
  "TrnType"         VARCHAR2(1 BYTE),
  "ApplCodeScc"     VARCHAR2(18 BYTE),
  "CreateAt"        DATE,
  "CreateBy"        VARCHAR2(20 BYTE)
);

COMMENT ON COLUMN "TrnHead"."PreEntryId" IS '预录入编号';

COMMENT ON COLUMN "TrnHead"."TradeCode" IS '经营单位编号';

COMMENT ON COLUMN "TrnHead"."TrnPreId" IS '转关单统一编号';

COMMENT ON COLUMN "TrnHead"."TransNo" IS '载货清单号';

COMMENT ON COLUMN "TrnHead"."TurnNo" IS '转关申报单号';

COMMENT ON COLUMN "TrnHead"."NativeTrafMode" IS '境内运输方式';

COMMENT ON COLUMN "TrnHead"."TrafCustomsNo" IS '境内运输工具编号';

COMMENT ON COLUMN "TrnHead"."NativeShipName" IS '境内运输工具名称';

COMMENT ON COLUMN "TrnHead"."NativeVoyageNo" IS '境内运输工具航次';

COMMENT ON COLUMN "TrnHead"."ContractorName" IS '承运单位名称';

COMMENT ON COLUMN "TrnHead"."ContractorCode" IS '承运单位组织机构代码';

COMMENT ON COLUMN "TrnHead"."TransFlag" IS '转关类型';

COMMENT ON COLUMN "TrnHead"."ValidTime" IS '预计运抵指运地时间';

COMMENT ON COLUMN "TrnHead"."ESealFlag" IS '是否启用电子关锁标志';

COMMENT ON COLUMN "TrnHead"."Notes" IS '备注';

COMMENT ON COLUMN "TrnHead"."TrnType" IS '转关单类型';

COMMENT ON COLUMN "TrnHead"."ApplCodeScc" IS '转关申报单位统一代码';

CREATE INDEX "trnhead_idx_1" ON "TrnHead"
("PreEntryId", "TradeCode");

CREATE INDEX "trnhead_idx_2" ON "TrnHead"
("TurnNo");

CREATE TABLE "TrnList"
(
  "PreEntryId"  VARCHAR2(20 BYTE) NOT NULL,
  "TradeCode"   VARCHAR2(10 BYTE) NOT NULL,
  "TrafMode"    VARCHAR2(1 BYTE),
  "ShipId"      VARCHAR2(32 BYTE),
  "ShipNameEn"  VARCHAR2(255 BYTE),
  "VoyageNo"    VARCHAR2(32 BYTE),
  "BillNo"      VARCHAR2(32 BYTE),
  "IEDate"      DATE,
  "CreateAt"    DATE,
  "CreateBy"    VARCHAR2(20 BYTE)
);

COMMENT ON COLUMN "TrnList"."PreEntryId" IS '预录入编号';

COMMENT ON COLUMN "TrnList"."TradeCode" IS '经营单位编号';

COMMENT ON COLUMN "TrnList"."TrafMode" IS '进出境运输方式';

COMMENT ON COLUMN "TrnList"."ShipId" IS '进出境运输工具编号';

COMMENT ON COLUMN "TrnList"."ShipNameEn" IS '进出境运输工具名称';

COMMENT ON COLUMN "TrnList"."VoyageNo" IS '进出境运输工具航次';

COMMENT ON COLUMN "TrnList"."BillNo" IS '提单号';

COMMENT ON COLUMN "TrnList"."IEDate" IS '实际进出境日期';

CREATE INDEX "trnlist_idx_1" ON "TrnList"
("PreEntryId", "TradeCode");

CREATE INDEX "trnlist_idx_2" ON "TrnList"
("BillNo");

CREATE TABLE "TrnContainer"
(
  "PreEntryId"   VARCHAR2(20 BYTE) NOT NULL,
  "TradeCode"    VARCHAR2(10 BYTE) NOT NULL,
  "ContaNo"      VARCHAR2(11 BYTE) NOT NULL,
  "ContaSn"      VARCHAR2(3 BYTE),
  "ContaModel"   VARCHAR2(4 BYTE),
  "SealNo"       VARCHAR2(128 BYTE),
  "TransName"    VARCHAR2(32 BYTE),
  "TransWeight"  NUMBER(19,4),
  "CreateAt"     DATE,
  "CreateBy"     VARCHAR2(20 BYTE)
);

COMMENT ON COLUMN "TrnContainer"."PreEntryId" IS '预录入编号';

COMMENT ON COLUMN "TrnContainer"."TradeCode" IS '经营单位编号';

COMMENT ON COLUMN "TrnContainer"."ContaNo" IS '集装箱号';

COMMENT ON COLUMN "TrnContainer"."ContaSn" IS '集装箱序号';

COMMENT ON COLUMN "TrnContainer"."ContaModel" IS '集装箱规格';

COMMENT ON COLUMN "TrnContainer"."SealNo" IS '电子关锁号';

COMMENT ON COLUMN "TrnContainer"."TransName" IS '境内运输工具名称';

COMMENT ON COLUMN "TrnContainer"."TransWeight" IS '工具实际重量';

CREATE INDEX "trncontainer_idx_1" ON "TrnContainer"
("PreEntryId", "TradeCode");

CREATE INDEX "trncontainer_idx_2" ON "TrnContainer"
("ContaNo");

CREATE INDEX "trncontainer_idx_3" ON "TrnContainer"
("SealNo");

CREATE TABLE "TrnContaGoodsList"
(
  "PreEntryId"        VARCHAR2(20 BYTE) NOT NULL,
  "TradeCode"         VARCHAR2(10 BYTE) NOT NULL,
  "GNo"               INTEGER NOT NULL,
  "ContaNo"           VARCHAR2(11 BYTE) NOT NULL,
  "ContaGoodsCount"   INTEGER,
  "ContaGoodsWeight"  NUMBER(19,4),
  "CreateAt"          DATE,
  "CreateBy"          VARCHAR2(20 BYTE)
);

COMMENT ON COLUMN "TrnContaGoodsList"."PreEntryId" IS '预录入编号';

COMMENT ON COLUMN "TrnContaGoodsList"."TradeCode" IS '经营单位编号';

COMMENT ON COLUMN "TrnContaGoodsList"."GNo" IS '商品序号';

COMMENT ON COLUMN "TrnContaGoodsList"."ContaNo" IS '集装箱号';

COMMENT ON COLUMN "TrnContaGoodsList"."ContaGoodsCount" IS '商品件数';

COMMENT ON COLUMN "TrnContaGoodsList"."ContaGoodsWeight" IS '商品重量';

CREATE INDEX "trncontagoodslist_idx_1" ON "TrnContaGoodsList"
("ContaNo");

CREATE INDEX "trncontagoodslist_idx_2" ON "TrnContaGoodsList"
("PreEntryId", "TradeCode");

CREATE TABLE "EdocRealation"
(
  "PreEntryId"     VARCHAR2(20 BYTE) NOT NULL,
  "TradeCode"      VARCHAR2(10 BYTE) NOT NULL,
  "EdocID"         VARCHAR2(64 BYTE) NOT NULL,
  "EdocCode"       VARCHAR2(8 BYTE) NOT NULL,
  "EdocFomatType"  VARCHAR2(2 BYTE) NOT NULL,
  "OpNote"         VARCHAR2(255 BYTE),
  "EdocCopId"      VARCHAR2(64 BYTE),
  "EdocOwnerCode"  VARCHAR2(10 BYTE) NOT NULL,
  "SignUnit"       VARCHAR2(10 BYTE),
  "SignTime"       DATE NOT NULL,
  "EdocOwnerName"  VARCHAR2(100 BYTE),
  "EdocSize"       VARCHAR2(12 BYTE),
  "CreateAt"       DATE,
  "CreateBy"       VARCHAR2(20 BYTE)
);

COMMENT ON COLUMN "EdocRealation"."PreEntryId" IS '预录入编号';

COMMENT ON COLUMN "EdocRealation"."TradeCode" IS '经营单位编号';

COMMENT ON COLUMN "EdocRealation"."EdocID" IS '随附单据编号';

COMMENT ON COLUMN "EdocRealation"."EdocCode" IS '随附单据类别';

COMMENT ON COLUMN "EdocRealation"."EdocFomatType" IS '随附单据格式类型';

COMMENT ON COLUMN "EdocRealation"."OpNote" IS '操作说明';

COMMENT ON COLUMN "EdocRealation"."EdocCopId" IS '随附单据文件企业名';

COMMENT ON COLUMN "EdocRealation"."EdocOwnerCode" IS '所属单位海关编号';

COMMENT ON COLUMN "EdocRealation"."SignUnit" IS '签名单位代码';

COMMENT ON COLUMN "EdocRealation"."SignTime" IS '签名时间';

COMMENT ON COLUMN "EdocRealation"."EdocOwnerName" IS '所属单位名称';

COMMENT ON COLUMN "EdocRealation"."EdocSize" IS '文件大小';

CREATE INDEX "edocrealation_idx_1" ON "EdocRealation"
("PreEntryId", "TradeCode");

CREATE INDEX "edocrealation_idx_2" ON "EdocRealation"
("EdocID");
