#include "ProcessModel.h"

ProcessModel::ProcessModel(QObject *parent)
    : QAbstractListModel(parent)
{
    refresh();
}

int ProcessModel::rowCount(const QModelIndex &) const {
    return static_cast<int>(m_filteredProcesses.size());
}

QVariant ProcessModel::data(const QModelIndex &index, int role) const {
    if (!index.isValid() || index.row() < 0 || index.row() >= (int)m_filteredProcesses.size())
        return {};

    const auto &p = m_filteredProcesses[index.row()];

    switch (role) {
    case PidRole:    return p.pid;
    case NameRole:   return QString::fromStdString(p.name);
    case CpuRole:    return p.cpu_percent;
    case MemRole:    return p.mem_mb;
    case ThreadsRole:return p.threads;
    }

    return {};
}

QHash<int, QByteArray> ProcessModel::roleNames() const {
    return {
        {PidRole, "pid"},
        {NameRole, "name"},
        {CpuRole, "cpu"},
        {MemRole, "memory"},
        {ThreadsRole, "threads"}
    };
}

void ProcessModel::refresh() {
    beginResetModel();

    m_allProcesses = ProcessTracker::collectProcesses();

    m_filteredProcesses.clear();

    for (const auto &p : m_allProcesses) {
        QString name = QString::fromStdString(p.name);

        if (m_filter.isEmpty() ||
            name.contains(m_filter, Qt::CaseInsensitive)) {
            m_filteredProcesses.push_back(p);
        }
    }

    endResetModel();
}

void ProcessModel::setFilter(const QString &text) {
    m_filter = text;
    refresh();
}
