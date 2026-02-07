#pragma once

#include <QAbstractListModel>
#include <QModelIndex>
#include <QVariant>
#include <QHash>
#include <QString>

#include <vector>

#include "ProcessTracker.h"
#include "DataLogger.h"   

class ProcessModel : public QAbstractListModel {
    Q_OBJECT

public:
    enum Roles {
        PidRole = Qt::UserRole + 1,
        NameRole,
        CpuRole,
        MemRole,
        ThreadsRole
    };

    explicit ProcessModel(QObject *parent = nullptr);

    int rowCount(const QModelIndex &parent = QModelIndex()) const override;
    QVariant data(const QModelIndex &index, int role) const override;
    QHash<int, QByteArray> roleNames() const override;

    Q_INVOKABLE void refresh();
    Q_INVOKABLE void setFilter(const QString &text);

private:
    std::vector<ProcessRecord> m_allProcesses;
    std::vector<ProcessRecord> m_filteredProcesses;

    QString m_filter;
};

